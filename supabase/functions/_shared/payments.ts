import Stripe from "npm:stripe@18.5.0";
import { getBooking, updateBooking } from "./firebase.ts";

export function stripeClient() {
  const key = Deno.env.get("STRIPE_SECRET_KEY") || "";
  if (!key) throw new Error("STRIPE_SECRET_KEY is not configured.");
  return new Stripe(key);
}

export function authedEmail(request: Request) {
  return authedUser(request).email;
}

export function authedUser(request: Request) {
  const auth = request.headers.get("authorization") || "";
  if (!auth.toLowerCase().startsWith("bearer ")) throw new Error("Log in first.");
  const token = auth.slice(7);
  const [, payload] = token.split(".");
  if (!payload) throw new Error("Invalid login token.");
  const data = JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
  const email = String(data.email || "").trim().toLowerCase();
  if (!email) throw new Error("Login token is missing an email.");
  const uid = String(data.user_id || data.sub || "").trim();
  if (!uid) throw new Error("Login token is missing a user ID.");
  return { email, uid };
}

export function hoursUntil(value: unknown) {
  const time = new Date(String(value || "")).getTime();
  if (!Number.isFinite(time)) return 999;
  return (time - Date.now()) / 36e5;
}

export function netSplit(netAmount: number) {
  const tutorAmount = Math.floor(netAmount * 0.8);
  const ownerAAmount = Math.floor(netAmount * 0.1);
  const ownerBAmount = netAmount - tutorAmount - ownerAAmount;
  return { tutorAmount, ownerAAmount, ownerBAmount };
}

export async function syncPaidBookingFromStripe(bookingId: string, booking: Record<string, unknown>) {
  if (booking.paymentStatus === "paid_held" || booking.paymentStatus === "paid_released") return booking;

  const sessionId = String(booking.stripeCheckoutSessionId || "");
  if (!sessionId.startsWith("cs_")) return booking;

  const stripe = stripeClient();
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent.latest_charge.balance_transaction"]
  });
  if (session.payment_status !== "paid" || !session.payment_intent) return booking;

  const paymentIntent = typeof session.payment_intent === "string"
    ? await stripe.paymentIntents.retrieve(session.payment_intent, {
      expand: ["latest_charge.balance_transaction"]
    })
    : session.payment_intent;
  const charge = paymentIntent.latest_charge;
  const chargeId = typeof charge === "string" ? charge : charge?.id || "";
  const balanceTransaction = typeof charge === "string" ? null : charge?.balance_transaction;
  const stripeFee = typeof balanceTransaction === "object" && balanceTransaction ? balanceTransaction.fee : 0;
  const net = typeof balanceTransaction === "object" && balanceTransaction ? balanceTransaction.net : paymentIntent.amount_received;

  const updates = {
    stripeCheckoutSessionId: session.id,
    stripePaymentIntentId: paymentIntent.id,
    stripeChargeId: chargeId,
    grossAmount: paymentIntent.amount_received,
    stripeFee,
    stripeNetAmount: net,
    currency: paymentIntent.currency,
    status: "Confirmed",
    paymentStatus: "paid_held",
    paymentReleaseStatus: "ready",
    paidAt: new Date().toISOString()
  };
  await updateBooking(bookingId, updates);
  return { ...booking, ...updates };
}

export async function releaseBookingNet(bookingId: string, requestedBy: string, trigger: string) {
  let booking = await getBooking(bookingId);
  booking = await syncPaidBookingFromStripe(bookingId, booking);
  if (booking.paymentStatus !== "paid_held") throw new Error("This booking is not paid and held.");
  if (booking.paymentReleaseStatus === "released" || booking.paymentStatus === "paid_released") {
    return { alreadyReleased: true, transferIds: booking.stripeTransferIds || [] };
  }
  if (booking.paymentReleaseStatus === "processing") throw new Error("Payment release is already processing.");

  const tutorAccountId = String(booking.tutorStripeAccountId || "");
  const amyAccountId = Deno.env.get("TUTRSTEM_AMY_ACCOUNT_ID") || "";
  const ownerBAccountId = Deno.env.get("TUTRSTEM_OWNER_B_ACCOUNT_ID") || "";
  const netAmount = Number(booking.stripeNetAmount || 0);

  if (!tutorAccountId.startsWith("acct_")) throw new Error("Tutor connected account is missing.");
  if (!amyAccountId.startsWith("acct_")) throw new Error("Amy connected account ID is not configured.");
  if (!Number.isFinite(netAmount) || netAmount < 50) throw new Error("Net amount is missing.");

  await updateBooking(bookingId, {
    paymentReleaseStatus: "processing",
    paymentReleaseRequestedBy: requestedBy,
    paymentReleaseTrigger: trigger,
    paymentReleaseStartedAt: new Date().toISOString()
  });

  const stripe = stripeClient();
  const { tutorAmount, ownerAAmount, ownerBAmount } = netSplit(netAmount);
  const transferSpecs = [
    { share: "tutor_80", amount: tutorAmount, destination: tutorAccountId },
    { share: "amy_10", amount: ownerAAmount, destination: amyAccountId }
  ];
  const ownerBConfigured = ownerBAccountId.startsWith("acct_");
  if (ownerBConfigured) {
    transferSpecs.push({ share: "owner_b_10", amount: ownerBAmount, destination: ownerBAccountId });
  }

  try {
    const transfers = [];
    for (const spec of transferSpecs) {
      transfers.push(await stripe.transfers.create({
        amount: spec.amount,
        currency: "gbp",
        destination: spec.destination,
        metadata: {
          bookingId,
          share: spec.share,
          sourceChargeId: String(booking.stripeChargeId || "")
        }
      }, {
        idempotencyKey: `booking-${bookingId}-transfer-${spec.share}`
      }));
    }

    await updateBooking(bookingId, {
      paymentStatus: "paid_released",
      payoutStatus: "released",
      paymentReleaseStatus: "released",
      paymentReleasedAt: new Date().toISOString(),
      stripeTransferIds: transfers.map((transfer) => transfer.id),
      stripeTransfers: transfers.map((transfer) => ({
        id: transfer.id,
        amount: transfer.amount,
        destination: transfer.destination,
        share: transfer.metadata.share
      })),
      ownerBShareStatus: ownerBConfigured ? "transferred" : "held_on_platform",
      ownerBHeldAmount: ownerBConfigured ? 0 : ownerBAmount
    });

    return {
      alreadyReleased: false,
      transferIds: transfers.map((transfer) => transfer.id),
      ownerBShareStatus: ownerBConfigured ? "transferred" : "held_on_platform"
    };
  } catch (error) {
    await updateBooking(bookingId, {
      paymentReleaseStatus: "failed",
      paymentReleaseError: error instanceof Error ? error.message : "Transfer failed."
    });
    throw error;
  }
}

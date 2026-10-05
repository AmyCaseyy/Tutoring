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

function lessonEndTime(booking: Record<string, unknown>) {
  const start = new Date(String(booking.dateTime || "")).getTime();
  const minutes = Number(booking.durationMinutes || booking.lessonMinutes || 60);
  if (!Number.isFinite(start)) return NaN;
  return start + (Number.isFinite(minutes) && minutes > 0 ? minutes : 60) * 60000;
}

function assertLessonCanRelease(booking: Record<string, unknown>, trigger: string) {
  if (trigger !== "lesson_completed") return;
  if (booking.isRecurringSeries) {
    throw new Error("Choose the specific recurring lesson to release payment for.");
  }
  const end = lessonEndTime(booking);
  if (!Number.isFinite(end)) throw new Error("This booking is missing a lesson time.");
  if (Date.now() < end) {
    throw new Error("Payment can only be released after the scheduled lesson has ended.");
  }
}

export function netSplit(netAmount: number) {
  const tutorAmount = Math.floor(netAmount * 0.8);
  const ownerAAmount = Math.floor(netAmount * 0.1);
  const ownerBAmount = netAmount - tutorAmount - ownerAAmount;
  return { tutorAmount, ownerAAmount, ownerBAmount };
}

function occurrencePayments(booking: Record<string, unknown>) {
  return (booking.occurrencePayments && typeof booking.occurrencePayments === "object")
    ? booking.occurrencePayments as Record<string, Record<string, unknown>>
    : {};
}

function paymentTarget(booking: Record<string, unknown>, occurrenceKey = "") {
  if (!occurrenceKey) return booking;
  const payment = occurrencePayments(booking)[occurrenceKey] || {};
  return {
    ...booking,
    ...payment,
    occurrenceKey,
    dateTime: payment.dateTime || occurrenceKey
  };
}

async function updatePaymentTarget(bookingId: string, booking: Record<string, unknown>, occurrenceKey: string, updates: Record<string, unknown>) {
  if (!occurrenceKey) {
    await updateBooking(bookingId, updates);
    return;
  }
  const payments = occurrencePayments(booking);
  await updateBooking(bookingId, {
    occurrencePayments: {
      ...payments,
      [occurrenceKey]: {
        ...(payments[occurrenceKey] || {}),
        ...updates,
        occurrenceKey
      }
    }
  });
}

export async function syncPaidBookingFromStripe(bookingId: string, booking: Record<string, unknown>, occurrenceKey = "") {
  let target = paymentTarget(booking, occurrenceKey);
  if (target.paymentStatus === "paid_held" || target.paymentStatus === "paid_released") return target;

  const sessionId = String(target.stripeCheckoutSessionId || "");
  if (!sessionId.startsWith("cs_")) return target;

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
  await updatePaymentTarget(bookingId, booking, occurrenceKey, updates);
  return { ...target, ...updates };
}

export async function releaseBookingNet(bookingId: string, requestedBy: string, trigger: string, occurrenceKey = "") {
  const parentBooking = await getBooking(bookingId);
  let booking = paymentTarget(parentBooking, occurrenceKey);
  booking = await syncPaidBookingFromStripe(bookingId, parentBooking, occurrenceKey);
  assertLessonCanRelease({ ...booking, isRecurringSeries: false }, trigger);
  if (booking.paymentStatus !== "paid_held") throw new Error("This lesson is not paid and held.");
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

  await updatePaymentTarget(bookingId, parentBooking, occurrenceKey, {
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
    const sourceChargeId = String(booking.stripeChargeId || "");
    for (const spec of transferSpecs) {
      const transfer: Stripe.TransferCreateParams = {
        amount: spec.amount,
        currency: "gbp",
        destination: spec.destination,
        ...(sourceChargeId.startsWith("ch_") ? { source_transaction: sourceChargeId } : {}),
        metadata: {
          bookingId,
          share: spec.share,
          sourceChargeId
        }
      };
      transfers.push(await stripe.transfers.create(transfer, {
        idempotencyKey: `booking-${bookingId}${occurrenceKey ? `-${occurrenceKey}` : ""}-transfer-${spec.share}-source-charge-v2`
      }));
    }

    await updatePaymentTarget(bookingId, parentBooking, occurrenceKey, {
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
    await updatePaymentTarget(bookingId, parentBooking, occurrenceKey, {
      paymentReleaseStatus: "failed",
      paymentReleaseError: error instanceof Error ? error.message : "Transfer failed."
    });
    throw error;
  }
}

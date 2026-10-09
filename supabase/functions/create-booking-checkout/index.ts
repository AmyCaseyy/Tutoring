import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { assertBookingAccess, getBooking, getTutorProfileByEmail, updateBooking } from "../_shared/firebase.ts";
import { authedEmail, stripeClient } from "../_shared/payments.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Use POST." }, 405);

  try {
    const email = authedEmail(request);
    const body = await request.json();
    const bookingId = String(body.bookingId || "").trim();
    const occurrenceKey = String(body.occurrenceKey || "").trim();
    const occurrenceDateTime = String(body.occurrenceDateTime || occurrenceKey || "").trim();
    const origin = String(body.origin || "https://tutrstem.co.uk").replace(/\/$/, "");
    const booking = await getBooking(bookingId);
    assertBookingAccess(email, booking, ["student"]);
    const isRecurringOccurrence = Boolean(booking.isRecurringSeries);
    const occurrencePayments = booking.occurrencePayments && typeof booking.occurrencePayments === "object"
      ? booking.occurrencePayments as Record<string, Record<string, unknown>>
      : {};
    const existingOccurrencePayment = occurrenceKey ? occurrencePayments[occurrenceKey] || {} : {};
    const paymentStatus = String(isRecurringOccurrence ? existingOccurrencePayment.paymentStatus || "" : booking.paymentStatus || "");

    if (paymentStatus === "paid_held" || paymentStatus === "paid_released") {
      throw new Error("This lesson is already paid.");
    }
    if (booking.status !== "Accepted") throw new Error("The tutor needs to accept this booking before payment.");
    if (isRecurringOccurrence && (!occurrenceKey || !Number.isFinite(new Date(occurrenceDateTime).getTime()))) {
      throw new Error("Choose a specific recurring lesson before opening Stripe Checkout.");
    }

    let tutorProfile: Record<string, unknown> | null | undefined;
    const tutorProfileForBooking = async () => {
      if (tutorProfile === undefined) {
        tutorProfile = await getTutorProfileByEmail(String(booking.tutorEmail || ""));
      }
      return tutorProfile;
    };

    let amount = Math.round(Number(booking.amountPence || 0));
    let amountSource = "booking";
    if (!Number.isFinite(amount) || amount < 50) {
      const profile = await tutorProfileForBooking();
      const profilePrice = Number(profile?.price || profile?.hourlyRate || 0);
      amount = Math.round(profilePrice * 100);
      amountSource = "tutor_profile";
    }
    if (!Number.isFinite(amount) || amount < 50) {
      throw new Error("This tutor needs to set an hourly rate before payment can be taken.");
    }
    let tutorStripeAccountId = String(booking.tutorStripeAccountId || "");
    let tutorStripeAccountSource = "booking";
    if (!tutorStripeAccountId.startsWith("acct_")) {
      const profile = await tutorProfileForBooking();
      tutorStripeAccountId = String(
        profile?.stripeAccountId ||
        profile?.stripeConnectAccountId ||
        profile?.payoutStripeAccountId ||
        profile?.stripeConnectedAccountId ||
        ""
      );
      tutorStripeAccountSource = "tutor_profile";
    }
    if (!tutorStripeAccountId.startsWith("acct_")) {
      throw new Error("This tutor needs to finish Stripe payout setup before payment can be taken.");
    }

    const stripe = stripeClient();
    const lessonDateTime = isRecurringOccurrence ? occurrenceDateTime : String(booking.dateTime || "");
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: String(booking.studentEmail || email),
      line_items: [{
        price_data: {
          currency: "gbp",
          unit_amount: amount,
          product_data: {
            name: `${booking.type || "Tutoring lesson"} with ${booking.tutor || "tutrSTEM tutor"}`,
            description: `${booking.subject || "Tutoring"}${lessonDateTime ? ` on ${lessonDateTime}` : ""} booked through tutrSTEM`
          }
        },
        quantity: 1
      }],
      success_url: `${origin}/#bookings`,
      cancel_url: `${origin}/#bookings`,
      metadata: {
        bookingId,
        occurrenceKey,
        occurrenceDateTime: lessonDateTime,
        studentEmail: String(booking.studentEmail || email),
        tutorEmail: String(booking.tutorEmail || ""),
        tutorStripeAccountId
      },
      payment_intent_data: {
        metadata: {
          bookingId,
          occurrenceKey,
          occurrenceDateTime: lessonDateTime,
          studentEmail: String(booking.studentEmail || email),
          tutorEmail: String(booking.tutorEmail || ""),
          tutorStripeAccountId
        }
      }
    }, {
      idempotencyKey: `booking-${bookingId}${occurrenceKey ? `-${occurrenceKey}` : ""}-checkout`
    });

    const paymentUpdates = {
      amount: amount / 100,
      amountPence: amount,
      amountSource,
      tutorStripeAccountId,
      tutorStripeAccountSource,
      stripeCheckoutSessionId: session.id,
      paymentStatus: "checkout_started",
      paymentReleaseStatus: "not_ready"
    };
    if (isRecurringOccurrence) {
      await updateBooking(bookingId, {
        occurrencePayments: {
          ...occurrencePayments,
          [occurrenceKey]: {
            ...existingOccurrencePayment,
            ...paymentUpdates,
            occurrenceKey,
            dateTime: lessonDateTime
          }
        }
      });
    } else {
      await updateBooking(bookingId, paymentUpdates);
    }

    return jsonResponse({ url: session.url, sessionId: session.id });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Could not create checkout." }, 400);
  }
});

import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { assertBookingAccess, getBooking, updateBooking } from "../_shared/firebase.ts";
import { authedEmail, stripeClient } from "../_shared/payments.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Use POST." }, 405);

  try {
    const email = authedEmail(request);
    const body = await request.json();
    const bookingId = String(body.bookingId || "").trim();
    const origin = String(body.origin || "https://tutrstem.co.uk").replace(/\/$/, "");
    const booking = await getBooking(bookingId);
    assertBookingAccess(email, booking, ["student"]);

    if (booking.paymentStatus === "paid_held" || booking.paymentStatus === "paid_released") {
      throw new Error("This booking is already paid.");
    }
    if (booking.status !== "Accepted") throw new Error("The tutor needs to accept this booking before payment.");

    const amount = Math.round(Number(booking.amountPence || 0));
    if (!Number.isFinite(amount) || amount < 50) throw new Error("Invalid booking amount.");
    const tutorStripeAccountId = String(booking.tutorStripeAccountId || "");
    if (!tutorStripeAccountId.startsWith("acct_")) {
      throw new Error("This tutor needs to finish Stripe payout setup before payment can be taken.");
    }

    const stripe = stripeClient();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: String(booking.studentEmail || email),
      line_items: [{
        price_data: {
          currency: "gbp",
          unit_amount: amount,
          product_data: {
            name: `${booking.type || "Tutoring lesson"} with ${booking.tutor || "tutrSTEM tutor"}`,
            description: `${booking.subject || "Tutoring"} booked through tutrSTEM`
          }
        },
        quantity: 1
      }],
      success_url: `${origin}/#bookings`,
      cancel_url: `${origin}/#bookings`,
      metadata: {
        bookingId,
        studentEmail: String(booking.studentEmail || email),
        tutorEmail: String(booking.tutorEmail || ""),
        tutorStripeAccountId
      },
      payment_intent_data: {
        metadata: {
          bookingId,
          studentEmail: String(booking.studentEmail || email),
          tutorEmail: String(booking.tutorEmail || ""),
          tutorStripeAccountId
        }
      }
    }, {
      idempotencyKey: `booking-${bookingId}-checkout`
    });

    await updateBooking(bookingId, {
      stripeCheckoutSessionId: session.id,
      paymentStatus: "checkout_started",
      paymentReleaseStatus: "not_ready"
    });

    return jsonResponse({ url: session.url, sessionId: session.id });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Could not create checkout." }, 400);
  }
});

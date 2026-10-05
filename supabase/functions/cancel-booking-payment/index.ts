import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { assertBookingAccess, getBooking, updateBooking } from "../_shared/firebase.ts";
import { authedEmail, hoursUntil, releaseBookingNet, stripeClient, syncPaidBookingFromStripe } from "../_shared/payments.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Use POST." }, 405);

  try {
    const email = authedEmail(request);
    const body = await request.json();
    const bookingId = String(body.bookingId || "").trim();
    const cancelledBy = body.cancelledBy === "tutor" ? "tutor" : "student";
    let booking = await getBooking(bookingId);
    booking = await syncPaidBookingFromStripe(bookingId, booking);
    assertBookingAccess(email, booking, [cancelledBy]);

    const status = cancelledBy === "tutor" ? "Cancelled by tutor" : "Cancelled by student";
    const shouldRefund = cancelledBy === "tutor" || hoursUntil(booking.dateTime) >= 24;

    if (!shouldRefund) {
      const release = await releaseBookingNet(bookingId, email, "late_student_cancellation");
      await updateBooking(bookingId, { status, cancelled: true, lateCancellationReleased: true });
      return jsonResponse({ ...release, refunded: false, reason: "Late student cancellation released to tutor/platform." });
    }

    if (booking.paymentStatus !== "paid_held") {
      await updateBooking(bookingId, { status, cancelled: true });
      return jsonResponse({ refunded: false, reason: "No held payment to refund." });
    }
    if (booking.refundStatus === "refunded") return jsonResponse({ refunded: true, refundId: booking.stripeRefundId });

    const stripe = stripeClient();
    const refund = await stripe.refunds.create({
      payment_intent: String(booking.stripePaymentIntentId || ""),
      metadata: { bookingId, cancelledBy }
    }, {
      idempotencyKey: `booking-${bookingId}-refund`
    });

    await updateBooking(bookingId, {
      status,
      cancelled: true,
      paymentStatus: "refunded",
      refundStatus: "refunded",
      stripeRefundId: refund.id,
      refundedAt: new Date().toISOString()
    });

    return jsonResponse({ refunded: true, refundId: refund.id });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Could not cancel payment." }, 400);
  }
});

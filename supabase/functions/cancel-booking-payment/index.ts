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
    const occurrenceKey = String(body.occurrenceKey || "").trim();
    const cancelledBy = body.cancelledBy === "tutor" ? "tutor" : "student";
    const parentBooking = await getBooking(bookingId);
    const occurrencePayments = parentBooking.occurrencePayments && typeof parentBooking.occurrencePayments === "object"
      ? parentBooking.occurrencePayments as Record<string, Record<string, unknown>>
      : {};
    const occurrenceOverrides = parentBooking.occurrenceOverrides && typeof parentBooking.occurrenceOverrides === "object"
      ? parentBooking.occurrenceOverrides as Record<string, Record<string, unknown>>
      : {};
    let booking = occurrenceKey
      ? { ...parentBooking, ...(occurrencePayments[occurrenceKey] || {}), occurrenceKey, dateTime: occurrencePayments[occurrenceKey]?.dateTime || occurrenceKey }
      : parentBooking;
    booking = await syncPaidBookingFromStripe(bookingId, parentBooking, occurrenceKey);
    assertBookingAccess(email, parentBooking, [cancelledBy]);

    const status = cancelledBy === "tutor" ? "Cancelled by tutor" : "Cancelled by student";
    const shouldRefund = cancelledBy === "tutor" || hoursUntil(booking.dateTime) >= 24;
    const updatePayment = async (updates: Record<string, unknown>) => {
      if (!occurrenceKey) {
        await updateBooking(bookingId, updates);
        return;
      }
      const overrideUpdates: Record<string, unknown> = {};
      if ("status" in updates) overrideUpdates.status = updates.status;
      if ("cancelled" in updates) overrideUpdates.cancelled = updates.cancelled;
      await updateBooking(bookingId, {
        occurrenceOverrides: {
          ...occurrenceOverrides,
          [occurrenceKey]: {
            ...(occurrenceOverrides[occurrenceKey] || {}),
            ...overrideUpdates
          }
        },
        occurrencePayments: {
          ...occurrencePayments,
          [occurrenceKey]: {
            ...(occurrencePayments[occurrenceKey] || {}),
            ...updates,
            occurrenceKey,
            dateTime: booking.dateTime
          }
        }
      });
    };

    if (!shouldRefund) {
      const release = await releaseBookingNet(bookingId, email, "late_student_cancellation", occurrenceKey);
      await updatePayment({ status, cancelled: true, lateCancellationReleased: true });
      return jsonResponse({ ...release, refunded: false, reason: "Late student cancellation released to tutor/platform." });
    }

    if (booking.paymentStatus !== "paid_held") {
      await updatePayment({ status, cancelled: true });
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

    await updatePayment({
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

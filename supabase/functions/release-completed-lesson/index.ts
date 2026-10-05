import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { assertBookingAccess, getBooking } from "../_shared/firebase.ts";
import { authedEmail, releaseBookingNet } from "../_shared/payments.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Use POST." }, 405);

  try {
    const email = authedEmail(request);
    const body = await request.json();
    const bookingId = String(body.bookingId || "").trim();
    const occurrenceKey = String(body.occurrenceKey || "").trim();
    const booking = await getBooking(bookingId);
    assertBookingAccess(email, booking, ["tutor"]);
    return jsonResponse(await releaseBookingNet(bookingId, email, "lesson_completed", occurrenceKey));
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Could not release payment." }, 400);
  }
});

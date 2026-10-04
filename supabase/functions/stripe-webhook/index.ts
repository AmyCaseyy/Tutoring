import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { updateBooking } from "../_shared/firebase.ts";
import { stripeClient } from "../_shared/payments.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (request.method !== "POST") return jsonResponse({ error: "Use POST." }, 405);

  const stripe = stripeClient();
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";

  try {
    const signature = request.headers.get("stripe-signature") || "";
    const body = await request.text();
    const event = await stripe.webhooks.constructEventAsync(body, signature, webhookSecret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const bookingId = session.metadata?.bookingId || "";
      if (bookingId && session.payment_intent) {
        const paymentIntentId = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent.id;
        const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId, {
          expand: ["latest_charge.balance_transaction"]
        });
        const charge = paymentIntent.latest_charge;
        const chargeId = typeof charge === "string" ? charge : charge?.id || "";
        const balanceTransaction = typeof charge === "string" ? null : charge?.balance_transaction;
        const stripeFee = typeof balanceTransaction === "object" && balanceTransaction ? balanceTransaction.fee : 0;
        const net = typeof balanceTransaction === "object" && balanceTransaction ? balanceTransaction.net : paymentIntent.amount_received;

        await updateBooking(bookingId, {
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
        });
      }
    }

    return jsonResponse({ received: true });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Webhook failed." }, 400);
  }
});

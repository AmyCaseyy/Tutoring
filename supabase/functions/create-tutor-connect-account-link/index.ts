import { corsHeaders, jsonResponse } from "../_shared/cors.ts";
import { getTutorProfile, updateTutorProfile } from "../_shared/firebase.ts";
import { authedUser, stripeClient } from "../_shared/payments.ts";

Deno.serve(async (request) => {
  if (request.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const user = authedUser(request);
    const { origin } = await request.json().catch(() => ({}));
    const siteOrigin = String(origin || "https://tutrstem.co.uk").replace(/\/$/, "");
    const profile = await getTutorProfile(user.uid);
    const stripe = stripeClient();
    let accountId = String(profile.stripeAccountId || profile.stripeConnectAccountId || "").trim();

    if (!accountId.startsWith("acct_")) {
      const account = await stripe.accounts.create({
        type: "express",
        country: "GB",
        email: user.email,
        capabilities: {
          transfers: { requested: true }
        },
        business_type: "individual",
        metadata: {
          firebaseUid: user.uid,
          tutorEmail: user.email,
          platform: "tutrstem"
        }
      }, {
        idempotencyKey: `tutor-connect-account-${user.uid}`
      });
      accountId = account.id;
      await updateTutorProfile(user.uid, {
        stripeAccountId: accountId,
        stripeConnectAccountId: accountId,
        payoutStatus: "onboarding_started",
        payoutSetupStartedAt: new Date().toISOString()
      });
    }

    const accountLink = await stripe.accountLinks.create({
      account: accountId,
      type: "account_onboarding",
      refresh_url: `${siteOrigin}/dashboard?payouts=refresh`,
      return_url: `${siteOrigin}/dashboard?payouts=return`
    });

    return jsonResponse({ url: accountLink.url, accountId });
  } catch (error) {
    return jsonResponse({ error: error instanceof Error ? error.message : "Could not create payout setup link." }, 400);
  }
});

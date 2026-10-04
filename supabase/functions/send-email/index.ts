const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

type EmailPayload = {
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
  meta?: Record<string, unknown>;
};

function jsonResponse(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json"
    }
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Method not allowed" }, 405);
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  const fromEmail = Deno.env.get("RESEND_FROM_EMAIL") || "tutrSTEM <applications@tutrstem.org.uk>";
  const replyTo = Deno.env.get("RESEND_REPLY_TO") || "applications@tutrstem.org.uk";

  if (!resendApiKey) {
    return jsonResponse({ error: "RESEND_API_KEY is not configured" }, 500);
  }

  let payload: EmailPayload;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  const to = String(payload.to || "").trim();
  const subject = String(payload.subject || "").trim();
  const text = String(payload.text || "").trim();
  const html = String(payload.html || "").trim();

  if (!to || !subject || (!text && !html)) {
    return jsonResponse({ error: "Missing to, subject, or body" }, 400);
  }

  const resendResponse = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [to],
      reply_to: replyTo,
      subject,
      text: text || undefined,
      html: html || undefined,
      tags: [
        { name: "source", value: "tutrstem" },
        { name: "type", value: String(payload.meta?.type || "notification").slice(0, 40) }
      ]
    })
  });

  const resendData = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return jsonResponse({ error: "Resend rejected the email", details: resendData }, 502);
  }

  return jsonResponse({ ok: true, id: resendData.id || null });
});

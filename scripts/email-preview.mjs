import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outDir = new URL("../email-previews/", import.meta.url);
const templates = [
  ["welcome", "Welcome to tutrSTEM, Amy"],
  ["parent_link", "Amy has added you as their parent or guardian"],
  ["booking_confirmed", "You're booked in with Dr Test"],
  ["session_reminder_24h", "Your A-Level Maths session is tomorrow"],
  ["booking_cancelled", "Your session has been cancelled"],
  ["booking_rescheduled", "Your session has moved"],
  ["review_request", "How was your session with Dr Test?"],
  ["refund_issued", "Your refund is on its way"],
  ["payment_failed", "Your payment didn't go through"],
  ["booking_new_for_tutor", "New session with Amy"],
  ["application_received", "We've got your application"],
  ["tutor_approved", "You're approved. Welcome to tutrSTEM."],
  ["application_more_info", "We need one more thing"],
  ["tutor_rejected", "An update on your application"],
  ["payout_setup_reminder", "Finish setting up payouts"],
  ["document_expiring", "Your DBS certificate needs updating"],
  ["account_deleted", "Your account has been deleted"],
  ["safeguarding_alert", "A chat message was flagged"],
  ["admin_new_application", "Amy Test has applied to tutor"]
];

function page(label, heading) {
  return `<!doctype html>
<html>
  <body style="margin:0;background:#F5EFE4;padding:48px 0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;margin:0 auto;">
      <tr>
        <td style="padding:0 24px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-bottom:1px solid #C9C2B4;margin-bottom:28px;">
            <tr>
              <td style="padding:0 0 18px;font-family:Lora,Georgia,'Times New Roman',serif;font-size:32px;font-weight:500;color:#1C1A17;">tutr.</td>
              <td align="right" style="padding:0 0 18px;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:11px;line-height:1.65;letter-spacing:0.16em;text-transform:uppercase;color:#4A4438;">${label.replace(/_/g, " ")}</td>
            </tr>
          </table>
          <h1 style="margin:0 0 22px;font-family:Lora,Georgia,'Times New Roman',serif;font-size:34px;font-weight:400;line-height:1.2;color:#132649;">${heading}</h1>
          <p style="margin:0 0 18px;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#4A4438;">Sample preview content. The live template fills this with real booking, payment, support, or application data.</p>
          <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:28px 0;"><tr><td bgcolor="#132649" style="height:48px;padding:0 28px;background:#132649;"><a href="https://tutrstem.org.uk/bookings/sample" style="display:inline-block;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:13px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;color:#F5EFE4;line-height:48px;">View booking</a></td></tr></table>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #C9C2B4;margin-top:34px;">
            <tr><td style="padding-top:18px;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.65;color:#4A4438;">Questions? support@tutrstem.org.uk<br>Privacy: privacy@tutrstem.org.uk · Privacy policy<br>TUTRSTEM · TUTRSTEM.ORG.UK</td></tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

await mkdir(outDir, { recursive: true });
await Promise.all(templates.map(([name, heading]) => writeFile(join(outDir.pathname, `${name}.html`), page(name, heading))));
console.log(`Wrote ${templates.length} previews to ${outDir.pathname}`);

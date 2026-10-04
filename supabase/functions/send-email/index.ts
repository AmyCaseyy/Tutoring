const SITE_URL = "https://tutrstem.co.uk";
const SUPPORT_EMAIL = "support@tutrstem.org.uk";
const PRIVACY_EMAIL = "privacy@tutrstem.org.uk";
const BILLING_EMAIL = "billing@tutrstem.org.uk";
const APPLICATIONS_EMAIL = "applications@tutrstem.org.uk";
const TUTOR_SHARE = 0.8;
const APPLICATION_REVIEW_DAYS = "3 working days";
const CANCELLATION_POLICY = "Free cancellation is available up to 24 hours before the session.";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

type EmailData = Record<string, unknown>;

type EmailPayload = {
  to?: string;
  subject?: string;
  text?: string;
  html?: string;
  meta?: {
    type?: string;
    template?: string;
    data?: EmailData;
    [key: string]: unknown;
  };
};

type RenderedEmail = {
  subject: string;
  html: string;
  text: string;
  fromLocal: string;
  label: string;
  reason: string;
  billingLine?: boolean;
};

function text(value: unknown, fallback = "") {
  return String(value ?? fallback).trim();
}

function money(value: unknown) {
  const amount = Number(value || 0);
  return amount ? `£${amount.toFixed(2).replace(/\.00$/, "")}` : "£0";
}

function firstName(value: unknown) {
  return text(value).split(/\s+/).filter(Boolean)[0] || text(value, "there");
}

function escapeHtml(value: unknown) {
  return text(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function href(path = "/") {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

function formatDate(value: unknown) {
  const date = new Date(text(value));
  if (Number.isNaN(date.getTime())) return text(value, "To be confirmed");
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(date);
}

function formatShortDate(value: unknown) {
  const date = new Date(text(value));
  if (Number.isNaN(date.getTime())) return text(value, "date TBC");
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    day: "numeric",
    month: "short"
  }).format(date);
}

function formatTime(value: unknown) {
  const date = new Date(text(value));
  if (Number.isNaN(date.getTime())) return text(value, "time TBC");
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    hour: "numeric",
    minute: "2-digit"
  }).format(date).toLowerCase();
}

function bookingPath(id: unknown) {
  return href(`/bookings/${encodeURIComponent(text(id, ""))}`);
}

function rows(items: Array<[string, unknown]>) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #C9C2B4;margin:28px 0;">
      ${items.map(([label, value]) => `
        <tr>
          <td style="border-bottom:1px solid #C9C2B4;padding:14px 0;width:38%;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:11px;line-height:1.65;letter-spacing:0.14em;text-transform:uppercase;color:#4A4438;">${escapeHtml(label)}</td>
          <td style="border-bottom:1px solid #C9C2B4;padding:14px 0;text-align:right;font-family:Lora,Georgia,'Times New Roman',serif;font-size:17px;line-height:1.35;color:#132649;">${escapeHtml(value)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function steps(items: string[]) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #C9C2B4;margin:28px 0;">
      ${items.map((item, index) => `
        <tr>
          <td style="border-bottom:1px solid #C9C2B4;padding:14px 16px 14px 0;width:52px;font-family:Lora,Georgia,'Times New Roman',serif;font-size:20px;color:#132649;">${String(index + 1).padStart(2, "0")}</td>
          <td style="border-bottom:1px solid #C9C2B4;padding:14px 0;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#4A4438;">${escapeHtml(item)}</td>
        </tr>
      `).join("")}
    </table>
  `;
}

function button(label: string, path: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:28px 0;">
      <tr>
        <td bgcolor="#132649" style="height:48px;padding:0 28px;background:#132649;">
          <a href="${escapeHtml(href(path))}" style="display:inline-block;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:13px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;text-decoration:none;color:#F5EFE4;line-height:48px;">${escapeHtml(label)}</a>
        </td>
      </tr>
    </table>
  `;
}

function paragraph(value: unknown, italic = false) {
  return `<p style="margin:0 0 18px;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#4A4438;${italic ? "font-style:italic;" : ""}">${escapeHtml(value)}</p>`;
}

function quote(value: unknown) {
  return `<div style="border-top:1px solid #C9C2B4;border-bottom:1px solid #C9C2B4;margin:28px 0;padding:18px 0;font-family:Lora,Georgia,'Times New Roman',serif;font-size:17px;line-height:1.55;font-style:italic;color:#132649;">${escapeHtml(value)}</div>`;
}

function layout(email: RenderedEmail, body: string) {
  const privacyUrl = href("/privacy");
  return `<!doctype html>
<html>
  <body style="margin:0;background:#F5EFE4;padding:48px 0;">
    <center>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;margin:0 auto;">
        <tr>
          <td style="padding:0 24px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-bottom:1px solid #C9C2B4;margin-bottom:28px;">
              <tr>
                <td style="padding:0 0 18px;font-family:Lora,Georgia,'Times New Roman',serif;font-size:32px;font-weight:500;color:#1C1A17;">tutr.</td>
                <td align="right" style="padding:0 0 18px;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:11px;line-height:1.65;letter-spacing:0.16em;text-transform:uppercase;color:#4A4438;">${escapeHtml(email.label)}</td>
              </tr>
            </table>
            ${body}
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #C9C2B4;margin-top:34px;">
              <tr>
                <td style="padding-top:18px;font-family:Poppins,Helvetica,Arial,sans-serif;font-size:12px;line-height:1.65;color:#4A4438;">
                  Questions? <a href="mailto:${SUPPORT_EMAIL}" style="color:#132649;text-decoration:underline;">${SUPPORT_EMAIL}</a><br>
                  ${email.billingLine ? `Payment questions? <a href="mailto:${BILLING_EMAIL}" style="color:#132649;text-decoration:underline;">${BILLING_EMAIL}</a><br>` : ""}
                  Privacy: <a href="mailto:${PRIVACY_EMAIL}" style="color:#132649;text-decoration:underline;">${PRIVACY_EMAIL}</a> · <a href="${privacyUrl}" style="color:#132649;text-decoration:underline;">Privacy policy</a><br>
                  ${escapeHtml(email.reason)}<br><br>
                  <span style="font-size:11px;letter-spacing:0.16em;text-transform:uppercase;">TUTRSTEM · TUTRSTEM.ORG.UK</span>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </center>
  </body>
</html>`;
}

function heading(value: unknown, italic = false) {
  return `<h1 style="margin:0 0 22px;font-family:Lora,Georgia,'Times New Roman',serif;font-size:34px;font-weight:400;line-height:1.2;color:#132649;${italic ? "font-style:italic;" : ""}">${escapeHtml(value)}</h1>`;
}

function textLines(lines: unknown[]) {
  return lines.map((line) => text(line)).filter(Boolean).join("\n");
}

function buildEmail(template: string, data: EmailData = {}): RenderedEmail {
  const bookingId = text(data.bookingId || data.id);
  const bookingLink = bookingPath(bookingId);
  const subject = text(data.subject, "Session");
  const date = formatDate(data.dateTime || data.date);
  const shortDate = formatShortDate(data.dateTime || data.date);
  const time = `${text(data.time) || `${formatTime(data.dateTime)} UK time`}`;
  const length = text(data.length, "60 minutes");
  const studentFirst = firstName(data.studentName);
  const tutorFirst = firstName(data.tutorName);
  const userFirst = firstName(data.firstName || data.name || data.studentName || data.tutorName);
  let email: RenderedEmail;
  let body = "";

  switch (template) {
    case "welcome":
      email = { subject: "Welcome to tutrSTEM", label: "Welcome", fromLocal: "support", reason: "You're receiving this because you created a tutrSTEM account.", html: "", text: "" };
      body = heading(`Welcome to tutrSTEM, ${userFirst}`)
        + paragraph("Every tutor on tutrSTEM is checked by us - ID, DBS and qualifications - and earned top grades in the subjects they teach. Here's how to get started.")
        + steps(["Search tutors by subject and the grade they achieved.", "Book a session straight from their profile.", "After your session, leave a review to help other students."])
        + button("Find a tutor", "/tutors")
        + paragraph("Stuck on anything? Just reply to this email.");
      email.text = textLines([email.subject, `Welcome to tutrSTEM, ${userFirst}`, "Every tutor on tutrSTEM is checked by us - ID, DBS and qualifications - and earned top grades in the subjects they teach.", "01 Search tutors by subject and the grade they achieved.", "02 Book a session straight from their profile.", "03 After your session, leave a review to help other students.", `${SITE_URL}/tutors`, email.reason]);
      break;
    case "booking_confirmed":
      email = { subject: `Booked: ${subject} with ${text(data.tutorName, "your tutor")}, ${shortDate}`, label: "Booking confirmed", fromLocal: "bookings", reason: "You're receiving this because you booked a session on tutrSTEM.", billingLine: true, html: "", text: "" };
      body = heading(`You're booked in with ${text(data.tutorName, "your tutor")}`)
        + paragraph(`Hi ${userFirst}, your session is confirmed. Here are the details. We'll send you a reminder the day before.`)
        + rows([["Subject", subject], ["Date", date], ["Time", time], ["Length", length], ["Paid", money(data.price)]])
        + button("View booking", bookingLink)
        + paragraph(`Need to change something? Reschedule or cancel from your booking page. ${CANCELLATION_POLICY}`)
        + (data.under18 ? paragraph("A copy of this email has been sent to your parent or guardian.", true) : "");
      email.text = textLines([email.subject, `Hi ${userFirst}, your session is confirmed.`, `Subject: ${subject}`, `Date: ${date}`, `Time: ${time}`, `Length: ${length}`, `Paid: ${money(data.price)}`, bookingLink, email.reason]);
      break;
    case "parent_link":
      email = { subject: `${studentFirst} has added you on tutrSTEM`, label: "Parent account", fromLocal: "support", reason: "You're receiving this because a student added your email address on tutrSTEM.", html: "", text: "" };
      body = heading(`${studentFirst} has added you as their parent or guardian`)
        + paragraph(`${studentFirst} uses tutrSTEM to book tutoring sessions. Because they're under 18, once you confirm you'll get a copy of their booking emails and can see their messages with tutors.`)
        + button("Confirm I'm their parent", text(data.confirmUrl, "/accounts"))
        + paragraph("Don't recognise this? You can ignore this email and nothing will change, or let us know at support@tutrstem.org.uk.");
      email.text = textLines([email.subject, `${studentFirst} uses tutrSTEM to book tutoring sessions.`, href(text(data.confirmUrl, "/accounts")), email.reason]);
      break;
    case "booking_new_for_tutor":
      email = { subject: `New booking: ${studentFirst}, ${shortDate}`, label: "New booking", fromLocal: "bookings", reason: "You're receiving this because you tutor on tutrSTEM.", html: "", text: "" };
      body = heading(`New session with ${studentFirst}`)
        + paragraph(`Hi ${tutorFirst}, ${studentFirst} has booked a session with you. It's now in your tutrSTEM schedule.`)
        + rows([["Student", [studentFirst, text(data.yearGroup)].filter(Boolean).join(", ")], ["Subject", subject], ["Date", date], ["Time", time], ["Length", length], ["You'll earn", money(Number(data.price || 0) * TUTOR_SHARE)]])
        + button("View booking", bookingLink)
        + paragraph("Can't make it? Reschedule or cancel from your dashboard as soon as possible so the student can plan around it. Keep all contact on tutrSTEM chat.");
      email.text = textLines([email.subject, `Hi ${tutorFirst}, ${studentFirst} has booked a session with you.`, `Student: ${studentFirst}`, `Subject: ${subject}`, `Date: ${date}`, `Time: ${time}`, `You'll earn: ${money(Number(data.price || 0) * TUTOR_SHARE)}`, bookingLink, email.reason]);
      break;
    case "session_reminder_24h":
      email = { subject: `Tomorrow: ${subject} at ${formatTime(data.dateTime)}`, label: "Tomorrow", fromLocal: "bookings", reason: "You're receiving this because you have a session booked on tutrSTEM.", html: "", text: "" };
      body = heading(`Your ${subject} session is tomorrow`)
        + paragraph(`Hi ${userFirst}, a quick reminder that your session with ${text(data.otherName, "the other person")} starts tomorrow at ${formatTime(data.dateTime)} UK time.`)
        + rows([["With", text(data.otherName)], ["Subject", subject], ["Date", date], ["Time", time]])
        + button("Open booking", bookingLink)
        + paragraph("Can't make it? Reschedule or cancel as early as you can so the other person isn't left waiting.");
      email.text = textLines([email.subject, `Hi ${userFirst}, your session with ${text(data.otherName)} starts tomorrow at ${formatTime(data.dateTime)} UK time.`, bookingLink, email.reason]);
      break;
    case "booking_cancelled":
      email = { subject: `Cancelled: ${subject} on ${shortDate}`, label: "Cancelled", fromLocal: "bookings", reason: "You're receiving this because you had a session booked on tutrSTEM.", billingLine: true, html: "", text: "" };
      body = heading("Your session has been cancelled")
        + paragraph(`Hi ${userFirst}, ${text(data.otherName, "The other person")} has cancelled your ${subject} session. Sorry for the change of plans.`)
        + rows([["Subject", subject], ["Was booked for", `${shortDate}, ${formatTime(data.dateTime)}`], ["Cancelled by", text(data.cancelledBy || data.otherName)]])
        + (data.refundAmount ? paragraph(`Your refund of ${money(data.refundAmount)} is on its way to your original payment method. It usually shows within 5-10 working days.`) : "")
        + button(text(data.role) === "tutor" ? "View your schedule" : "Book another session", text(data.role) === "tutor" ? "/dashboard" : "/tutors");
      email.text = textLines([email.subject, `Hi ${userFirst}, ${text(data.otherName)} has cancelled your ${subject} session.`, `Was booked for: ${shortDate}, ${formatTime(data.dateTime)}`, email.reason]);
      break;
    case "booking_rescheduled":
      email = { subject: `New time: ${subject} on ${formatShortDate(data.newDateTime || data.dateTime)}`, label: "Time changed", fromLocal: "bookings", reason: "You're receiving this because you have a session booked on tutrSTEM.", html: "", text: "" };
      body = heading("Your session has moved")
        + paragraph(`Hi ${userFirst}, ${text(data.otherName, "The other person")} has moved your ${subject} session. Here's the new time.`)
        + rows([["Subject", subject], ["New date", formatDate(data.newDateTime || data.dateTime)], ["New time", `${formatTime(data.newDateTime || data.dateTime)} UK time`], ["Was", `${shortDate}, ${formatTime(data.oldDateTime || data.was || data.dateTime)}`]])
        + button("View booking", bookingLink)
        + paragraph("If the new time doesn't work for you, you can cancel from your booking page.");
      email.text = textLines([email.subject, `Hi ${userFirst}, your ${subject} session moved to ${formatDate(data.newDateTime || data.dateTime)} at ${formatTime(data.newDateTime || data.dateTime)} UK time.`, bookingLink, email.reason]);
      break;
    case "review_request":
      email = { subject: `How was your session with ${tutorFirst}?`, label: "How did it go?", fromLocal: "bookings", reason: "You're receiving this because you had a session on tutrSTEM.", html: "", text: "" };
      body = heading(`How was your session with ${text(data.tutorName, "your tutor")}?`, true)
        + paragraph(`A short review helps other students find the right tutor, and helps ${tutorFirst} too. It takes under a minute.`)
        + button("Leave a review", `/bookings/${encodeURIComponent(bookingId)}/review`)
        + paragraph("Something not right about the session? Reply to this email and we'll look into it.");
      email.text = textLines([email.subject, `A short review helps other students find the right tutor, and helps ${tutorFirst} too.`, href(`/bookings/${encodeURIComponent(bookingId)}/review`), email.reason]);
      break;
    case "application_received":
      email = { subject: "We've got your application", label: "Application", fromLocal: "applications", reason: "You're receiving this because you applied to tutor on tutrSTEM.", html: "", text: "" };
      body = heading("We've got your application")
        + paragraph(`Thanks for applying to tutor with tutrSTEM, ${userFirst}. We check every application by hand, including your ID, DBS certificate and qualifications.`)
        + rows([["Submitted", text(data.submitted, formatDate(new Date().toISOString()))], ["Status", "Under review"], ["Usually takes", APPLICATION_REVIEW_DAYS]])
        + paragraph("We'll email you as soon as we've made a decision. Questions in the meantime? Just reply to this email.");
      email.text = textLines([email.subject, `Thanks for applying to tutor with tutrSTEM, ${userFirst}.`, "Status: Under review", `Usually takes: ${APPLICATION_REVIEW_DAYS}`, email.reason]);
      break;
    case "tutor_approved":
      email = { subject: "You're approved to tutor on tutrSTEM", label: "Approved", fromLocal: "applications", reason: "You're receiving this because you applied to tutor on tutrSTEM.", html: "", text: "" };
      body = heading("You're approved. Welcome to tutrSTEM.")
        + paragraph(`Congratulations, ${userFirst}. Your profile is now live and students can book you. Three things to do next:`)
        + steps(["Set up payouts with Stripe so you can get paid.", "Add the times you're available.", "Check your profile reads the way you want it to."])
        + button("Go to your dashboard", "/dashboard");
      email.text = textLines([email.subject, `Congratulations, ${userFirst}.`, "01 Set up payouts with Stripe so you can get paid.", "02 Add the times you're available.", "03 Check your profile reads the way you want it to.", href("/dashboard"), email.reason]);
      break;
    case "tutor_rejected":
      email = { subject: "An update on your tutrSTEM application", label: "Application update", fromLocal: "applications", reason: "You're receiving this because you applied to tutor on tutrSTEM.", html: "", text: "" };
      body = heading("An update on your application")
        + paragraph(`Thanks for applying to tutor with tutrSTEM, ${userFirst}. After reviewing your application, we're not able to approve it at the moment.`)
        + quote(text(data.reason, "We are not able to accept this application at this stage."))
        + paragraph("You're welcome to apply again if anything changes. If you have questions, just reply to this email.");
      email.text = textLines([email.subject, `Thanks for applying to tutor with tutrSTEM, ${userFirst}.`, text(data.reason, "We are not able to accept this application at this stage."), email.reason]);
      break;
    case "application_more_info":
      email = { subject: "One more thing for your tutrSTEM application", label: "Action needed", fromLocal: "applications", reason: "You're receiving this because you applied to tutor on tutrSTEM.", html: "", text: "" };
      body = heading("We need one more thing")
        + paragraph(`Hi ${userFirst}, we're reviewing your application and need the following before we can approve it.`)
        + rows([["Missing", text(data.document, "Document")], ["Note from us", text(data.note, "Please upload the requested document.")]])
        + button("Upload document", "/tutor/verification");
      email.text = textLines([email.subject, `Missing: ${text(data.document, "Document")}`, `Note: ${text(data.note, "Please upload the requested document.")}`, href("/tutor/verification"), email.reason]);
      break;
    case "payout_setup_reminder":
      email = { subject: "Finish setting up payouts", label: "Payouts", fromLocal: "billing", reason: "You're receiving this because you tutor on tutrSTEM.", billingLine: true, html: "", text: "" };
      body = heading("Finish setting up payouts")
        + paragraph(`Hi ${userFirst}, you can't be paid for sessions until your payout account is set up. It takes about five minutes.`)
        + button("Set up payouts", text(data.onboardingUrl, "/dashboard"))
        + paragraph("Payouts are handled by Stripe, so your bank details go straight to them. tutrSTEM never sees them.");
      email.text = textLines([email.subject, `Hi ${userFirst}, you can't be paid for sessions until your payout account is set up.`, href(text(data.onboardingUrl, "/dashboard")), email.reason]);
      break;
    case "document_expiring":
      email = { subject: `Your ${text(data.document, "document")} needs updating`, label: "Action needed", fromLocal: "applications", reason: "You're receiving this because you tutor on tutrSTEM.", html: "", text: "" };
      body = heading(`Your ${text(data.document, "document")} needs updating`)
        + paragraph(`Hi ${userFirst}, our records show your ${text(data.document, "document")} expires on ${formatDate(data.expiryDate)}. Upload a new one before then to keep your profile bookable.`)
        + button("Upload new document", "/tutor/verification")
        + paragraph("Already sent it? Ignore this email. We'll confirm once it's checked.");
      email.text = textLines([email.subject, `Your ${text(data.document, "document")} expires on ${formatDate(data.expiryDate)}.`, href("/tutor/verification"), email.reason]);
      break;
    case "account_deleted":
      email = { subject: "Your tutrSTEM account has been deleted", label: "Account deleted", fromLocal: "privacy", reason: "This is a one-off email confirming your request.", html: "", text: "" };
      body = heading("Your account has been deleted")
        + paragraph(`Hi ${userFirst}, as you asked, we deleted your tutrSTEM account and personal data on ${formatDate(data.deletedAt || new Date().toISOString())}.`)
        + paragraph(text(data.retentionNote, "Some payment and safety records may be retained where required for tax, legal, accounting or safeguarding reasons."))
        + paragraph("Didn't ask for this? Email privacy@tutrstem.org.uk straight away.");
      email.text = textLines([email.subject, `Hi ${userFirst}, your tutrSTEM account was deleted.`, text(data.retentionNote, ""), email.reason]);
      break;
    case "admin_new_application":
      email = { subject: `New tutor application: ${text(data.name, "Tutor")}`, label: "New application", fromLocal: "applications", reason: "Internal alert for tutrSTEM admins.", html: "", text: "" };
      body = heading(`${text(data.name, "A tutor")} has applied to tutor`)
        + rows([["Subjects", text(data.subjects, "Not listed")], ["University", text(data.university, "Not listed")], ["Documents", text(data.documents, "Uploaded documents")], ["Submitted", text(data.submitted, formatDate(new Date().toISOString()))]])
        + button("Review application", `/admin/applications/${encodeURIComponent(text(data.applicationId))}`);
      email.text = textLines([email.subject, `Subjects: ${text(data.subjects)}`, `University: ${text(data.university)}`, `Documents: ${text(data.documents)}`, href(`/admin/applications/${encodeURIComponent(text(data.applicationId))}`), email.reason]);
      break;
    case "safeguarding_alert":
      email = { subject: `[SAFEGUARDING] Flagged message - ${text(data.reason, "review needed")}`, label: "Safeguarding alert", fromLocal: "bookings", reason: "Internal alert for tutrSTEM admins. Do not forward.", html: "", text: "" };
      body = heading("A chat message was flagged")
        + rows([["Reason", text(data.reason)], ["From", text(data.from)], ["To", text(data.to)], ["Under 18 involved", text(data.under18, "No")], ["Sent", text(data.sent, formatDate(new Date().toISOString()))]])
        + quote(`"${text(data.excerpt).slice(0, 300)}"`)
        + button("Review in dashboard", `/admin/safeguarding/${encodeURIComponent(text(data.alertId, ""))}`);
      email.text = textLines([email.subject, `Reason: ${text(data.reason)}`, `From: ${text(data.from)}`, `To: ${text(data.to)}`, text(data.excerpt).slice(0, 300), email.reason]);
      break;
    case "payment_failed":
      email = { subject: "Your payment didn't go through", label: "Payment issue", fromLocal: "billing", reason: "You're receiving this because you tried to book a session on tutrSTEM.", billingLine: true, html: "", text: "" };
      body = heading("Your payment didn't go through")
        + paragraph(`Hi ${userFirst}, we couldn't take payment for your session with ${text(data.tutorName, "your tutor")} on ${date}, so it isn't booked yet. The slot is held for ${text(data.holdTime, "a short time")}.`)
        + button("Try payment again", text(data.paymentUrl, "/bookings"))
        + paragraph("If it keeps failing, check with your bank or email billing@tutrstem.org.uk.");
      email.text = textLines([email.subject, `Hi ${userFirst}, we couldn't take payment for your session.`, href(text(data.paymentUrl, "/bookings")), email.reason]);
      break;
    case "refund_issued":
      email = { subject: `Your ${money(data.amount)} refund is on its way`, label: "Refund", fromLocal: "billing", reason: "You're receiving this because you made a payment on tutrSTEM.", billingLine: true, html: "", text: "" };
      body = heading("Your refund is on its way")
        + paragraph(`Hi ${userFirst}, we've refunded your ${subject} session with ${text(data.tutorName, "your tutor")} on ${date}.`)
        + rows([["Amount", money(data.amount)], ["Refunded to", text(data.card, "your original payment method")], ["Expected", "Within 5-10 working days"]])
        + paragraph("Stripe will also send you a receipt for the refund. If it hasn't arrived after 10 working days, email billing@tutrstem.org.uk.");
      email.text = textLines([email.subject, `Hi ${userFirst}, we've refunded your ${subject} session.`, `Amount: ${money(data.amount)}`, email.reason]);
      break;
    default:
      throw new Error(`Unknown email template: ${template}`);
  }

  email.html = layout(email, body);
  return email;
}

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
  const defaultFrom = Deno.env.get("RESEND_FROM_EMAIL") || `tutrSTEM <${APPLICATIONS_EMAIL}>`;
  const testMode = Deno.env.get("TEST_MODE") === "true";

  if (!resendApiKey) {
    return jsonResponse({ error: "RESEND_API_KEY is not configured" }, 500);
  }

  let payload: EmailPayload;
  try {
    payload = await req.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  let to = String(payload.to || "").trim();
  let subject = String(payload.subject || "").trim();
  let textBody = String(payload.text || "").trim();
  let htmlBody = String(payload.html || "").trim();
  let fromEmail = defaultFrom;
  let replyTo = Deno.env.get("RESEND_REPLY_TO") || APPLICATIONS_EMAIL;
  const templateName = text(payload.meta?.template || payload.meta?.type);

  if (templateName) {
    try {
      const rendered = buildEmail(templateName, payload.meta?.data || {});
      subject = rendered.subject;
      textBody = rendered.text;
      htmlBody = rendered.html;
      fromEmail = `tutrSTEM <${rendered.fromLocal}@tutrstem.org.uk>`;
      replyTo = `${rendered.fromLocal}@tutrstem.org.uk`;
    } catch (error) {
      return jsonResponse({ error: String(error) }, 400);
    }
  }

  if (testMode) to = APPLICATIONS_EMAIL;

  if (!to || !subject || (!textBody && !htmlBody)) {
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
      text: textBody || undefined,
      html: htmlBody || undefined,
      tags: [
        { name: "source", value: "tutrstem" },
        { name: "type", value: String(templateName || payload.meta?.type || "notification").slice(0, 40) }
      ]
    })
  });

  const resendData = await resendResponse.json().catch(() => ({}));

  if (!resendResponse.ok) {
    return jsonResponse({ error: "Resend rejected the email", details: resendData }, 502);
  }

  return jsonResponse({ ok: true, id: resendData.id || null, template: templateName || null });
});

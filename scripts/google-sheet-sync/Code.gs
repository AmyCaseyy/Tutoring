/**
 * tutrSTEM -> Google Sheet sync.
 *
 * Paste into Extensions > Apps Script in a Google Sheet, run setup() once,
 * and the sheet refreshes itself every 15 minutes. It reads the website's
 * Firestore data with your own Google login (the account that owns the
 * Firebase project), so no keys or passwords are stored here.
 *
 * Tabs it builds:
 *   Summary  - tutors online now, account counts, lessons this month
 *   Lessons  - who booked with who and what kind of lesson, grouped by month
 *   Accounts - every account, grouped by the month it was created
 * Past months are collapsed; click the + in the left margin to open one.
 */

const PROJECT_ID = "tutrstem-67155";
const ONLINE_WINDOW_MINUTES = 5;
const TIME_ZONE = "Europe/London";

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("tutrSTEM")
    .addItem("Refresh now", "refreshAll")
    .addToUi();
}

// Run once: builds the sheet and sets it to refresh every 15 minutes
function setup() {
  ScriptApp.getProjectTriggers()
    .filter((trigger) => trigger.getHandlerFunction() === "refreshAll")
    .forEach((trigger) => ScriptApp.deleteTrigger(trigger));
  ScriptApp.newTrigger("refreshAll").timeBased().everyMinutes(15).create();
  refreshAll();
}

function refreshAll() {
  const users = fetchCollection("users", ["name", "email", "role", "lastSeenMs"]);
  const bookings = fetchCollection("bookings", ["dateTime", "student", "studentEmail", "tutor", "tutorEmail", "subject", "type", "isFreeTrial", "status", "paymentStatus", "amount"]);
  const approvedTutors = fetchCollection("approvedTutors", ["status", "approved"]);
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  writeSummary(spreadsheet, users, bookings, approvedTutors);
  writeLessons(spreadsheet, bookings);
  writeAccounts(spreadsheet, users);
}

/* ---------- Firestore ---------- */

// Reads every document in a collection, only fetching the listed fields
function fetchCollection(name, fields) {
  const mask = fields.map((field) => `&mask.fieldPaths=${encodeURIComponent(field)}`).join("");
  const docs = [];
  let pageToken = "";
  do {
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/${name}?pageSize=300${mask}`
      + (pageToken ? `&pageToken=${encodeURIComponent(pageToken)}` : "");
    const response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization: `Bearer ${ScriptApp.getOAuthToken()}`,
        "X-Goog-User-Project": PROJECT_ID
      },
      muteHttpExceptions: true
    });
    const data = JSON.parse(response.getContentText() || "{}");
    if (response.getResponseCode() !== 200) {
      throw new Error(`Could not read ${name} from Firebase: ${(data.error && data.error.message) || response.getResponseCode()}`);
    }
    (data.documents || []).forEach((doc) => {
      docs.push({
        id: doc.name.split("/").pop(),
        createTime: doc.createTime,
        ...decodeFields(doc.fields || {})
      });
    });
    pageToken = data.nextPageToken || "";
  } while (pageToken);
  return docs;
}

function decodeFields(fields) {
  const out = {};
  Object.keys(fields).forEach((key) => {
    out[key] = decodeValue(fields[key]);
  });
  return out;
}

function decodeValue(value) {
  if (!value) return null;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("booleanValue" in value) return value.booleanValue;
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("mapValue" in value) return decodeFields(value.mapValue.fields || {});
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(decodeValue);
  return null;
}

/* ---------- Tabs ---------- */

function writeSummary(spreadsheet, users, bookings, approvedTutors) {
  const sheet = spreadsheet.getSheetByName("Summary") || spreadsheet.insertSheet("Summary", 0);
  sheet.clear();
  const cutoff = Date.now() - ONLINE_WINDOW_MINUTES * 60 * 1000;
  const online = users.filter((user) => user.role === "tutor" && Number(user.lastSeenMs || 0) >= cutoff);
  const thisMonth = monthKey(new Date());
  const rows = [
    ["tutrSTEM summary", ""],
    ["Last updated", formatDateTime(new Date())],
    ["", ""],
    [`Tutors online now (active in last ${ONLINE_WINDOW_MINUTES} min)`, online.length],
    ["Approved tutors", approvedTutors.filter((tutor) => tutor.status === "approved" || tutor.approved === true).length],
    ["Tutor accounts", users.filter((user) => user.role === "tutor").length],
    ["Student accounts", users.filter((user) => user.role === "student").length],
    ["Parent accounts", users.filter((user) => user.role === "parent").length],
    ["Lessons this month", bookings.filter((booking) => monthKey(lessonDate(booking)) === thisMonth).length],
    ["Lessons all time", bookings.length],
    ["", ""],
    ["Tutors online right now", online.map((user) => user.name || user.email).join(", ") || "None"]
  ];
  sheet.getRange(1, 1, rows.length, 2).setValues(rows);
  sheet.getRange("A1").setFontWeight("bold").setFontSize(14);
  sheet.getRange(4, 1, 7, 1).setFontWeight("bold");
  sheet.getRange("A12").setFontWeight("bold");
  sheet.setColumnWidth(1, 330);
  sheet.setColumnWidth(2, 260);
}

function writeLessons(spreadsheet, bookings) {
  const header = ["Lesson date", "Student", "Student email", "Tutor", "Tutor email", "Subject", "Lesson type", "Booking status", "Payment", "Price (£)"];
  const rows = bookings.map((booking) => ({
    date: lessonDate(booking),
    values: [
      formatDateTime(lessonDate(booking)),
      booking.student || "",
      booking.studentEmail || "",
      booking.tutor || "",
      booking.tutorEmail || "",
      booking.subject || "",
      booking.type || (booking.isFreeTrial ? "Free trial lesson" : ""),
      booking.status || "",
      paymentLabel(booking.paymentStatus),
      Number(booking.amount || 0)
    ]
  }));
  writeGroupedByMonth(spreadsheet, "Lessons", header, rows, "lesson");
}

function writeAccounts(spreadsheet, users) {
  const header = ["Joined", "Name", "Email", "Account type", "Last active"];
  const rows = users.map((user) => {
    const joined = user.createTime ? new Date(user.createTime) : null;
    return {
      date: joined,
      values: [
        joined ? formatDateTime(joined) : "",
        user.name || "",
        user.email || "",
        user.role || "",
        user.lastSeenMs ? formatDateTime(new Date(Number(user.lastSeenMs))) : ""
      ]
    };
  });
  writeGroupedByMonth(spreadsheet, "Accounts", header, rows, "account");
}

// Writes newest month first: a bold month heading, then its rows grouped underneath.
// Months that have finished start collapsed; this month and upcoming ones stay open.
function writeGroupedByMonth(spreadsheet, name, header, rows, noun) {
  const sheet = freshSheet(spreadsheet, name);
  sheet.getRange(1, 1, 1, header.length).setValues([header]).setFontWeight("bold").setBackground("#191815").setFontColor("#ffffff");
  sheet.setFrozenRows(1);

  const months = {};
  rows.forEach((row) => {
    const key = row.date && !isNaN(row.date) ? monthKey(row.date) : "0000-00";
    (months[key] = months[key] || []).push(row);
  });
  const currentMonth = monthKey(new Date());
  let rowIndex = 2;
  Object.keys(months).sort().reverse().forEach((key) => {
    const monthRows = months[key].sort((a, b) => (b.date || 0) - (a.date || 0));
    const title = `${monthLabel(key)}: ${monthRows.length} ${noun}${monthRows.length === 1 ? "" : "s"}`;
    sheet.getRange(rowIndex, 1, 1, header.length).setBackground("#ede6da");
    sheet.getRange(rowIndex, 1).setValue(title).setFontWeight("bold");
    rowIndex += 1;
    sheet.getRange(rowIndex, 1, monthRows.length, header.length).setValues(monthRows.map((row) => row.values));
    const group = sheet.getRange(rowIndex, 1, monthRows.length, 1);
    group.shiftRowGroupDepth(1);
    if (key < currentMonth) sheet.getRowGroup(rowIndex, 1).collapse();
    rowIndex += monthRows.length;
  });
  sheet.setRowGroupControlPosition(SpreadsheetApp.GroupControlTogglePosition.BEFORE);
  sheet.autoResizeColumns(1, header.length);
}

// Recreates a tab so old month groups don't pile up
function freshSheet(spreadsheet, name) {
  const existing = spreadsheet.getSheetByName(name);
  const index = existing ? existing.getIndex() - 1 : spreadsheet.getSheets().length;
  if (existing) spreadsheet.deleteSheet(existing);
  return spreadsheet.insertSheet(name, index);
}

/* ---------- Helpers ---------- */

function lessonDate(booking) {
  const value = booking.dateTime || booking.createTime;
  return value ? new Date(value) : null;
}

function monthKey(date) {
  if (!date || isNaN(date)) return "0000-00";
  return Utilities.formatDate(date, TIME_ZONE, "yyyy-MM");
}

function monthLabel(key) {
  if (key === "0000-00") return "No date";
  const [year, month] = key.split("-").map(Number);
  return Utilities.formatDate(new Date(year, month - 1, 15), TIME_ZONE, "MMMM yyyy");
}

function formatDateTime(date) {
  if (!date || isNaN(date)) return "";
  return Utilities.formatDate(date, TIME_ZONE, "dd/MM/yyyy HH:mm");
}

function paymentLabel(status) {
  return {
    free_trial: "Free trial",
    not_started: "Not paid yet",
    checkout_started: "Checkout started",
    paid_held: "Paid (held)",
    paid_released: "Paid out",
    refunded: "Refunded"
  }[status] || status || "";
}

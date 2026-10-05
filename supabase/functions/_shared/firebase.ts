type FirestoreFields = Record<string, { [key: string]: unknown }>;

const tokenCache = { accessToken: "", expiresAt: 0 };

function serviceAccount() {
  const raw = Deno.env.get("FIREBASE_SERVICE_ACCOUNT") || "";
  if (!raw) throw new Error("FIREBASE_SERVICE_ACCOUNT is not configured.");
  const account = JSON.parse(raw);
  if (typeof account.private_key === "string") {
    account.private_key = account.private_key.replace(/\\n/g, "\n");
  }
  return account;
}

function base64Url(bytes: Uint8Array) {
  return btoa(String.fromCharCode(...bytes)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function textBase64Url(value: string) {
  return base64Url(new TextEncoder().encode(value));
}

async function importPrivateKey(pem: string) {
  const body = pem.replace(/-----BEGIN PRIVATE KEY-----|-----END PRIVATE KEY-----|\s/g, "");
  const binary = Uint8Array.from(atob(body), (char) => char.charCodeAt(0));
  return crypto.subtle.importKey(
    "pkcs8",
    binary,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function accessToken() {
  if (tokenCache.accessToken && tokenCache.expiresAt > Date.now() + 60000) return tokenCache.accessToken;
  const account = serviceAccount();
  const now = Math.floor(Date.now() / 1000);
  const header = textBase64Url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claim = textBase64Url(JSON.stringify({
    iss: account.client_email,
    scope: "https://www.googleapis.com/auth/datastore",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600
  }));
  const key = await importPrivateKey(account.private_key);
  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(`${header}.${claim}`)
  );
  const jwt = `${header}.${claim}.${base64Url(new Uint8Array(signature))}`;
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt
    })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error_description || "Could not auth with Firebase.");
  tokenCache.accessToken = data.access_token;
  tokenCache.expiresAt = Date.now() + Number(data.expires_in || 3600) * 1000;
  return tokenCache.accessToken;
}

function documentUrl(collection: string, id: string) {
  const projectId = serviceAccount().project_id;
  return `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/${collection}/${id}`;
}

function databaseUrl(path = "") {
  const projectId = serviceAccount().project_id;
  return `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents${path}`;
}

function fromFirestoreValue(value: Record<string, unknown>): unknown {
  if ("stringValue" in value) return value.stringValue || "";
  if ("integerValue" in value) return Number(value.integerValue || 0);
  if ("doubleValue" in value) return Number(value.doubleValue || 0);
  if ("booleanValue" in value) return Boolean(value.booleanValue);
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("arrayValue" in value) return ((value.arrayValue as { values?: Record<string, unknown>[] }).values || []).map(fromFirestoreValue);
  if ("mapValue" in value) return fromFirestoreFields((value.mapValue as { fields?: FirestoreFields }).fields || {});
  return "";
}

function fromFirestoreFields(fields: FirestoreFields) {
  return Object.fromEntries(Object.entries(fields).map(([key, value]) => [key, fromFirestoreValue(value)]));
}

function toFirestoreValue(value: unknown): Record<string, unknown> {
  if (value === null || value === undefined) return { nullValue: null };
  if (typeof value === "boolean") return { booleanValue: value };
  if (typeof value === "number") return Number.isInteger(value) ? { integerValue: value } : { doubleValue: value };
  if (Array.isArray(value)) return { arrayValue: { values: value.map(toFirestoreValue) } };
  if (typeof value === "object") return { mapValue: { fields: toFirestoreFields(value as Record<string, unknown>) } };
  return { stringValue: String(value) };
}

function toFirestoreFields(data: Record<string, unknown>) {
  return Object.fromEntries(Object.entries(data).map(([key, value]) => [key, toFirestoreValue(value)]));
}

export async function getBooking(id: string) {
  const response = await fetch(documentUrl("bookings", id), {
    headers: { Authorization: `Bearer ${await accessToken()}` }
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error?.message || "Booking was not found.");
  return { id, ...fromFirestoreFields(data.fields || {}) };
}

export async function updateBooking(id: string, updates: Record<string, unknown>) {
  const fields = toFirestoreFields({
    ...updates,
    updatedAt: new Date().toISOString()
  });
  const params = new URLSearchParams();
  Object.keys(fields).forEach((key) => params.append("updateMask.fieldPaths", key));
  const response = await fetch(`${documentUrl("bookings", id)}?${params}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fields })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error?.message || "Could not update booking.");
  return data;
}

export async function getTutorProfile(id: string) {
  const response = await fetch(documentUrl("tutorProfiles", id), {
    headers: { Authorization: `Bearer ${await accessToken()}` }
  });
  const data = await response.json();
  if (response.status === 404) return { id };
  if (!response.ok) throw new Error(data.error?.message || "Tutor profile was not found.");
  return { id, ...fromFirestoreFields(data.fields || {}) };
}

export async function getTutorProfileByEmail(email: string) {
  const tutorEmail = String(email || "").trim().toLowerCase();
  if (!tutorEmail) return null;
  const response = await fetch(databaseUrl(":runQuery"), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "tutorProfiles" }],
        where: {
          fieldFilter: {
            field: { fieldPath: "email" },
            op: "EQUAL",
            value: { stringValue: tutorEmail }
          }
        },
        limit: 1
      }
    })
  });
  const data = await response.json().catch(() => []);
  if (!response.ok) throw new Error(data.error?.message || "Could not find tutor profile.");
  const match = Array.isArray(data) ? data.find((item) => item.document)?.document : null;
  if (!match) return null;
  const id = String(match.name || "").split("/").pop() || "";
  return { id, ...fromFirestoreFields(match.fields || {}) };
}

export async function updateTutorProfile(id: string, updates: Record<string, unknown>) {
  const fields = toFirestoreFields({
    ...updates,
    updatedAt: new Date().toISOString()
  });
  const params = new URLSearchParams();
  Object.keys(fields).forEach((key) => params.append("updateMask.fieldPaths", key));
  const response = await fetch(`${documentUrl("tutorProfiles", id)}?${params}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${await accessToken()}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ fields })
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error?.message || "Could not update tutor profile.");
  return data;
}

export function assertBookingAccess(email: string, booking: Record<string, unknown>, roles: Array<"student" | "tutor">) {
  const actor = email.trim().toLowerCase();
  const isStudent = String(booking.studentEmail || "").trim().toLowerCase() === actor;
  const isTutor = String(booking.tutorEmail || "").trim().toLowerCase() === actor;
  if ((roles.includes("student") && isStudent) || (roles.includes("tutor") && isTutor)) return;
  throw new Error("You do not have access to this booking.");
}

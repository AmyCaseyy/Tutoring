const tutors = [
  {
    name: "Priya Shah",
    subject: "Biology",
    university: "Cambridge",
    grade: "A*",
    rating: 4.98,
    lessons: 420,
    price: 45,
    style: "Exam technique, synoptic essays, calm weekly structure",
    badges: ["AQA", "Medicine offer", "Free trial"],
    initials: "PS",
    score: 98
  },
  {
    name: "Leo Grant",
    subject: "Mathematics",
    university: "Imperial",
    grade: "A*",
    rating: 4.94,
    lessons: 315,
    price: 38,
    style: "Pure maths, mechanics, confidence after mocks",
    badges: ["Edexcel", "STEP prep", "Free trial"],
    initials: "LG",
    score: 95
  },
  {
    name: "Amara Okafor",
    subject: "Chemistry",
    university: "UCL",
    grade: "A*",
    rating: 4.99,
    lessons: 510,
    price: 55,
    style: "Organic mechanisms, practical papers, top-band answers",
    badges: ["OCR A", "Oxbridge", "Free trial"],
    initials: "AO",
    score: 99
  },
  {
    name: "Nina Patel",
    subject: "Psychology",
    university: "Edinburgh",
    grade: "A",
    rating: 4.9,
    lessons: 260,
    price: 32,
    style: "Research methods, biopsychology, evaluation technique",
    badges: ["AQA", "Essay structure", "Free trial"],
    initials: "NP",
    score: 88
  },
  {
    name: "Theo Mensah",
    subject: "Physics",
    university: "Durham",
    grade: "A*",
    rating: 4.92,
    lessons: 198,
    price: 35,
    style: "Topic repair, formula fluency, practical questions",
    badges: ["OCR", "Engineering", "Free trial"],
    initials: "TM",
    score: 90
  },
  {
    name: "Sofia Bennett",
    subject: "Economics",
    university: "King's",
    grade: "A",
    rating: 4.87,
    lessons: 144,
    price: 28,
    style: "Diagrams, evaluation, timed essays, real examples",
    badges: ["Edexcel", "Essay drills", "Free trial"],
    initials: "SB",
    score: 84
  },
  {
    name: "Maya Brooks",
    subject: "Further Mathematics",
    university: "Warwick",
    grade: "A*",
    rating: 4.96,
    lessons: 286,
    price: 42,
    style: "Further pure, decision maths, STEP-style problem solving",
    badges: ["Edexcel", "STEP prep", "Free trial"],
    initials: "MB",
    score: 94
  },
  {
    name: "Hannah Clarke",
    subject: "Geography",
    university: "Manchester",
    grade: "A*",
    rating: 4.91,
    lessons: 176,
    price: 30,
    style: "Case studies, fieldwork write-ups, high-mark evaluation",
    badges: ["AQA", "NEA support", "Free trial"],
    initials: "HC",
    score: 87
  },
  {
    name: "Ibrahim Khan",
    subject: "Computer Science",
    university: "Birmingham",
    grade: "A*",
    rating: 4.95,
    lessons: 232,
    price: 36,
    style: "Python, algorithms, pseudocode, and exam paper technique",
    badges: ["OCR", "Programming", "Free trial"],
    initials: "IK",
    score: 92
  },
  {
    name: "Eilidh Fraser",
    subject: "Biology",
    university: "Glasgow",
    grade: "A",
    rating: 4.88,
    lessons: 154,
    price: 29,
    style: "Cell biology, genetics, practical skills, and recall systems",
    badges: ["SQA", "Exam recall", "Free trial"],
    initials: "EF",
    score: 83
  },
  {
    name: "Samira Ali",
    subject: "Chemistry",
    university: "Nottingham",
    grade: "A*",
    rating: 4.93,
    lessons: 201,
    price: 34,
    style: "Calculations, mechanisms, practical papers, and confidence",
    badges: ["AQA", "OCR A", "Free trial"],
    initials: "SA",
    score: 89
  },
  {
    name: "Daniel Reed",
    subject: "Physics",
    university: "Southampton",
    grade: "A",
    rating: 4.86,
    lessons: 132,
    price: 28,
    style: "Electricity, mechanics, waves, and equation fluency",
    badges: ["AQA", "Engineering", "Free trial"],
    initials: "DR",
    score: 80
  },
  {
    name: "Isla Morgan",
    subject: "Mathematics",
    university: "Bath",
    grade: "A*",
    rating: 4.97,
    lessons: 348,
    price: 40,
    style: "Pure maths, stats, mechanics, and exam speed",
    badges: ["Edexcel", "AQA", "Free trial"],
    initials: "IM",
    score: 96
  },
  {
    name: "Aisha Rahman",
    subject: "Psychology",
    university: "Leicester",
    grade: "A*",
    rating: 4.9,
    lessons: 187,
    price: 27,
    style: "Memory, attachment, psychopathology, and evaluation points",
    badges: ["AQA", "Essay plans", "Free trial"],
    initials: "AR",
    score: 86
  },
  {
    name: "Tom Evans",
    subject: "Economics",
    university: "Lancaster",
    grade: "A",
    rating: 4.84,
    lessons: 119,
    price: 26,
    style: "Micro, macro, diagrams, chains of analysis, and evaluation",
    badges: ["Edexcel", "AQA", "Free trial"],
    initials: "TE",
    score: 79
  },
  {
    name: "Chloe Martin",
    subject: "Geography",
    university: "Surrey",
    grade: "A*",
    rating: 4.89,
    lessons: 141,
    price: 28,
    style: "Human geography, hazards, data response, and case study recall",
    badges: ["OCR", "AQA", "Free trial"],
    initials: "CM",
    score: 82
  }
];

const roleContent = {
  student: {
    title: "Student account",
    text: "Book tutors, message your tutor, manage lessons, and leave ratings after completed sessions.",
    dash: "Student dashboard",
    mode: "Bookings and chat"
  },
  parent: {
    title: "Parent account",
    text: "Book tutors for your child, message tutors, manage cancellations, and leave ratings after lessons.",
    dash: "Parent dashboard",
    mode: "Family lessons"
  },
  tutor: {
    title: "Tutor account",
    text: "Manage your profile, subjects, availability, student messages, bookings, and ratings.",
    dash: "Tutor dashboard",
    mode: "Tutor workspace"
  }
};

const roleDashboards = {
  student: {
    tools: [
      ["Book tutors", "Browse available GCSE, A-Level, and admissions tutors and request lessons."],
      ["Messages", "Chat with tutors once you have chosen who you want to work with."],
      ["Rate tutors", "Leave feedback once a lesson is complete."]
    ],
    lessons: [
      ["Mon 18:00", "GCSE and A-Level Biology", "Recurring weekly with Priya Shah"],
      ["Wed 19:30", "Mathematics trial", "Free 30-minute session with Leo Grant"]
    ],
    chatTitle: "Tutor chat",
    chatWith: "Priya Shah",
    messages: [
      ["incoming", "Hi, I uploaded the respiration practice questions for Monday."],
      ["outgoing", "Great, can we also cover synoptic essay structure?"]
    ],
    ratingTitle: "Rate recent lesson",
    ratingText: "Biology with Priya Shah is ready for feedback.",
    ratingButton: "Give rating"
  },
  parent: {
    tools: [
      ["Book for a student", "Choose tutors and times for your child."],
      ["Messages", "Keep tutor conversations and lesson arrangements together."],
      ["Tutor ratings", "Rate tutors after completed sessions."]
    ],
    lessons: [
      ["Tue 17:00", "Chemistry", "One-off lesson with Amara Okafor"],
      ["Thu 18:30", "Economics", "Monthly support with Sofia Bennett"]
    ],
    chatTitle: "Parent and tutor chat",
    chatWith: "Amara Okafor",
    messages: [
      ["incoming", "I can send a short progress note after each session."],
      ["outgoing", "Perfect, please focus on organic mechanisms this week."]
    ],
    ratingTitle: "Parent rating",
    ratingText: "Chemistry with Amara Okafor can be rated after the lesson.",
    ratingButton: "Rate tutor"
  },
  tutor: {
    tools: [
      ["Profile", "Update subjects, grades, teaching style, and session notes."],
      ["Availability", "Approve trials, block busy times, and manage recurring lessons."],
      ["Bookings", "Review student requests and keep lesson admin organised."]
    ],
    lessons: [
      ["Today 16:30", "Trial request", "Maya wants GCSE Biology support"],
      ["Fri 19:00", "Recurring lesson", "Essay planning with Hannah"]
    ],
    chatTitle: "Student and parent chat",
    chatWith: "Maya and parent",
    messages: [
      ["incoming", "Could we do a free trial next week?"],
      ["outgoing", "Yes, I have Tuesday at 16:30 or Thursday at 18:00."]
    ],
    ratingTitle: "Tutor ratings",
    ratingText: "Your public profile shows an average rating after students and parents review lessons.",
    ratingButton: "View ratings"
  }
};

const tutorGrid = document.querySelector("#tutorGrid");
const nameFilter = document.querySelector("#nameFilter");
const subjectFilter = document.querySelector("#subjectFilter");
const uniFilter = document.querySelector("#uniFilter");
const gradeFilter = document.querySelector("#gradeFilter");
const sortFilter = document.querySelector("#sortFilter");
const trialOnly = document.querySelector("#trialOnly");
const matchCount = document.querySelector("#matchCount");
const dialog = document.querySelector("#bookingDialog");
const bookingTitle = document.querySelector("#bookingTitle");
const lessonType = document.querySelector("#lessonType");
const signupForm = document.querySelector("#signupForm");
const loginPanel = document.querySelector("#loginPanel");
const signupRole = document.querySelector("#signupRole");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupDob = document.querySelector("#signupDob");
const signupParentName = document.querySelector("#signupParentName");
const signupParentEmail = document.querySelector("#signupParentEmail");
const signupPassword = document.querySelector("#signupPassword");
const signupConfirmPassword = document.querySelector("#signupConfirmPassword");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const signupStatus = document.querySelector("#signupStatus");
const userMenu = document.querySelector("#userMenu");
const userMenuButton = document.querySelector("#userMenuButton");
const userDropdown = document.querySelector("#userDropdown");
const userMenuName = document.querySelector("#userMenuName");
const userMenuInitials = document.querySelector("#userMenuInitials");
const logoutButton = document.querySelector("#logoutButton");
const becomeTutorLink = document.querySelector("#becomeTutorLink");
const accountDetailsForm = document.querySelector("#accountDetailsForm");
const accountName = document.querySelector("#accountName");
const accountEmail = document.querySelector("#accountEmail");
const accountDob = document.querySelector("#accountDob");
const accountParentName = document.querySelector("#accountParentName");
const accountParentEmail = document.querySelector("#accountParentEmail");
const passwordForm = document.querySelector("#passwordForm");
const oldPassword = document.querySelector("#oldPassword");
const newPassword = document.querySelector("#newPassword");
const confirmNewPassword = document.querySelector("#confirmNewPassword");
const quickBook = document.querySelector("#quickBook");
const messagesButton = document.querySelector("#messagesButton");
const topMessagesButton = document.querySelector("#topMessagesButton");
const roleTools = document.querySelector("#roleTools");
const lessonList = document.querySelector("#lessonList");
const ratingsPanel = document.querySelector("#ratingsPanel");
const chatMessages = document.querySelector("#chatMessages");
const loginConfirmation = document.querySelector("#loginConfirmation");
const dashboardTitle = document.querySelector("#dashboardTitle");
const dashboardSubtitle = document.querySelector("#dashboardSubtitle");
const profileForm = document.querySelector("#profileForm");
const profileName = document.querySelector("#profileName");
const profileSubject = document.querySelector("#profileSubject");
const profileDetail = document.querySelector("#profileDetail");
const profileUniversity = document.querySelector("#profileUniversity");
const profileLevel = document.querySelector("#profileLevel");
const profilePhoto = document.querySelector("#profilePhoto");
const profilePhotoPreview = document.querySelector("#profilePhotoPreview");
const profileAbout = document.querySelector("#profileAbout");
const profileSessions = document.querySelector("#profileSessions");
const profileBadge = document.querySelector("#profileBadge");
const profileSubjectLabel = document.querySelector("#profileSubjectLabel");
const profileDetailLabel = document.querySelector("#profileDetailLabel");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const activityFeed = document.querySelector("#activityFeed");
const activityCount = document.querySelector("#activityCount");
const publicProfile = document.querySelector("#publicProfile");
const studentProfile = document.querySelector("#studentProfile");
const threadList = document.querySelector("#threadList");
const messagePageTitle = document.querySelector("#messagePageTitle");
const messagePageWith = document.querySelector("#messagePageWith");
const messagePageMessages = document.querySelector("#messagePageMessages");
const messagePageForm = document.querySelector("#messagePageForm");
const messagePageInput = document.querySelector("#messagePageInput");
const viewMessageProfile = document.querySelector("#viewMessageProfile");
const bookingPageForm = document.querySelector("#bookingPageForm");
const bookingTutor = document.querySelector("#bookingTutor");
const bookingPersonLabel = document.querySelector("#bookingPersonLabel");
const bookingLessonType = document.querySelector("#bookingLessonType");
const bookingDateTime = document.querySelector("#bookingDateTime");
const bookingSubmitButton = document.querySelector("#bookingSubmitButton");
const bookingsPageTitle = document.querySelector("#bookingsPageTitle");
const bookingsPageCopy = document.querySelector("#bookingsPageCopy");
const upcomingBookings = document.querySelector("#upcomingBookings");
const previousBookings = document.querySelector("#previousBookings");
const upcomingCount = document.querySelector("#upcomingCount");
const previousCount = document.querySelector("#previousCount");
const reviewsTitle = document.querySelector("#reviewsTitle");
const reviewsSummary = document.querySelector("#reviewsSummary");
const reviewList = document.querySelector("#reviewList");
const reviewPageForm = document.querySelector("#reviewPageForm");
const reviewScore = document.querySelector("#reviewScore");
const reviewText = document.querySelector("#reviewText");
const pages = [...document.querySelectorAll("[data-page]")];
const routeLinks = [...document.querySelectorAll("[data-route]")];

let selectedTutor = tutors[0];
let selectedThreadTutor = tutors[0];
let selectedStudentAccount = null;
let currentAccount = null;
let pendingConfirmation = "";
let cloudTutorProfiles = [];
let cloudBookings = [];
let pendingProfilePhoto = "";

const firebaseBackend = window.tutrStemFirebase || null;
const auth = firebaseBackend?.auth || null;
const db = firebaseBackend?.db || null;
const TUTOR_APPLICATION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfe9ZfB70h7I1on9Dj609MKK6guCYqlAm-QgEGbVdGswfh5iw/viewform";

function isCloudReady() {
  return Boolean(auth && db);
}

const storage = {
  messages: "girlstemTutoringMessages",
  ratings: "girlstemTutoringRatings",
  profiles: "girlstemTutoringProfiles",
  activity: "girlstemTutoringActivity",
  bookings: "girlstemTutoringBookings",
  emails: "tutrstemEmailQueue"
};

function showPage(pageName, options = {}) {
  const publicPages = ["home", "tutors", "how", "about", "accounts", "profile", "reviews"];
  const privatePages = ["messages", "bookings", "dashboard", "student-profile", "account-details", "trial-space", "help", "support"];
  const fallback = currentAccount ? "dashboard" : "accounts";
  let nextPage = pages.some((page) => page.dataset.page === pageName) ? pageName : fallback;

  if (!currentAccount && !publicPages.includes(nextPage)) {
    nextPage = "accounts";
    signupStatus.textContent = "Log in first, then this account page will open.";
    signupStatus.classList.remove("success");
  }

  if (privatePages.includes(nextPage) && !currentAccount) {
    nextPage = "accounts";
    signupStatus.textContent = "Log in or create an account first.";
    signupStatus.classList.remove("success");
  }

  if (nextPage === "tutors" && currentAccount?.role === "tutor") {
    nextPage = "dashboard";
    showConfirmation("Tutor accounts use this dashboard for availability, requests, chat, and ratings.");
  }

  if (nextPage === "profile" && currentAccount?.role === "tutor") {
    selectedTutor = getCurrentTutorProfile() || selectedTutor;
  }

  if (nextPage === "messages") renderMessagesPage();
  if (nextPage === "bookings") renderBookingsPage();
  if (nextPage === "profile") renderPublicProfile();
  if (nextPage === "student-profile") renderStudentProfile();
  if (nextPage === "reviews") renderReviewsPage();
  if (nextPage === "account-details") populateAccountDetails();

  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === nextPage);
  });

  routeLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === nextPage);
  });

  if (window.location.hash !== `#${nextPage}`) {
    history.replaceState(null, "", `#${nextPage}`);
  }

  if (!options.keepScroll) {
    window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
  }
}

function getRouteFromHash() {
  return window.location.hash.replace("#", "") || "home";
}

function showConfirmation(message) {
  pendingConfirmation = message;
  loginConfirmation.hidden = false;
  loginConfirmation.textContent = message;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

function getAccounts() {
  try {
    return JSON.parse(localStorage.getItem("girlstemTutoringAccounts")) || [];
  } catch {
    return [];
  }
}

function saveAccounts(accounts) {
  localStorage.setItem("girlstemTutoringAccounts", JSON.stringify(accounts));
}

function readStore(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch {
    return fallback;
  }
}

function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function publicAccount(account) {
  const { password, ...safeAccount } = account;
  return safeAccount;
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

async function saveAccountToCloud(account, uid = auth?.currentUser?.uid) {
  if (!isCloudReady() || !uid) return;
  await db.collection("users").doc(uid).set({
    ...publicAccount(account),
    uid,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
}

async function getCloudAccount(user) {
  if (!isCloudReady() || !user) return null;
  const snapshot = await db.collection("users").doc(user.uid).get();
  if (!snapshot.exists) return null;
  return {
    ...snapshot.data(),
    uid: user.uid,
    email: user.email
  };
}

async function isApprovedTutorEmail(email) {
  if (!isCloudReady() || !email) return false;
  const approvedEmail = normalizeEmail(email);
  const directSnapshot = await db.collection("approvedTutors").doc(approvedEmail).get();
  if (directSnapshot.exists && directSnapshot.data()?.status === "approved") return true;

  try {
    const querySnapshot = await db.collection("approvedTutors")
      .where("email", "==", approvedEmail)
      .where("status", "==", "approved")
      .limit(1)
      .get();
    return !querySnapshot.empty;
  } catch {
    return false;
  }
}

async function getApprovedTutorRecord(email) {
  if (!isCloudReady() || !email) return null;
  const approvedEmail = normalizeEmail(email);
  const directSnapshot = await db.collection("approvedTutors").doc(approvedEmail).get();
  if (directSnapshot.exists) return { id: directSnapshot.id, ...directSnapshot.data() };

  try {
    const querySnapshot = await db.collection("approvedTutors")
      .where("email", "==", approvedEmail)
      .where("status", "==", "approved")
      .limit(1)
      .get();
    if (querySnapshot.empty) return null;
    return { id: querySnapshot.docs[0].id, ...querySnapshot.docs[0].data() };
  } catch {
    return null;
  }
}

async function createHiddenTutorProfile(account, approvedRecord = {}) {
  if (!isCloudReady() || !account.uid) return;
  await db.collection("tutorProfiles").doc(account.uid).set({
    uid: account.uid,
    email: account.email,
    name: account.name,
    subject: "Subject to be added",
    university: "University to be added",
    grade: "A*",
    rating: 5,
    lessons: 0,
    level: "GCSE and A-Level",
    price: 35,
    style: "Supportive online lessons, exam practice, and confidence building",
    about: "",
    sessions: "",
    photo: "",
    badges: ["New tutor", "Free trial", "Verified"],
    initials: initialsFromName(account.name),
    score: 87,
    visible: approvedRecord.visible === true,
    approvedTutorId: approvedRecord.id || account.email,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
}

async function loadCloudData() {
  if (!isCloudReady()) return;
  const profileSnapshot = await db.collection("tutorProfiles").where("visible", "==", true).get();
  const profiles = profileSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  if (auth.currentUser) {
    const ownProfileSnapshot = await db.collection("tutorProfiles").doc(auth.currentUser.uid).get();
    if (ownProfileSnapshot.exists && !profiles.some((profile) => profile.id === ownProfileSnapshot.id)) {
      profiles.push({ id: ownProfileSnapshot.id, ...ownProfileSnapshot.data() });
    }
  }

  cloudTutorProfiles = profiles.sort((a, b) => String(a.name || "").localeCompare(String(b.name || "")));

  if (!currentAccount?.email) {
    cloudBookings = [];
    return;
  }

  const bookingField = currentAccount.role === "tutor" ? "tutorEmail" : "studentEmail";
  const bookingSnapshot = await db.collection("bookings")
    .where(bookingField, "==", currentAccount.email)
    .limit(120)
    .get();
  cloudBookings = bookingSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

async function saveTutorProfileToCloud(profile, uid = auth?.currentUser?.uid) {
  if (!isCloudReady() || !uid) return;
  const approvedRecord = await getApprovedTutorRecord(profile.email);
  if (!approvedRecord || approvedRecord.status !== "approved") {
    throw new Error("Tutor email is not approved.");
  }
  await db.collection("tutorProfiles").doc(uid).set({
    ...profile,
    uid,
    email: normalizeEmail(profile.email),
    visible: approvedRecord.visible === true,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  await loadCloudData();
}

async function saveBookingToCloud(booking) {
  if (!isCloudReady()) return booking;
  const payload = {
    ...booking,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  if (booking.id) {
    await db.collection("bookings").doc(booking.id).set(payload, { merge: true });
    return booking;
  }
  const docRef = await db.collection("bookings").add(payload);
  return { ...booking, id: docRef.id };
}

async function updateBookingInCloud(id, updates) {
  if (!isCloudReady() || !id) return;
  await db.collection("bookings").doc(id).set({
    ...updates,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
}

async function queueCloudEmail(to, subject, body, meta = {}) {
  if (!isCloudReady() || !to) return;
  await db.collection("emailQueue").add({
    to,
    subject,
    body,
    meta,
    status: "queued",
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function createId(prefix = "item") {
  if (window.crypto?.randomUUID) return window.crypto.randomUUID();
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function queueEmail(to, subject, body, meta = {}) {
  if (!to) return;
  const queue = readStore(storage.emails, []);
  const key = meta.key || createId("email");
  if (queue.some((email) => email.key === key)) return;

  queue.unshift({
    key,
    to,
    subject,
    body,
    status: "queued",
    time: nowLabel(),
    meta
  });
  writeStore(storage.emails, queue.slice(0, 40));
  queueCloudEmail(to, subject, body, meta).catch(() => {});
}

function accountKey() {
  return currentAccount?.email || "guest";
}

function isApprovedTutorAccount(account) {
  if (account?.role !== "tutor") return true;
  return account.approved === true || account.isApproved === true || account.status === "approved";
}

function tutorLevelLabel(tutor) {
  return tutor.level || tutor.qualificationLevel || "A-Level";
}

function tutorPhotoMarkup(tutor, className = "profile-photo") {
  const photo = tutor.photo || tutor.photoUrl || tutor.profilePhoto || "";
  if (photo) {
    return `<img class="${className}" src="${escapeHtml(photo)}" alt="${escapeHtml(tutor.name)} profile picture" />`;
  }
  return `<div class="${className}" aria-hidden="true">${escapeHtml(tutor.initials)}</div>`;
}

function updateProfilePhotoPreview(value, fallbackName = "") {
  if (!profilePhotoPreview) return;
  profilePhotoPreview.innerHTML = "";
  if (value) {
    const image = document.createElement("img");
    image.src = value;
    image.alt = "Profile picture preview";
    profilePhotoPreview.append(image);
    return;
  }
  profilePhotoPreview.textContent = initialsFromName(fallbackName || profileName.value || currentAccount?.name || "TS");
}

function resizeProfileImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("Could not read the image."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("Could not load the image."));
      image.onload = () => {
        const size = 420;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext("2d");
        const sourceSize = Math.min(image.width, image.height);
        const sx = (image.width - sourceSize) / 2;
        const sy = (image.height - sourceSize) / 2;
        context.drawImage(image, sx, sy, sourceSize, sourceSize, 0, 0, size, size);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function threadKey() {
  if (currentAccount?.role === "tutor") {
    const studentEmail = selectedStudentAccount?.email || "student-parent";
    return `${studentEmail}::${accountKey()}`;
  }

  return `${accountKey()}::${tutorId(selectedThreadTutor)}`;
}

function nowLabel() {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date());
}

function getTutorRating(tutor) {
  const ratings = readStore(storage.ratings, {});
  const tutorRatings = ratings[tutor.name] || [];
  if (!tutorRatings.length) return tutor.rating;
  const average = tutorRatings.reduce((total, item) => total + item.score, 0) / tutorRatings.length;
  return Number(((average + tutor.rating) / 2).toFixed(2));
}

function addActivity(text, type = "Update") {
  if (!currentAccount) return;
  const activity = readStore(storage.activity, {});
  const items = activity[accountKey()] || [];
  items.unshift({
    type,
    text,
    time: nowLabel()
  });
  activity[accountKey()] = items.slice(0, 8);
  writeStore(storage.activity, activity);
  renderActivity();
}

function renderActivity() {
  if (!currentAccount) {
    activityFeed.innerHTML = `<p class="empty-copy">Log in to see live account updates.</p>`;
    activityCount.textContent = "0 updates";
    return;
  }

  const activity = readStore(storage.activity, {});
  const items = activity[accountKey()] || [];
  activityCount.textContent = `${items.length} update${items.length === 1 ? "" : "s"}`;

  if (!items.length) {
    activityFeed.innerHTML = `<p class="empty-copy">Your bookings, messages, ratings, and profile edits will appear here.</p>`;
    return;
  }

  activityFeed.innerHTML = items.map((item) => `
    <article class="activity-item">
      <span>${escapeHtml(item.type)}</span>
      <strong>${escapeHtml(item.text)}</strong>
      <time>${escapeHtml(item.time)}</time>
    </article>
  `).join("");
}

function getProfile() {
  const profiles = readStore(storage.profiles, {});
  return profiles[accountKey()] || {};
}

function saveProfile(profile) {
  const profiles = readStore(storage.profiles, {});
  profiles[accountKey()] = profile;
  writeStore(storage.profiles, profiles);
  if (currentAccount?.role === "tutor") {
    saveTutorProfileToCloud({
      name: profile.name || currentAccount.name,
      email: currentAccount.email,
      subject: profile.subject || "Subject to be added",
      university: profile.university || "University to be added",
      grade: profile.grade || "A*",
      rating: 5,
      lessons: Number(profile.lessons || 0),
      price: Number(profile.price || 35),
      level: profile.level || "GCSE and A-Level",
      detail: profile.detail || "",
      style: profile.detail || "Supportive online lessons, exam practice, and confidence building",
      about: profile.about || "",
      sessions: profile.sessions || "",
      photo: profile.photo || "",
      badges: ["New tutor", "Free trial", "Verified"],
      initials: initialsFromName(profile.name || currentAccount.name),
      score: 87
    }, currentAccount.uid).catch(() => {});
  }
}

function getProfileForAccount(account) {
  const profiles = readStore(storage.profiles, {});
  return profiles[account?.email] || {};
}

function getStudentAccounts() {
  return getAccounts().filter((account) => account.role === "student" || account.role === "parent");
}

function getStudentsForTutor() {
  const bookings = getBookings();
  const bookedEmails = new Set(bookings.map((booking) => booking.studentEmail).filter(Boolean));
  const students = getStudentAccounts();
  const bookedStudents = students.filter((account) => bookedEmails.has(account.email));
  const otherStudents = students.filter((account) => !bookedEmails.has(account.email));
  return [...bookedStudents, ...otherStudents];
}

function studentSummary(account) {
  const profile = getProfileForAccount(account);
  return {
    name: profile.name || account?.name || "Student",
    subject: profile.subject || "GCSE or A-Level support",
    detail: profile.detail || "Learning goals and lesson notes will appear here once saved.",
    about: profile.about || "This student has not added extra profile notes yet.",
    role: account?.role || "student",
    email: account?.email || "",
    initials: initialsFromName(profile.name || account?.name || "Student")
  };
}

function initialsFromName(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "GT";
}

function getTutorProfiles() {
  const profiles = readStore(storage.profiles, {});
  const accountProfiles = getAccounts()
    .filter((account) => account.role === "tutor")
    .filter((account) => !isCloudReady() || account.email === currentAccount?.email)
    .map((account) => {
      const profile = profiles[account.email] || {};
      const subject = profile.subject || "Biology";
      return {
        name: profile.name || account.name,
        subject,
        university: profile.university || "tutrSTEM verified tutor",
        grade: profile.grade || "A*",
        rating: 5,
        lessons: profile.lessons || 0,
        price: Number(profile.price || 35),
        level: profile.level || "GCSE and A-Level",
        style: profile.detail || "Supportive online lessons, exam practice, and confidence building",
        badges: ["New tutor", "Free trial", "Verified"],
        initials: initialsFromName(profile.name || account.name),
        score: 87,
        email: account.email,
        visible: !isCloudReady() || account.email === currentAccount?.email,
        photo: profile.photo || "",
        about: profile.about || `Hi, I'm ${profile.name || account.name}. I help students feel calmer, clearer, and more prepared for exams.`,
        sessions: profile.sessions || "Lessons are adapted to each student, with a mix of topic repair, guided practice, and exam-style questions."
      };
    });
  const cloudProfiles = cloudTutorProfiles
    .filter((profile) => profile.visible === true || profile.email === currentAccount?.email)
    .map((profile) => ({
    name: profile.name || "Tutor",
    subject: profile.subject || "Subject to be added",
    university: profile.university || "University to be added",
    grade: profile.grade || "A*",
    rating: Number(profile.rating || 5),
    lessons: Number(profile.lessons || 0),
    price: Number(profile.price || 35),
    level: profile.level || "GCSE and A-Level",
    style: profile.detail || profile.style || "Supportive online lessons, exam practice, and confidence building",
    badges: profile.badges || ["New tutor", "Free trial", "Verified"],
    initials: profile.initials || initialsFromName(profile.name || "Tutor"),
    score: Number(profile.score || 87),
    email: profile.email,
    visible: profile.visible === true,
    photo: profile.photo || profile.photoUrl || profile.profilePhoto || "",
    about: profile.about || `Hi, I'm ${profile.name || "a tutor"}. I help students feel calmer, clearer, and more prepared for exams.`,
    sessions: profile.sessions || "Lessons are adapted to each student, with a mix of topic repair, guided practice, and exam-style questions."
  }));
  const seen = new Set();
  return [...accountProfiles, ...cloudProfiles].filter((profile) => {
    const key = profile.email || profile.name;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function getAllTutors() {
  if (isCloudReady()) return getTutorProfiles();
  return [...tutors, ...getTutorProfiles()];
}

function getCurrentTutorProfile() {
  return getAllTutors().find((tutor) => tutor.email === currentAccount?.email);
}

function tutorId(tutor) {
  return tutor.email || tutor.name;
}

function gradeRank(grade) {
  return grade === "A*" ? 2 : 1;
}

function getFilteredTutors() {
  const tutorName = nameFilter.value.trim().toLowerCase();
  const subject = subjectFilter.value;
  const university = uniFilter.value.trim().toLowerCase();
  const minGrade = gradeFilter.value;

  const filtered = getAllTutors().filter((tutor) => {
    const nameMatch = !tutorName || tutor.name.toLowerCase().includes(tutorName);
    const subjectMatch = subject === "All" || tutor.subject === subject;
    const uniMatch = !university || tutor.university.toLowerCase().includes(university);
    const gradeMatch = minGrade === "Any" || gradeRank(tutor.grade) >= gradeRank(minGrade);
    const trialMatch = !trialOnly.checked || tutor.badges.includes("Free trial");
    return nameMatch && subjectMatch && uniMatch && gradeMatch && trialMatch;
  });

  return filtered.sort((a, b) => {
    if (sortFilter.value === "grade") return gradeRank(b.grade) - gradeRank(a.grade) || b.rating - a.rating;
    if (sortFilter.value === "rating") return b.rating - a.rating;
    return b.score - a.score;
  });
}

function renderTutors() {
  const visibleTutors = getFilteredTutors();
  matchCount.textContent = `${visibleTutors.length} tutor${visibleTutors.length === 1 ? "" : "s"} match`;

  if (!visibleTutors.length) {
    tutorGrid.innerHTML = `<div class="empty-state"><h3>No tutors found</h3><p>Try widening the subject, university, or grade filters.</p></div>`;
    return;
  }

  tutorGrid.innerHTML = visibleTutors.map((tutor, index) => `
    <article class="tutor-card">
      <div class="tutor-head">
        ${tutorPhotoMarkup(tutor, "avatar")}
        <div>
          <h3>${escapeHtml(tutor.name)}</h3>
          <p>${escapeHtml(tutor.subject)} · ${escapeHtml(tutor.university)}</p>
        </div>
        <span class="rating">${getTutorRating(tutor).toFixed(2)}</span>
      </div>
      <p>${escapeHtml(tutor.style)}</p>
      <div class="chips">
        <span class="chip">${escapeHtml(tutorLevelLabel(tutor))} tutoring</span>
        <span class="chip">Top exam grade: ${tutor.grade}</span>
        <span class="chip">${tutor.lessons} lessons</span>
        ${tutor.badges.map((badge) => `<span class="chip">${escapeHtml(badge)}</span>`).join("")}
      </div>
      <div class="card-footer">
        <div class="lesson-note">
          <strong>Free trial available</strong>
          <span>30-minute fit check</span>
        </div>
        <div class="card-actions">
          <button class="secondary-btn" type="button" data-profile="${index}">View profile</button>
          <button class="secondary-btn" type="button" data-message="${index}">Message</button>
          <button class="primary-btn" type="button" data-book="${index}">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
            Book
          </button>
        </div>
      </div>
    </article>
  `).join("");

  tutorGrid.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTutor = visibleTutors[Number(button.dataset.book)];
      if (!canBook()) return;
      showPage("bookings");
    });
  });

  tutorGrid.querySelectorAll("[data-profile]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTutor = visibleTutors[Number(button.dataset.profile)];
      renderPublicProfile();
      showPage("profile");
    });
  });

  tutorGrid.querySelectorAll("[data-message]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTutor = visibleTutors[Number(button.dataset.message)];
      if (!currentAccount) {
        promptForAccount("Please log in or create an account before messaging a tutor.");
        return;
      }
      selectedThreadTutor = selectedTutor;
      addActivity(`Opened chat with ${selectedTutor.name}`, "Chat");
      renderMessagesPage();
      showPage("messages");
    });
  });
}

function defaultMessagesFor(role) {
  if (role === "tutor") {
    const student = selectedStudentAccount ? studentSummary(selectedStudentAccount).name : "there";
    return [
      ["incoming", `Hi, I'm ${student}. Could we arrange a lesson?`],
      ["outgoing", "Yes, send me the topic and a few times that work."]
    ];
  }

  return [
    ["incoming", `Hi, I'm ${selectedThreadTutor.name}. Send me what you want to work on and we can plan the first session.`],
    ["outgoing", "Hi, I'd like help building confidence before mocks."]
  ];
}

function getMessages() {
  const allMessages = readStore(storage.messages, {});
  const key = threadKey();
  if (!allMessages[key]) {
    allMessages[key] = defaultMessagesFor(currentAccount?.role || "student").map(([direction, text]) => ({
      direction,
      text,
      time: nowLabel()
    }));
    writeStore(storage.messages, allMessages);
  }
  return allMessages[key];
}

function saveMessage(message) {
  const allMessages = readStore(storage.messages, {});
  const key = threadKey();
  const messages = allMessages[key] || [];
  messages.push(message);
  allMessages[key] = messages;
  writeStore(storage.messages, allMessages);
  saveMessageToCloud(key, message).catch(() => {});
}

async function saveMessageToCloud(key, message) {
  if (!isCloudReady() || !currentAccount) return;
  const participantEmails = currentAccount.role === "tutor"
    ? [currentAccount.email, selectedStudentAccount?.email].filter(Boolean)
    : [currentAccount.email, tutorEmail(selectedThreadTutor)].filter(Boolean);
  await db.collection("messages").add({
    threadKey: key,
    participantEmails,
    senderEmail: currentAccount.email,
    senderRole: currentAccount.role,
    body: message.text,
    direction: message.direction,
    timeLabel: message.time,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  });
}

function renderChat(role) {
  const chatPartner = role === "tutor" ? (selectedStudentAccount ? studentSummary(selectedStudentAccount).name : "student and parent") : selectedThreadTutor.name;
  document.querySelector("#chatTitle").textContent = role === "tutor" ? "Student and parent chat" : "Tutor chat";
  document.querySelector("#chatWith").textContent = chatPartner;
  chatInput.placeholder = `Message ${chatPartner}...`;
  chatMessages.innerHTML = getMessages().map((message) => `
    <p class="bubble ${message.direction}">
      ${escapeHtml(message.text)}
      <time>${escapeHtml(message.time)}</time>
    </p>
  `).join("");
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function renderMessagesPage() {
  if (!currentAccount) {
    promptForAccount("Log in first, then your private messages will open.");
    return;
  }

  if (currentAccount.role === "tutor") {
    const students = getStudentsForTutor();
    if (!selectedStudentAccount || !students.some((student) => student.email === selectedStudentAccount.email)) {
      selectedStudentAccount = students[0] || null;
    }

    if (!students.length) {
      threadList.innerHTML = `<p class="empty-copy">Student and parent threads appear after accounts are created or lessons are booked.</p>`;
      messagePageTitle.textContent = "Student and parent chat";
      messagePageWith.textContent = "No student selected";
      messagePageMessages.innerHTML = `<p class="empty-copy">No private thread yet.</p>`;
      viewMessageProfile.hidden = true;
      return;
    }

    threadList.innerHTML = students.map((student) => {
      const summary = studentSummary(student);
      return `
        <button class="thread-button ${student.email === selectedStudentAccount.email ? "active" : ""}" type="button" data-student-thread="${escapeHtml(student.email)}">
          <span class="avatar small-avatar">${escapeHtml(summary.initials)}</span>
          <span><strong>${escapeHtml(summary.name)}</strong><small>${escapeHtml(summary.subject)}</small></span>
        </button>
      `;
    }).join("");

    threadList.querySelectorAll("[data-student-thread]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedStudentAccount = students.find((student) => student.email === button.dataset.studentThread) || students[0];
        renderMessagesPage();
      });
    });

    const summary = studentSummary(selectedStudentAccount);
    messagePageTitle.textContent = "Student and parent chat";
    messagePageWith.textContent = summary.name;
    viewMessageProfile.hidden = false;
    viewMessageProfile.textContent = "View student profile";
    viewMessageProfile.onclick = () => showPage("student-profile");
  } else {
    const availableTutors = getAllTutors();
    if (!selectedThreadTutor) selectedThreadTutor = availableTutors[0];
    threadList.innerHTML = availableTutors.map((tutor) => `
      <button class="thread-button ${tutorId(tutor) === tutorId(selectedThreadTutor) ? "active" : ""}" type="button" data-thread="${escapeHtml(tutorId(tutor))}">
        <span class="avatar small-avatar">${escapeHtml(tutor.initials)}</span>
        <span><strong>${escapeHtml(tutor.name)}</strong><small>${escapeHtml(tutor.subject)}</small></span>
      </button>
    `).join("");

    threadList.querySelectorAll("[data-thread]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedThreadTutor = availableTutors.find((tutor) => tutorId(tutor) === button.dataset.thread) || availableTutors[0];
        selectedTutor = selectedThreadTutor;
        renderMessagesPage();
      });
    });

    messagePageTitle.textContent = "Tutor chat";
    messagePageWith.textContent = selectedThreadTutor.name;
    viewMessageProfile.hidden = false;
    viewMessageProfile.textContent = "View tutor profile";
    viewMessageProfile.onclick = () => {
      selectedTutor = selectedThreadTutor;
      showPage("profile");
    };
  }

  messagePageInput.placeholder = `Message ${messagePageWith.textContent}...`;
  messagePageMessages.innerHTML = getMessages().map((message) => `
    <p class="bubble ${message.direction}">
      ${escapeHtml(message.text)}
      <time>${escapeHtml(message.time)}</time>
    </p>
  `).join("");
  messagePageMessages.scrollTop = messagePageMessages.scrollHeight;
}

function renderProfile(role) {
  if (!currentAccount) return;

  const profile = getProfile();
  profileName.value = profile.name || currentAccount.name;
  profileSubject.value = profile.subject || (role === "tutor" ? "Biology" : "GCSE or A-Level Biology");
  profileDetail.value = profile.detail || (role === "tutor" ? "Exam technique and calm weekly structure" : "Mocks, confidence, and exam technique");
  profileUniversity.value = profile.university || "";
  if (profileLevel) profileLevel.value = profile.level || "GCSE and A-Level";
  pendingProfilePhoto = profile.photo || "";
  updateProfilePhotoPreview(pendingProfilePhoto, profile.name || currentAccount.name);
  profileAbout.value = profile.about || "";
  profileSessions.value = profile.sessions || "";
  profileBadge.textContent = profile.updated ? "Saved" : "Draft";
  profileSubjectLabel.textContent = role === "tutor" ? "Subjects you teach" : "Subjects you want help with";
  profileDetailLabel.textContent = role === "tutor" ? "Teaching style" : "Learning goal";
}

function renderRatings(role) {
  if (!currentAccount) return;

  if (role === "tutor") {
    ratingsPanel.hidden = false;
    const ratings = readStore(storage.ratings, {});
    const ownRatings = ratings[currentAccount.name] || [];
    const ratingText = ownRatings.length
      ? `${ownRatings.length} student review${ownRatings.length === 1 ? "" : "s"} on your profile.`
      : "Student and parent reviews will appear here after lessons.";
    ratingsPanel.innerHTML = `
      <div>
        <strong>Tutor ratings</strong>
        <span>${escapeHtml(ratingText)}</span>
      </div>
      <button class="secondary-btn" type="button" id="ratingAction">View public profile</button>
    `;
    document.querySelector("#ratingAction").addEventListener("click", () => {
      selectedTutor = getCurrentTutorProfile() || selectedTutor;
      addActivity("Opened public tutor profile", "Profile");
      renderPublicProfile();
      showPage("profile");
    });
    return;
  }

  ratingsPanel.hidden = true;
  ratingsPanel.innerHTML = "";
}

function saveRating() {
  const form = document.querySelector("#ratingForm");
  const score = Number(new FormData(form).get("ratingScore"));
  const note = document.querySelector("#ratingNote").value.trim();
  const ratings = readStore(storage.ratings, {});
  const tutorRatings = ratings[selectedTutor.name] || [];
  tutorRatings.push({
    score,
    note,
    by: currentAccount.name,
    time: nowLabel()
  });
  ratings[selectedTutor.name] = tutorRatings;
  writeStore(storage.ratings, ratings);
  ratingsPanel.classList.add("highlight");
  addActivity(`Rated ${selectedTutor.name} ${score}/5`, "Rating");
  renderRatings(currentAccount.role);
  renderTutors();
}

function getReviewsFor(tutor) {
  const ratings = readStore(storage.ratings, {});
  const saved = ratings[tutor.name] || [];
  const fallback = [
    {
      score: Math.round(tutor.rating),
      note: `${tutor.name} explains difficult ideas clearly and keeps lessons calm.`,
      by: "tutrSTEM parent",
      time: "Recent"
    }
  ];
  return saved.length ? saved : fallback;
}

function renderPublicProfile() {
  const reviews = getReviewsFor(selectedTutor);
  const isOwnTutorProfile = currentAccount?.role === "tutor" && selectedTutor.email === currentAccount.email;
  publicProfile.innerHTML = `
    <div class="profile-hero-card">
      ${tutorPhotoMarkup(selectedTutor, "profile-photo")}
      <div>
        <p class="eyebrow">Tutor profile</p>
        <h2>${escapeHtml(selectedTutor.name)}</h2>
        <p class="profile-rate">${escapeHtml(selectedTutor.subject)} support</p>
        <p>${escapeHtml(selectedTutor.subject)} · ${escapeHtml(selectedTutor.university)}</p>
        <div class="chips">
          <span class="chip">${escapeHtml(tutorLevelLabel(selectedTutor))} tutoring</span>
          ${selectedTutor.badges.map((badge) => `<span class="chip">${escapeHtml(badge)}</span>`).join("")}
        </div>
      </div>
      <aside class="profile-actions">
        <strong>${getTutorRating(selectedTutor).toFixed(2)} / 5</strong>
        <span>${reviews.length} review${reviews.length === 1 ? "" : "s"}</span>
        ${isOwnTutorProfile
          ? `<button class="primary-btn wide" type="button" id="profileEdit">Edit profile</button>`
          : `<button class="primary-btn wide" type="button" id="profileBook">Book lessons</button>
             <button class="secondary-btn wide" type="button" id="profileMessage">Message tutor</button>`}
        <button class="secondary-btn wide" type="button" id="profileReviews">Read reviews</button>
      </aside>
    </div>
    <div class="profile-copy-grid">
      <section>
        <h3>About me</h3>
        <p>${escapeHtml(selectedTutor.about || `Hi, I'm ${selectedTutor.name}. I support students with ${selectedTutor.subject}, confidence, exam preparation, and clearer study routines.`)}</p>
      </section>
      <section>
        <h3>About my sessions</h3>
        <p>${escapeHtml(selectedTutor.sessions || selectedTutor.style)}</p>
      </section>
    </div>
  `;

  document.querySelector("#profileEdit")?.addEventListener("click", () => showPage("dashboard"));
  document.querySelector("#profileBook")?.addEventListener("click", () => {
    if (!canBook()) return;
    showPage("bookings");
  });
  document.querySelector("#profileMessage")?.addEventListener("click", () => {
    if (!currentAccount) {
      promptForAccount("Log in first, then you can message this tutor.");
      return;
    }
    selectedThreadTutor = selectedTutor;
    renderMessagesPage();
    showPage("messages");
  });
  document.querySelector("#profileReviews").addEventListener("click", () => {
    renderReviewsPage();
    showPage("reviews");
  });
}

function renderStudentProfile() {
  if (!selectedStudentAccount && currentAccount?.role !== "tutor") {
    selectedStudentAccount = currentAccount;
  }

  if (!selectedStudentAccount) {
    studentProfile.innerHTML = `<p class="empty-copy">No student profile selected.</p>`;
    return;
  }

  const summary = studentSummary(selectedStudentAccount);
  studentProfile.innerHTML = `
    <div class="profile-hero-card student-profile-card">
      <div class="profile-photo">${escapeHtml(summary.initials)}</div>
      <div>
        <p class="eyebrow">${escapeHtml(summary.role)} profile</p>
        <h2>${escapeHtml(summary.name)}</h2>
        <p class="profile-rate">${escapeHtml(summary.subject)}</p>
        <p>${escapeHtml(summary.detail)}</p>
        <div class="chips">
          <span class="chip">${escapeHtml(summary.role)}</span>
          <span class="chip">${escapeHtml(summary.email)}</span>
        </div>
      </div>
      <aside class="profile-actions">
        <strong>Profile</strong>
        <span>Visible to matched tutors</span>
        <button class="primary-btn wide" type="button" id="studentProfileMessage">Open messages</button>
        <button class="secondary-btn wide" type="button" id="studentProfileBookings">View bookings</button>
      </aside>
    </div>
    <div class="profile-copy-grid">
      <section>
        <h3>Learning goals</h3>
        <p>${escapeHtml(summary.detail)}</p>
      </section>
      <section>
        <h3>Notes</h3>
        <p>${escapeHtml(summary.about)}</p>
      </section>
    </div>
  `;

  document.querySelector("#studentProfileMessage").addEventListener("click", () => showPage("messages"));
  document.querySelector("#studentProfileBookings").addEventListener("click", () => showPage("bookings"));
}

function renderReviewsPage() {
  const reviews = getReviewsFor(selectedTutor);
  reviewsTitle.textContent = `${selectedTutor.name} reviews`;
  reviewsSummary.textContent = `${getTutorRating(selectedTutor).toFixed(2)} average from ${reviews.length} review${reviews.length === 1 ? "" : "s"}.`;
  reviewList.innerHTML = reviews.map((review) => `
    <article class="review-card">
      <strong>${"★".repeat(review.score)}${"☆".repeat(5 - review.score)}</strong>
      <p>${escapeHtml(review.note || "Helpful, clear, and supportive.")}</p>
      <span>${escapeHtml(review.by)} · ${escapeHtml(review.time)}</span>
    </article>
  `).join("");
}

function getBookings() {
  if (cloudBookings.length && currentAccount?.email) {
    return cloudBookings.filter((booking) => (
      currentAccount.role === "tutor"
        ? booking.tutorEmail === currentAccount.email
        : booking.studentEmail === currentAccount.email
    ));
  }
  const bookings = readStore(storage.bookings, {});
  const items = bookings[accountKey()] || [];
  if (items.some((booking) => !booking.id)) {
    bookings[accountKey()] = items.map((booking) => ({
      id: booking.id || createId("booking"),
      status: booking.status || "Confirmed",
      ...booking
    }));
    writeStore(storage.bookings, bookings);
  }
  return bookings[accountKey()] || [];
}

function saveBookings(items) {
  const bookings = readStore(storage.bookings, {});
  bookings[accountKey()] = items;
  writeStore(storage.bookings, bookings);
  cloudBookings = [
    ...cloudBookings.filter((booking) => !items.some((item) => item.id === booking.id)),
    ...items
  ];
}

function tutorEmail(tutor) {
  return tutor.email || `${tutor.name.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/(^\.|\.$)/g, "")}@tutrstem.co.uk`;
}

function formatBookingDate(value) {
  if (!value) return "Time to confirm";
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

function bookingStatusClass(status = "Pending tutor approval") {
  return status.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function updateBookingEverywhere(id, updates) {
  const allBookings = readStore(storage.bookings, {});
  Object.keys(allBookings).forEach((key) => {
    allBookings[key] = allBookings[key].map((booking) => booking.id === id ? {
      ...booking,
      ...updates,
      updated: nowLabel()
    } : booking);
  });
  writeStore(storage.bookings, allBookings);
  cloudBookings = cloudBookings.map((booking) => booking.id === id ? { ...booking, ...updates, updated: nowLabel() } : booking);
  updateBookingInCloud(id, updates).catch(() => {});
}

function bookingActions(booking) {
  const id = escapeHtml(booking.id);

  if (currentAccount?.role === "tutor") {
    return `
      <button class="secondary-btn compact-btn" type="button" data-booking-action="Accepted" data-booking-id="${id}">Accept</button>
      <button class="secondary-btn compact-btn" type="button" data-booking-action="Rejected" data-booking-id="${id}">Reject</button>
      <button class="secondary-btn compact-btn" type="button" data-booking-action="Reschedule requested by tutor" data-booking-id="${id}">Suggest time</button>
      ${booking.studentEmail ? `<button class="secondary-btn compact-btn" type="button" data-view-student="${escapeHtml(booking.studentEmail)}">Student</button>` : ""}
    `;
  }

  return `
    <button class="secondary-btn compact-btn" type="button" data-booking-action="Accepted" data-booking-id="${id}">Accept time</button>
    <button class="secondary-btn compact-btn" type="button" data-booking-action="Rejected" data-booking-id="${id}">Reject time</button>
    <button class="secondary-btn compact-btn" type="button" data-booking-action="Reschedule requested by student" data-booking-id="${id}">Reschedule</button>
  `;
}

function checkLessonReminders() {
  const allBookings = readStore(storage.bookings, {});
  const now = Date.now();
  Object.values(allBookings).flat().forEach((booking) => {
    if (!booking.dateTime || booking.status === "Rejected") return;
    const start = new Date(booking.dateTime).getTime();
    const minsUntil = (start - now) / 60000;
    if (minsUntil > 0 && minsUntil <= 10) {
      queueEmail(booking.tutorEmail, `Lesson starts in 10 minutes`, `${booking.type} with ${booking.student || "your student"} starts at ${formatBookingDate(booking.dateTime)}.`, {
        key: `reminder-${booking.id}`,
        bookingId: booking.id
      });
    }
  });
}

function renderBookingList(container, items, emptyText) {
  if (!items.length) {
    container.innerHTML = `<p class="empty-copy">${emptyText}</p>`;
    return;
  }

  container.innerHTML = items.map((booking) => {
    const participant = currentAccount?.role === "tutor" && booking.student ? booking.student : booking.tutor;
    return `
      <article class="booking-row">
        <div class="avatar small-avatar">${escapeHtml(booking.initials)}</div>
        <div>
          <strong>${escapeHtml(formatBookingDate(booking.dateTime))}</strong>
          <span>${escapeHtml(booking.type)} with ${escapeHtml(participant)} · ${escapeHtml(booking.subject)}</span>
          <small class="booking-status ${bookingStatusClass(booking.status)}">${escapeHtml(booking.status || "Pending tutor approval")}</small>
        </div>
        <div class="booking-actions">${bookingActions(booking)}</div>
      </article>
    `;
  }).join("");

  container.querySelectorAll("[data-view-student]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedStudentAccount = getStudentAccounts().find((account) => account.email === button.dataset.viewStudent) || selectedStudentAccount;
      showPage("student-profile");
    });
  });

  container.querySelectorAll("[data-booking-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.dataset.bookingAction;
      const booking = getBookings().find((item) => item.id === button.dataset.bookingId);
      updateBookingEverywhere(button.dataset.bookingId, { status });
      if (booking) {
        const recipient = currentAccount.role === "tutor" ? booking.studentEmail : booking.tutorEmail;
        queueEmail(recipient, `Booking ${status.toLowerCase()}`, `${currentAccount.name} marked ${booking.type} on ${formatBookingDate(booking.dateTime)} as: ${status}.`, {
          key: `booking-${button.dataset.bookingId}-${status}`,
          bookingId: button.dataset.bookingId
        });
      }
      addActivity(`Booking marked: ${status}`, "Booking");
      renderBookingsPage();
      renderDashboard(currentAccount.role);
    });
  });
}

function renderBookingsPage() {
  if (!currentAccount) {
    promptForAccount("Log in first, then bookings will open.");
    return;
  }

  if (currentAccount.role === "tutor") {
    bookingPersonLabel.textContent = "Student";
    bookingSubmitButton.textContent = "Manage requests";
    bookingTutor.innerHTML = "";
    bookingPageForm.hidden = true;
    bookingPageForm.querySelectorAll("input, select, button").forEach((control) => {
      control.disabled = true;
    });
  } else {
    const availableTutors = getAllTutors();
    bookingPersonLabel.textContent = "Tutor";
    bookingSubmitButton.textContent = "Book lesson";
    bookingTutor.innerHTML = availableTutors.map((tutor) => `
      <option value="${escapeHtml(tutorId(tutor))}" ${tutorId(tutor) === tutorId(selectedTutor) ? "selected" : ""}>${escapeHtml(tutor.name)} · ${escapeHtml(tutor.subject)}</option>
    `).join("");
    bookingPageForm.hidden = false;
    bookingPageForm.querySelectorAll("input, select, button").forEach((control) => {
      control.disabled = false;
    });
  }
  bookingsPageTitle.textContent = currentAccount.role === "tutor" ? "Lesson requests" : "Bookings";
  bookingsPageCopy.textContent = currentAccount.role === "tutor"
    ? "Accept, reject, or request a new time for student and parent booking requests."
    : "Request a lesson time, then accept, reject, or reschedule if the tutor suggests a change.";

  const bookings = getBookings();
  const now = Date.now();
  const upcoming = bookings.filter((booking) => !booking.dateTime || new Date(booking.dateTime).getTime() >= now);
  const previous = bookings.filter((booking) => booking.dateTime && new Date(booking.dateTime).getTime() < now);
  upcomingCount.textContent = upcoming.length;
  previousCount.textContent = previous.length;
  renderBookingList(upcomingBookings, upcoming, "No upcoming lessons yet.");
  renderBookingList(previousBookings, previous, "Previous lessons will appear here.");
}

function renderDashboard(role) {
  const dashboard = roleDashboards[role];
  const bookings = currentAccount ? getBookings() : [];
  const nextBookings = bookings
    .filter((booking) => !booking.dateTime || new Date(booking.dateTime).getTime() >= Date.now())
    .slice(0, 3);
  const recentMessages = currentAccount ? getMessages().slice(-2).reverse() : [];
  ratingsPanel.classList.remove("highlight");
  dashboardTitle.textContent = roleContent[role].dash;
  dashboardSubtitle.textContent = currentAccount
    ? `${currentAccount.name}, this is your ${role} dashboard.`
    : "Log in or create an account to see the right tools here.";
  document.querySelector("#dashMode").textContent = dashboard.mode;
  roleTools.innerHTML = dashboard.tools.map(([title, text]) => `
    <article>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(text)}</span>
    </article>
  `).join("");
  const liveLessons = nextBookings.length
    ? nextBookings.map((booking) => [
        formatBookingDate(booking.dateTime),
        booking.type,
        `${booking.tutor} · ${booking.subject}`
      ])
    : dashboard.lessons;
  lessonList.innerHTML = `
    <div class="feed-heading">
      <strong>${nextBookings.length ? "Upcoming from your bookings" : "Suggested next steps"}</strong>
      <button class="text-link" type="button" id="openBookingsFromDash">View bookings</button>
    </div>
    ${liveLessons.map(([time, title, text]) => `
      <article>
        <time>${escapeHtml(time)}</time>
        <div>
          <strong>${escapeHtml(title)}</strong>
          <span>${escapeHtml(text)}</span>
        </div>
        <button class="icon-btn" type="button" title="Open lesson" aria-label="Open lesson"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
      </article>
    `).join("")}
    ${recentMessages.length ? `
      <div class="feed-heading">
        <strong>Latest messages</strong>
        <button class="text-link" type="button" id="openMessagesFromDash">View messages</button>
      </div>
      ${recentMessages.map((message) => `
        <article>
          <time>${escapeHtml(message.time)}</time>
          <div>
            <strong>${message.direction === "incoming" ? "Reply received" : "Message sent"}</strong>
            <span>${escapeHtml(message.text)}</span>
          </div>
          <button class="icon-btn" type="button" title="Open messages" aria-label="Open messages"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
        </article>
      `).join("")}
    ` : ""}
  `;
  document.querySelector("#openBookingsFromDash")?.addEventListener("click", () => showPage("bookings"));
  document.querySelector("#openMessagesFromDash")?.addEventListener("click", () => showPage("messages"));
  renderProfile(role);
  renderActivity();
  renderChat(role);
  renderRatings(role);
}

function openBooking() {
  if (!canBook()) return;
  bookingTitle.textContent = `Book ${selectedTutor.name}`;
  dialog.showModal();
}

function updateDueToday() {
  return;
}

function setRole(role) {
  document.querySelector("#accountTitle").textContent = currentAccount ? roleContent[role].title : "Welcome back";
  document.querySelector("#accountText").textContent = currentAccount
    ? roleContent[role].text
    : "Log in as a student or approved tutor. Students can create an account here when they are ready to book.";
  document.querySelector("#dashRole").textContent = currentAccount ? roleContent[role].dash : `${roleContent[role].dash} preview`;
  renderDashboard(role);
}

function populateAccountDetails() {
  if (!currentAccount) return;
  accountName.value = currentAccount.name || "";
  accountEmail.value = currentAccount.email || "";
  accountDob.value = currentAccount.dob || "";
  accountParentName.value = currentAccount.parentName || "";
  accountParentEmail.value = currentAccount.parentEmail || "";
}

function updateAccess() {
  const role = currentAccount?.role || signupRole.value;
  document.body.dataset.role = currentAccount ? role : "guest";
  document.querySelectorAll("[data-auth-only]").forEach((item) => {
    item.hidden = !currentAccount;
  });
  document.querySelectorAll("[data-guest-only]").forEach((item) => {
    item.hidden = Boolean(currentAccount);
  });
  document.querySelectorAll("[data-public-only]").forEach((item) => {
    item.hidden = Boolean(currentAccount);
  });
  document.querySelectorAll("[data-student-parent-nav]").forEach((item) => {
    item.hidden = !currentAccount || role === "tutor";
  });
  document.querySelectorAll("[data-hide-tutor-nav]").forEach((item) => {
    item.hidden = currentAccount?.role === "tutor";
  });
  document.querySelectorAll("[data-tutor-nav]").forEach((item) => {
    item.hidden = role !== "tutor" || !currentAccount;
  });
  userMenu.hidden = !currentAccount;
  if (currentAccount) {
    userMenuName.textContent = currentAccount.name;
    userMenuInitials.textContent = initialsFromName(currentAccount.name);
    populateAccountDetails();
  } else {
    userDropdown.hidden = true;
    userMenuButton?.setAttribute("aria-expanded", "false");
  }
  quickBook.innerHTML = role === "tutor"
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> Manage requests`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> Book lessons`;
  messagesButton.textContent = role === "tutor" ? "View messages" : "Open messages";
  [quickBook, messagesButton].forEach((button) => {
    button.classList.toggle("locked-action", !currentAccount);
  });
}

function setAccount(account, options = {}) {
  currentAccount = account;
  localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(account));
  saveAccountToCloud(account, account.uid).catch(() => {});
  signupRole.value = account.role;
  signupName.value = account.name;
  signupEmail.value = account.email;
  loginEmail.value = account.email;
  populateAccountDetails();
  signupStatus.textContent = `${account.name}, you are logged in successfully as a ${account.role}.`;
  signupStatus.classList.add("success");
  setRole(account.role);
  updateAccess();

  if (options.confirm) {
    showConfirmation(`${account.name}, you are logged in successfully as a ${account.role}.`);
    addActivity(`Logged in as ${account.role}`, "Account");
  } else if (!pendingConfirmation) {
    loginConfirmation.hidden = true;
  }

  if (options.redirect) {
    showPage("dashboard");
  }
}

function promptForAccount(message = "Please log in or create an account first.") {
  signupStatus.textContent = message;
  signupStatus.classList.remove("success");
  showPage("accounts");
  loginEmail.focus();
}

function canBook() {
  if (!currentAccount) {
    promptForAccount("Please log in or create a student or parent account before booking.");
    return false;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Tutor accounts manage profiles, availability, chat, and ratings. Students and parents book lessons.";
    signupStatus.classList.remove("success");
    showPage("dashboard");
    return false;
  }

  return true;
}

function ageFromDob(value) {
  if (!value) return null;
  const dob = new Date(value);
  if (Number.isNaN(dob.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const beforeBirthday = today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate());
  if (beforeBirthday) age -= 1;
  return age;
}

function requestRating() {
  if (!currentAccount) {
    promptForAccount("Please log in as a student or parent before rating a tutor.");
    return;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Tutor accounts can view received ratings, but students and parents leave ratings.";
    signupStatus.classList.remove("success");
    showPage("dashboard");
    return;
  }

  renderRatings(currentAccount.role);
  showPage("dashboard");
}

function updateSignupMode() {
  const role = signupRole.value;
  const heading = signupForm.querySelector("h3");
  const button = signupForm.querySelector("button[type='submit']");
  heading.textContent = role === "parent" ? "Parent sign up" : "Student sign up";
  button.textContent = role === "parent" ? "Create parent account" : "Create student account";
  document.querySelectorAll(".parent-field").forEach((field) => {
    field.hidden = role === "parent";
  });
  signupDob.required = true;
}

document.querySelector("[data-search-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentAccount?.role === "tutor") {
    signupStatus.textContent = "Tutor accounts use the dashboard for availability, messages, and ratings.";
    signupStatus.classList.add("success");
    showPage("dashboard");
    return;
  }

  const subject = document.querySelector("#heroSubject").value.trim();
  const university = document.querySelector("#heroUniversity").value.trim();
  if (subject) {
    const option = [...subjectFilter.options].find((item) => item.text.toLowerCase() === subject.toLowerCase());
    subjectFilter.value = option ? option.value : "All";
  }
  uniFilter.value = university;
  renderTutors();
  showPage("tutors");
});

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.route);
  });
});

document.querySelectorAll(".text-link[data-route]").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.route);
  });
});

window.addEventListener("hashchange", () => {
  showPage(getRouteFromHash(), { keepScroll: true });
});

[nameFilter, subjectFilter, uniFilter, gradeFilter, sortFilter, trialOnly].forEach((control) => {
  control.addEventListener("input", renderTutors);
  control.addEventListener("change", renderTutors);
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  nameFilter.value = "";
  subjectFilter.value = "All";
  uniFilter.value = "";
  gradeFilter.value = "Any";
  sortFilter.value = "recommended";
  trialOnly.checked = true;
  renderTutors();
});

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then you can save a profile.");
    return;
  }

  const profile = {
    name: profileName.value.trim() || currentAccount.name,
    subject: profileSubject.value.trim(),
    detail: profileDetail.value.trim(),
    university: currentAccount.role === "tutor" ? profileUniversity.value.trim() || "Tutor-created profile" : profileUniversity.value.trim(),
    level: currentAccount.role === "tutor" ? profileLevel.value : "",
    photo: currentAccount.role === "tutor" ? pendingProfilePhoto : "",
    grade: currentAccount.role === "tutor" ? "A*" : "",
    about: currentAccount.role === "tutor"
      ? profileAbout.value.trim() || `Hi, I'm ${profileName.value.trim() || currentAccount.name}. I teach ${profileSubject.value.trim() || "GCSE and A-Level subjects"} and help students build confidence.`
      : profileAbout.value.trim(),
    sessions: currentAccount.role === "tutor"
      ? profileSessions.value.trim() || profileDetail.value.trim() || "My sessions are structured around the student's goals, confidence, and exam practice."
      : profileSessions.value.trim(),
    updated: true
  };

  saveProfile(profile);
  currentAccount.name = profile.name;
  localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(currentAccount));
  const accounts = getAccounts().map((account) => account.email === currentAccount.email ? currentAccount : account);
  saveAccounts(accounts);
  profileBadge.textContent = "Saved";
  dashboardSubtitle.textContent = `${currentAccount.name}, this is your ${currentAccount.role} dashboard.`;
  addActivity("Updated profile details", "Profile");
  renderTutors();
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then you can send messages.");
    return;
  }

  const text = chatInput.value.trim();
  if (!text) return;

  saveMessage({
    direction: "outgoing",
    text,
    time: nowLabel()
  });
  chatInput.value = "";
  addActivity(`Sent message to ${currentAccount.role === "tutor" ? "student and parent" : selectedTutor.name}`, "Chat");
  renderChat(currentAccount.role);
});

messagePageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then you can send messages.");
    return;
  }

  const text = messagePageInput.value.trim();
  if (!text) return;

  saveMessage({
    direction: "outgoing",
    text,
    time: nowLabel()
  });
  messagePageInput.value = "";
  addActivity(`Sent message to ${currentAccount.role === "tutor" ? "student and parent" : selectedThreadTutor.name}`, "Chat");
  renderMessagesPage();
});

bookingPageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then bookings will open.");
    return;
  }

  if (currentAccount.role === "tutor") {
    addActivity("Opened lesson requests", "Booking");
    renderBookingsPage();
    return;
  }

  if (!canBook()) return;

  const tutor = getAllTutors().find((item) => tutorId(item) === bookingTutor.value) || selectedTutor;
  selectedTutor = tutor;
  const items = getBookings();
  let booking = {
    id: createId("booking"),
    tutor: tutor.name,
    tutorEmail: tutorEmail(tutor),
    initials: tutor.initials,
    subject: tutor.subject,
    type: bookingLessonType.value,
    dateTime: bookingDateTime.value,
    status: "Pending tutor approval",
    student: currentAccount.name,
    studentEmail: currentAccount.email,
    created: nowLabel()
  };
  try {
    booking = await saveBookingToCloud(booking);
  } catch {
    booking.id = createId("booking");
    showConfirmation("Booking saved on this device, but Firebase did not accept it yet. Check Firestore is still in test mode.");
  }
  items.push(booking);
  saveBookings(items);

  if (tutor.email) {
    const allBookings = readStore(storage.bookings, {});
    const tutorItems = allBookings[tutor.email] || [];
    tutorItems.push({
      ...booking,
      initials: initialsFromName(currentAccount.name)
    });
    allBookings[tutor.email] = tutorItems;
    writeStore(storage.bookings, allBookings);
  }

  bookingDateTime.value = "";
  queueEmail(booking.tutorEmail, "New lesson request", `${currentAccount.name} requested ${bookingLessonType.value} for ${formatBookingDate(booking.dateTime)}.`, {
    key: `new-booking-${booking.id}`,
    bookingId: booking.id
  });
  addActivity(`Requested ${bookingLessonType.value} with ${tutor.name}`, "Booking");
  checkLessonReminders();
  renderBookingsPage();
});

reviewPageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentAccount || currentAccount.role === "tutor") {
    promptForAccount("Log in as a student or parent before writing reviews.");
    return;
  }

  const ratings = readStore(storage.ratings, {});
  const tutorRatings = ratings[selectedTutor.name] || [];
  const review = {
    score: Number(reviewScore.value),
    note: reviewText.value.trim() || "Helpful, clear, and supportive.",
    by: currentAccount.name,
    byEmail: currentAccount.email,
    tutor: selectedTutor.name,
    tutorEmail: tutorEmail(selectedTutor),
    time: nowLabel()
  };
  tutorRatings.push(review);
  ratings[selectedTutor.name] = tutorRatings;
  writeStore(storage.ratings, ratings);
  if (isCloudReady()) {
    db.collection("reviews").add({
      ...review,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(() => {});
  }
  reviewText.value = "";
  queueEmail(tutorEmail(selectedTutor), "New tutor review", `${currentAccount.name} left you a ${reviewScore.value}/5 review: ${tutorRatings.at(-1).note}`, {
    key: `review-${selectedTutor.name}-${Date.now()}`
  });
  addActivity(`Reviewed ${selectedTutor.name}`, "Review");
  renderReviewsPage();
  renderTutors();
});

signupRole.addEventListener("change", () => {
  updateSignupMode();
  if (!currentAccount) {
    setRole(signupRole.value);
    updateAccess();
  }
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = normalizeEmail(signupEmail.value);
  const password = signupPassword.value;
  const confirmPassword = signupConfirmPassword.value;
  const accounts = getAccounts();
  const role = signupRole.value;
  const age = ageFromDob(signupDob.value);

  if (role === "student" && age !== null && age < 18 && (!signupParentName.value.trim() || !signupParentEmail.value.trim())) {
    signupStatus.textContent = "Parent or guardian details are required for students under 18.";
    signupStatus.classList.remove("success");
    signupParentName.focus();
    return;
  }

  if (password !== confirmPassword) {
    signupStatus.textContent = "Passwords do not match. Retype the same password to create the account.";
    signupStatus.classList.remove("success");
    signupConfirmPassword.focus();
    return;
  }

  if (accounts.some((account) => account.email === email)) {
    signupStatus.textContent = "An account already exists with that email. Use the login form instead.";
    signupStatus.classList.remove("success");
    loginEmail.value = email;
    return;
  }

  const account = {
    uid: "",
    role,
    name: signupName.value.trim(),
    email,
    dob: signupDob.value,
    parentName: role === "student" ? signupParentName.value.trim() : "",
    parentEmail: role === "student" ? normalizeEmail(signupParentEmail.value) : "",
    password
  };

  if (isCloudReady()) {
    try {
      signupForm.querySelector("button").disabled = true;
      let approvedRecord = null;
      if (role === "tutor") {
        signupStatus.textContent = "Checking tutor approval...";
        approvedRecord = await getApprovedTutorRecord(email);
        if (!approvedRecord || approvedRecord.status !== "approved") {
          signupStatus.textContent = "This tutor email has not been approved yet. Please apply first or ask the tutrSTEM team to approve the exact email.";
          signupStatus.classList.remove("success");
          signupForm.querySelector("button").disabled = false;
          return;
        }
      }
      signupStatus.textContent = "Creating your account...";
      const credentials = await auth.createUserWithEmailAndPassword(email, password);
      account.uid = credentials.user.uid;
      delete account.password;
      await credentials.user.updateProfile({ displayName: account.name });
      await saveAccountToCloud(account, credentials.user.uid);
      if (role === "tutor") {
        await createHiddenTutorProfile(account, approvedRecord);
        await loadCloudData();
      }
      accounts.push(account);
      saveAccounts(accounts);
      signupDob.value = "";
      signupParentName.value = "";
      signupParentEmail.value = "";
      signupPassword.value = "";
      signupConfirmPassword.value = "";
      setAccount(account, { confirm: true, redirect: true });
      signupForm.querySelector("button").disabled = false;
      return;
    } catch (error) {
      signupForm.querySelector("button").disabled = false;
      signupStatus.textContent = error.code === "auth/email-already-in-use"
        ? "An account already exists with that email. Use the login form instead."
        : "Firebase could not create the account yet. Check Authentication is enabled.";
      signupStatus.classList.remove("success");
      return;
    }
  }

  if (role === "tutor") {
    signupStatus.textContent = "Tutor approval needs Firebase. Please apply first, then create the tutor login after the tutrSTEM team approves the email.";
    signupStatus.classList.remove("success");
    return;
  }

  accounts.push(account);
  saveAccounts(accounts);
  signupDob.value = "";
  signupParentName.value = "";
  signupParentEmail.value = "";
  signupPassword.value = "";
  signupConfirmPassword.value = "";
  setAccount(account, { confirm: true, redirect: true });
});

profilePhoto?.addEventListener("change", async () => {
  const file = profilePhoto.files?.[0];
  if (!file) return;
  if (!file.type.startsWith("image/")) {
    signupStatus.textContent = "Please choose an image file for your tutor profile picture.";
    signupStatus.classList.remove("success");
    profilePhoto.value = "";
    return;
  }

  try {
    pendingProfilePhoto = await resizeProfileImage(file);
    updateProfilePhotoPreview(pendingProfilePhoto, profileName.value || currentAccount?.name);
    profileBadge.textContent = "Unsaved";
  } catch {
    signupStatus.textContent = "That profile picture could not be loaded. Try another image.";
    signupStatus.classList.remove("success");
  }
});

loginPanel.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = normalizeEmail(loginEmail.value);
  if (isCloudReady()) {
    try {
      signupStatus.textContent = "Logging in...";
      const credentials = await auth.signInWithEmailAndPassword(email, loginPassword.value);
      const cloudAccount = await getCloudAccount(credentials.user);
      if (!cloudAccount) {
        signupStatus.textContent = "Login worked, but the profile data is missing. Create the profile record again.";
        signupStatus.classList.remove("success");
        return;
      }
      if (cloudAccount.role === "tutor" && !(await isApprovedTutorEmail(email))) {
        await auth.signOut();
        signupStatus.textContent = "Tutor login is only available after the tutrSTEM team approves your email in Firestore.";
        signupStatus.classList.remove("success");
        loginPassword.focus();
        return;
      }
      currentAccount = cloudAccount;
      await loadCloudData();
      loginPassword.value = "";
      setAccount(cloudAccount, { confirm: true, redirect: true });
      return;
    } catch {
      signupStatus.textContent = "Login details do not match an account. Check the email and password, or create a new account.";
      signupStatus.classList.remove("success");
      loginPassword.focus();
      return;
    }
  }

  const account = getAccounts().find((item) => item.email === email && item.password === loginPassword.value);

  if (!account) {
    signupStatus.textContent = "Login details do not match an account. Check the email and password, or create a new account.";
    signupStatus.classList.remove("success");
    loginPassword.focus();
    return;
  }

  if (!isApprovedTutorAccount(account)) {
    signupStatus.textContent = "Tutor login is only available after the tutrSTEM team approves your tutor record. Please use Become a tutor first if you have not applied yet.";
    signupStatus.classList.remove("success");
    loginPassword.focus();
    return;
  }

  loginPassword.value = "";
  setAccount(account, { confirm: true, redirect: true });
});

accountDetailsForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount();
    return;
  }

  const updatedEmail = normalizeEmail(accountEmail.value);
  const accounts = getAccounts();
  const emailTaken = accounts.some((account) => account.email === updatedEmail && account.email !== currentAccount.email);
  if (emailTaken) {
    signupStatus.textContent = "Another account already uses that email address.";
    signupStatus.classList.remove("success");
    return;
  }

  const updated = {
    ...currentAccount,
    name: accountName.value.trim() || currentAccount.name,
    email: updatedEmail,
    dob: accountDob.value,
    parentName: accountParentName.value.trim(),
    parentEmail: normalizeEmail(accountParentEmail.value)
  };

  saveAccounts(accounts.map((account) => account.email === currentAccount.email ? updated : account));
  currentAccount = updated;
  localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(updated));
  saveAccountToCloud(updated, updated.uid).catch(() => {});
  signupStatus.textContent = "Account details saved.";
  signupStatus.classList.add("success");
  addActivity("Updated account details", "Account");
  updateAccess();
  renderDashboard(currentAccount.role);
});

passwordForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount();
    return;
  }

  if (isCloudReady() && auth?.currentUser?.email) {
    if (newPassword.value !== confirmNewPassword.value) {
      signupStatus.textContent = "New passwords do not match.";
      signupStatus.classList.remove("success");
      confirmNewPassword.focus();
      return;
    }

    try {
      const credential = firebase.auth.EmailAuthProvider.credential(auth.currentUser.email, oldPassword.value);
      await auth.currentUser.reauthenticateWithCredential(credential);
      await auth.currentUser.updatePassword(newPassword.value);
      oldPassword.value = "";
      newPassword.value = "";
      confirmNewPassword.value = "";
      signupStatus.textContent = "Password changed.";
      signupStatus.classList.add("success");
      addActivity("Changed password", "Account");
    } catch {
      signupStatus.textContent = "Password could not be changed. Check the old password and try again.";
      signupStatus.classList.remove("success");
      oldPassword.focus();
    }
    return;
  }

  if (oldPassword.value !== currentAccount.password) {
    signupStatus.textContent = "Old password does not match.";
    signupStatus.classList.remove("success");
    oldPassword.focus();
    return;
  }

  if (newPassword.value !== confirmNewPassword.value) {
    signupStatus.textContent = "New passwords do not match.";
    signupStatus.classList.remove("success");
    confirmNewPassword.focus();
    return;
  }

  const updated = { ...currentAccount, password: newPassword.value };
  saveAccounts(getAccounts().map((account) => account.email === currentAccount.email ? updated : account));
  currentAccount = updated;
  localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(updated));
  oldPassword.value = "";
  newPassword.value = "";
  confirmNewPassword.value = "";
  signupStatus.textContent = "Password changed.";
  signupStatus.classList.add("success");
  addActivity("Changed password", "Account");
});

quickBook.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Student and parent booking requests are open.";
    signupStatus.classList.add("success");
    showPage("bookings");
    return;
  }

  showPage("bookings");
});

messagesButton.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }
  signupStatus.textContent = currentAccount.role === "tutor"
    ? "Student and parent messages are ready."
    : "Private tutor messages are ready.";
  signupStatus.classList.add("success");
  showPage("messages");
});

topMessagesButton.addEventListener("click", () => {
  messagesButton.click();
});

userMenuButton.addEventListener("click", () => {
  const nextHidden = !userDropdown.hidden;
  userDropdown.hidden = nextHidden;
  userMenuButton.setAttribute("aria-expanded", String(!nextHidden));
});

userMenu.addEventListener("mouseenter", () => {
  if (!currentAccount) return;
  userDropdown.hidden = false;
  userMenuButton.setAttribute("aria-expanded", "true");
});

userMenu.addEventListener("mouseleave", () => {
  userDropdown.hidden = true;
  userMenuButton.setAttribute("aria-expanded", "false");
});

userDropdown.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => {
    userDropdown.hidden = true;
    userMenuButton.setAttribute("aria-expanded", "false");
    showPage(button.dataset.route);
  });
});

logoutButton.addEventListener("click", () => {
  currentAccount = null;
  localStorage.removeItem("girlstemTutoringCurrentAccount");
  auth?.signOut().catch(() => {});
  pendingConfirmation = "";
  loginConfirmation.hidden = true;
  updateAccess();
  setRole("student");
  showPage("accounts");
});

becomeTutorLink.addEventListener("click", (event) => {
  event.preventDefault();
  window.open(TUTOR_APPLICATION_URL, "_blank", "noopener");
});

lessonType.addEventListener("change", updateDueToday);

dialog.addEventListener("close", () => {
  if (!currentAccount || dialog.returnValue !== "confirm") return;
  addActivity(`Requested ${lessonType.value === "trial" ? "a free trial" : "a lesson"} with ${selectedTutor.name}`, "Booking");
  renderDashboard(currentAccount.role);
});

async function initializeSite() {
  if (isCloudReady()) {
    auth.onAuthStateChanged(async (user) => {
      try {
        if (user) {
          const cloudAccount = await getCloudAccount(user);
          if (cloudAccount) {
            if (cloudAccount.role === "tutor" && !(await isApprovedTutorEmail(cloudAccount.email))) {
              await auth.signOut();
              currentAccount = null;
              localStorage.removeItem("girlstemTutoringCurrentAccount");
            } else {
              currentAccount = cloudAccount;
              localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(cloudAccount));
            }
          }
        } else {
          currentAccount = null;
          localStorage.removeItem("girlstemTutoringCurrentAccount");
        }
        await loadCloudData();
      } catch {
        signupStatus.textContent = "Firebase is connected, but Firestore is not ready. Check test mode is on.";
        signupStatus.classList.remove("success");
      }
      updateSignupMode();
      setRole(currentAccount?.role || signupRole.value);
      updateAccess();
      renderTutors();
      showPage(getRouteFromHash() || "home", { instant: true });
      checkLessonReminders();
    });
  } else {
    const savedAccount = readStore("girlstemTutoringCurrentAccount", null);
    if (savedAccount?.email) currentAccount = savedAccount;
    updateSignupMode();
    setRole(currentAccount?.role || signupRole.value);
    updateAccess();
    renderTutors();
    showPage(getRouteFromHash() || "home", { instant: true });
    checkLessonReminders();
  }
  window.setInterval(checkLessonReminders, 60000);
}

initializeSite();

function finishLoading() {
  const loadingScreen = document.querySelector("#loadingScreen");
  window.setTimeout(() => {
    loadingScreen?.classList.add("is-hidden");
    document.body.classList.remove("is-loading");
    document.body.classList.add("site-ready");
    window.setTimeout(() => loadingScreen?.classList.add("is-gone"), 760);
  }, 950);
}

if (document.readyState === "complete") {
  finishLoading();
} else {
  window.addEventListener("load", finishLoading, { once: true });
  window.setTimeout(finishLoading, 3500);
}

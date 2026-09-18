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
    badges: ["AQA", "Medicine offer"],
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
    badges: ["Edexcel", "STEP prep"],
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
    badges: ["OCR A", "Oxbridge"],
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
    badges: ["AQA", "Essay structure"],
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
    badges: ["OCR", "Engineering"],
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
    badges: ["Edexcel", "Essay drills"],
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
    badges: ["Edexcel", "STEP prep"],
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
    badges: ["AQA", "NEA support"],
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
    badges: ["OCR", "Programming"],
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
    badges: ["SQA", "Exam recall"],
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
    badges: ["AQA", "OCR A"],
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
    badges: ["AQA", "Engineering"],
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
    badges: ["Edexcel", "AQA"],
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
    badges: ["AQA", "Essay plans"],
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
    badges: ["Edexcel", "AQA"],
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
    badges: ["OCR", "AQA"],
    initials: "CM",
    score: 82
  }
];

const SUBJECTS = [
  { id: "mathematics", canonicalName: "Mathematics", category: "Mathematics", aliases: ["Maths", "Math", "A Level Maths", "A-Level Maths", "AS Maths", "Core Maths (distinct qualification, do not merge)"] },
  { id: "further-mathematics", canonicalName: "Further Mathematics", category: "Mathematics", aliases: ["Further Maths", "FM", "F Maths", "A Level Further Maths", "AFM"] },
  { id: "statistics", canonicalName: "Statistics", category: "Mathematics", aliases: ["A Level Statistics", "Stats A Level"] },
  { id: "biology", canonicalName: "Biology", category: "Sciences", aliases: ["Bio", "A Level Biology"] },
  { id: "chemistry", canonicalName: "Chemistry", category: "Sciences", aliases: ["Chem", "A Level Chemistry"] },
  { id: "physics", canonicalName: "Physics", category: "Sciences", aliases: ["Phys", "A Level Physics"] },
  { id: "environmental-science", canonicalName: "Environmental Science", category: "Sciences", aliases: ["Env Sci", "Environmental Studies (verify not a different quals)"] },
  { id: "geology", canonicalName: "Geology", category: "Sciences", aliases: ["Geological Science"] },
  { id: "computer-science", canonicalName: "Computer Science", category: "Technology & Engineering", aliases: ["CompSci", "Comp Sci", "CS", "Computing"] },
  { id: "electronics", canonicalName: "Electronics", category: "Technology & Engineering", aliases: ["Electronic Engineering"] },
  { id: "engineering", canonicalName: "Engineering", category: "Technology & Engineering", aliases: ["A Level Engineering"] },
  { id: "dt-product-design", canonicalName: "Design and Technology: Product Design", category: "Technology & Engineering", aliases: ["DT Product Design", "D&T Product Design", "Product Design", "Resistant Materials (legacy name)"] },
  { id: "dt-engineering", canonicalName: "Design and Technology: Engineering", category: "Technology & Engineering", aliases: ["DT Engineering", "D&T Engineering"] },
  { id: "economics", canonicalName: "Economics", category: "Economics", aliases: ["Econ", "A Level Economics"] },
  { id: "psychology", canonicalName: "Psychology", category: "Psychology", aliases: ["Psych", "A Level Psychology"] }
];

const SUBJECT_MODULES = [
  { id: "further-maths-mechanics", parentId: "further-mathematics", canonicalName: "Mechanics", aliases: ["Further Mechanics", "M1", "M2", "Mechanics 1", "Mechanics 2"] },
  { id: "further-maths-statistics", parentId: "further-mathematics", canonicalName: "Statistics", aliases: ["Further Statistics", "S1", "S2", "Statistics 1", "Statistics 2"] },
  { id: "further-maths-decision", parentId: "further-mathematics", canonicalName: "Decision Mathematics", aliases: ["Decision Maths", "Discrete Mathematics", "Discrete Maths", "D1", "D2"] },
  { id: "further-maths-further-pure", parentId: "further-mathematics", canonicalName: "Further Pure Mathematics", aliases: ["Further Pure", "FP1", "FP2", "FP3", "Core Pure"] }
];

const GRADES = [
  { id: "a-star", label: "A*", sortOrder: 1 },
  { id: "a", label: "A", sortOrder: 2 },
  { id: "b", label: "B", sortOrder: 3 },
  { id: "c", label: "C", sortOrder: 4 },
  { id: "d", label: "D", sortOrder: 5 },
  { id: "e", label: "E", sortOrder: 6 },
  { id: "u", label: "U", sortOrder: 7 },
  { id: "not-disclosed", label: "Not disclosed / not applicable", sortOrder: null }
];

const ADMISSIONS_TESTS = [
  {
    id: "tmua",
    canonicalName: "TMUA (Test of Mathematics for University Admission)",
    shortName: "TMUA",
    aliases: ["TMUA", "Test of Mathematics for University Admission"],
    modules: [
      { id: "tmua-paper1", canonicalName: "Paper 1" },
      { id: "tmua-paper2", canonicalName: "Paper 2" }
    ]
  },
  {
    id: "esat",
    canonicalName: "ESAT (Engineering and Science Admissions Test)",
    shortName: "ESAT",
    aliases: ["ESAT", "Engineering and Science Admissions Test"],
    modules: [
      { id: "esat-maths1", canonicalName: "Mathematics 1" },
      { id: "esat-maths2", canonicalName: "Mathematics 2 (Advanced Maths)" },
      { id: "esat-physics", canonicalName: "Physics" },
      { id: "esat-chemistry", canonicalName: "Chemistry" },
      { id: "esat-biology", canonicalName: "Biology" }
    ]
  },
  {
    id: "ucat",
    canonicalName: "UCAT (University Clinical Aptitude Test)",
    shortName: "UCAT",
    aliases: ["UCAT", "University Clinical Aptitude Test", "UKCAT"],
    modules: [
      { id: "ucat-vr", canonicalName: "Verbal Reasoning" },
      { id: "ucat-dm", canonicalName: "Decision Making" },
      { id: "ucat-qr", canonicalName: "Quantitative Reasoning" },
      { id: "ucat-sjt", canonicalName: "Situational Judgement Test" }
    ]
  },
  {
    id: "step",
    canonicalName: "STEP (Sixth Term Examination Paper)",
    shortName: "STEP",
    aliases: ["STEP", "Sixth Term Examination Paper", "STEP Maths"],
    modules: [
      { id: "step-2", canonicalName: "STEP 2" },
      { id: "step-3", canonicalName: "STEP 3" }
    ]
  }
];

const OTHER_SUBJECT_ID = "other-request";
const subjectById = new Map(SUBJECTS.map((subject) => [subject.id, subject]));
const gradeById = new Map(GRADES.map((grade) => [grade.id, grade]));
const admissionsById = new Map(ADMISSIONS_TESTS.map((test) => [test.id, test]));
const admissionModuleById = new Map(ADMISSIONS_TESTS.flatMap((test) => test.modules.map((module) => [module.id, { ...module, parentId: test.id }])));
let selectedProfileSubjectIds = [];
let selectedProfileModuleIds = [];
let selectedProfileSubjectGrades = {};
let selectedAdmissionsTestIds = [];
let selectedAdmissionsModuleIds = [];
let selectedAdmissionsScores = {};

const roleContent = {
  student: {
    title: "Student account",
    text: "Book tutors, message your tutor, manage lessons, and leave ratings after completed sessions.",
    dash: "Student tools",
    mode: "Bookings and chat"
  },
  parent: {
    title: "Parent account",
    text: "Book tutors for your child, message tutors, manage cancellations, and leave ratings after lessons.",
    dash: "Parent tools",
    mode: "Family lessons"
  },
  tutor: {
    title: "Tutor account",
    text: "Manage your profile, subjects, availability, student messages, bookings, and ratings.",
    dash: "Tutor tools",
    mode: "Tutor workspace"
  },
  admin: {
    title: "Safeguarding account",
    text: "Review moderation reports and platform safety events.",
    dash: "Moderation tools",
    mode: "Safeguarding workspace"
  },
  safeguarding: {
    title: "Safeguarding account",
    text: "Review moderation reports and platform safety events.",
    dash: "Moderation tools",
    mode: "Safeguarding workspace"
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
      ["Wed 19:30", "Mathematics", "Recurring lesson with Leo Grant"]
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
      ["Availability", "Approve requests, block busy times, and manage recurring lessons."],
      ["Bookings", "Review student requests and keep lesson admin organised."]
    ],
    lessons: [
      ["Today 16:30", "Lesson request", "Maya wants GCSE Biology support"],
      ["Fri 19:00", "Recurring lesson", "Essay planning with Hannah"]
    ],
    chatTitle: "Student and parent chat",
    chatWith: "Maya and parent",
    messages: [
      ["incoming", "Could we book a lesson next week?"],
      ["outgoing", "Yes, I have Tuesday at 16:30 or Thursday at 18:00."]
    ],
    ratingTitle: "Tutor ratings",
    ratingText: "Your public profile shows an average rating after students and parents review lessons.",
    ratingButton: "View ratings"
  },
  admin: {
    tools: [
      ["Moderation", "Review reported and automatically flagged messages."],
      ["Audit trail", "Keep internal records of review status and actions."],
      ["Safeguarding", "Escalate high-priority concerns for follow-up."]
    ],
    lessons: [],
    chatTitle: "Moderation",
    chatWith: "Safeguarding queue",
    messages: [],
    ratingTitle: "Review queue",
    ratingText: "Open moderation items appear in the review dashboard.",
    ratingButton: "Open moderation"
  },
  safeguarding: {
    tools: [
      ["Moderation", "Review reported and automatically flagged messages."],
      ["Audit trail", "Keep internal records of review status and actions."],
      ["Safeguarding", "Escalate high-priority concerns for follow-up."]
    ],
    lessons: [],
    chatTitle: "Moderation",
    chatWith: "Safeguarding queue",
    messages: [],
    ratingTitle: "Review queue",
    ratingText: "Open moderation items appear in the review dashboard.",
    ratingButton: "Open moderation"
  }
};

const tutorGrid = document.querySelector("#tutorGrid");
const nameFilter = document.querySelector("#nameFilter");
const subjectFilter = document.querySelector("#subjectFilter");
const admissionsFilter = document.querySelector("#admissionsFilter");
const admissionsModuleFilter = document.querySelector("#admissionsModuleFilter");
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
const accountLoginView = document.querySelector("#accountLoginView");
const accountSignupView = document.querySelector("#accountSignupView");
const showSignupFlow = document.querySelector("#showSignupFlow");
const showLoginFlow = document.querySelector("#showLoginFlow");
const signupSubject = document.querySelector("#signupSubject");
const signupProgressBar = document.querySelector("#signupProgressBar");
const signupContext = document.querySelector("#signupContext");
const marketingOptIn = document.querySelector("#marketingOptIn");
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
const messageBadge = document.querySelector("#messageBadge");
const topMessageBadge = document.querySelector("#topMessageBadge");
const profileMessageBadge = document.querySelector("#profileMessageBadge");
const bookingBadge = document.querySelector("#bookingBadge");
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
const profileSubjectPicker = document.querySelector("#profileSubjectPicker");
const profileSubjectChips = document.querySelector("#profileSubjectChips");
const profileSubjectSearch = document.querySelector("#profileSubjectSearch");
const profileSubjectSuggestions = document.querySelector("#profileSubjectSuggestions");
const profileAdmissionsTests = document.querySelector("#profileAdmissionsTests");
const profileAdmissionsPicker = document.querySelector("#profileAdmissionsPicker");
const profileAdmissionsChips = document.querySelector("#profileAdmissionsChips");
const profileAdmissionsSearch = document.querySelector("#profileAdmissionsSearch");
const profileAdmissionsSuggestions = document.querySelector("#profileAdmissionsSuggestions");
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
const moderationList = document.querySelector("#moderationList");
const moderationStatusFilter = document.querySelector("#moderationStatusFilter");
const moderationSeverityFilter = document.querySelector("#moderationSeverityFilter");
const bookingPageForm = document.querySelector("#bookingPageForm");
const bookingTutor = document.querySelector("#bookingTutor");
const bookingTutorSearch = document.querySelector("#bookingTutorSearch");
const bookingPersonLabel = document.querySelector("#bookingPersonLabel");
const bookingLessonType = document.querySelector("#bookingLessonType");
const bookingDate = document.querySelector("#bookingDate");
const bookingHour = document.querySelector("#bookingHour");
const bookingMinuteOptions = document.querySelector("#bookingMinuteOptions");
const bookingMinute = document.querySelector("#bookingMinute");
const bookingDateTime = document.querySelector("#bookingDateTime");
const bookingSubmitButton = document.querySelector("#bookingSubmitButton");
const bookingsPageTitle = document.querySelector("#bookingsPageTitle");
const bookingsPageCopy = document.querySelector("#bookingsPageCopy");
const bookingViewFilter = document.querySelector("#bookingViewFilter");
const bookingViewFilterLabel = document.querySelector("#bookingViewFilterLabel");
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
let cloudMessages = [];
let cloudSafetyEvents = [];
let pendingProfilePhoto = "";
let activeReschedulePicker = null;
const signupWizard = {
  stepIndex: 0,
  steps: ["subject", "level", "role", "name", "dob", "email", "password"],
  subject: "",
  level: "",
  role: "student"
};

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
  emails: "tutrstemEmailQueue",
  subjectRequests: "tutrstemSubjectRequests",
  safetyEvents: "tutrstemSafetyEvents"
};

function showPage(pageName, options = {}) {
  const publicPages = ["home", "tutors", "how", "about", "accounts", "profile", "reviews", "pricing-faq", "tutor-requirements", "terms", "privacy"];
  const privatePages = ["messages", "bookings", "dashboard", "student-profile", "account-details", "support", "moderation"];
  const fallback = currentAccount
    ? (isModerationUser() ? "moderation" : (currentAccount.role === "tutor" ? "profile" : "tutors"))
    : "accounts";
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
    nextPage = "profile";
    selectedTutor = getCurrentTutorProfile() || selectedTutor;
    showConfirmation("Tutor accounts use their profile, messages, and bookings.");
  }

  if (nextPage === "moderation" && !isModerationUser()) {
    nextPage = fallback;
    showConfirmation("Only authorised safeguarding/admin accounts can open moderation.");
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
  if (nextPage === "moderation") renderModerationPage();

  const editingProfile = nextPage === "dashboard" && options.editProfile === true;
  document.body.classList.toggle("editing-profile", editingProfile);
  if (editingProfile) {
    dashboardTitle.textContent = "Edit profile";
    dashboardSubtitle.textContent = "Update your tutor profile picture, subjects, bio, and session details.";
  }

  pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === nextPage);
  });

  routeLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === nextPage);
  });

  if (!options.skipHistory && window.location.hash !== `#${nextPage}`) {
    const historyMethod = options.replaceHistory ? "replaceState" : "pushState";
    history[historyMethod]({ page: nextPage }, "", `#${nextPage}`);
  }

  if (!options.keepScroll) {
    window.scrollTo({ top: 0, behavior: options.instant ? "auto" : "smooth" });
  }
}

function messageIsInThread(message, studentEmail, tutorAddress) {
  const student = normalizeEmail(studentEmail);
  const tutor = normalizeEmail(tutorAddress);
  const sender = normalizeEmail(message.senderEmail);
  const recipient = normalizeEmail(message.recipientEmail);
  const participants = (message.participantEmails || []).map(normalizeEmail);
  return message.threadKey === threadKeyFor(student, tutor)
    || (participants.includes(student) && participants.includes(tutor))
    || ((sender === student && recipient === tutor) || (sender === tutor && recipient === student));
}

function unreadCountForThread(studentEmail, tutorAddress) {
  if (!currentAccount?.email) return 0;
  const ownEmail = normalizeEmail(currentAccount.email);
  return cloudMessages.filter((message) => {
    const sender = normalizeEmail(message.senderEmail);
    const readBy = (message.readBy || []).map(normalizeEmail);
    return sender !== ownEmail
      && messageIsInThread(message, studentEmail, tutorAddress)
      && !readBy.includes(ownEmail);
  }).length;
}

function getRouteFromHash() {
  return window.location.hash.replace("#", "") || "home";
}

function showConfirmation(message) {
  pendingConfirmation = message;
  loginConfirmation.hidden = false;
  loginConfirmation.textContent = message;
}

function showLoginAccountView() {
  accountLoginView.hidden = false;
  if (accountSignupView) accountSignupView.hidden = true;
  signupForm.hidden = false;
  loginPanel.hidden = true;
  document.querySelector("#accountTitle").textContent = "Welcome back";
}

function showSignupAccountView() {
  accountLoginView.hidden = true;
  if (accountSignupView) accountSignupView.hidden = false;
  signupForm.hidden = false;
  updateSignupMode();
}

function renderSignupStep(stepName = signupWizard.steps[signupWizard.stepIndex]) {
  signupWizard.stepIndex = Math.max(0, signupWizard.steps.indexOf(stepName));
  document.querySelectorAll("[data-signup-step]").forEach((step) => {
    step.classList.toggle("active", step.dataset.signupStep === stepName);
  });
  const progress = ((signupWizard.stepIndex + 1) / signupWizard.steps.length) * 100;
  if (signupProgressBar) signupProgressBar.style.width = `${progress}%`;
  if (signupContext) {
    signupContext.innerHTML = `Subject: <strong>${escapeHtml(signupWizard.subject || "Not chosen")}</strong> | Level: <strong>${escapeHtml(signupWizard.level || "Not chosen")}</strong>`;
  }
  const firstInput = document.querySelector(`[data-signup-step="${stepName}"] input, [data-signup-step="${stepName}"] select`);
  firstInput?.focus();
}

function nextSignupStep() {
  const next = signupWizard.steps[Math.min(signupWizard.stepIndex + 1, signupWizard.steps.length - 1)];
  renderSignupStep(next);
}

function setSignupSubject(value) {
  signupWizard.subject = value;
  if (signupSubject) signupSubject.value = value;
  document.querySelectorAll("[data-subject-choice]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.subjectChoice === value);
  });
  nextSignupStep();
}

function setSignupLevel(value) {
  signupWizard.level = value;
  document.querySelectorAll("[data-level-choice]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.levelChoice === value);
  });
  nextSignupStep();
}

function setSignupRoleChoice(value) {
  signupWizard.role = value;
  signupRole.value = value;
  document.querySelectorAll("[data-role-choice]").forEach((button) => {
    button.classList.toggle("selected", button.dataset.roleChoice === value);
  });
  updateSignupMode();
  nextSignupStep();
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

function pad2(value) {
  return String(value).padStart(2, "0");
}

function cleanAutoText(value) {
  const text = String(value || "").trim();
  const blocked = new Set([
    "Subject to be added",
    "University to be added",
    "GCSE and A-Level",
    "A*",
    "Supportive online lessons, exam practice, and confidence building",
    "Tutor-created profile"
  ]);
  if (blocked.has(text)) return "";
  if (/^Hi, I'm .*(confidence|exam preparation|GCSE and A-Level|feel calmer|teach)/i.test(text)) return "";
  if (/^My sessions are structured around/i.test(text)) return "";
  return text;
}

function cleanAutoBadges(badges = []) {
  const blocked = new Set(["New tutor", "Free trial", "Verified"]);
  return (Array.isArray(badges) ? badges : []).filter((badge) => !blocked.has(badge));
}

function normalizeSubjectText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeGradeText(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\*/g, "-star")
    .replace(/[^a-z0-9-]+/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function gradeIdFromValue(value) {
  const normalized = normalizeGradeText(value);
  if (!normalized) return "";
  return GRADES.find((grade) => grade.id === normalized || normalizeGradeText(grade.label) === normalized)?.id || "";
}

function gradeLabel(id) {
  return gradeById.get(id)?.label || "";
}

function gradeSortOrder(id) {
  const order = gradeById.get(id)?.sortOrder;
  return Number.isFinite(order) ? order : null;
}

function subjectSearchValues(subject) {
  return [subject.canonicalName, subject.id, ...(subject.aliases || [])].map(normalizeSubjectText).filter(Boolean);
}

function findSubjectByText(value) {
  const normalized = normalizeSubjectText(value);
  if (!normalized) return null;
  return SUBJECTS.find((subject) => subjectSearchValues(subject).includes(normalized)) || null;
}

function subjectIdsFromValue(value) {
  if (Array.isArray(value)) {
    return value.map((item) => subjectById.has(item) ? item : findSubjectByText(item)?.id).filter(Boolean);
  }
  return String(value || "")
    .split(/[,;/]+/)
    .map((part) => findSubjectByText(part)?.id)
    .filter(Boolean);
}

function uniqueSubjectIds(ids = []) {
  return [...new Set(ids.filter((id) => subjectById.has(id)))];
}

function tutorSubjectIds(tutor = {}) {
  return uniqueSubjectIds([
    ...(Array.isArray(tutor.subjectIds) ? tutor.subjectIds : []),
    ...(Array.isArray(tutor.subjects) ? tutor.subjects : []),
    ...subjectIdsFromValue(tutor.subject)
  ]);
}

function tutorSubjectGrades(tutor = {}) {
  const grades = tutor.subjectGrades && typeof tutor.subjectGrades === "object" ? { ...tutor.subjectGrades } : {};
  const ids = tutorSubjectIds(tutor);
  if (ids.length === 1 && tutor.grade && !grades[ids[0]]) {
    const inferredGrade = gradeIdFromValue(tutor.grade);
    if (inferredGrade) grades[ids[0]] = inferredGrade;
  }
  return Object.fromEntries(Object.entries(grades).filter(([subjectId, gradeId]) => subjectById.has(subjectId) && gradeById.has(gradeId)));
}

function tutorGradeForSubject(tutor = {}, subjectId) {
  return tutorSubjectGrades(tutor)[subjectId] || "";
}

function tutorMeetsGradeFilter(tutor, subjectId, selectedGradeId) {
  if (!selectedGradeId || selectedGradeId === "Any") return true;
  const selectedOrder = gradeSortOrder(selectedGradeId);
  if (!selectedOrder) return true;
  const ids = subjectId && subjectId !== "All" ? [subjectId] : tutorSubjectIds(tutor);
  return ids.some((id) => {
    const tutorOrder = gradeSortOrder(tutorGradeForSubject(tutor, id));
    return Number.isFinite(tutorOrder) && tutorOrder <= selectedOrder;
  });
}

function subjectLabel(id) {
  return subjectById.get(id)?.canonicalName || "";
}

function tutorSubjectLabel(tutor = {}) {
  const labels = tutorSubjectIds(tutor).map(subjectLabel).filter(Boolean);
  return labels.length ? labels.join(", ") : cleanAutoText(tutor.subject);
}

function tutorModuleLabels(tutor = {}) {
  const moduleIds = Array.isArray(tutor.furtherMathsModuleIds) ? tutor.furtherMathsModuleIds : [];
  return moduleIds
    .map((id) => SUBJECT_MODULES.find((module) => module.id === id)?.canonicalName)
    .filter(Boolean);
}

function tutorSubjectGradeChips(tutor = {}) {
  const grades = tutorSubjectGrades(tutor);
  return tutorSubjectIds(tutor)
    .map((subjectId) => {
      const grade = gradeLabel(grades[subjectId]);
      return grade ? `${subjectLabel(subjectId)}: ${grade}` : "";
    })
    .filter(Boolean);
}

function admissionsSearchValues(test) {
  return [test.canonicalName, test.shortName, test.id, ...(test.aliases || [])].map(normalizeSubjectText).filter(Boolean);
}

function admissionTestMatchesQuery(test, query) {
  const normalized = normalizeSubjectText(query);
  if (!normalized) return true;
  return admissionsSearchValues(test).some((value) => value.includes(normalized));
}

function uniqueAdmissionTestIds(ids = []) {
  return [...new Set(ids.filter((id) => admissionsById.has(id)))];
}

function uniqueAdmissionModuleIds(ids = []) {
  return [...new Set(ids.filter((id) => admissionModuleById.has(id)))];
}

function tutorAdmissionTestIds(tutor = {}) {
  return uniqueAdmissionTestIds(Array.isArray(tutor.admissionsTestIds) ? tutor.admissionsTestIds : []);
}

function tutorAdmissionModuleIds(tutor = {}) {
  return uniqueAdmissionModuleIds(Array.isArray(tutor.admissionsModuleIds) ? tutor.admissionsModuleIds : []);
}

function admissionLabel(id) {
  return admissionsById.get(id)?.shortName || admissionsById.get(id)?.canonicalName || "";
}

function admissionModuleLabel(id) {
  return admissionModuleById.get(id)?.canonicalName || "";
}

function tutorAdmissionsLabel(tutor = {}) {
  return tutorAdmissionTestIds(tutor).map(admissionLabel).filter(Boolean).join(", ");
}

function tutorAdmissionsChips(tutor = {}) {
  const scores = tutor.admissionsScores && typeof tutor.admissionsScores === "object" ? tutor.admissionsScores : {};
  const moduleIds = tutorAdmissionModuleIds(tutor);
  return [
    ...tutorAdmissionTestIds(tutor).map((id) => {
      const score = String(scores[id] || "").trim();
      return score ? `${admissionLabel(id)} score: ${score}` : admissionLabel(id);
    }),
    ...moduleIds.map((id) => `${admissionLabel(admissionModuleById.get(id)?.parentId)}: ${admissionModuleLabel(id)}`)
  ].filter(Boolean);
}

function subjectMatchesQuery(subject, query) {
  const normalized = normalizeSubjectText(query);
  if (!normalized) return true;
  return subjectSearchValues(subject).some((value) => value.includes(normalized));
}

function populateSubjectFilter() {
  if (!subjectFilter) return;
  const categories = [...new Set(SUBJECTS.map((subject) => subject.category))];
  subjectFilter.innerHTML = `<option value="All">All subjects</option>${categories.map((category) => {
    const options = SUBJECTS
      .filter((subject) => subject.category === category)
      .map((subject) => `<option value="${escapeHtml(subject.id)}">${escapeHtml(subject.canonicalName)}</option>`)
      .join("");
    return `<optgroup label="${escapeHtml(category)}">${options}</optgroup>`;
  }).join("")}`;
}

function populateGradeFilter() {
  if (!gradeFilter) return;
  gradeFilter.innerHTML = `<option value="Any">Any grade</option>${GRADES
    .filter((grade) => Number.isFinite(grade.sortOrder))
    .map((grade) => `<option value="${escapeHtml(grade.id)}">${escapeHtml(grade.label)} or above</option>`)
    .join("")}`;
}

function populateAdmissionsFilter() {
  if (!admissionsFilter) return;
  admissionsFilter.innerHTML = `<option value="All">All admissions tests</option>${ADMISSIONS_TESTS
    .map((test) => `<option value="${escapeHtml(test.id)}">${escapeHtml(test.shortName)}</option>`)
    .join("")}`;
  populateAdmissionsModuleFilter();
}

function populateAdmissionsModuleFilter() {
  if (!admissionsModuleFilter) return;
  const selectedTestId = admissionsFilter?.value || "All";
  const modules = ADMISSIONS_TESTS
    .filter((test) => selectedTestId === "All" || test.id === selectedTestId)
    .flatMap((test) => test.modules.map((module) => ({ ...module, parentId: test.id })));
  admissionsModuleFilter.innerHTML = `<option value="All">All modules</option>${modules
    .map((module) => `<option value="${escapeHtml(module.id)}">${escapeHtml(admissionLabel(module.parentId))}: ${escapeHtml(module.canonicalName)}</option>`)
    .join("")}`;
}

function syncProfileSubjectInput() {
  if (!profileSubject) return;
  profileSubject.value = JSON.stringify(selectedProfileSubjectIds);
}

function syncAdmissionsInput() {
  if (!profileAdmissionsTests) return;
  profileAdmissionsTests.value = JSON.stringify(selectedAdmissionsTestIds);
}

function saveOtherSubjectRequest(value) {
  const requestedName = String(value || "").trim();
  if (!requestedName || !currentAccount) return;
  const requests = readStore(storage.subjectRequests, []);
  const request = {
    id: createId("subject"),
    requestedName,
    accountEmail: currentAccount.email,
    accountName: currentAccount.name,
    status: "pending-review",
    created: nowLabel()
  };
  requests.push(request);
  writeStore(storage.subjectRequests, requests);
  if (isCloudReady()) {
    db.collection("subjectRequests").add({
      ...request,
      accountEmail: normalizeEmail(currentAccount.email),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).catch(() => {});
  }
}

function renderProfileSubjectPicker() {
  if (!profileSubjectPicker || !profileSubjectChips || !profileSubjectSuggestions) return;
  const showGradeSelectors = currentAccount?.role === "tutor";
  const showModules = selectedProfileSubjectIds.includes("further-mathematics");
  const subjectChips = selectedProfileSubjectIds.map((id) => `
    <div class="${showGradeSelectors ? "subject-grade-row" : "subject-selected-row"}">
      <strong>${escapeHtml(subjectLabel(id))}</strong>
      ${showGradeSelectors ? `<select data-subject-grade="${escapeHtml(id)}" aria-label="${escapeHtml(subjectLabel(id))} grade achieved">
        <option value="">Grade not disclosed</option>
        ${GRADES.filter((grade) => Number.isFinite(grade.sortOrder)).map((grade) => `
          <option value="${escapeHtml(grade.id)}" ${selectedProfileSubjectGrades[id] === grade.id ? "selected" : ""}>${escapeHtml(grade.label)}</option>
        `).join("")}
      </select>` : ""}
      <button class="subject-remove" type="button" data-remove-subject="${escapeHtml(id)}" aria-label="Remove ${escapeHtml(subjectLabel(id))}">x</button>
    </div>
  `).join("");
  const moduleChips = showModules && showGradeSelectors ? SUBJECT_MODULES.map((module) => `
    <button class="subject-chip ${selectedProfileModuleIds.includes(module.id) ? "selected" : ""}" type="button" data-toggle-module="${escapeHtml(module.id)}">
      ${escapeHtml(module.canonicalName)}
    </button>
  `).join("") : "";
  profileSubjectChips.innerHTML = `${subjectChips}${moduleChips ? `<div class="subject-module-row"><span>Further Maths options</span>${moduleChips}</div>` : ""}`;

  profileSubjectChips.querySelectorAll("[data-subject-grade]").forEach((select) => {
    select.addEventListener("change", () => {
      const subjectId = select.dataset.subjectGrade;
      if (select.value) selectedProfileSubjectGrades[subjectId] = select.value;
      else delete selectedProfileSubjectGrades[subjectId];
    });
  });
  profileSubjectChips.querySelectorAll("[data-remove-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedProfileSubjectIds = selectedProfileSubjectIds.filter((id) => id !== button.dataset.removeSubject);
      delete selectedProfileSubjectGrades[button.dataset.removeSubject];
      if (!selectedProfileSubjectIds.includes("further-mathematics")) selectedProfileModuleIds = [];
      syncProfileSubjectInput();
      renderProfileSubjectPicker();
      renderSubjectSuggestions();
    });
  });
  profileSubjectChips.querySelectorAll("[data-toggle-module]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleModule;
      selectedProfileModuleIds = selectedProfileModuleIds.includes(id)
        ? selectedProfileModuleIds.filter((item) => item !== id)
        : [...selectedProfileModuleIds, id];
      renderProfileSubjectPicker();
    });
  });
  syncProfileSubjectInput();
}

function hideSubjectSuggestions() {
  if (profileSubjectSuggestions) profileSubjectSuggestions.hidden = true;
}

function hideAdmissionsSuggestions() {
  if (profileAdmissionsSuggestions) profileAdmissionsSuggestions.hidden = true;
}

function renderSubjectSuggestions() {
  if (!profileSubjectSearch || !profileSubjectSuggestions) return;
  const query = profileSubjectSearch.value;
  const available = SUBJECTS
    .filter((subject) => !selectedProfileSubjectIds.includes(subject.id))
    .filter((subject) => subjectMatchesQuery(subject, query))
    .slice(0, 8);
  const suggestions = available.map((subject) => `
    <button type="button" data-add-subject="${escapeHtml(subject.id)}">
      <strong>${escapeHtml(subject.canonicalName)}</strong>
      <span>${escapeHtml(subject.category)}</span>
    </button>
  `).join("");
  const otherLabel = query.trim() || "a new subject";
  const other = `<button type="button" data-add-subject="${OTHER_SUBJECT_ID}"><strong>Other - email tutrSTEM.</strong><span>Request ${escapeHtml(otherLabel)}</span></button>`;
  profileSubjectSuggestions.innerHTML = `${suggestions}${other}`;
  profileSubjectSuggestions.hidden = false;

  profileSubjectSuggestions.querySelectorAll("[data-add-subject]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.addSubject;
      if (id === OTHER_SUBJECT_ID) {
        const requestedSubject = profileSubjectSearch.value.trim();
        saveOtherSubjectRequest(requestedSubject || "New subject request");
        const subjectLine = encodeURIComponent("Subject request for tutrSTEM");
        const body = encodeURIComponent(`Hi tutrSTEM,\n\nPlease can you add this subject to the tutor profile list: ${requestedSubject || "[type subject here]"}\n\nThanks`);
        window.location.href = `mailto:tutrstem@gmail.com?subject=${subjectLine}&body=${body}`;
        hideSubjectSuggestions();
        return;
      }
      selectedProfileSubjectIds = uniqueSubjectIds([...selectedProfileSubjectIds, id]);
      profileSubjectSearch.value = "";
      profileSubjectSuggestions.hidden = true;
      renderProfileSubjectPicker();
    });
  });
}

function renderAdmissionsPicker() {
  if (!profileAdmissionsPicker || !profileAdmissionsChips || !profileAdmissionsSuggestions) return;
  const rows = selectedAdmissionsTestIds.map((id) => {
    const test = admissionsById.get(id);
    if (!test) return "";
    const moduleButtons = test.modules.map((module) => `
      <button class="subject-chip ${selectedAdmissionsModuleIds.includes(module.id) ? "selected" : ""}" type="button" data-toggle-admission-module="${escapeHtml(module.id)}">
        ${escapeHtml(module.canonicalName)}
      </button>
    `).join("");
    return `
      <div class="admissions-test-row">
        <div class="admissions-test-top">
          <strong>${escapeHtml(test.shortName)}</strong>
          <input type="text" data-admission-score="${escapeHtml(id)}" value="${escapeHtml(selectedAdmissionsScores[id] || "")}" placeholder="Score (display only)" />
          <button class="subject-remove" type="button" data-remove-admission="${escapeHtml(id)}" aria-label="Remove ${escapeHtml(test.shortName)}">x</button>
        </div>
        ${moduleButtons ? `<div class="subject-module-row"><span>${escapeHtml(test.shortName)} modules</span>${moduleButtons}</div>` : ""}
      </div>
    `;
  }).join("");
  profileAdmissionsChips.innerHTML = rows;
  profileAdmissionsChips.querySelectorAll("[data-admission-score]").forEach((input) => {
    input.addEventListener("input", () => {
      const id = input.dataset.admissionScore;
      const value = input.value.trim();
      if (value) selectedAdmissionsScores[id] = value;
      else delete selectedAdmissionsScores[id];
    });
  });
  profileAdmissionsChips.querySelectorAll("[data-remove-admission]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.removeAdmission;
      selectedAdmissionsTestIds = selectedAdmissionsTestIds.filter((item) => item !== id);
      selectedAdmissionsModuleIds = selectedAdmissionsModuleIds.filter((moduleId) => admissionModuleById.get(moduleId)?.parentId !== id);
      delete selectedAdmissionsScores[id];
      syncAdmissionsInput();
      renderAdmissionsPicker();
      renderAdmissionsSuggestions();
    });
  });
  profileAdmissionsChips.querySelectorAll("[data-toggle-admission-module]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.toggleAdmissionModule;
      selectedAdmissionsModuleIds = selectedAdmissionsModuleIds.includes(id)
        ? selectedAdmissionsModuleIds.filter((item) => item !== id)
        : [...selectedAdmissionsModuleIds, id];
      renderAdmissionsPicker();
    });
  });
  syncAdmissionsInput();
}

function renderAdmissionsSuggestions() {
  if (!profileAdmissionsSearch || !profileAdmissionsSuggestions) return;
  const query = profileAdmissionsSearch.value;
  const available = ADMISSIONS_TESTS
    .filter((test) => !selectedAdmissionsTestIds.includes(test.id))
    .filter((test) => admissionTestMatchesQuery(test, query));
  profileAdmissionsSuggestions.innerHTML = available.length ? available.map((test) => `
    <button type="button" data-add-admission="${escapeHtml(test.id)}">
      <strong>${escapeHtml(test.shortName)}</strong>
      <span>${escapeHtml(test.canonicalName)}</span>
    </button>
  `).join("") : `<button type="button" data-add-admission-email><strong>Other admissions test</strong><span>Email tutrSTEM to request it</span></button>`;
  profileAdmissionsSuggestions.hidden = false;
  profileAdmissionsSuggestions.querySelectorAll("[data-add-admission]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedAdmissionsTestIds = uniqueAdmissionTestIds([...selectedAdmissionsTestIds, button.dataset.addAdmission]);
      profileAdmissionsSearch.value = "";
      hideAdmissionsSuggestions();
      renderAdmissionsPicker();
    });
  });
  profileAdmissionsSuggestions.querySelector("[data-add-admission-email]")?.addEventListener("click", () => {
    const requested = profileAdmissionsSearch.value.trim();
    const subjectLine = encodeURIComponent("Admissions test request for tutrSTEM");
    const body = encodeURIComponent(`Hi tutrSTEM,\n\nPlease can you add this admissions test: ${requested || "[type test here]"}\n\nThanks`);
    window.location.href = `mailto:tutrstem@gmail.com?subject=${subjectLine}&body=${body}`;
    hideAdmissionsSuggestions();
  });
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

function tutorApprovalIsActive(record) {
  return record?.status === "approved" || record?.approved === true || record?.isApproved === true;
}

async function isApprovedTutorEmail(email) {
  if (!isCloudReady() || !email) return false;
  const approvedEmail = normalizeEmail(email);
  const directSnapshot = await db.collection("approvedTutors").doc(approvedEmail).get();
  if (directSnapshot.exists && tutorApprovalIsActive(directSnapshot.data())) return true;

  try {
    const querySnapshot = await db.collection("approvedTutors")
      .where("email", "==", approvedEmail)
      .limit(1)
      .get();
    return querySnapshot.docs.some((doc) => tutorApprovalIsActive(doc.data()));
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
    subject: "",
    subjectIds: [],
    furtherMathsModuleIds: [],
    subjectGrades: {},
    admissionsTestIds: [],
    admissionsModuleIds: [],
    admissionsScores: {},
    university: "",
    grade: "",
    rating: 0,
    lessons: 0,
    level: "",
    price: 0,
    style: "",
    about: "",
    sessions: "",
    photo: "",
    badges: [],
    initials: "",
    score: 0,
    visible: tutorApprovalIsActive(approvedRecord) && approvedRecord.visible !== false,
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
    cloudMessages = [];
    cloudSafetyEvents = [];
    updateMessageBadge();
    updateBookingBadge();
    return;
  }

  const accountEmail = normalizeEmail(currentAccount.email);
  const bookingField = currentAccount.role === "tutor" ? "tutorEmail" : "studentEmail";
  const bookingSnapshot = await db.collection("bookings")
    .where(bookingField, "==", accountEmail)
    .limit(120)
    .get();
  cloudBookings = bookingSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  const messageSnapshot = await db.collection("messages")
    .where("participantEmails", "array-contains", accountEmail)
    .limit(200)
    .get();
  cloudMessages = messageSnapshot.docs
    .map((doc) => ({ id: doc.id, ...doc.data() }))
    .sort((a, b) => messageTimestamp(a) - messageTimestamp(b));

  if (isModerationUser()) {
    const safetySnapshot = await db.collection("safetyEvents")
      .limit(200)
      .get();
    cloudSafetyEvents = safetySnapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .sort((a, b) => (Number(b.createdAtMs || 0) - Number(a.createdAtMs || 0)));
  } else {
    cloudSafetyEvents = [];
  }
  updateMessageBadge();
  updateBookingBadge();
}

async function saveTutorProfileToCloud(profile, uid = auth?.currentUser?.uid) {
  if (!isCloudReady() || !uid) return;
  const approvedRecord = await getApprovedTutorRecord(profile.email);
  if (!approvedRecord || !tutorApprovalIsActive(approvedRecord)) {
    throw new Error("Tutor email is not approved.");
  }
  await db.collection("tutorProfiles").doc(uid).set({
    ...profile,
    uid,
    email: normalizeEmail(profile.email),
    visible: approvedRecord.visible !== false,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  }, { merge: true });
  await loadCloudData();
}

async function saveBookingToCloud(booking) {
  if (!isCloudReady()) return booking;
  const payload = {
    ...booking,
    tutorEmail: normalizeEmail(booking.tutorEmail),
    studentEmail: normalizeEmail(booking.studentEmail),
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
    message: {
      subject,
      text: body,
      html: `<p>${escapeHtml(body)}</p>`
    },
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

function isModerationUser(account = currentAccount) {
  return ["admin", "safeguarding"].includes(account?.role) || account?.isAdmin === true || account?.moderation === true;
}

function compactWhitespace(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function moderationNormalise(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[|()[\]{}<>]/g, " ")
    .replace(/[._-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function analyseMessageSafety(text) {
  const raw = String(text || "");
  const normal = moderationNormalise(raw);
  const joined = normal.replace(/\s+/g, "");
  const reasons = [];
  const flags = [];
  const addReason = (category, label, severity = "MEDIUM") => reasons.push({ category, label, severity });
  const addFlag = (category, label, severity = "MEDIUM") => flags.push({ category, label, severity });

  const phoneLike = raw.match(/(?:\+?\d[\s().-]*){9,}/);
  const wordPhone = /\b(zero|oh|o)\s+(seven|7)\b/i.test(raw)
    && /\b(one|two|three|four|five|six|seven|eight|nine|zero|0|1|2|3|4|5|6|7|8|9)\b/i.test(raw);
  if (phoneLike || wordPhone) addReason("contact_phone", "Possible phone number");

  if (/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i.test(raw)
    || /\b[\w.+-]+\s+(?:at|\[at\]|\(at\))\s+[\w.-]+\s+(?:dot|\[dot\]|\(dot\))\s+[a-z]{2,}\b/i.test(raw)) {
    addReason("contact_email", "Possible personal email address");
  }

  if (/\b(?:https?:\/\/|www\.)\S+/i.test(raw)) addReason("contact_url", "External URL");

  if (/\b(?:whats\s*app|whatsapp|text me|call me|phone me|message me on|dm me|direct message me|outside (?:the )?platform|off platform)\b/i.test(raw)) {
    addReason("off_platform_request", "Request to communicate off-platform", "HIGH");
  }

  if (/\b(?:snap\s*chat|snapchat|snap|insta\s*gram|instagram|telegram|discord|tiktok|tik tok)\b/i.test(raw)
    || /\b(?:s\s*n\s*a\s*p|i\s*n\s*s\s*t\s*a|d\s*i\s*s\s*c\s*o\s*r\s*d)\b/i.test(raw)) {
    addReason("social_handle", "Possible social media contact details");
  }

  if (/(?:^|\s)@[a-z0-9._]{3,}/i.test(raw) && /\b(?:insta|instagram|snap|snapchat|tiktok|telegram|discord|handle|username)\b/i.test(raw)) {
    addReason("social_handle", "Possible social media handle");
  }

  if (/\b(?:postcode|post code|home address|my address|come to my house|meet at my house)\b/i.test(normal)) {
    addReason("location_contact", "Possible personal address/location sharing", "HIGH");
  }

  if (/\b(?:kill yourself|i will kill|hurt you|threat|blackmail|send nudes|nude|sexual|sexy|onlyfans|meet alone|don't tell your parent|dont tell your parent|keep this secret)\b/i.test(normal)) {
    addFlag("safeguarding", "Potential safeguarding or harmful content", "HIGH");
  }

  if (/\b(?:idiot|stupid|shut up|hate you|loser|bully|harass)\b/i.test(normal)) {
    addFlag("behaviour", "Potential bullying or harassment", "MEDIUM");
  }

  if (joined.includes("gmaildotcom") || joined.includes("hotmaildotcom") || joined.includes("outlookdotcom")) {
    addReason("contact_email_evasion", "Possible obfuscated email address");
  }

  if (!reasons.length && /\b(?:private|secret|don't tell|dont tell|meet in person|meet up)\b/i.test(normal)) {
    addFlag("safeguarding", "Potentially concerning private communication", "MEDIUM");
  }

  const highestSeverity = [...reasons, ...flags].some((item) => item.severity === "HIGH")
    ? "HIGH"
    : [...reasons, ...flags].some((item) => item.severity === "MEDIUM") ? "MEDIUM" : "LOW";
  if (reasons.length) return { action: "BLOCK", severity: highestSeverity, reasons };
  if (flags.length) return { action: "FLAG", severity: highestSeverity, reasons: flags };
  return { action: "ALLOW", severity: "LOW", reasons: [] };
}

function safetyEventContext(overrides = {}) {
  const senderEmail = normalizeEmail(currentAccount?.email);
  const recipientEmail = normalizeEmail(overrides.recipientEmail || currentRecipientEmail());
  return {
    senderEmail,
    senderName: currentAccount?.name || senderEmail,
    senderRole: currentAccount?.role || "",
    recipientEmail,
    threadKey: overrides.threadKey || threadKey(),
    participantEmails: [senderEmail, recipientEmail].filter(Boolean),
    createdLabel: nowLabel(),
    createdAtMs: Date.now()
  };
}

async function saveSafetyEvent(event) {
  const id = event.id || createId("safety");
  const payload = {
    id,
    status: event.status || "NEW",
    severity: event.severity || "LOW",
    source: event.source || "automatic",
    type: event.type || "flag",
    category: event.category || "",
    reason: event.reason || "",
    messageId: event.messageId || "",
    messageBody: compactWhitespace(event.messageBody || "").slice(0, 2000),
    reporterEmail: normalizeEmail(event.reporterEmail),
    reporterRole: event.reporterRole || "",
    notes: event.notes || "",
    actionTaken: event.actionTaken || "",
    ...safetyEventContext(event),
    ...(event.context || {})
  };
  const events = readStore(storage.safetyEvents, []);
  writeStore(storage.safetyEvents, [{ ...payload }, ...events.filter((item) => item.id !== id)].slice(0, 200));
  cloudSafetyEvents = [{ ...payload }, ...cloudSafetyEvents.filter((item) => item.id !== id)];
  if (isCloudReady()) {
    await db.collection("safetyEvents").doc(id).set({
      ...payload,
      createdAt: payload.createdAt || firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  }
  return payload;
}

async function writeModerationAudit(eventId, action, notes = "") {
  const payload = {
    eventId,
    action,
    notes,
    actorEmail: normalizeEmail(currentAccount?.email),
    actorRole: currentAccount?.role || "",
    timeLabel: nowLabel(),
    createdAtMs: Date.now()
  };
  if (isCloudReady()) {
    await db.collection("moderationAudit").add({
      ...payload,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}

function recentBlockedAttemptsForCurrentSender() {
  const ownEmail = normalizeEmail(currentAccount?.email);
  const cutoff = Date.now() - (24 * 60 * 60 * 1000);
  return [...cloudSafetyEvents, ...readStore(storage.safetyEvents, [])].filter((event) => (
    normalizeEmail(event.senderEmail) === ownEmail
    && event.type === "blocked_message"
    && Number(event.createdAtMs || 0) >= cutoff
  )).length;
}

async function moderateOutgoingText(text) {
  const result = analyseMessageSafety(text);
  if (result.action === "ALLOW") return true;
  const reason = result.reasons.map((item) => item.label).join(", ");
  if (result.action === "BLOCK") {
    const repeated = recentBlockedAttemptsForCurrentSender() >= 2;
    await saveSafetyEvent({
      type: repeated ? "repeated_blocked_attempt" : "blocked_message",
      source: "automatic",
      severity: repeated ? "HIGH" : result.severity,
      category: result.reasons[0]?.category || "blocked_contact",
      reason: repeated ? `Repeated blocked attempt: ${reason}` : reason,
      messageBody: text
    });
    signupStatus.textContent = "For safety, please keep communication on the tutoring platform and don't share personal contact details.";
    signupStatus.classList.remove("success");
    return false;
  }
  await saveSafetyEvent({
    type: "flagged_message",
    source: "automatic",
    severity: result.severity,
    category: result.reasons[0]?.category || "safeguarding",
    reason,
    messageBody: text
  });
  return true;
}

function accountKey() {
  return currentAccount?.email || "guest";
}

function isApprovedTutorAccount(account) {
  if (account?.role !== "tutor") return true;
  return account.approved === true || account.isApproved === true || account.status === "approved";
}

function tutorLevelLabel(tutor) {
  return tutor.level || tutor.qualificationLevel || "";
}

function tutorPhotoMarkup(tutor, className = "profile-photo") {
  const photo = tutor.photo || tutor.photoUrl || tutor.profilePhoto || "";
  if (photo) {
    return `<img class="${className}" src="${escapeHtml(photo)}" alt="${escapeHtml(tutor.name)} profile picture" />`;
  }
  return `<div class="${className}" aria-label="${escapeHtml(tutor.name)} profile picture">${escapeHtml(tutor.initials || initialsFromName(tutor.name || ""))}</div>`;
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
  profilePhotoPreview.textContent = "";
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

function threadKeyFor(studentEmail, tutorAddress) {
  return `${normalizeEmail(studentEmail)}::${normalizeEmail(tutorAddress)}`;
}

function currentRecipientEmail() {
  if (!currentAccount) return "";
  return currentAccount.role === "tutor"
    ? normalizeEmail(selectedStudentAccount?.email)
    : normalizeEmail(tutorEmail(selectedThreadTutor));
}

function threadKey() {
  if (currentAccount?.role === "tutor") {
    return threadKeyFor(selectedStudentAccount?.email || "", currentAccount.email);
  }

  return threadKeyFor(currentAccount?.email || "", tutorEmail(selectedThreadTutor));
}

function messageTimestamp(message) {
  if (typeof message.clientCreatedAt === "number") return message.clientCreatedAt;
  if (typeof message.createdAt?.toMillis === "function") return message.createdAt.toMillis();
  if (typeof message.createdAt?.seconds === "number") return message.createdAt.seconds * 1000;
  return 0;
}

function updateMessageBadge() {
  const badges = [messageBadge, topMessageBadge, profileMessageBadge].filter(Boolean);
  if (!badges.length || !currentAccount?.email) {
    badges.forEach((badge) => {
      badge.hidden = true;
    });
    return;
  }
  const ownEmail = normalizeEmail(currentAccount.email);
  const unread = cloudMessages.filter((message) => {
    const recipient = normalizeEmail(message.recipientEmail);
    const sender = normalizeEmail(message.senderEmail);
    const participants = (message.participantEmails || []).map(normalizeEmail);
    const readBy = (message.readBy || []).map(normalizeEmail);
    const isIncoming = sender !== ownEmail && (recipient === ownEmail || participants.includes(ownEmail));
    return isIncoming && !readBy.includes(ownEmail);
  }).length;
  badges.forEach((badge) => {
    badge.textContent = String(unread);
    badge.hidden = unread === 0;
  });
}

function bookingVisibleToCurrentAccount(booking) {
  if (!currentAccount?.email) return false;
  const ownEmail = normalizeEmail(currentAccount.email);
  return currentAccount.role === "tutor"
    ? normalizeEmail(booking.tutorEmail) === ownEmail
    : normalizeEmail(booking.studentEmail) === ownEmail;
}

function updateBookingBadge() {
  if (!bookingBadge || !currentAccount?.email) {
    if (bookingBadge) bookingBadge.hidden = true;
    return;
  }
  const ownEmail = normalizeEmail(currentAccount.email);
  const unseen = getBookings().filter((booking) => {
    const seenBy = (booking.seenBy || []).map(normalizeEmail);
    return bookingVisibleToCurrentAccount(booking) && !seenBy.includes(ownEmail);
  }).length;
  bookingBadge.textContent = String(unseen);
  bookingBadge.hidden = unseen === 0;
}

function cloudMessageToBubble(message) {
  return {
    id: message.id,
    direction: normalizeEmail(message.senderEmail) === normalizeEmail(currentAccount?.email) ? "outgoing" : "incoming",
    text: message.body || message.text || "",
    time: message.timeLabel || nowLabel(),
    senderEmail: message.senderEmail,
    recipientEmail: message.recipientEmail,
    readBy: message.readBy || [],
    clientCreatedAt: message.clientCreatedAt || messageTimestamp(message)
  };
}

function messageFingerprint(message) {
  return [
    normalizeEmail(message.senderEmail),
    normalizeEmail(message.recipientEmail),
    String(message.text || message.body || "").trim(),
    message.clientCreatedAt || message.time || message.timeLabel || ""
  ].join("|");
}

function looseMessageFingerprint(message) {
  return [
    String(message.text || message.body || "").trim(),
    message.time || message.timeLabel || message.clientCreatedAt || ""
  ].join("|");
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
  const average = tutorRatings.reduce((total, item) => total + Number(item.score || 0), 0) / tutorRatings.length;
  return Number(average.toFixed(2));
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
    return saveTutorProfileToCloud({
      name: profile.name || currentAccount.name,
      email: currentAccount.email,
      subject: profile.subject || "",
      subjectIds: uniqueSubjectIds(profile.subjectIds || subjectIdsFromValue(profile.subject)),
      furtherMathsModuleIds: Array.isArray(profile.furtherMathsModuleIds) ? profile.furtherMathsModuleIds : [],
      subjectGrades: profile.subjectGrades || {},
      admissionsTestIds: uniqueAdmissionTestIds(profile.admissionsTestIds || []),
      admissionsModuleIds: uniqueAdmissionModuleIds(profile.admissionsModuleIds || []),
      admissionsScores: profile.admissionsScores || {},
      university: profile.university || "",
      grade: profile.grade || "",
      rating: Number(profile.rating || 0),
      lessons: Number(profile.lessons || 0),
      price: Number(profile.price || 0),
      level: profile.level || "",
      detail: profile.detail || "",
      style: profile.detail || "",
      about: profile.about || "",
      sessions: profile.sessions || "",
      photo: profile.photo || "",
      badges: Array.isArray(profile.badges) ? profile.badges : [],
      initials: "",
      score: Number(profile.score || 0)
    }, currentAccount.uid);
  }
  return Promise.resolve();
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
  const bookedEmails = new Set(bookings.map((booking) => normalizeEmail(booking.studentEmail)).filter(Boolean));
  const messageEmails = cloudMessages
    .flatMap((message) => message.participantEmails || [])
    .map(normalizeEmail)
    .filter((email) => email && email !== normalizeEmail(currentAccount?.email));
  const studentsByEmail = new Map(getStudentAccounts().map((account) => [normalizeEmail(account.email), account]));
  bookings.forEach((booking) => {
    const email = normalizeEmail(booking.studentEmail);
    if (email && !studentsByEmail.has(email)) {
      studentsByEmail.set(email, {
        role: "student",
        name: booking.student || email,
        email,
        subject: booking.subject || ""
      });
    }
  });
  messageEmails.forEach((email) => {
    if (!studentsByEmail.has(email)) {
      studentsByEmail.set(email, {
        role: "student",
        name: email,
        email,
        subject: ""
      });
    }
  });
  const students = [...studentsByEmail.values()];
  const bookedStudents = students.filter((account) => bookedEmails.has(normalizeEmail(account.email)));
  const otherStudents = students.filter((account) => !bookedEmails.has(normalizeEmail(account.email)));
  return [...bookedStudents, ...otherStudents];
}

function studentSummary(account) {
  const profile = getProfileForAccount(account);
  return {
    name: profile.name || account?.name || "",
    subject: profile.subject || "",
    detail: profile.detail || "",
    about: profile.about || "",
    role: account?.role || "student",
    email: account?.email || "",
    initials: initialsFromName(profile.name || account?.name || "")
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
      const subjectIds = uniqueSubjectIds(profile.subjectIds || subjectIdsFromValue(profile.subject));
      const subject = subjectIds.length ? subjectIds.map(subjectLabel).join(", ") : cleanAutoText(profile.subject);
      return {
        name: profile.name || account.name,
        subject,
        subjectIds,
        furtherMathsModuleIds: Array.isArray(profile.furtherMathsModuleIds) ? profile.furtherMathsModuleIds : [],
        subjectGrades: tutorSubjectGrades(profile),
        admissionsTestIds: uniqueAdmissionTestIds(profile.admissionsTestIds || []),
        admissionsModuleIds: uniqueAdmissionModuleIds(profile.admissionsModuleIds || []),
        admissionsScores: profile.admissionsScores || {},
        university: cleanAutoText(profile.university),
        grade: cleanAutoText(profile.grade),
        rating: Number(profile.rating || 0),
        lessons: profile.lessons || 0,
        price: Number(profile.price || 0),
        level: cleanAutoText(profile.level),
        style: cleanAutoText(profile.detail || profile.style),
        badges: cleanAutoBadges(profile.badges),
        initials: "",
        score: Number(profile.score || 0),
        email: account.email,
        visible: !isCloudReady() || account.email === currentAccount?.email,
        photo: profile.photo || "",
        about: cleanAutoText(profile.about),
        sessions: cleanAutoText(profile.sessions)
      };
    });
  const cloudProfiles = cloudTutorProfiles
    .filter((profile) => profile.visible === true || profile.email === currentAccount?.email)
    .map((profile) => {
    const subjectIds = uniqueSubjectIds(profile.subjectIds || subjectIdsFromValue(profile.subject));
    return ({
    name: profile.name || "",
    subject: subjectIds.length ? subjectIds.map(subjectLabel).join(", ") : cleanAutoText(profile.subject),
    subjectIds,
    furtherMathsModuleIds: Array.isArray(profile.furtherMathsModuleIds) ? profile.furtherMathsModuleIds : [],
    subjectGrades: tutorSubjectGrades(profile),
    admissionsTestIds: uniqueAdmissionTestIds(profile.admissionsTestIds || []),
    admissionsModuleIds: uniqueAdmissionModuleIds(profile.admissionsModuleIds || []),
    admissionsScores: profile.admissionsScores || {},
    university: cleanAutoText(profile.university),
    grade: cleanAutoText(profile.grade),
    rating: Number(profile.rating || 0),
    lessons: Number(profile.lessons || 0),
    price: Number(profile.price || 0),
    level: cleanAutoText(profile.level),
    style: cleanAutoText(profile.detail || profile.style),
    badges: cleanAutoBadges(profile.badges),
    initials: profile.initials || "",
    score: Number(profile.score || 0),
    email: profile.email,
    visible: profile.visible === true,
    photo: profile.photo || profile.photoUrl || profile.profilePhoto || "",
    about: cleanAutoText(profile.about),
    sessions: cleanAutoText(profile.sessions)
  });
  });
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
  const gradeId = gradeIdFromValue(grade);
  const order = gradeSortOrder(gradeId);
  return order ? 8 - order : 0;
}

function getFilteredTutors() {
  const tutorName = nameFilter.value.trim().toLowerCase();
  const subject = subjectFilter.value;
  const admissionTest = admissionsFilter?.value || "All";
  const admissionModule = admissionsModuleFilter?.value || "All";
  const university = uniFilter.value.trim().toLowerCase();
  const minGrade = gradeFilter.value;

  const filtered = getAllTutors().filter((tutor) => {
    const nameMatch = !tutorName || tutor.name.toLowerCase().includes(tutorName);
    const subjectMatch = subject === "All" || tutorSubjectIds(tutor).includes(subject);
    const admissionMatch = admissionTest === "All" || tutorAdmissionTestIds(tutor).includes(admissionTest);
    const admissionModuleMatch = admissionModule === "All" || tutorAdmissionModuleIds(tutor).includes(admissionModule);
    const uniMatch = !university || tutor.university.toLowerCase().includes(university);
    const gradeMatch = tutorMeetsGradeFilter(tutor, subject, minGrade);
    const trialMatch = true;
    return nameMatch && subjectMatch && admissionMatch && admissionModuleMatch && uniMatch && gradeMatch && trialMatch;
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
      <div class="tutor-card-main">
        ${tutorPhotoMarkup(tutor, "avatar")}
        <div class="tutor-card-copy">
          <h3>${escapeHtml(tutor.name)}</h3>
          <p>${escapeHtml(tutorSubjectLabel(tutor))} · ${escapeHtml(tutor.university)}</p>
          ${tutor.style ? `<p>${escapeHtml(tutor.style)}</p>` : ""}
          <div class="chips">
            ${tutorLevelLabel(tutor) ? `<span class="chip">${escapeHtml(tutorLevelLabel(tutor))} tutoring</span>` : ""}
            ${tutorSubjectGradeChips(tutor).map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("")}
            ${tutorModuleLabels(tutor).map((module) => `<span class="chip">Further Maths: ${escapeHtml(module)}</span>`).join("")}
            ${tutorAdmissionsChips(tutor).map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("")}
            ${Number(tutor.lessons) ? `<span class="chip">${Number(tutor.lessons)} lessons</span>` : ""}
            ${(Array.isArray(tutor.badges) ? tutor.badges : []).map((badge) => `<span class="chip">${escapeHtml(badge)}</span>`).join("")}
          </div>
        </div>
        ${(getReviewsFor(tutor).length || Number(tutor.rating)) ? `<span class="rating tutor-card-rating">${getTutorRating(tutor).toFixed(2)} / 5</span>` : ""}
      </div>
      <div class="card-footer">
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

function getMessages() {
  const allMessages = readStore(storage.messages, {});
  const key = threadKey();
  const localMessages = allMessages[key] || [];
  const rawCloudThread = cloudMessages
    .filter((message) => message.threadKey === key)
    .map(cloudMessageToBubble);
  const cloudByLooseKey = new Map();
  rawCloudThread.forEach((message) => {
    const looseKey = looseMessageFingerprint(message);
    const existing = cloudByLooseKey.get(looseKey);
    if (!existing || (existing.direction !== "outgoing" && message.direction === "outgoing")) {
      cloudByLooseKey.set(looseKey, message);
    }
  });
  const cloudThread = [...cloudByLooseKey.values()];
  const cloudIds = new Set(cloudThread.map((message) => message.id).filter(Boolean));
  const cloudFingerprints = new Set(cloudThread.map(messageFingerprint));
  const unsyncedLocal = localMessages.filter((message) => (
    !cloudIds.has(message.id) && !cloudFingerprints.has(messageFingerprint(message))
  ));
  const seen = new Set();
  return [...cloudThread, ...unsyncedLocal]
    .filter((message) => {
      const signature = message.id || messageFingerprint(message);
      if (seen.has(signature)) return false;
      seen.add(signature);
      return true;
    })
    .sort((a, b) => (a.clientCreatedAt || 0) - (b.clientCreatedAt || 0));
}

async function saveMessage(message) {
  const allMessages = readStore(storage.messages, {});
  const key = threadKey();
  const messages = allMessages[key] || [];
  const recipientEmail = currentRecipientEmail();
  const allowed = await moderateOutgoingText(message.text || message.body || "");
  if (!allowed) return false;
  const enrichedMessage = {
    id: message.id || createId("message"),
    ...message,
    senderEmail: currentAccount.email,
    recipientEmail,
    clientCreatedAt: Date.now()
  };
  messages.push(enrichedMessage);
  allMessages[key] = messages;
  writeStore(storage.messages, allMessages);
  try {
    const cloudMessage = await saveMessageToCloud(key, enrichedMessage);
    if (cloudMessage) {
      cloudMessages = [
        ...cloudMessages.filter((item) => item.id !== cloudMessage.id),
        cloudMessage
      ].sort((a, b) => messageTimestamp(a) - messageTimestamp(b));
      allMessages[key] = (allMessages[key] || []).filter((item) => item.id !== enrichedMessage.id);
      writeStore(storage.messages, allMessages);
      await loadCloudData();
    }
  } catch {
    showConfirmation("Message saved on this device, but Firebase did not save it yet. Check Firestore rules and try again.");
  }
  queueEmail(recipientEmail, "New tutrSTEM message", `${currentAccount.name} sent you a message on tutrSTEM. Log in to read and reply.`, {
    key: `message-${enrichedMessage.id}`,
    threadKey: key,
    type: "message"
  });
  updateMessageBadge();
  updateBookingBadge();
  return true;
}

async function saveMessageToCloud(key, message) {
  if (!isCloudReady() || !currentAccount) return;
  const recipientEmail = normalizeEmail(message.recipientEmail || currentRecipientEmail());
  const senderEmail = normalizeEmail(currentAccount.email);
  const participantEmails = [senderEmail, recipientEmail].filter(Boolean);
  const payload = {
    threadKey: key,
    participantEmails: participantEmails.map(normalizeEmail),
    senderEmail,
    recipientEmail,
    senderRole: currentAccount.role,
    body: message.text,
    direction: message.direction,
    timeLabel: message.time,
    readBy: [senderEmail],
    clientCreatedAt: message.clientCreatedAt,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  await db.collection("messages").doc(message.id).set(payload, { merge: true });
  return { id: message.id, ...payload };
}

function markCurrentThreadRead() {
  if (!currentAccount?.email) return;
  const ownEmail = normalizeEmail(currentAccount.email);
  const studentEmail = currentAccount.role === "tutor" ? selectedStudentAccount?.email : currentAccount.email;
  const tutorAddress = currentAccount.role === "tutor" ? currentAccount.email : tutorEmail(selectedThreadTutor);
  const unread = cloudMessages.filter((message) => {
    const sender = normalizeEmail(message.senderEmail);
    const readBy = (message.readBy || []).map(normalizeEmail);
    return sender !== ownEmail
      && messageIsInThread(message, studentEmail, tutorAddress)
      && !readBy.includes(ownEmail);
  });
  if (!unread.length) {
    updateMessageBadge();
    return;
  }
  cloudMessages = cloudMessages.map((message) => unread.some((item) => item.id === message.id)
    ? { ...message, readBy: [...new Set([...(message.readBy || []), currentAccount.email])] }
    : message);
  updateMessageBadge();
  if (isCloudReady()) {
    unread.forEach((message) => {
      db.collection("messages").doc(message.id).set({
        readBy: firebase.firestore.FieldValue.arrayUnion(currentAccount.email)
      }, { merge: true }).catch(() => {});
    });
  }
}

function messageBubbleHtml(message) {
  const id = escapeHtml(message.id || "");
  return `
    <p class="bubble ${escapeHtml(message.direction)}">
      ${escapeHtml(message.text)}
      <time>${escapeHtml(message.time)}</time>
      ${id ? `<button class="message-report" type="button" data-report-message="${id}">Report</button>` : ""}
    </p>
  `;
}

function attachReportHandlers(container) {
  container.querySelectorAll("[data-report-message]").forEach((button) => {
    button.addEventListener("click", async () => {
      const message = getMessages().find((item) => item.id === button.dataset.reportMessage);
      if (!message || !currentAccount) return;
      const category = window.prompt("Report category: contact details, inappropriate behaviour, bullying/harassment, safeguarding concern, spam/scam, or other.", "safeguarding concern");
      if (!category) return;
      const notes = window.prompt("Optional: add any extra detail for the safeguarding team.", "") || "";
      await saveSafetyEvent({
        type: "reported_message",
        source: "manual",
        severity: /safeguarding|inappropriate|bullying|harassment/i.test(category) ? "HIGH" : "MEDIUM",
        category,
        reason: `Manual report: ${category}`,
        messageId: message.id,
        messageBody: message.text,
        reporterEmail: currentAccount.email,
        reporterRole: currentAccount.role,
        notes,
        recipientEmail: message.recipientEmail || currentRecipientEmail(),
        threadKey: threadKey()
      });
      queueEmail("tutrstem@gmail.com", "New tutrSTEM moderation report", `${currentAccount.name} submitted a ${category} report for review.`, {
        key: `report-${message.id}-${Date.now()}`,
        type: "moderation_report"
      });
      signupStatus.textContent = "Report sent to the tutrSTEM safeguarding team.";
      signupStatus.classList.add("success");
    });
  });
}

function renderChat(role) {
  const chatPartner = role === "tutor" ? (selectedStudentAccount ? studentSummary(selectedStudentAccount).name : "student and parent") : selectedThreadTutor.name;
  document.querySelector("#chatTitle").textContent = role === "tutor" ? "Student and parent chat" : "Tutor chat";
  document.querySelector("#chatWith").textContent = chatPartner;
  chatInput.placeholder = `Message ${chatPartner}...`;
  const messages = getMessages();
  markCurrentThreadRead();
  chatMessages.innerHTML = messages.length ? messages.map(messageBubbleHtml).join("") : `<p class="empty-copy">No messages yet.</p>`;
  attachReportHandlers(chatMessages);
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

    markCurrentThreadRead();
    threadList.innerHTML = students.map((student) => {
      const summary = studentSummary(student);
      const unread = unreadCountForThread(student.email, currentAccount.email);
      return `
        <button class="thread-button ${student.email === selectedStudentAccount.email ? "active" : ""}" type="button" data-student-thread="${escapeHtml(student.email)}">
          <span class="avatar small-avatar">${escapeHtml(summary.initials)}</span>
          <span><strong>${escapeHtml(summary.name)}</strong><small>${escapeHtml(summary.subject)}</small></span>
          ${unread ? `<span class="message-badge thread-unread">${unread}</span>` : ""}
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
    markCurrentThreadRead();
    threadList.innerHTML = availableTutors.map((tutor) => {
      const unread = unreadCountForThread(currentAccount.email, tutorEmail(tutor));
      return `
        <button class="thread-button ${tutorId(tutor) === tutorId(selectedThreadTutor) ? "active" : ""}" type="button" data-thread="${escapeHtml(tutorId(tutor))}">
          <span class="avatar small-avatar">${escapeHtml(tutor.initials || initialsFromName(tutor.name))}</span>
          <span><strong>${escapeHtml(tutor.name)}</strong><small>${escapeHtml(tutorSubjectLabel(tutor))}</small></span>
          ${unread ? `<span class="message-badge thread-unread">${unread}</span>` : ""}
        </button>
      `;
    }).join("");

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
  const messages = getMessages();
  messagePageMessages.innerHTML = messages.length ? messages.map(messageBubbleHtml).join("") : `<p class="empty-copy">No messages yet.</p>`;
  attachReportHandlers(messagePageMessages);
  messagePageMessages.scrollTop = messagePageMessages.scrollHeight;
}

async function updateSafetyEventStatus(id, status, notes = "") {
  const reviewer = normalizeEmail(currentAccount?.email);
  const updates = {
    status,
    reviewer,
    reviewerNotes: notes,
    reviewedAtLabel: nowLabel(),
    reviewedAtMs: Date.now()
  };
  cloudSafetyEvents = cloudSafetyEvents.map((event) => event.id === id ? { ...event, ...updates } : event);
  const localEvents = readStore(storage.safetyEvents, []).map((event) => event.id === id ? { ...event, ...updates } : event);
  writeStore(storage.safetyEvents, localEvents);
  if (isCloudReady()) {
    await db.collection("safetyEvents").doc(id).set({
      ...updates,
      reviewedAt: firebase.firestore.FieldValue.serverTimestamp(),
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
  }
  await writeModerationAudit(id, `Status changed to ${status}`, notes);
}

function getModerationEvents() {
  const merged = [...cloudSafetyEvents, ...readStore(storage.safetyEvents, [])];
  const seen = new Set();
  return merged
    .filter((event) => {
      if (!event?.id || seen.has(event.id)) return false;
      seen.add(event.id);
      return true;
    })
    .sort((a, b) => Number(b.createdAtMs || 0) - Number(a.createdAtMs || 0));
}

function renderModerationPage() {
  if (!moderationList) return;
  if (!isModerationUser()) {
    moderationList.innerHTML = `<p class="empty-copy">You do not have access to moderation.</p>`;
    return;
  }
  const statusFilter = moderationStatusFilter?.value || "open";
  const severityFilter = moderationSeverityFilter?.value || "all";
  const openStatuses = new Set(["NEW", "UNDER REVIEW", "ESCALATED"]);
  const events = getModerationEvents().filter((event) => {
    const status = event.status || "NEW";
    const statusMatch = statusFilter === "all"
      || (statusFilter === "open" ? openStatuses.has(status) : status === statusFilter);
    const severityMatch = severityFilter === "all" || event.severity === severityFilter;
    return statusMatch && severityMatch;
  });
  moderationList.innerHTML = events.length ? events.map((event) => `
    <article class="moderation-card ${escapeHtml(String(event.severity || "LOW").toLowerCase())}">
      <div class="moderation-card-top">
        <strong>${escapeHtml(event.severity || "LOW")} · ${escapeHtml(event.type || "event")}</strong>
        <span>${escapeHtml(event.status || "NEW")}</span>
      </div>
      <p>${escapeHtml(event.reason || event.category || "Review item")}</p>
      ${event.messageBody ? `<blockquote>${escapeHtml(event.messageBody)}</blockquote>` : ""}
      <dl>
        <div><dt>Sender</dt><dd>${escapeHtml(event.senderName || event.senderEmail || "")} (${escapeHtml(event.senderRole || "")})</dd></div>
        <div><dt>Recipient</dt><dd>${escapeHtml(event.recipientEmail || "")}</dd></div>
        <div><dt>Reporter</dt><dd>${escapeHtml(event.reporterEmail || "Automatic")}</dd></div>
        <div><dt>Time</dt><dd>${escapeHtml(event.createdLabel || "")}</dd></div>
      </dl>
      ${event.reviewerNotes ? `<p class="moderation-note">${escapeHtml(event.reviewerNotes)}</p>` : ""}
      <div class="booking-actions">
        <button class="secondary-btn compact-btn" type="button" data-moderation-status="UNDER REVIEW" data-event-id="${escapeHtml(event.id)}">Review</button>
        <button class="secondary-btn compact-btn" type="button" data-moderation-status="CLEARED" data-event-id="${escapeHtml(event.id)}">Clear</button>
        <button class="secondary-btn compact-btn" type="button" data-moderation-status="ACTION TAKEN" data-event-id="${escapeHtml(event.id)}">Action taken</button>
        <button class="secondary-btn compact-btn" type="button" data-moderation-status="ESCALATED" data-event-id="${escapeHtml(event.id)}">Escalate</button>
      </div>
    </article>
  `).join("") : `<p class="empty-copy">No moderation items match this filter.</p>`;

  moderationList.querySelectorAll("[data-moderation-status]").forEach((button) => {
    button.addEventListener("click", async () => {
      const status = button.dataset.moderationStatus;
      const notes = window.prompt(`Internal note for ${status}:`, "") || "";
      if (["ACTION TAKEN", "ESCALATED"].includes(status) && !window.confirm(`Confirm ${status.toLowerCase()} for this moderation item?`)) return;
      await updateSafetyEventStatus(button.dataset.eventId, status, notes);
      renderModerationPage();
    });
  });
}

function renderProfile(role) {
  if (!currentAccount) return;

  const profile = getProfile();
  profileName.value = profile.name || currentAccount.name;
  selectedProfileSubjectIds = uniqueSubjectIds(profile.subjectIds || subjectIdsFromValue(profile.subject));
  selectedProfileModuleIds = Array.isArray(profile.furtherMathsModuleIds) ? profile.furtherMathsModuleIds : [];
  selectedProfileSubjectGrades = tutorSubjectGrades(profile);
  selectedAdmissionsTestIds = uniqueAdmissionTestIds(profile.admissionsTestIds || []);
  selectedAdmissionsModuleIds = uniqueAdmissionModuleIds(profile.admissionsModuleIds || []);
  selectedAdmissionsScores = profile.admissionsScores && typeof profile.admissionsScores === "object" ? { ...profile.admissionsScores } : {};
  if (profileSubjectSearch) profileSubjectSearch.value = "";
  if (profileAdmissionsSearch) profileAdmissionsSearch.value = "";
  hideSubjectSuggestions();
  hideAdmissionsSuggestions();
  renderProfileSubjectPicker();
  renderAdmissionsPicker();
  profileDetail.value = cleanAutoText(profile.detail);
  profileUniversity.value = cleanAutoText(profile.university);
  if (profileLevel) profileLevel.value = cleanAutoText(profile.level);
  pendingProfilePhoto = profile.photo || "";
  updateProfilePhotoPreview(pendingProfilePhoto, profile.name || currentAccount.name);
  profileAbout.value = cleanAutoText(profile.about);
  profileSessions.value = cleanAutoText(profile.sessions);
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
  return ratings[tutor.name] || [];
}

function renderPublicProfile() {
  const reviews = getReviewsFor(selectedTutor);
  const isOwnTutorProfile = currentAccount?.role === "tutor" && selectedTutor.email === currentAccount.email;
  const selectedSubjectLabel = tutorSubjectLabel(selectedTutor);
  const profileMeta = [selectedSubjectLabel, selectedTutor.university].filter(Boolean).join(" · ");
  const profileChips = [
    tutorLevelLabel(selectedTutor) ? `${tutorLevelLabel(selectedTutor)} tutoring` : "",
    ...tutorSubjectGradeChips(selectedTutor),
    ...tutorModuleLabels(selectedTutor).map((module) => `Further Maths: ${module}`),
    ...tutorAdmissionsChips(selectedTutor),
    ...(Array.isArray(selectedTutor.badges) ? selectedTutor.badges : [])
  ].filter(Boolean);
  publicProfile.innerHTML = `
    <div class="profile-hero-card">
      ${tutorPhotoMarkup(selectedTutor, "profile-photo")}
      <div>
        <p class="eyebrow">Tutor profile</p>
        <h2>${escapeHtml(selectedTutor.name)}</h2>
        ${selectedSubjectLabel ? `<p class="profile-rate">${escapeHtml(selectedSubjectLabel)}</p>` : ""}
        ${profileMeta ? `<p>${escapeHtml(profileMeta)}</p>` : ""}
        ${profileChips.length ? `<div class="chips">${profileChips.map((chip) => `<span class="chip">${escapeHtml(chip)}</span>`).join("")}</div>` : ""}
      </div>
      <aside class="profile-actions">
        <strong>${reviews.length ? `${getTutorRating(selectedTutor).toFixed(2)} / 5` : "No reviews yet"}</strong>
        <span>${reviews.length} review${reviews.length === 1 ? "" : "s"}</span>
        ${isOwnTutorProfile
          ? `<button class="primary-btn wide" type="button" id="profileEdit">Edit profile</button>`
          : `<button class="primary-btn wide" type="button" id="profileBook">Book lessons</button>
             <button class="secondary-btn wide" type="button" id="profileMessage">Message tutor</button>`}
        <button class="secondary-btn wide" type="button" id="profileReviews">Read reviews</button>
      </aside>
    </div>
    ${(selectedTutor.about || selectedTutor.sessions || selectedTutor.style) ? `<div class="profile-copy-grid">
      ${selectedTutor.about ? `<section><h3>About me</h3><p>${escapeHtml(selectedTutor.about)}</p></section>` : ""}
      ${(selectedTutor.sessions || selectedTutor.style) ? `<section><h3>About my sessions</h3><p>${escapeHtml(selectedTutor.sessions || selectedTutor.style)}</p></section>` : ""}
    </div>` : ""}
  `;

  document.querySelector("#profileEdit")?.addEventListener("click", () => showPage("dashboard", { editProfile: true }));
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
  reviewList.innerHTML = reviews.length ? reviews.map((review) => `
    <article class="review-card">
      <strong>${"★".repeat(review.score)}${"☆".repeat(5 - review.score)}</strong>
      ${review.note ? `<p>${escapeHtml(review.note)}</p>` : ""}
      <span>${escapeHtml(review.by)} · ${escapeHtml(review.time)}</span>
    </article>
  `).join("") : `<p class="empty-copy">No reviews yet.</p>`;
}

function getBookings() {
  if (cloudBookings.length && currentAccount?.email) {
    const ownEmail = normalizeEmail(currentAccount.email);
    return cloudBookings.filter((booking) => (
      currentAccount.role === "tutor"
        ? normalizeEmail(booking.tutorEmail) === ownEmail
        : normalizeEmail(booking.studentEmail) === ownEmail
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

function localDateTimeInputValue(date) {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}T${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
}

function localDateInputValue(date) {
  return localDateTimeInputValue(date).slice(0, 10);
}

function nextTenMinuteSlot(date = new Date()) {
  const next = new Date(date.getTime());
  next.setSeconds(0, 0);
  const remainder = next.getMinutes() % 10;
  if (remainder) next.setMinutes(next.getMinutes() + (10 - remainder));
  if (next.getTime() <= date.getTime()) next.setMinutes(next.getMinutes() + 10);
  return next;
}

function updateBookingDateConstraints() {
  const nextSlot = nextTenMinuteSlot();
  if (bookingDate) bookingDate.min = localDateInputValue(nextSlot);
  const createdHours = bookingHour && !bookingHour.options.length;
  if (bookingHour && !bookingHour.options.length) {
    bookingHour.innerHTML = Array.from({ length: 24 }, (_, hour) => (
      `<option value="${pad2(hour)}">${pad2(hour)}</option>`
    )).join("");
  }
  if (bookingHour && (createdHours || !bookingHour.value)) bookingHour.value = pad2(nextSlot.getHours());
  if (bookingMinute && (!bookingMinute.dataset.ready || !bookingMinute.value)) {
    bookingMinute.value = pad2(nextSlot.getMinutes());
    bookingMinute.dataset.ready = "true";
  }
  updateMinuteButtons();
  syncBookingDateTime();
}

function bookingHourOptions(selectedHour = "") {
  return Array.from({ length: 24 }, (_, hour) => {
    const value = pad2(hour);
    return `<option value="${value}" ${value === selectedHour ? "selected" : ""}>${value}</option>`;
  }).join("");
}

function bookingMinuteButtons(selectedMinute = "00") {
  return ["00", "10", "20", "30", "40", "50"].map((minute) => `
    <button type="button" data-reschedule-minute="${minute}" class="${minute === selectedMinute ? "active" : ""}">${minute}</button>
  `).join("");
}

function updateMinuteButtons() {
  bookingMinuteOptions?.querySelectorAll("[data-minute]").forEach((button) => {
    button.classList.toggle("active", button.dataset.minute === bookingMinute?.value);
  });
}

function syncBookingDateTime() {
  if (!bookingDateTime) return "";
  const date = bookingDate?.value || "";
  const hour = bookingHour?.value || "";
  const minute = bookingMinute?.value || "";
  bookingDateTime.value = date && hour && minute ? `${date}T${hour}:${minute}` : "";
  updateMinuteButtons();
  return bookingDateTime.value;
}

function validateBookingDateTime(value) {
  if (!value) return "Choose a lesson time.";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Choose a valid lesson time.";
  if (date.getTime() <= Date.now()) return "Choose a future lesson time.";
  if (date.getMinutes() % 10 !== 0 || date.getSeconds() !== 0 || date.getMilliseconds() !== 0) {
    return "Lesson times must start on a 10-minute slot, for example 19:30, 19:40, or 19:50.";
  }
  return "";
}

function addDays(date, days) {
  const next = new Date(date.getTime());
  next.setDate(next.getDate() + days);
  return next;
}

function addMonthsSameDate(date, months) {
  const next = new Date(date.getTime());
  const targetDate = date.getDate();
  next.setMonth(date.getMonth() + months, targetDate);
  return next;
}

function recurringOffsetsFor(type) {
  if (type === "Weekly lesson") return [0, 7, 14, 21, 28];
  if (type === "Twice weekly lesson") return [0, 3, 7, 10, 14];
  if (type === "Fortnightly lesson") return [0, 14, 28, 42, 56];
  return [0];
}

function isRecurringType(type) {
  return ["Weekly lesson", "Twice weekly lesson", "Fortnightly lesson", "Monthly lesson"].includes(type);
}

function recurrenceRuleFor(type) {
  if (type === "Twice weekly lesson") return { frequency: "weekly", interval: 1, daysBetween: [0, 3] };
  if (type === "Fortnightly lesson") return { frequency: "weekly", interval: 2, daysBetween: [0] };
  if (type === "Monthly lesson") return { frequency: "monthly", interval: 1 };
  return { frequency: "weekly", interval: 1, daysBetween: [0] };
}

function occurrenceKeyFromDate(value) {
  return localDateTimeInputValue(new Date(value));
}

function bookingTimeValue(booking) {
  const time = new Date(booking?.dateTime || "").getTime();
  return Number.isFinite(time) ? time : Number.MAX_SAFE_INTEGER;
}

function sortBookingsSoonestFirst(items) {
  return [...items].sort((a, b) => bookingTimeValue(a) - bookingTimeValue(b));
}

function bookingIsCancelled(booking) {
  const status = String(booking?.status || "").toLowerCase();
  return Boolean(booking?.cancelled) || status === "cancelled by student" || status === "cancelled by tutor";
}

function bookingDisplayKey(booking) {
  return [
    normalizeEmail(booking?.tutorEmail),
    normalizeEmail(booking?.studentEmail),
    String(booking?.type || "").trim().toLowerCase(),
    String(booking?.subject || "").trim().toLowerCase(),
    String(booking?.dateTime || "").trim()
  ].join("|");
}

function dedupeBookingsByLesson(items) {
  const seen = new Set();
  return items.filter((booking) => {
    const key = bookingDisplayKey(booking);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function occurrenceDateFor(series, index) {
  const start = new Date(series.seriesStartDateTime || series.dateTime);
  if (series.recurrenceRule?.frequency === "monthly") return addMonthsSameDate(start, index);
  const daysBetween = series.recurrenceRule?.daysBetween || [0];
  const cycle = Math.floor(index / daysBetween.length);
  const dayOffset = (cycle * 7 * (series.recurrenceRule?.interval || 1)) + daysBetween[index % daysBetween.length];
  return addDays(start, dayOffset);
}

function expandRecurringBooking(series, limit = 5, includePrevious = false) {
  if (!series.isRecurringSeries) return [series];
  const results = [];
  const now = Date.now();
  const overrides = series.occurrenceOverrides || {};
  const max = Number(series.lessonCount || 260);
  for (let index = 0; index < max && results.length < limit; index += 1) {
    const scheduled = occurrenceDateFor(series, index);
    const key = occurrenceKeyFromDate(scheduled);
    const override = overrides[key] || {};
    if (bookingIsCancelled(override)) continue;
    const dateTime = override.dateTime || key;
    if (!includePrevious && new Date(dateTime).getTime() < now) continue;
    results.push({
      ...series,
      ...override,
      id: `${series.id}::${key}`,
      parentBookingId: series.id,
      occurrenceKey: key,
      dateTime,
      type: series.type,
      status: override.status || series.status || "Accepted",
      isGeneratedOccurrence: true
    });
  }
  return results;
}

function getDisplayBookings() {
  return dedupeBookingsByLesson(sortBookingsSoonestFirst(getBookings()
    .filter((booking) => !bookingIsCancelled(booking))
    .flatMap((booking) => booking.isRecurringSeries ? expandRecurringBooking(booking, 5, false) : [booking])
    .filter((booking) => !bookingIsCancelled(booking))));
}

function hasUsedFreeTrialWithTutor(tutorAddress) {
  const tutorKey = normalizeEmail(tutorAddress);
  return getDisplayBookings().some((booking) => normalizeEmail(booking.tutorEmail) === tutorKey && booking.isFreeTrial);
}

function buildBookingRecord(baseBooking) {
  const recurring = isRecurringType(baseBooking.type);
  if (!recurring) return {
    ...baseBooking,
    id: createId("booking"),
    status: "Pending tutor approval",
    isRecurringSeries: false
  };
  return {
    ...baseBooking,
    id: createId("series"),
    status: "Accepted",
    isRecurringSeries: true,
    seriesStartDateTime: baseBooking.dateTime,
    recurrenceRule: recurrenceRuleFor(baseBooking.type),
    occurrenceOverrides: {},
    lessonCount: null
  };
}

function renderBookingTutorOptions() {
  if (!bookingTutor) return;
  const availableTutors = getAllTutors();
  const query = normalizeEmail(bookingTutorSearch?.value || "");
  const filteredTutors = availableTutors.filter((tutor) => {
    if (!query) return true;
    return `${tutor.name} ${tutorSubjectLabel(tutor)} ${tutor.email || ""}`.toLowerCase().includes(query);
  });
  const options = filteredTutors.length ? filteredTutors : availableTutors;
  if (filteredTutors.length === 0 && query) {
    bookingTutor.innerHTML = `<option value="">No matching tutor</option>`;
    return;
  }
  if (!options.some((tutor) => tutorId(tutor) === tutorId(selectedTutor))) {
    selectedTutor = options[0] || selectedTutor;
  }
  bookingTutor.innerHTML = options.map((tutor) => `
    <option value="${escapeHtml(tutorId(tutor))}" ${tutorId(tutor) === tutorId(selectedTutor) ? "selected" : ""}>${escapeHtml(tutor.name)} · ${escapeHtml(tutorSubjectLabel(tutor))}</option>
  `).join("");
}

function bookingPersonKey(booking) {
  return currentAccount?.role === "tutor"
    ? normalizeEmail(booking.studentEmail)
    : normalizeEmail(booking.tutorEmail);
}

function bookingPersonName(booking) {
  return currentAccount?.role === "tutor"
    ? (booking.student || booking.studentEmail || "Student")
    : (booking.tutor || booking.tutorEmail || "Tutor");
}

function populateBookingViewFilter(bookings) {
  if (!bookingViewFilter) return "all";
  const previousValue = bookingViewFilter.value || "all";
  const people = new Map();
  bookings.forEach((booking) => {
    const key = bookingPersonKey(booking);
    if (!key || people.has(key)) return;
    people.set(key, bookingPersonName(booking));
  });
  const noun = currentAccount?.role === "tutor" ? "student" : "tutor";
  if (bookingViewFilterLabel) bookingViewFilterLabel.textContent = `Show ${noun} bookings`;
  bookingViewFilter.innerHTML = `<option value="all">Overall bookings</option>${[...people.entries()]
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([key, name]) => `<option value="${escapeHtml(key)}">${escapeHtml(name)}</option>`)
    .join("")}`;
  bookingViewFilter.value = people.has(previousValue) ? previousValue : "all";
  return bookingViewFilter.value;
}

function applyBookingPersonFilter(bookings, selectedKey) {
  if (!selectedKey || selectedKey === "all") return bookings;
  return bookings.filter((booking) => bookingPersonKey(booking) === selectedKey);
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
  updateBookingBadge();
}

function updateSeriesEverywhere(seriesId, updater) {
  const allBookings = readStore(storage.bookings, {});
  let updatedSeries = null;
  Object.keys(allBookings).forEach((key) => {
    allBookings[key] = allBookings[key].map((booking) => {
      if (booking.id !== seriesId) return booking;
      updatedSeries = updater({ ...booking });
      return { ...updatedSeries, updated: nowLabel() };
    });
  });
  writeStore(storage.bookings, allBookings);
  if (updatedSeries) {
    cloudBookings = cloudBookings.map((booking) => booking.id === seriesId ? { ...updatedSeries, updated: nowLabel() } : booking);
    updateBookingInCloud(seriesId, updatedSeries).catch(() => {});
  }
  updateBookingBadge();
}

function scopeForSeriesAction(booking, actionLabel) {
  if (!booking.isGeneratedOccurrence) return "single";
  const choice = window.prompt(`${actionLabel}: type "1" for just this lesson, or "future" for this and all future lessons.`, "1");
  return String(choice || "").toLowerCase().startsWith("future") ? "future" : "single";
}

function updateOccurrenceOrBooking(booking, updates, scope = "single") {
  if (!booking.isGeneratedOccurrence) {
    updateBookingEverywhere(booking.id, updates);
    return;
  }
  updateSeriesEverywhere(booking.parentBookingId, (series) => {
    const overrides = { ...(series.occurrenceOverrides || {}) };
    if (scope === "future") {
      const start = new Date(booking.occurrenceKey).getTime();
      const rescheduleTarget = updates.proposedDateTime || updates.dateTime || "";
      const rescheduleDelta = rescheduleTarget ? new Date(rescheduleTarget).getTime() - new Date(booking.dateTime || booking.occurrenceKey).getTime() : 0;
      expandRecurringBooking(series, 260, true).forEach((occurrence) => {
        if (new Date(occurrence.occurrenceKey).getTime() >= start) {
          const shiftedUpdates = { ...updates };
          if (rescheduleTarget && Number.isFinite(rescheduleDelta)) {
            const shifted = localDateTimeInputValue(new Date(new Date(occurrence.dateTime || occurrence.occurrenceKey).getTime() + rescheduleDelta));
            if (updates.proposedDateTime) shiftedUpdates.proposedDateTime = shifted;
            if (updates.dateTime) shiftedUpdates.dateTime = shifted;
            if (updates.rescheduleThread?.latestProposedDateTime) {
              shiftedUpdates.rescheduleThread = {
                ...updates.rescheduleThread,
                latestProposedDateTime: shifted
              };
            }
          }
          overrides[occurrence.occurrenceKey] = { ...(overrides[occurrence.occurrenceKey] || {}), ...shiftedUpdates };
        }
      });
    } else {
      overrides[booking.occurrenceKey] = { ...(overrides[booking.occurrenceKey] || {}), ...updates };
    }
    return { ...series, occurrenceOverrides: overrides };
  });
}

function promptForLessonDateTime(label = "Choose a new lesson time") {
  const value = window.prompt(`${label}\nUse YYYY-MM-DD HH:MM. Minutes must be 00, 10, 20, 30, 40, or 50.`);
  if (!value) return "";
  const match = value.trim().match(/^(\d{4}-\d{2}-\d{2})[ T](\d{2}):(\d{2})$/);
  if (!match) {
    signupStatus.textContent = "Use the format YYYY-MM-DD HH:MM.";
    signupStatus.classList.remove("success");
    return "";
  }
  const dateTime = `${match[1]}T${match[2]}:${match[3]}`;
  const error = validateBookingDateTime(dateTime);
  if (error) {
    signupStatus.textContent = error;
    signupStatus.classList.remove("success");
    return "";
  }
  return dateTime;
}

function activeRescheduleThread(booking) {
  return booking.rescheduleThread || { status: "open", history: [] };
}

function rescheduleUpdates(booking, proposedDateTime, proposedBy) {
  const thread = activeRescheduleThread(booking);
  const history = [...(thread.history || []), {
    proposedDateTime,
    proposedBy,
    proposedByName: currentAccount.name,
    proposedAt: nowLabel()
  }];
  return {
    status: proposedBy === "tutor" ? "Reschedule requested by tutor" : "Reschedule requested by student",
    proposedDateTime,
    rescheduleThread: {
      status: "open",
      latestProposedDateTime: proposedDateTime,
      latestProposedBy: proposedBy,
      history
    }
  };
}

function bookingNotificationRecipient(booking) {
  return currentAccount.role === "tutor" ? booking.studentEmail : booking.tutorEmail;
}

function withBookingSeenByCurrent(updates = {}, recipientEmail = "") {
  const actor = normalizeEmail(currentAccount?.email);
  const recipient = normalizeEmail(recipientEmail);
  return {
    ...updates,
    seenBy: actor ? [actor] : [],
    unseenFor: recipient ? [recipient] : []
  };
}

function recurringCancelButtons(booking, status) {
  const id = escapeHtml(booking.id);
  if (!booking.isGeneratedOccurrence) {
    return `<button class="secondary-btn compact-btn" type="button" data-booking-action="${escapeHtml(status)}" data-booking-id="${id}">Cancel</button>`;
  }
  return `
    <button class="secondary-btn compact-btn" type="button" data-booking-action="${escapeHtml(status)}" data-booking-id="${id}" data-booking-scope="single">Cancel this</button>
    <button class="secondary-btn compact-btn" type="button" data-booking-action="${escapeHtml(status)}" data-booking-id="${id}" data-booking-scope="future">Cancel future</button>
  `;
}

function rescheduleDecisionButtons(booking, action, singleLabel, futureLabel) {
  const id = escapeHtml(booking.id);
  if (!booking.isGeneratedOccurrence) {
    return `<button class="secondary-btn compact-btn" type="button" data-booking-action="${escapeHtml(action)}" data-booking-id="${id}">${escapeHtml(singleLabel)}</button>`;
  }
  return `
    <button class="secondary-btn compact-btn" type="button" data-booking-action="${escapeHtml(action)}" data-booking-id="${id}" data-booking-scope="single">${escapeHtml(singleLabel)}</button>
    <button class="secondary-btn compact-btn" type="button" data-booking-action="${escapeHtml(action)}" data-booking-id="${id}" data-booking-scope="future">${escapeHtml(futureLabel)}</button>
  `;
}

function recurringAcceptButtons(booking) {
  const id = escapeHtml(booking.id);
  if (!booking.isGeneratedOccurrence) {
    return `<button class="secondary-btn compact-btn" type="button" data-booking-action="Accepted" data-booking-id="${id}">Accept</button>`;
  }
  return `
    <button class="secondary-btn compact-btn" type="button" data-booking-action="Accepted" data-booking-id="${id}" data-booking-scope="single">Accept this</button>
    <button class="secondary-btn compact-btn" type="button" data-booking-action="Accepted" data-booking-id="${id}" data-booking-scope="future">Accept future</button>
  `;
}

function bookingActions(booking) {
  const id = escapeHtml(booking.id);
  const status = booking.status || "Pending tutor approval";
  if (["Cancelled by student", "Cancelled by tutor"].includes(status)) return "";
  const needsTutorDecision = status === "Pending tutor approval" || status === "Reschedule requested by student";
  const hasReschedule = status === "Reschedule requested by student" || status === "Reschedule requested by tutor";
  const canRespondToReschedule = hasReschedule
    && ((status === "Reschedule requested by student" && currentAccount?.role === "tutor")
      || (status === "Reschedule requested by tutor" && currentAccount?.role !== "tutor"));
  const proposed = booking.proposedDateTime ? `<small class="booking-proposed">Proposed: ${escapeHtml(formatBookingDate(booking.proposedDateTime))}</small>` : "";

  if (currentAccount?.role === "tutor") {
    return `
      ${proposed}
      ${needsTutorDecision && !hasReschedule ? `${recurringAcceptButtons(booking)}
      <button class="secondary-btn compact-btn" type="button" data-booking-action="Rejected" data-booking-id="${id}">Reject</button>` : ""}
      ${canRespondToReschedule ? `${rescheduleDecisionButtons(booking, "Accept reschedule", "Accept time", "Accept future")}
      <button class="secondary-btn compact-btn" type="button" data-open-reschedule="${id}" data-reschedule-action="Counter reschedule">Counter</button>
      ${rescheduleDecisionButtons(booking, "Decline reschedule", "Decline", "Decline future")}` : ""}
      <button class="secondary-btn compact-btn" type="button" data-open-reschedule="${id}" data-reschedule-action="Reschedule requested by tutor">Suggest time</button>
      ${recurringCancelButtons(booking, "Cancelled by tutor")}
      ${booking.studentEmail ? `<button class="secondary-btn compact-btn" type="button" data-view-student="${escapeHtml(booking.studentEmail)}">Student</button>` : ""}
    `;
  }

  return `
    ${proposed}
    ${canRespondToReschedule ? `${rescheduleDecisionButtons(booking, "Accept reschedule", "Accept time", "Accept future")}
    <button class="secondary-btn compact-btn" type="button" data-open-reschedule="${id}" data-reschedule-action="Counter reschedule">Counter</button>
    ${rescheduleDecisionButtons(booking, "Decline reschedule", "Decline", "Decline future")}` : ""}
    <button class="secondary-btn compact-btn" type="button" data-open-reschedule="${id}" data-reschedule-action="Reschedule requested by student">Reschedule</button>
    ${recurringCancelButtons(booking, "Cancelled by student")}
  `;
}

function renderReschedulePicker(booking) {
  if (activeReschedulePicker?.bookingId !== booking.id) return "";
  const nextSlot = nextTenMinuteSlot(new Date(booking.dateTime || Date.now()));
  const selectedDate = activeReschedulePicker.date || localDateInputValue(nextSlot);
  const selectedHour = activeReschedulePicker.hour || pad2(nextSlot.getHours());
  const selectedMinute = activeReschedulePicker.minute || pad2(nextSlot.getMinutes());
  const action = escapeHtml(activeReschedulePicker.action || "Reschedule requested by student");
  const id = escapeHtml(booking.id);
  const recurringButtons = booking.isGeneratedOccurrence
    ? `<button class="primary-btn compact-btn" type="button" data-submit-reschedule="${id}" data-reschedule-action="${action}" data-booking-scope="single">Send for this lesson</button>
       <button class="primary-btn compact-btn" type="button" data-submit-reschedule="${id}" data-reschedule-action="${action}" data-booking-scope="future">Send for future lessons</button>`
    : `<button class="primary-btn compact-btn" type="button" data-submit-reschedule="${id}" data-reschedule-action="${action}" data-booking-scope="single">Send new time</button>`;
  return `
    <div class="reschedule-picker" data-reschedule-picker="${id}">
      <strong>${activeReschedulePicker.action === "Counter reschedule" ? "Counter-propose a time" : "Suggest a new time"}</strong>
      <div class="booking-time-grid">
        <input type="date" data-reschedule-date="${id}" value="${escapeHtml(selectedDate)}" min="${escapeHtml(localDateInputValue(nextTenMinuteSlot()))}" aria-label="Reschedule date" />
        <select data-reschedule-hour="${id}" aria-label="Reschedule hour">${bookingHourOptions(selectedHour)}</select>
        <div class="minute-options reschedule-minute-options" aria-label="Reschedule minute">
          ${bookingMinuteButtons(selectedMinute)}
        </div>
      </div>
      <div class="booking-actions reschedule-actions">
        ${recurringButtons}
        <button class="secondary-btn compact-btn" type="button" data-close-reschedule>Cancel</button>
      </div>
    </div>
  `;
}

function checkLessonReminders() {
  const allBookings = readStore(storage.bookings, {});
  const now = Date.now();
  Object.values(allBookings).flat().flatMap((booking) => booking.isRecurringSeries ? expandRecurringBooking(booking, 5, false) : [booking]).forEach((booking) => {
    if (!booking.dateTime || bookingIsCancelled(booking) || booking.status === "Rejected") return;
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
  const sortedItems = sortBookingsSoonestFirst(items);
  if (!sortedItems.length) {
    container.innerHTML = `<p class="empty-copy">${emptyText}</p>`;
    return;
  }

  container.innerHTML = sortedItems.map((booking) => {
    const participant = bookingPersonName(booking);
    return `
      <article class="booking-row">
        <div class="avatar small-avatar">${escapeHtml(booking.initials)}</div>
        <div>
          <strong>${escapeHtml(formatBookingDate(booking.dateTime))}</strong>
          <span>${booking.isFreeTrial ? "Free trial lesson" : escapeHtml(booking.type)} with ${escapeHtml(participant)} · ${escapeHtml(booking.subject)}</span>
          <small class="booking-status ${bookingStatusClass(booking.status)}">${escapeHtml(booking.status || "Pending tutor approval")}</small>
          ${booking.isGeneratedOccurrence ? `<small class="booking-status">Recurring occurrence</small>` : ""}
          ${booking.isFreeTrial ? `<small class="booking-status">Free trial</small>` : ""}
          ${booking.rescheduleThread?.history?.length ? `<small class="booking-status">${booking.rescheduleThread.history.length} proposed time${booking.rescheduleThread.history.length === 1 ? "" : "s"}</small>` : ""}
          ${renderReschedulePicker(booking)}
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
      const booking = getDisplayBookings().find((item) => item.id === button.dataset.bookingId);
      if (!booking) return;
      const recipient = bookingNotificationRecipient(booking);
      const scope = button.dataset.bookingScope || (["Cancelled by tutor", "Cancelled by student", "Reschedule requested by tutor", "Reschedule requested by student"].includes(status)
        ? scopeForSeriesAction(booking, status.includes("Cancel") ? "Cancel lesson" : "Reschedule lesson")
        : "single");
      let updates = { status };
      if (status === "Cancelled by tutor" || status === "Cancelled by student") {
        updates = { status, cancelled: true };
      }
      if (status === "Accepted") {
        updates = { status: "Accepted" };
      }
      if (status === "Reschedule requested by tutor" || status === "Reschedule requested by student" || status === "Counter reschedule") {
        const proposedDateTime = promptForLessonDateTime(status === "Counter reschedule" ? "Counter-propose a new time" : "Propose a new lesson time");
        if (!proposedDateTime) return;
        updates = rescheduleUpdates(booking, proposedDateTime, currentAccount.role === "tutor" ? "tutor" : "student");
      }
      if (status === "Accept reschedule") {
        updates = {
          status: "Accepted",
          dateTime: booking.proposedDateTime || booking.rescheduleThread?.latestProposedDateTime || booking.dateTime,
          proposedDateTime: "",
          rescheduleThread: {
            ...(booking.rescheduleThread || {}),
            status: "accepted",
            acceptedBy: currentAccount.role,
            acceptedAt: nowLabel()
          }
        };
      }
      if (status === "Decline reschedule") {
        const wantsCounter = window.confirm("Do you want to counter-propose another time instead?");
        if (wantsCounter) {
          const nextSlot = nextTenMinuteSlot(new Date(booking.dateTime || Date.now()));
          activeReschedulePicker = {
            bookingId: booking.id,
            action: "Counter reschedule",
            date: localDateInputValue(nextSlot),
            hour: pad2(nextSlot.getHours()),
            minute: pad2(nextSlot.getMinutes())
          };
          renderBookingsPage();
          return;
        } else {
          updates = {
            status: "Accepted",
            proposedDateTime: "",
            rescheduleThread: {
              ...(booking.rescheduleThread || {}),
              status: "declined",
              declinedBy: currentAccount.role,
              declinedAt: nowLabel()
            }
          };
        }
      }
      updateOccurrenceOrBooking(booking, withBookingSeenByCurrent(updates, recipient), scope);
      if (booking) {
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

  container.querySelectorAll("[data-open-reschedule]").forEach((button) => {
    button.addEventListener("click", () => {
      const booking = getDisplayBookings().find((item) => item.id === button.dataset.openReschedule);
      if (!booking) return;
      const nextSlot = nextTenMinuteSlot(new Date(booking.dateTime || Date.now()));
      activeReschedulePicker = {
        bookingId: booking.id,
        action: button.dataset.rescheduleAction,
        date: localDateInputValue(nextSlot),
        hour: pad2(nextSlot.getHours()),
        minute: pad2(nextSlot.getMinutes())
      };
      renderBookingsPage();
    });
  });

  container.querySelectorAll("[data-reschedule-date], [data-reschedule-hour]").forEach((control) => {
    control.addEventListener("change", () => {
      if (!activeReschedulePicker) return;
      const dateInput = [...container.querySelectorAll("[data-reschedule-date]")].find((item) => item.dataset.rescheduleDate === activeReschedulePicker.bookingId);
      const hourInput = [...container.querySelectorAll("[data-reschedule-hour]")].find((item) => item.dataset.rescheduleHour === activeReschedulePicker.bookingId);
      activeReschedulePicker.date = dateInput?.value || activeReschedulePicker.date;
      activeReschedulePicker.hour = hourInput?.value || activeReschedulePicker.hour;
    });
  });

  container.querySelectorAll("[data-reschedule-minute]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!activeReschedulePicker) return;
      activeReschedulePicker.minute = button.dataset.rescheduleMinute;
      renderBookingsPage();
    });
  });

  container.querySelectorAll("[data-close-reschedule]").forEach((button) => {
    button.addEventListener("click", () => {
      activeReschedulePicker = null;
      renderBookingsPage();
    });
  });

  container.querySelectorAll("[data-submit-reschedule]").forEach((button) => {
    button.addEventListener("click", () => {
      const booking = getDisplayBookings().find((item) => item.id === button.dataset.submitReschedule);
      if (!booking || !activeReschedulePicker) return;
      const dateInput = [...container.querySelectorAll("[data-reschedule-date]")].find((item) => item.dataset.rescheduleDate === booking.id);
      const hourInput = [...container.querySelectorAll("[data-reschedule-hour]")].find((item) => item.dataset.rescheduleHour === booking.id);
      const date = dateInput?.value || activeReschedulePicker.date;
      const hour = hourInput?.value || activeReschedulePicker.hour;
      const minute = activeReschedulePicker.minute || "00";
      const proposedDateTime = `${date}T${hour}:${minute}`;
      const error = validateBookingDateTime(proposedDateTime);
      if (error) {
        signupStatus.textContent = error;
        signupStatus.classList.remove("success");
        return;
      }
      const recipient = bookingNotificationRecipient(booking);
      const updates = rescheduleUpdates(booking, proposedDateTime, currentAccount.role === "tutor" ? "tutor" : "student");
      updateOccurrenceOrBooking(booking, withBookingSeenByCurrent(updates, recipient), button.dataset.bookingScope || "single");
      queueEmail(recipient, "New reschedule time proposed", `${currentAccount.name} proposed ${formatBookingDate(proposedDateTime)} for ${booking.type}.`, {
        key: `reschedule-${booking.parentBookingId || booking.id}-${Date.now()}`,
        bookingId: booking.parentBookingId || booking.id
      });
      activeReschedulePicker = null;
      addActivity("Proposed a new lesson time", "Booking");
      renderBookingsPage();
      renderDashboard(currentAccount.role);
    });
  });
}

function markBookingsSeen() {
  if (!currentAccount?.email) return;
  const ownEmail = normalizeEmail(currentAccount.email);
  const bookings = getBookings();
  const nextItems = bookings.map((booking) => {
    if (!bookingVisibleToCurrentAccount(booking)) return booking;
    const seenBy = [...new Set([...(booking.seenBy || []).map(normalizeEmail), ownEmail])];
    if (seenBy.length === (booking.seenBy || []).length && (booking.seenBy || []).map(normalizeEmail).includes(ownEmail)) return booking;
    updateBookingInCloud(booking.id, { seenBy }).catch(() => {});
    return { ...booking, seenBy };
  });
  saveBookings(nextItems);
  updateBookingBadge();
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
    if (bookingTutorSearch) bookingTutorSearch.value = "";
    bookingPageForm.hidden = true;
    bookingPageForm.style.display = "none";
    bookingPageForm.querySelectorAll("input, select, button").forEach((control) => {
      control.disabled = true;
    });
  } else {
    updateBookingDateConstraints();
    bookingPersonLabel.textContent = "Tutor";
    bookingSubmitButton.textContent = "Book lesson";
    renderBookingTutorOptions();
    bookingPageForm.hidden = false;
    bookingPageForm.style.display = "";
    bookingPageForm.querySelectorAll("input, select, button").forEach((control) => {
      control.disabled = false;
    });
  }
  bookingsPageTitle.textContent = currentAccount.role === "tutor" ? "Lesson requests" : "Bookings";
  bookingsPageCopy.textContent = currentAccount.role === "tutor"
    ? "Accept, reject, or request a new time for student and parent booking requests."
    : "Request a lesson time, then reschedule or cancel if plans change.";

  markBookingsSeen();
  const bookings = getDisplayBookings();
  const selectedPerson = populateBookingViewFilter(bookings);
  const visibleBookings = applyBookingPersonFilter(bookings, selectedPerson);
  const now = Date.now();
  const upcoming = sortBookingsSoonestFirst(visibleBookings.filter((booking) => !booking.dateTime || bookingTimeValue(booking) >= now));
  const previous = sortBookingsSoonestFirst(visibleBookings.filter((booking) => booking.dateTime && bookingTimeValue(booking) < now));
  upcomingCount.textContent = upcoming.length;
  previousCount.textContent = previous.length;
  renderBookingList(upcomingBookings, upcoming, "No upcoming lessons yet.");
  renderBookingList(previousBookings, previous, "Previous lessons will appear here.");
}

function renderDashboard(role) {
  const dashboard = roleDashboards[role];
  const bookings = currentAccount ? getDisplayBookings() : [];
  const nextBookings = bookings
    .filter((booking) => !booking.dateTime || bookingTimeValue(booking) >= Date.now())
    .sort((a, b) => bookingTimeValue(a) - bookingTimeValue(b))
    .slice(0, 3);
  const recentMessages = currentAccount ? getMessages().slice(-2).reverse() : [];
  ratingsPanel.classList.remove("highlight");
  dashboardTitle.textContent = roleContent[role].dash;
  dashboardSubtitle.textContent = currentAccount
    ? `${currentAccount.name}, these are your ${role} account tools.`
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
    : "Log in or create an account. Approved tutors can use the tutor option after their email is approved.";
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
  document.querySelectorAll("[data-admin-only]").forEach((item) => {
    item.hidden = !isModerationUser();
  });
  userMenu.hidden = !currentAccount;
  if (currentAccount) {
    userMenuName.textContent = currentAccount.name;
    const accountProfile = getProfileForAccount(currentAccount);
    const accountPhoto = accountProfile.photo || accountProfile.photoUrl || accountProfile.profilePhoto || "";
    userMenuInitials.innerHTML = accountPhoto
      ? `<img src="${escapeHtml(accountPhoto)}" alt="${escapeHtml(currentAccount.name)} profile picture" />`
      : escapeHtml(initialsFromName(currentAccount.name));
    populateAccountDetails();
  } else {
    userDropdown.hidden = true;
    userMenuButton?.setAttribute("aria-expanded", "false");
  }
  updateMessageBadge();
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
    if (account.role === "tutor") {
      selectedTutor = getCurrentTutorProfile() || selectedTutor;
      showPage("profile");
    } else {
      applyLearningFilters(account);
      showPage("tutors");
    }
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
    selectedTutor = getCurrentTutorProfile() || selectedTutor;
    showPage("profile");
    return false;
  }

  return true;
}

function ageFromDob(value) {
  if (!value) return null;
  const dob = new Date(normalizeDobInput(value));
  if (Number.isNaN(dob.getTime())) return null;
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const beforeBirthday = today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate());
  if (beforeBirthday) age -= 1;
  return age;
}

function normalizeDobInput(value) {
  const text = String(value || "").trim();
  const match = text.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (!match) return text;
  const [, day, month, year] = match;
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function applyLearningFilters(account) {
  if (!account || account.role === "tutor") return;
  if (account.learningSubject) {
    const subject = findSubjectByText(account.learningSubject);
    subjectFilter.value = subject ? subject.id : "All";
  }
  renderTutors();
}

function requestRating() {
  if (!currentAccount) {
    promptForAccount("Please log in as a student or parent before rating a tutor.");
    return;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Tutor accounts can view received ratings, but students and parents leave ratings.";
    signupStatus.classList.remove("success");
    selectedTutor = getCurrentTutorProfile() || selectedTutor;
    showPage("profile");
    return;
  }

  renderRatings(currentAccount.role);
  showPage("reviews");
}

function updateSignupMode() {
  const role = signupRole.value;
  const heading = signupForm.querySelector("h3");
  const button = signupForm.querySelector("button[type='submit']");
  const under18 = ageFromDob(signupDob.value) !== null && ageFromDob(signupDob.value) < 18;
  if (heading) heading.textContent = role === "tutor" ? "Approved tutor sign up" : "Student sign up";
  if (button) button.textContent = role === "tutor" ? "Create tutor account" : "Create student account";
  document.querySelectorAll(".parent-field").forEach((field) => {
    field.hidden = !under18;
  });
  signupParentName.required = under18;
  signupParentEmail.required = under18;
  signupDob.required = true;
}

document.querySelector("[data-search-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentAccount?.role === "tutor") {
    signupStatus.textContent = "Tutor accounts use Profile, Messages, and Bookings.";
    signupStatus.classList.add("success");
    selectedTutor = getCurrentTutorProfile() || selectedTutor;
    showPage("profile");
    return;
  }

  const subject = document.querySelector("#heroSubject").value.trim();
  const university = document.querySelector("#heroUniversity").value.trim();
  if (subject) {
    const matchedSubject = findSubjectByText(subject);
    subjectFilter.value = matchedSubject ? matchedSubject.id : "All";
  }
  uniFilter.value = university;
  renderTutors();
  showPage("tutors");
});

routeLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showPage(link.dataset.route);
    if (link.dataset.route === "accounts") {
      if (link.dataset.accountMode === "signup") showSignupAccountView();
      else showLoginAccountView();
    }
  });
});

document.querySelectorAll(".text-link[data-route]").forEach((button) => {
  button.addEventListener("click", () => {
    showPage(button.dataset.route);
  });
});

window.addEventListener("hashchange", () => {
  showPage(getRouteFromHash(), { keepScroll: true, skipHistory: true });
});

window.addEventListener("popstate", () => {
  showPage(getRouteFromHash(), { keepScroll: true, skipHistory: true });
});

[nameFilter, subjectFilter, admissionsFilter, admissionsModuleFilter, uniFilter, gradeFilter, sortFilter, trialOnly].filter(Boolean).forEach((control) => {
  control.addEventListener("input", renderTutors);
  control.addEventListener("change", renderTutors);
});

[moderationStatusFilter, moderationSeverityFilter].filter(Boolean).forEach((control) => {
  control.addEventListener("change", renderModerationPage);
});

admissionsFilter?.addEventListener("change", () => {
  populateAdmissionsModuleFilter();
  renderTutors();
});

bookingTutorSearch?.addEventListener("input", renderBookingTutorOptions);
bookingTutor?.addEventListener("change", () => {
  const tutor = getAllTutors().find((item) => tutorId(item) === bookingTutor.value);
  if (tutor) selectedTutor = tutor;
});
bookingViewFilter?.addEventListener("change", renderBookingsPage);
[bookingDate, bookingHour].forEach((control) => {
  control?.addEventListener("change", syncBookingDateTime);
  control?.addEventListener("input", syncBookingDateTime);
});
bookingMinuteOptions?.querySelectorAll("[data-minute]").forEach((button) => {
  button.addEventListener("click", () => {
    bookingMinute.value = button.dataset.minute;
    bookingMinute.dataset.ready = "true";
    syncBookingDateTime();
  });
});

profileSubjectSearch?.addEventListener("input", renderSubjectSuggestions);
profileSubjectSearch?.addEventListener("focus", renderSubjectSuggestions);
profileSubjectSearch?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideSubjectSuggestions();
    profileSubjectSearch.blur();
    return;
  }
  if (event.key !== "Enter") return;
  event.preventDefault();
  const firstSuggestion = profileSubjectSuggestions?.querySelector("[data-add-subject]");
  firstSuggestion?.click();
});
profileSubjectPicker?.addEventListener("focusout", () => {
  window.setTimeout(() => {
    if (!profileSubjectPicker.contains(document.activeElement)) hideSubjectSuggestions();
  }, 120);
});
profileAdmissionsSearch?.addEventListener("input", renderAdmissionsSuggestions);
profileAdmissionsSearch?.addEventListener("focus", renderAdmissionsSuggestions);
profileAdmissionsSearch?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideAdmissionsSuggestions();
    profileAdmissionsSearch.blur();
    return;
  }
  if (event.key !== "Enter") return;
  event.preventDefault();
  const firstSuggestion = profileAdmissionsSuggestions?.querySelector("[data-add-admission], [data-add-admission-email]");
  firstSuggestion?.click();
});
profileAdmissionsPicker?.addEventListener("focusout", () => {
  window.setTimeout(() => {
    if (!profileAdmissionsPicker.contains(document.activeElement)) hideAdmissionsSuggestions();
  }, 120);
});
document.addEventListener("pointerdown", (event) => {
  if (!profileSubjectPicker?.contains(event.target)) {
    hideSubjectSuggestions();
  }
  if (!profileAdmissionsPicker?.contains(event.target)) {
    hideAdmissionsSuggestions();
  }
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  nameFilter.value = "";
  subjectFilter.value = "All";
  if (admissionsFilter) admissionsFilter.value = "All";
  populateAdmissionsModuleFilter();
  if (admissionsModuleFilter) admissionsModuleFilter.value = "All";
  uniFilter.value = "";
  gradeFilter.value = "Any";
  sortFilter.value = "recommended";
  if (trialOnly) trialOnly.checked = false;
  renderTutors();
});

profileForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then you can save a profile.");
    return;
  }

  const subjectIds = uniqueSubjectIds(selectedProfileSubjectIds);
  const subject = subjectIds.length ? subjectIds.map(subjectLabel).join(", ") : cleanAutoText(profileSubject.value);
  const subjectGrades = Object.fromEntries(Object.entries(selectedProfileSubjectGrades)
    .filter(([subjectId, gradeId]) => subjectIds.includes(subjectId) && gradeById.has(gradeId)));
  const admissionsTestIds = uniqueAdmissionTestIds(selectedAdmissionsTestIds);
  const admissionsModuleIds = uniqueAdmissionModuleIds(selectedAdmissionsModuleIds)
    .filter((moduleId) => admissionsTestIds.includes(admissionModuleById.get(moduleId)?.parentId));
  const admissionsScores = Object.fromEntries(Object.entries(selectedAdmissionsScores)
    .filter(([testId, score]) => admissionsTestIds.includes(testId) && String(score || "").trim())
    .map(([testId, score]) => [testId, String(score).trim()]));

  const profile = {
    name: profileName.value.trim() || currentAccount.name,
    subject,
    subjectIds,
    subjectGrades: currentAccount.role === "tutor" ? subjectGrades : {},
    furtherMathsModuleIds: currentAccount.role === "tutor" ? selectedProfileModuleIds : [],
    admissionsTestIds: currentAccount.role === "tutor" ? admissionsTestIds : [],
    admissionsModuleIds: currentAccount.role === "tutor" ? admissionsModuleIds : [],
    admissionsScores: currentAccount.role === "tutor" ? admissionsScores : {},
    detail: profileDetail.value.trim(),
    university: profileUniversity.value.trim(),
    level: currentAccount.role === "tutor" ? profileLevel.value : "",
    photo: currentAccount.role === "tutor" ? pendingProfilePhoto : "",
    grade: "",
    about: profileAbout.value.trim(),
    sessions: profileSessions.value.trim(),
    updated: true
  };

  try {
    await saveProfile(profile);
    currentAccount.name = profile.name;
    localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(currentAccount));
    const accounts = getAccounts().map((account) => account.email === currentAccount.email ? currentAccount : account);
    saveAccounts(accounts);
    profileBadge.textContent = "Saved";
    dashboardSubtitle.textContent = `${currentAccount.name}, these are your ${currentAccount.role} account tools.`;
    signupStatus.textContent = currentAccount.role === "tutor" ? "Profile saved to Firebase." : "Profile saved.";
    signupStatus.classList.add("success");
    addActivity("Updated profile details", "Profile");
    renderTutors();
  } catch (error) {
    signupStatus.textContent = error.message === "Tutor email is not approved."
      ? "Profile could not save to Firebase because this tutor email is not approved in approvedTutors."
      : "Profile could not save to Firebase. Check Firestore rules and try again.";
    signupStatus.classList.remove("success");
    profileBadge.textContent = "Not saved";
  }
});

chatForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then you can send messages.");
    return;
  }

  const text = chatInput.value.trim();
  if (!text) return;

  const sent = await saveMessage({
    direction: "outgoing",
    text,
    time: nowLabel()
  });
  if (!sent) return;
  chatInput.value = "";
  addActivity(`Sent message to ${currentAccount.role === "tutor" ? "student and parent" : selectedTutor.name}`, "Chat");
  renderChat(currentAccount.role);
});

messagePageForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!currentAccount) {
    promptForAccount("Log in first, then you can send messages.");
    return;
  }

  const text = messagePageInput.value.trim();
  if (!text) return;

  const sent = await saveMessage({
    direction: "outgoing",
    text,
    time: nowLabel()
  });
  if (!sent) return;
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

  const bookingDateTimeValue = syncBookingDateTime();
  const bookingTimeError = validateBookingDateTime(bookingDateTimeValue);
  if (bookingTimeError) {
    signupStatus.textContent = bookingTimeError;
    signupStatus.classList.remove("success");
    bookingDate?.focus();
    return;
  }

  const tutor = getAllTutors().find((item) => tutorId(item) === bookingTutor.value) || selectedTutor;
  if (!tutor || !bookingTutor.value) {
    signupStatus.textContent = "Choose a tutor before booking.";
    signupStatus.classList.remove("success");
    bookingTutor.focus();
    return;
  }
  if (bookingLessonType.value === "Free trial lesson" && hasUsedFreeTrialWithTutor(tutorEmail(tutor))) {
    signupStatus.textContent = "You have already used your free trial with this tutor.";
    signupStatus.classList.remove("success");
    return;
  }
  selectedTutor = tutor;
  const items = getBookings();
  const baseBooking = {
    tutor: tutor.name,
    tutorEmail: tutorEmail(tutor),
    initials: tutor.initials,
    subject: tutorSubjectLabel(tutor),
    type: bookingLessonType.value,
    dateTime: bookingDateTimeValue,
    status: isRecurringType(bookingLessonType.value) ? "Accepted" : "Pending tutor approval",
    isFreeTrial: bookingLessonType.value === "Free trial lesson",
    student: currentAccount.name,
    studentEmail: currentAccount.email,
    seenBy: [normalizeEmail(currentAccount.email)],
    unseenFor: [normalizeEmail(tutorEmail(tutor))],
    created: nowLabel()
  };
  let savedBooking = buildBookingRecord(baseBooking);
  try {
    savedBooking = await saveBookingToCloud(savedBooking);
  } catch {
    showConfirmation("Booking saved on this device, but Firebase did not accept it yet. Check Firestore is still in test mode.");
  }
  items.push(savedBooking);
  saveBookings(items);

  if (tutor.email) {
    const allBookings = readStore(storage.bookings, {});
    const tutorItems = allBookings[tutor.email] || [];
    tutorItems.push({
      ...savedBooking,
      initials: initialsFromName(currentAccount.name)
    });
    allBookings[tutor.email] = tutorItems;
    writeStore(storage.bookings, allBookings);
  }

  bookingDate.value = "";
  bookingDateTime.value = "";
  const firstBooking = savedBooking;
  queueEmail(firstBooking.tutorEmail, firstBooking.status === "Accepted" ? "New recurring lesson confirmed" : "New lesson request", `${currentAccount.name} requested ${bookingLessonType.value} starting ${formatBookingDate(firstBooking.dateTime)}${firstBooking.isFreeTrial ? " as a free trial." : "."}`, {
    key: `new-booking-${firstBooking.id}`,
    bookingId: firstBooking.id
  });
  addActivity(`Requested ${bookingLessonType.value} with ${tutor.name}`, "Booking");
  updateBookingBadge();
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
    note: reviewText.value.trim(),
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

signupDob?.addEventListener("change", updateSignupMode);
signupDob?.addEventListener("input", updateSignupMode);

showSignupFlow?.addEventListener("click", showSignupAccountView);
showLoginFlow?.addEventListener("click", showLoginAccountView);
document.querySelectorAll("[data-login-role]").forEach((button) => {
  button.addEventListener("click", () => {
    const role = button.dataset.loginRole;
    loginPanel.hidden = false;
    document.querySelector("#loginPanelTitle").textContent = `${button.textContent.trim()}`;
    signupRole.value = role;
    updateSignupMode();
    loginEmail.focus();
  });
});
document.querySelectorAll("[data-subject-choice]").forEach((button) => {
  button.addEventListener("click", () => setSignupSubject(button.dataset.subjectChoice));
});
signupSubject?.addEventListener("change", () => {
  if (signupSubject.value) setSignupSubject(signupSubject.value);
});
document.querySelectorAll("[data-level-choice]").forEach((button) => {
  button.addEventListener("click", () => setSignupLevel(button.dataset.levelChoice));
});
document.querySelectorAll("[data-role-choice]").forEach((button) => {
  button.addEventListener("click", () => setSignupRoleChoice(button.dataset.roleChoice));
});
document.querySelectorAll("[data-next-signup]").forEach((button) => {
  button.addEventListener("click", () => {
    const step = signupWizard.steps[signupWizard.stepIndex];
    if (step === "name" && !signupName.value.trim()) {
      signupName.focus();
      return;
    }
    if (step === "dob" && !normalizeDobInput(signupDob.value)) {
      signupDob.focus();
      return;
    }
    if (step === "email" && !signupEmail.value.trim()) {
      signupEmail.focus();
      return;
    }
    nextSignupStep();
  });
});

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = normalizeEmail(signupEmail.value);
  const password = signupPassword.value;
  const confirmPassword = signupConfirmPassword.value;
  const accounts = getAccounts();
  const role = signupRole.value;
  const dobValue = normalizeDobInput(signupDob.value);
  const under18 = ageFromDob(dobValue) !== null && ageFromDob(dobValue) < 18;

  if (password !== confirmPassword) {
    signupStatus.textContent = "Passwords do not match. Retype the same password to create the account.";
    signupStatus.classList.remove("success");
    signupConfirmPassword.focus();
    return;
  }

  if (under18 && (!signupParentName.value.trim() || !normalizeEmail(signupParentEmail.value))) {
    signupStatus.textContent = "Parent or guardian name and email are required for under-18 accounts.";
    signupStatus.classList.remove("success");
    signupParentName.focus();
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
    dob: dobValue,
    learningSubject: signupWizard.subject || signupSubject?.value || "",
    learningLevel: signupWizard.level || "",
    marketingOptIn: marketingOptIn?.checked || false,
    parentName: under18 ? signupParentName.value.trim() : "",
    parentEmail: under18 ? normalizeEmail(signupParentEmail.value) : "",
    password
  };

  if (isCloudReady()) {
    try {
      signupForm.querySelector("button[type='submit']").disabled = true;
      let approvedRecord = null;
      if (role === "tutor") {
        signupStatus.textContent = "Checking tutor approval...";
        approvedRecord = await getApprovedTutorRecord(email);
        if (!approvedRecord || approvedRecord.status !== "approved") {
          signupStatus.textContent = "This tutor email has not been approved yet. Please apply first or ask the tutrSTEM team to approve the exact email.";
          signupStatus.classList.remove("success");
          signupForm.querySelector("button[type='submit']").disabled = false;
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
      signupForm.querySelector("button[type='submit']").disabled = false;
      return;
    } catch (error) {
      signupForm.querySelector("button[type='submit']").disabled = false;
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
  addActivity(`Requested a lesson with ${selectedTutor.name}`, "Booking");
  renderDashboard(currentAccount.role);
});

async function initializeSite() {
  populateSubjectFilter();
  populateGradeFilter();
  populateAdmissionsFilter();
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
      showPage(getRouteFromHash() || "home", { instant: true, replaceHistory: true });
      checkLessonReminders();
    });
  } else {
    const savedAccount = readStore("girlstemTutoringCurrentAccount", null);
    if (savedAccount?.email) currentAccount = savedAccount;
    updateSignupMode();
    setRole(currentAccount?.role || signupRole.value);
    updateAccess();
    renderTutors();
    showPage(getRouteFromHash() || "home", { instant: true, replaceHistory: true });
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

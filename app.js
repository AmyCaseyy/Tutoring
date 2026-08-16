const tutors = [
  {
    name: "Priya Shah",
    subject: "Biology",
    university: "University of Cambridge",
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
    subject: "Maths",
    university: "Imperial College London",
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
    university: "University of Oxford",
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
    subject: "English Literature",
    university: "University College London",
    grade: "A",
    rating: 4.9,
    lessons: 260,
    price: 32,
    style: "Close analysis, coursework planning, essay voice",
    badges: ["AQA", "Coursework", "Free trial"],
    initials: "NP",
    score: 88
  },
  {
    name: "Theo Mensah",
    subject: "Physics",
    university: "University of Manchester",
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
    university: "University of Warwick",
    grade: "A",
    rating: 4.87,
    lessons: 144,
    price: 28,
    style: "Diagrams, evaluation, timed essays, real examples",
    badges: ["Edexcel", "Essay drills", "Free trial"],
    initials: "SB",
    score: 84
  }
];

const roleContent = {
  student: {
    title: "Student account",
    text: "Book tutors, pay with Stripe, message your tutor, manage lessons, and leave ratings after completed sessions.",
    dash: "Student dashboard",
    mode: "Bookings and chat"
  },
  parent: {
    title: "Parent account",
    text: "Book tutors for your child, pay with Stripe, message tutors, manage cancellations, and leave ratings after lessons.",
    dash: "Parent dashboard",
    mode: "Family lessons"
  },
  tutor: {
    title: "Tutor account",
    text: "Manage your profile, subjects, availability, student messages, bookings, ratings, and Stripe payout setup.",
    dash: "Tutor dashboard",
    mode: "Tutor workspace"
  }
};

const roleDashboards = {
  student: {
    tools: [
      ["Book tutors", "Browse available A-level tutors and reserve trials or paid lessons."],
      ["Stripe checkout", "Pay securely when confirming a paid lesson."],
      ["Rate tutors", "Leave feedback once a lesson is complete."]
    ],
    lessons: [
      ["Mon 18:00", "A-level Biology", "Recurring weekly with Priya Shah"],
      ["Wed 19:30", "Maths trial", "Free 30-minute session with Leo Grant"]
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
      ["Stripe payments", "Review lesson cost before checkout."],
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
      ["Profile", "Update subjects, grades, teaching style, and hourly rate."],
      ["Availability", "Approve trials, block busy times, and manage recurring lessons."],
      ["Stripe payouts", "Connect Stripe to receive lesson payouts."]
    ],
    lessons: [
      ["Today 16:30", "Trial request", "Maya wants A-level Biology support"],
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
const subjectFilter = document.querySelector("#subjectFilter");
const uniFilter = document.querySelector("#uniFilter");
const gradeFilter = document.querySelector("#gradeFilter");
const sortFilter = document.querySelector("#sortFilter");
const budgetFilter = document.querySelector("#budgetFilter");
const budgetValue = document.querySelector("#budgetValue");
const trialOnly = document.querySelector("#trialOnly");
const matchCount = document.querySelector("#matchCount");
const dialog = document.querySelector("#bookingDialog");
const bookingTitle = document.querySelector("#bookingTitle");
const lessonType = document.querySelector("#lessonType");
const dueToday = document.querySelector("#dueToday");
const signupForm = document.querySelector("#signupForm");
const loginPanel = document.querySelector("#loginPanel");
const signupRole = document.querySelector("#signupRole");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const signupConfirmPassword = document.querySelector("#signupConfirmPassword");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const signupStatus = document.querySelector("#signupStatus");
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
const profilePrice = document.querySelector("#profilePrice");
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
const threadList = document.querySelector("#threadList");
const messagePageTitle = document.querySelector("#messagePageTitle");
const messagePageWith = document.querySelector("#messagePageWith");
const messagePageMessages = document.querySelector("#messagePageMessages");
const messagePageForm = document.querySelector("#messagePageForm");
const messagePageInput = document.querySelector("#messagePageInput");
const bookingPageForm = document.querySelector("#bookingPageForm");
const bookingTutor = document.querySelector("#bookingTutor");
const bookingLessonType = document.querySelector("#bookingLessonType");
const bookingDateTime = document.querySelector("#bookingDateTime");
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
let currentAccount = null;
let pendingConfirmation = "";

const storage = {
  messages: "girlstemTutoringMessages",
  ratings: "girlstemTutoringRatings",
  profiles: "girlstemTutoringProfiles",
  activity: "girlstemTutoringActivity",
  bookings: "girlstemTutoringBookings"
};

function showPage(pageName, options = {}) {
  const fallback = currentAccount ? "dashboard" : "home";
  let nextPage = pages.some((page) => page.dataset.page === pageName) ? pageName : fallback;

  if (nextPage === "dashboard" && !currentAccount) {
    nextPage = "accounts";
    signupStatus.textContent = "Log in or create an account first, then your dashboard will open.";
    signupStatus.classList.remove("success");
  }

  if ((nextPage === "messages" || nextPage === "bookings") && !currentAccount) {
    nextPage = "accounts";
    signupStatus.textContent = "Log in or create an account first.";
    signupStatus.classList.remove("success");
  }

  if (nextPage === "tutors" && currentAccount?.role === "tutor") {
    nextPage = "dashboard";
    showConfirmation("Tutor accounts use this dashboard for availability, requests, chat, ratings, and payouts.");
  }

  if (nextPage === "messages") renderMessagesPage();
  if (nextPage === "bookings") renderBookingsPage();
  if (nextPage === "profile") renderPublicProfile();
  if (nextPage === "reviews") renderReviewsPage();

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

function accountKey() {
  return currentAccount?.email || "guest";
}

function threadKey() {
  const participant = currentAccount?.role === "tutor" ? "student-parent" : selectedThreadTutor.name;
  return `${accountKey()}::${participant}`;
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
}

function initialsFromName(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "GT";
}

function getTutorProfiles() {
  const profiles = readStore(storage.profiles, {});
  return getAccounts()
    .filter((account) => account.role === "tutor")
    .map((account) => {
      const profile = profiles[account.email] || {};
      const subject = profile.subject || "Biology";
      return {
        name: profile.name || account.name,
        subject,
        university: profile.university || "GirlSTEM verified tutor",
        grade: profile.grade || "A*",
        rating: 5,
        lessons: profile.lessons || 0,
        price: Number(profile.price || 35),
        style: profile.detail || "Supportive online lessons, exam practice, and confidence building",
        badges: ["New tutor", "Free trial", "GirlSTEM"],
        initials: initialsFromName(profile.name || account.name),
        score: 87,
        email: account.email,
        about: profile.about || `Hi, I'm ${profile.name || account.name}. I help students feel calmer, clearer, and more prepared for exams.`,
        sessions: profile.sessions || "Lessons are adapted to each student, with a mix of topic repair, guided practice, and exam-style questions."
      };
    });
}

function getAllTutors() {
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
  const subject = subjectFilter.value;
  const university = uniFilter.value.trim().toLowerCase();
  const minGrade = gradeFilter.value;
  const maxBudget = Number(budgetFilter.value);

  const filtered = getAllTutors().filter((tutor) => {
    const subjectMatch = subject === "All" || tutor.subject === subject;
    const uniMatch = !university || tutor.university.toLowerCase().includes(university);
    const gradeMatch = minGrade === "Any" || gradeRank(tutor.grade) >= gradeRank(minGrade);
    const budgetMatch = tutor.price <= maxBudget;
    const trialMatch = !trialOnly.checked || tutor.badges.includes("Free trial");
    return subjectMatch && uniMatch && gradeMatch && budgetMatch && trialMatch;
  });

  return filtered.sort((a, b) => {
    if (sortFilter.value === "grade") return gradeRank(b.grade) - gradeRank(a.grade) || b.rating - a.rating;
    if (sortFilter.value === "priceLow") return a.price - b.price;
    if (sortFilter.value === "priceHigh") return b.price - a.price;
    if (sortFilter.value === "rating") return b.rating - a.rating;
    return b.score - a.score;
  });
}

function renderTutors() {
  const visibleTutors = getFilteredTutors();
  matchCount.textContent = `${visibleTutors.length} tutor${visibleTutors.length === 1 ? "" : "s"} match`;
  budgetValue.textContent = `GBP ${budgetFilter.value}`;

  if (!visibleTutors.length) {
    tutorGrid.innerHTML = `<div class="empty-state"><h3>No tutors found</h3><p>Try widening the subject, university, grade, or budget filters.</p></div>`;
    return;
  }

  tutorGrid.innerHTML = visibleTutors.map((tutor, index) => `
    <article class="tutor-card">
      <div class="tutor-head">
        <div class="avatar" aria-hidden="true">${tutor.initials}</div>
        <div>
          <h3>${escapeHtml(tutor.name)}</h3>
          <p>${escapeHtml(tutor.subject)} · ${escapeHtml(tutor.university)}</p>
        </div>
        <span class="rating">${getTutorRating(tutor).toFixed(2)}</span>
      </div>
      <p>${escapeHtml(tutor.style)}</p>
      <div class="chips">
        <span class="chip">${tutor.grade} at A-level</span>
        <span class="chip">${tutor.lessons} lessons</span>
        ${tutor.badges.map((badge) => `<span class="chip">${escapeHtml(badge)}</span>`).join("")}
      </div>
      <div class="card-footer">
        <div class="price">
          <strong>GBP ${tutor.price}/hr</strong>
          <span>Trial: free 30 mins</span>
        </div>
        <div class="card-actions">
          <button class="secondary-btn" type="button" data-profile="${index}">View profile</button>
          <button class="secondary-btn" type="button" data-message="${index}">Message</button>
          <button class="secondary-btn" type="button" data-rate="${index}">Rate</button>
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

  tutorGrid.querySelectorAll("[data-rate]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTutor = visibleTutors[Number(button.dataset.rate)];
      requestRating();
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
    return [
      ["incoming", "Could we do a free trial next week?"],
      ["outgoing", "Yes, I have Tuesday at 16:30 or Thursday at 18:00."]
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
}

function renderChat(role) {
  const chatPartner = role === "tutor" ? "student and parent" : selectedThreadTutor.name;
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

  messagePageTitle.textContent = currentAccount.role === "tutor" ? "Student and parent chat" : "Tutor chat";
  messagePageWith.textContent = currentAccount.role === "tutor" ? "Student and parent" : selectedThreadTutor.name;
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
  profileSubject.value = profile.subject || (role === "tutor" ? "Biology" : "A-level Biology");
  profileDetail.value = profile.detail || (role === "tutor" ? "Exam technique and calm weekly structure" : "Mocks, confidence, and exam technique");
  profileUniversity.value = profile.university || "";
  profilePrice.value = profile.price || "";
  profileAbout.value = profile.about || "";
  profileSessions.value = profile.sessions || "";
  profileBadge.textContent = profile.updated ? "Saved" : "Draft";
  profileSubjectLabel.textContent = role === "tutor" ? "Subjects you teach" : "Subjects you want help with";
  profileDetailLabel.textContent = role === "tutor" ? "Teaching style" : "Learning goal";
}

function renderRatings(role) {
  if (!currentAccount) return;

  if (role === "tutor") {
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

  ratingsPanel.innerHTML = `
    <form class="rating-form" id="ratingForm">
      <div>
        <strong>Rate ${escapeHtml(selectedTutor.name)}</strong>
        <span>Choose a score and save feedback after a session.</span>
      </div>
      <div class="star-row" role="radiogroup" aria-label="Tutor rating">
        ${[1, 2, 3, 4, 5].map((score) => `
          <label>
            <input type="radio" name="ratingScore" value="${score}" ${score === 5 ? "checked" : ""} />
            <span>${score}</span>
          </label>
        `).join("")}
      </div>
      <input id="ratingNote" type="text" placeholder="Optional note" />
      <button class="secondary-btn" type="submit">Save rating</button>
    </form>
  `;

  document.querySelector("#ratingForm").addEventListener("submit", (event) => {
    event.preventDefault();
    saveRating();
  });
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
      by: "GirlSTEM parent",
      time: "Recent"
    }
  ];
  return saved.length ? saved : fallback;
}

function renderPublicProfile() {
  const reviews = getReviewsFor(selectedTutor);
  publicProfile.innerHTML = `
    <div class="profile-hero-card">
      <div class="profile-photo">${escapeHtml(selectedTutor.initials)}</div>
      <div>
        <p class="eyebrow">Tutor profile</p>
        <h2>${escapeHtml(selectedTutor.name)}</h2>
        <p class="profile-rate">GBP ${selectedTutor.price}/hr</p>
        <p>${escapeHtml(selectedTutor.subject)} · ${escapeHtml(selectedTutor.university)}</p>
        <div class="chips">${selectedTutor.badges.map((badge) => `<span class="chip">${escapeHtml(badge)}</span>`).join("")}</div>
      </div>
      <aside class="profile-actions">
        <strong>${getTutorRating(selectedTutor).toFixed(2)} / 5</strong>
        <span>${reviews.length} review${reviews.length === 1 ? "" : "s"}</span>
        <button class="primary-btn wide" type="button" id="profileBook">Book lessons</button>
        <button class="secondary-btn wide" type="button" id="profileMessage">Message tutor</button>
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

  document.querySelector("#profileBook").addEventListener("click", () => {
    if (!canBook()) return;
    showPage("bookings");
  });
  document.querySelector("#profileMessage").addEventListener("click", () => {
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
  const bookings = readStore(storage.bookings, {});
  return bookings[accountKey()] || [];
}

function saveBookings(items) {
  const bookings = readStore(storage.bookings, {});
  bookings[accountKey()] = items;
  writeStore(storage.bookings, bookings);
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

function renderBookingList(container, items, emptyText) {
  if (!items.length) {
    container.innerHTML = `<p class="empty-copy">${emptyText}</p>`;
    return;
  }

  container.innerHTML = items.map((booking, index) => {
    const participant = currentAccount?.role === "tutor" && booking.student ? booking.student : booking.tutor;
    return `
      <article class="booking-row">
        <div class="avatar small-avatar">${escapeHtml(booking.initials)}</div>
        <div>
          <strong>${escapeHtml(formatBookingDate(booking.dateTime))}</strong>
          <span>${escapeHtml(booking.type)} with ${escapeHtml(participant)} · ${escapeHtml(booking.subject)}</span>
        </div>
        <button class="secondary-btn" type="button" data-edit-booking="${index}">Edit</button>
      </article>
    `;
  }).join("");
}

function renderBookingsPage() {
  if (!currentAccount) {
    promptForAccount("Log in first, then bookings will open.");
    return;
  }

  const availableTutors = getAllTutors();
  bookingTutor.innerHTML = availableTutors.map((tutor) => `
    <option value="${escapeHtml(tutorId(tutor))}" ${tutorId(tutor) === tutorId(selectedTutor) ? "selected" : ""}>${escapeHtml(tutor.name)} · ${escapeHtml(tutor.subject)}</option>
  `).join("");
  bookingPageForm.hidden = currentAccount.role === "tutor";

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
  updateDueToday();
  dialog.showModal();
}

function updateDueToday() {
  dueToday.textContent = lessonType.value === "trial" ? "GBP 0.00" : `GBP ${selectedTutor.price}.00`;
}

function setRole(role) {
  document.querySelector("#accountTitle").textContent = roleContent[role].title;
  document.querySelector("#accountText").textContent = roleContent[role].text;
  document.querySelector("#dashRole").textContent = currentAccount ? roleContent[role].dash : `${roleContent[role].dash} preview`;
  renderDashboard(role);
}

function updateAccess() {
  const role = currentAccount?.role || signupRole.value;
  document.body.dataset.role = currentAccount ? role : "guest";
  quickBook.innerHTML = role === "tutor"
    ? `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> Update availability`
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> Book lessons`;
  messagesButton.textContent = role === "tutor" ? "View messages" : "Open messages";
  [quickBook, messagesButton].forEach((button) => {
    button.classList.toggle("locked-action", !currentAccount);
  });
}

function setAccount(account, options = {}) {
  currentAccount = account;
  localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(account));
  signupRole.value = account.role;
  signupName.value = account.name;
  signupEmail.value = account.email;
  loginEmail.value = account.email;
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
    signupStatus.textContent = "Tutor accounts manage profiles, availability, chat, ratings, and payouts. Students and parents book lessons.";
    signupStatus.classList.remove("success");
    showPage("dashboard");
    return false;
  }

  return true;
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

document.querySelector("[data-search-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentAccount?.role === "tutor") {
    signupStatus.textContent = "Tutor accounts use the dashboard for availability, messages, ratings, and payout setup.";
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

[subjectFilter, uniFilter, gradeFilter, sortFilter, budgetFilter, trialOnly].forEach((control) => {
  control.addEventListener("input", renderTutors);
  control.addEventListener("change", renderTutors);
});

document.querySelector("#resetFilters").addEventListener("click", () => {
  subjectFilter.value = "All";
  uniFilter.value = "";
  gradeFilter.value = "Any";
  sortFilter.value = "recommended";
  budgetFilter.value = "60";
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
    price: currentAccount.role === "tutor" ? Number(profilePrice.value || 35) : "",
    grade: currentAccount.role === "tutor" ? "A*" : "",
    about: currentAccount.role === "tutor"
      ? profileAbout.value.trim() || `Hi, I'm ${profileName.value.trim() || currentAccount.name}. I teach ${profileSubject.value.trim() || "A-level subjects"} and help students build confidence.`
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

bookingPageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!canBook()) return;

  const tutor = getAllTutors().find((item) => tutorId(item) === bookingTutor.value) || selectedTutor;
  selectedTutor = tutor;
  const items = getBookings();
  const booking = {
    tutor: tutor.name,
    initials: tutor.initials,
    subject: tutor.subject,
    type: bookingLessonType.value,
    dateTime: bookingDateTime.value,
    student: currentAccount.name,
    created: nowLabel()
  };
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
  addActivity(`Booked ${bookingLessonType.value} with ${tutor.name}`, "Booking");
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
  tutorRatings.push({
    score: Number(reviewScore.value),
    note: reviewText.value.trim() || "Helpful, clear, and supportive.",
    by: currentAccount.name,
    time: nowLabel()
  });
  ratings[selectedTutor.name] = tutorRatings;
  writeStore(storage.ratings, ratings);
  reviewText.value = "";
  addActivity(`Reviewed ${selectedTutor.name}`, "Review");
  renderReviewsPage();
  renderTutors();
});

signupRole.addEventListener("change", () => {
  if (!currentAccount) {
    setRole(signupRole.value);
    updateAccess();
  }
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = signupEmail.value.trim().toLowerCase();
  const password = signupPassword.value;
  const confirmPassword = signupConfirmPassword.value;
  const accounts = getAccounts();

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
    role: signupRole.value,
    name: signupName.value.trim(),
    email,
    password
  };

  accounts.push(account);
  saveAccounts(accounts);
  signupPassword.value = "";
  signupConfirmPassword.value = "";
  setAccount(account, { confirm: true, redirect: true });
});

loginPanel.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginEmail.value.trim().toLowerCase();
  const account = getAccounts().find((item) => item.email === email && item.password === loginPassword.value);

  if (!account) {
    signupStatus.textContent = "Login details do not match an account. Check the email and password, or create a new account.";
    signupStatus.classList.remove("success");
    loginPassword.focus();
    return;
  }

  loginPassword.value = "";
  setAccount(account, { confirm: true, redirect: true });
});

quickBook.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Availability tools are open in your tutor dashboard.";
    signupStatus.classList.add("success");
    showPage("dashboard");
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

lessonType.addEventListener("change", updateDueToday);

dialog.addEventListener("close", () => {
  if (!currentAccount || dialog.returnValue !== "confirm") return;
  addActivity(`Booked ${lessonType.value === "trial" ? "a free trial" : "a paid lesson"} with ${selectedTutor.name}`, "Booking");
  renderDashboard(currentAccount.role);
});

try {
  const savedAccount = JSON.parse(localStorage.getItem("girlstemTutoringCurrentAccount"));
  if (savedAccount && savedAccount.role && savedAccount.name && savedAccount.email) {
    setAccount(savedAccount);
  } else {
    setRole(signupRole.value);
    updateAccess();
  }
} catch {
  setRole(signupRole.value);
  updateAccess();
}

renderTutors();
showPage(getRouteFromHash(), { instant: true });

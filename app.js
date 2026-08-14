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

let selectedTutor = tutors[0];
let currentAccount = null;

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

function gradeRank(grade) {
  return grade === "A*" ? 2 : 1;
}

function getFilteredTutors() {
  const subject = subjectFilter.value;
  const university = uniFilter.value.trim().toLowerCase();
  const minGrade = gradeFilter.value;
  const maxBudget = Number(budgetFilter.value);

  const filtered = tutors.filter((tutor) => {
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
        <span class="rating">${tutor.rating.toFixed(2)}</span>
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
      openBooking();
    });
  });

  tutorGrid.querySelectorAll("[data-rate]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTutor = visibleTutors[Number(button.dataset.rate)];
      requestRating();
    });
  });
}

function renderDashboard(role) {
  const dashboard = roleDashboards[role];
  ratingsPanel.classList.remove("highlight");
  document.querySelector("#dashMode").textContent = dashboard.mode;
  roleTools.innerHTML = dashboard.tools.map(([title, text]) => `
    <article>
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(text)}</span>
    </article>
  `).join("");
  lessonList.innerHTML = dashboard.lessons.map(([time, title, text]) => `
    <article>
      <time>${escapeHtml(time)}</time>
      <div>
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(text)}</span>
      </div>
      <button class="icon-btn" type="button" title="Open lesson" aria-label="Open lesson"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>
    </article>
  `).join("");
  document.querySelector("#chatTitle").textContent = dashboard.chatTitle;
  document.querySelector("#chatWith").textContent = dashboard.chatWith;
  document.querySelector("#chatPlaceholder").textContent = `Message ${dashboard.chatWith}...`;
  chatMessages.innerHTML = dashboard.messages.map(([direction, text]) => `
    <p class="bubble ${direction}">${escapeHtml(text)}</p>
  `).join("");
  ratingsPanel.innerHTML = `
    <div>
      <strong>${escapeHtml(dashboard.ratingTitle)}</strong>
      <span>${escapeHtml(dashboard.ratingText)}</span>
    </div>
    <button class="secondary-btn" type="button" id="ratingAction">${escapeHtml(dashboard.ratingButton)}</button>
  `;
  document.querySelector("#ratingAction").addEventListener("click", requestRating);
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
    : `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> Book a trial`;
  messagesButton.textContent = role === "tutor" ? "View requests" : "Open chat";
  [quickBook, messagesButton].forEach((button) => {
    button.classList.toggle("locked-action", !currentAccount);
  });
}

function setAccount(account) {
  currentAccount = account;
  localStorage.setItem("girlstemTutoringCurrentAccount", JSON.stringify(account));
  signupRole.value = account.role;
  signupName.value = account.name;
  signupEmail.value = account.email;
  loginEmail.value = account.email;
  signupStatus.textContent = `${account.name}, you are logged in as a ${account.role}.`;
  signupStatus.classList.add("success");
  setRole(account.role);
  updateAccess();
}

function promptForAccount(message = "Please log in or create an account first.") {
  signupStatus.textContent = message;
  signupStatus.classList.remove("success");
  document.querySelector("#accounts").scrollIntoView({ behavior: "smooth" });
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
    document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth" });
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
    document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth" });
    return;
  }

  ratingsPanel.classList.add("highlight");
  ratingsPanel.innerHTML = `
    <div>
      <strong>Rating saved</strong>
      <span>${escapeHtml(currentAccount.name)} rated ${escapeHtml(selectedTutor.name)} 5 stars for ${escapeHtml(selectedTutor.subject)}.</span>
    </div>
    <button class="secondary-btn" type="button" id="ratingAction">Edit rating</button>
  `;
  document.querySelector("#ratingAction").addEventListener("click", requestRating);
  document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth" });
}

document.querySelector("[data-search-form]").addEventListener("submit", (event) => {
  event.preventDefault();
  if (currentAccount?.role === "tutor") {
    signupStatus.textContent = "Tutor accounts use the dashboard for availability, messages, ratings, and payout setup.";
    signupStatus.classList.add("success");
    document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth" });
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
  document.querySelector("#tutors").scrollIntoView({ behavior: "smooth" });
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
  setAccount(account);
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
  setAccount(account);
});

quickBook.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Availability tools are open in your tutor dashboard.";
    signupStatus.classList.add("success");
    document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth" });
    return;
  }

  openBooking();
});

messagesButton.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }
  signupStatus.textContent = currentAccount.role === "tutor"
    ? "Student and parent messages are ready in your tutor dashboard."
    : "Tutor chat is ready inside your account dashboard.";
  signupStatus.classList.add("success");
  document.querySelector("#dashboard").scrollIntoView({ behavior: "smooth" });
});

topMessagesButton.addEventListener("click", () => {
  messagesButton.click();
});

lessonType.addEventListener("change", updateDueToday);

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

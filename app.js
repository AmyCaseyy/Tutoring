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
    text: "Create a student account to book trials, track upcoming lessons, message tutors, and manage recurring sessions.",
    dash: "Student dashboard"
  },
  parent: {
    title: "Parent account",
    text: "Create a parent account to arrange lessons, pay securely, manage cancellations, message tutors, and follow your child’s schedule.",
    dash: "Parent dashboard"
  },
  tutor: {
    title: "Tutor account",
    text: "Create a tutor account to build a profile, list A-level subjects, set hourly rates, choose availability, accept trials, and receive payouts.",
    dash: "Tutor dashboard"
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
const signupRole = document.querySelector("#signupRole");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupStatus = document.querySelector("#signupStatus");
const quickBook = document.querySelector("#quickBook");
const messagesButton = document.querySelector("#messagesButton");

let selectedTutor = tutors[0];
let currentAccount = null;

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
          <h3>${tutor.name}</h3>
          <p>${tutor.subject} · ${tutor.university}</p>
        </div>
        <span class="rating">${tutor.rating.toFixed(2)}</span>
      </div>
      <p>${tutor.style}</p>
      <div class="chips">
        <span class="chip">${tutor.grade} at A-level</span>
        <span class="chip">${tutor.lessons} lessons</span>
        ${tutor.badges.map((badge) => `<span class="chip">${badge}</span>`).join("")}
      </div>
      <div class="card-footer">
        <div class="price">
          <strong>GBP ${tutor.price}/hr</strong>
          <span>Trial: free 30 mins</span>
        </div>
        <button class="primary-btn" type="button" data-book="${index}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
          Book
        </button>
      </div>
    </article>
  `).join("");

  tutorGrid.querySelectorAll("[data-book]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTutor = visibleTutors[Number(button.dataset.book)];
      openBooking();
    });
  });
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
}

function setAccount(account) {
  currentAccount = account;
  localStorage.setItem("girlstemTutoringAccount", JSON.stringify(account));
  signupRole.value = account.role;
  signupName.value = account.name;
  signupEmail.value = account.email;
  signupRole.disabled = true;
  signupName.disabled = true;
  signupEmail.disabled = true;
  signupForm.querySelector("button").textContent = "Account created";
  signupForm.querySelector("button").disabled = true;
  signupStatus.textContent = `${account.name}, your ${account.role} account is set.`;
  signupStatus.classList.add("success");
  setRole(account.role);
  updateActionState();
}

function updateActionState() {
  const locked = !currentAccount;
  [quickBook, messagesButton].forEach((button) => {
    button.classList.toggle("locked-action", locked);
  });
}

function promptForAccount() {
  signupStatus.textContent = "Please create an account first, then you can book or message tutors.";
  signupStatus.classList.remove("success");
  document.querySelector("#accounts").scrollIntoView({ behavior: "smooth" });
  signupName.focus();
}

function canBook() {
  if (!currentAccount) {
    promptForAccount();
    return false;
  }

  if (currentAccount.role === "tutor") {
    signupStatus.textContent = "Tutor accounts manage profiles and availability. Use a student or parent account to book lessons.";
    signupStatus.classList.remove("success");
    document.querySelector("#accounts").scrollIntoView({ behavior: "smooth" });
    return false;
  }

  return true;
}

document.querySelector("[data-search-form]").addEventListener("submit", (event) => {
  event.preventDefault();
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
  if (!currentAccount) setRole(signupRole.value);
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  setAccount({
    role: signupRole.value,
    name: signupName.value.trim(),
    email: signupEmail.value.trim()
  });
});

quickBook.addEventListener("click", openBooking);
messagesButton.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }
  signupStatus.textContent = "Messages are ready inside your account dashboard preview.";
  signupStatus.classList.add("success");
});
lessonType.addEventListener("change", updateDueToday);

try {
  const savedAccount = JSON.parse(localStorage.getItem("girlstemTutoringAccount"));
  if (savedAccount && savedAccount.role && savedAccount.name && savedAccount.email) {
    setAccount(savedAccount);
  } else {
    setRole(signupRole.value);
    updateActionState();
  }
} catch {
  setRole(signupRole.value);
  updateActionState();
}

renderTutors();

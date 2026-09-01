const tutors = [];

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
const rescheduleChoice = document.querySelector("#rescheduleChoice");
const dueToday = document.querySelector("#dueToday");
const signupForm = document.querySelector("#signupForm");
const signupRole = document.querySelector("#signupRole");
const signupName = document.querySelector("#signupName");
const signupEmail = document.querySelector("#signupEmail");
const signupPassword = document.querySelector("#signupPassword");
const signupPasswordConfirm = document.querySelector("#signupPasswordConfirm");
const signupStatus = document.querySelector("#signupStatus");
const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");
const loginStatus = document.querySelector("#loginStatus");
const verifyForm = document.querySelector("#verifyForm");
const verifyText = document.querySelector("#verifyText");
const verifyCode = document.querySelector("#verifyCode");
const verifyStatus = document.querySelector("#verifyStatus");
const quickBook = document.querySelector("#quickBook");
const messagesButton = document.querySelector("#messagesButton");
const dashboardList = document.querySelector("#dashboardList");
const dashMode = document.querySelector("#dashMode");

let selectedTutor = null;
let currentAccount = null;
let pendingAccount = null;
let pendingVerificationCode = "";

function clearOldPresetProfilesOnce() {
  if (localStorage.getItem("tutrstemPresetProfilesCleared") === "yes") return;
  localStorage.removeItem("tutrstemTutorProfiles");
  localStorage.removeItem("tutrstemBookings");
  localStorage.setItem("tutrstemPresetProfilesCleared", "yes");
}

const dashboardLayouts = {
  student: {
    mode: "Student schedule",
    items: [
      ["Mon 18:00", "A-level Biology", "Recurring weekly with your tutor"],
      ["Wed 19:30", "Mathematics trial", "Free 30-minute session"]
    ],
    chatTitle: "Tutor chat",
    chatName: "Your tutor"
  },
  parent: {
    mode: "Parent overview",
    items: [
      ["Mon 18:00", "Biology lesson", "Recurring weekly with your tutor"],
      ["Wed 19:30", "Mathematics trial review", "Approve next booking"]
    ],
    chatTitle: "Parent messages",
    chatName: "Tutor updates"
  },
  tutor: {
    mode: "Tutor availability",
    items: [
      ["Today", "Profile completion", "Add subjects, hourly rates and availability"],
      ["Pending", "Trial requests", "Accept or decline student trial bookings"]
    ],
    chatTitle: "Tutor inbox",
    chatName: "Student enquiries"
  }
};

function gradeRank(grade) {
  return grade === "A*" ? 2 : 1;
}

function initialsFromName(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "TS";
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

function getAccounts() {
  const accounts = readStore("tutrstemAccounts", []);
  const legacyAccount = readStore("girlstemTutoringAccount", null);
  if (legacyAccount?.email && !accounts.some((account) => account.email === legacyAccount.email)) {
    accounts.push(legacyAccount);
    writeStore("tutrstemAccounts", accounts);
  }
  return accounts;
}

function saveAccounts(accounts) {
  writeStore("tutrstemAccounts", accounts);
}

function saveAccount(account) {
  const accounts = getAccounts();
  const nextAccounts = accounts.some((item) => item.email === account.email)
    ? accounts.map((item) => item.email === account.email ? account : item)
    : [...accounts, account];
  saveAccounts(nextAccounts);
  localStorage.setItem("girlstemTutoringAccount", JSON.stringify(account));
  localStorage.setItem("tutrstemCurrentAccountEmail", account.email);
}

function getTutorProfiles() {
  const profiles = readStore("tutrstemTutorProfiles", []);
  return profiles.map((profile) => ({
    name: profile.name,
    subject: profile.subject || "Subject to be added",
    university: profile.university || "University to be added",
    grade: profile.grade || "A*",
    rating: Number(profile.rating || 5),
    lessons: Number(profile.lessons || 0),
    price: Number(profile.price || 35),
    style: profile.style || "This tutor is still building their profile.",
    badges: profile.badges || ["New tutor", "Free trial"],
    initials: profile.initials || initialsFromName(profile.name || "Tutor"),
    score: Number(profile.score || 80),
    email: profile.email
  }));
}

function getAllTutors() {
  return [...tutors, ...getTutorProfiles()];
}

function queueEmail(to, subject, body) {
  if (!to) return;
  const queue = readStore("tutrstemEmailQueue", []);
  queue.unshift({
    to,
    subject,
    body,
    status: "queued",
    createdAt: new Date().toISOString()
  });
  writeStore("tutrstemEmailQueue", queue.slice(0, 50));
}

function openEmailDraft(to, subject, body) {
  if (!to) return;
  const recipients = Array.isArray(to) ? to.filter(Boolean).join(",") : to;
  const mailto = `mailto:${encodeURIComponent(recipients)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
}

function upsertTutorProfile(account) {
  if (account.role !== "tutor") return;
  const profiles = readStore("tutrstemTutorProfiles", []);
  if (profiles.some((profile) => profile.email === account.email)) return;
  profiles.push({
    name: account.name,
    email: account.email,
    subject: "Subject to be added",
    university: "University to be added",
    grade: "A*",
    rating: 5,
    lessons: 0,
    price: 35,
    style: "This tutor is setting up their profile.",
    badges: ["New tutor", "Free trial"],
    initials: initialsFromName(account.name),
    score: 80
  });
  writeStore("tutrstemTutorProfiles", profiles);
}

function getBookings() {
  return readStore("tutrstemBookings", []);
}

function saveBookings(bookings) {
  writeStore("tutrstemBookings", bookings.slice(0, 80));
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
    tutorGrid.innerHTML = `<div class="empty-state"><h3>No tutor profiles yet</h3><p>The preset profiles have been cleared. Approved tutors will appear here when they create their own profiles.</p></div>`;
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
  if (!selectedTutor) return;
  bookingTitle.textContent = `Book ${selectedTutor.name}`;
  updateDueToday();
  dialog.showModal();
}

function updateDueToday() {
  if (!selectedTutor) {
    dueToday.textContent = "GBP 0.00";
    return;
  }
  dueToday.textContent = lessonType.value === "trial" ? "GBP 0.00" : `GBP ${selectedTutor.price}.00`;
}

function setRole(role) {
  document.querySelector("#accountTitle").textContent = roleContent[role].title;
  document.querySelector("#accountText").textContent = roleContent[role].text;
  document.querySelector("#dashRole").textContent = currentAccount ? roleContent[role].dash : `${roleContent[role].dash} preview`;
  renderDashboard(role);
}

function renderDashboard(role) {
  const layout = dashboardLayouts[role] || dashboardLayouts.student;
  const bookings = getBookings().filter((booking) => (
    role === "tutor"
      ? booking.tutorEmail === currentAccount?.email
      : booking.studentEmail === currentAccount?.email
  ));
  dashMode.textContent = currentAccount ? layout.mode : "Dashboard preview";
  const dashboardItems = bookings.length
    ? bookings.map((booking) => [
      booking.time,
      `${booking.lessonLabel} with ${role === "tutor" ? booking.studentName : booking.tutorName}`,
      `${booking.status}${booking.rescheduleStatus ? ` · ${booking.rescheduleStatus}` : ""}`
    ])
    : layout.items;
  dashboardList.innerHTML = dashboardItems.map(([time, title, detail], index) => {
    const booking = bookings[index];
    const canConfirm = booking && role === "tutor" && booking.status !== "Confirmed";
    return `
    <article>
      <time>${time}</time>
      <div>
        <strong>${title}</strong>
        <span>${detail}</span>
      </div>
      <div class="dashboard-actions">
        ${canConfirm ? `<button class="secondary-btn compact-action" type="button" data-confirm-booking="${index}">Confirm</button>` : ""}
        ${booking ? `<button class="secondary-btn compact-action" type="button" data-reschedule="${index}">Reschedule</button>` : `<button class="icon-btn" type="button" title="Open item" aria-label="Open item"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>`}
      </div>
    </article>
  `}).join("");
  dashboardList.querySelectorAll("[data-confirm-booking]").forEach((button) => {
    button.addEventListener("click", () => {
      const booking = bookings[Number(button.dataset.confirmBooking)];
      if (!booking) return;
      booking.status = "Confirmed";
      booking.rescheduleStatus = "";
      saveBookings(getBookings().map((item) => item.id === booking.id ? booking : item));
      queueEmail(
        booking.tutorEmail,
        `${booking.lessonLabel} confirmed`,
        `You confirmed ${booking.lessonLabel} with ${booking.studentName}.`
      );
      queueEmail(
        booking.studentEmail,
        `${booking.lessonLabel} confirmed with ${booking.tutorName}`,
        `${booking.tutorName} confirmed your booking.`
      );
      openEmailDraft(
        [booking.tutorEmail, booking.studentEmail],
        `${booking.lessonLabel} confirmed with ${booking.tutorName}`,
        `${booking.tutorName} confirmed the booking for ${booking.lessonLabel} with ${booking.studentName}.`
      );
      renderDashboard(role);
    });
  });
  dashboardList.querySelectorAll("[data-reschedule]").forEach((button) => {
    button.addEventListener("click", () => {
      const booking = bookings[Number(button.dataset.reschedule)];
      if (!booking) return;
      booking.rescheduleStatus = `${currentAccount.name} requested a new time`;
      booking.status = "Reschedule requested";
      saveBookings(getBookings().map((item) => item.id === booking.id ? booking : item));
      queueEmail(
        currentAccount.role === "tutor" ? booking.studentEmail : booking.tutorEmail,
        `Reschedule requested for ${booking.lessonLabel}`,
        `${currentAccount.name} requested a new time for ${booking.lessonLabel}. Log in to review the booking.`
      );
      openEmailDraft(
        currentAccount.role === "tutor" ? booking.studentEmail : booking.tutorEmail,
        `Reschedule requested for ${booking.lessonLabel}`,
        `${currentAccount.name} requested a new time for ${booking.lessonLabel}. Log in to review the booking.`
      );
      renderDashboard(role);
    });
  });
  document.querySelector(".chat-title strong").textContent = layout.chatTitle;
  document.querySelector(".chat-title span").textContent = layout.chatName;
}

function setAccount(account) {
  currentAccount = account;
  upsertTutorProfile(account);
  saveAccount(account);
  signupRole.value = account.role;
  signupName.value = account.name;
  signupEmail.value = account.email;
  signupRole.disabled = true;
  signupName.disabled = true;
  signupEmail.disabled = true;
  signupPassword.disabled = true;
  signupPasswordConfirm.disabled = true;
  signupForm.querySelector("button").textContent = "Account created";
  signupForm.querySelector("button").disabled = true;
  signupStatus.textContent = `${account.name}, your ${account.role} account is verified and set.`;
  signupStatus.classList.add("success");
  signupStatus.classList.remove("error");
  verifyForm.hidden = true;
  setRole(account.role);
  updateActionState();
}

function setStatus(element, message, type = "") {
  element.textContent = message;
  element.classList.toggle("success", type === "success");
  element.classList.toggle("error", type === "error");
}

function updateActionState() {
  const locked = !currentAccount;
  [quickBook, messagesButton].forEach((button) => {
    button.classList.toggle("locked-action", locked);
  });
}

function promptForAccount() {
  setStatus(signupStatus, "Please create and verify an account first, then you can book or message tutors.", "error");
  document.querySelector("#accounts").scrollIntoView({ behavior: "smooth" });
  signupName.focus();
}

function canBook() {
  if (!currentAccount) {
    promptForAccount();
    return false;
  }

  if (currentAccount.role === "tutor") {
    setStatus(signupStatus, "Tutor accounts manage profiles and availability. Use a student or parent account to book lessons.", "error");
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
  const email = signupEmail.value.trim();
  if (signupPassword.value.length < 8) {
    setStatus(signupStatus, "Password must be at least 8 characters.", "error");
    return;
  }

  if (signupPassword.value !== signupPasswordConfirm.value) {
    setStatus(signupStatus, "Passwords do not match.", "error");
    return;
  }

  if (getAccounts().some((account) => account.email === email)) {
    setStatus(signupStatus, "An account already exists for that email. Use Log in instead.", "error");
    return;
  }

  pendingVerificationCode = String(Math.floor(100000 + Math.random() * 900000));
  pendingAccount = {
    role: signupRole.value,
    name: signupName.value.trim(),
    email,
    password: signupPassword.value
  };
  verifyForm.hidden = false;
  verifyText.textContent = `A verification code has been sent to ${pendingAccount.email}. Demo code: ${pendingVerificationCode}`;
  setStatus(signupStatus, "Check the verification box below to finish creating your account.", "success");
  setStatus(verifyStatus, "Enter the demo code shown above.", "");
  verifyCode.focus();
});

verifyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!pendingAccount || verifyCode.value.trim() !== pendingVerificationCode) {
    setStatus(verifyStatus, "That code is not correct. Please check it and try again.", "error");
    return;
  }
  setAccount(pendingAccount);
  pendingAccount = null;
  pendingVerificationCode = "";
  setStatus(verifyStatus, "Email verified.", "success");
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const savedAccount = getAccounts().find((account) => (
    account.email === loginEmail.value.trim() && account.password === loginPassword.value
  ));
  if (!savedAccount) {
    setStatus(loginStatus, "Email or password is incorrect.", "error");
    return;
  }
  setAccount(savedAccount);
  setStatus(loginStatus, "Logged in successfully.", "success");
});

quickBook.addEventListener("click", openBooking);
messagesButton.addEventListener("click", () => {
  if (!currentAccount) {
    promptForAccount();
    return;
  }
  setStatus(signupStatus, "Messages are ready inside your account dashboard.", "success");
});
lessonType.addEventListener("change", updateDueToday);

dialog.addEventListener("close", () => {
  if (dialog.returnValue !== "confirm" || !currentAccount || !selectedTutor) return;
  const lessonLabel = lessonType.options[lessonType.selectedIndex]?.text || "lesson";
  const rescheduleLabel = rescheduleChoice.options[rescheduleChoice.selectedIndex]?.text || "No reschedule requested";
  const booking = {
    id: `booking-${Date.now()}`,
    tutorName: selectedTutor.name,
    tutorEmail: selectedTutor.email,
    studentName: currentAccount.name,
    studentEmail: currentAccount.email,
    lessonLabel,
    status: "Awaiting tutor confirmation",
    rescheduleStatus: rescheduleChoice.value === "none" ? "" : rescheduleLabel,
    time: "Pending"
  };
  saveBookings([booking, ...getBookings()]);
  const tutorEmail = selectedTutor.email;
  const studentEmail = currentAccount.email;
  queueEmail(
    tutorEmail,
    `New ${lessonLabel} request from ${currentAccount.name}`,
    `${currentAccount.name} requested ${lessonLabel}. Log in to accept, reject, or suggest a reschedule.`
  );
  openEmailDraft(
    tutorEmail,
    `New ${lessonLabel} request from ${currentAccount.name}`,
    `${currentAccount.name} requested ${lessonLabel}. Log in to accept, reject, or suggest a reschedule.`
  );
  queueEmail(
    studentEmail,
    `Booking request sent to ${selectedTutor.name}`,
    `Your ${lessonLabel} request has been sent. You will get another email when the tutor confirms or suggests a new time.`
  );
  if (rescheduleChoice.value !== "none") {
    queueEmail(
      tutorEmail,
      `Reschedule note for ${currentAccount.name}`,
      `${currentAccount.name} added this booking note: ${rescheduleLabel}.`
    );
  }
  setStatus(signupStatus, `Booking request sent to ${selectedTutor.name}. Email notifications have been queued.`, "success");
  renderDashboard(currentAccount.role);
});

try {
  clearOldPresetProfilesOnce();
  const currentEmail = localStorage.getItem("tutrstemCurrentAccountEmail");
  const savedAccount = getAccounts().find((account) => account.email === currentEmail) || readStore("girlstemTutoringAccount", null);
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

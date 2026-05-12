const registerForm = document.getElementById("registerForm");
const companyName = document.getElementById("companyName");
const fullName = document.getElementById("fullName");
const registerEmail = document.getElementById("registerEmail");
const registerPhone = document.getElementById("registerPhone");
const registerPassword = document.getElementById("registerPassword");
const confirmPassword = document.getElementById("confirmPassword");
const registerMessage = document.getElementById("registerMessage");
const registerCaptchaQuestion = document.getElementById("registerCaptchaQuestion");
const registerCaptchaAnswer = document.getElementById("registerCaptchaAnswer");
const refreshRegisterCaptcha = document.getElementById("refreshRegisterCaptcha");
const openSmartValidation = document.getElementById("openSmartValidation");
const smartModal = document.getElementById("smartModal");
const smartEmail = document.getElementById("smartEmail");
const validateSmartEmail = document.getElementById("validateSmartEmail");
const smartMessage = document.getElementById("smartMessage");
const smartFormState = document.getElementById("smartFormState");
const smartVerifiedState = document.getElementById("smartVerifiedState");
const smartNotRegisteredState = document.getElementById("smartNotRegisteredState");
const closeSmartModalControls = document.querySelectorAll("[data-close-smart-modal]");

let registerCaptchaResult = 0;

function createRegisterCaptcha() {
  const first = Math.floor(Math.random() * 8) + 2;
  const second = Math.floor(Math.random() * 8) + 2;
  registerCaptchaResult = first + second;
  registerCaptchaQuestion.textContent = `${first} + ${second} = ?`;
  registerCaptchaAnswer.value = "";
  registerMessage.textContent = "";
  registerMessage.className = "form-message";
}

function showRegisterMessage(message, type) {
  registerMessage.textContent = message;
  registerMessage.className = `form-message ${type}`;
}

function setSmartState(state) {
  smartFormState.hidden = state !== "form";
  smartVerifiedState.hidden = state !== "verified";
  smartNotRegisteredState.hidden = state !== "not-registered";
}

function openSmartModal() {
  setSmartState("form");
  smartEmail.value = "";
  smartMessage.textContent = "";
  smartMessage.className = "form-message";
  smartModal.classList.add("is-open");
  smartModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  window.setTimeout(() => smartEmail.focus(), 80);
}

function closeSmartModal() {
  smartModal.classList.remove("is-open");
  smartModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

refreshRegisterCaptcha.addEventListener("click", createRegisterCaptcha);
openSmartValidation.addEventListener("click", openSmartModal);

closeSmartModalControls.forEach((control) => {
  control.addEventListener("click", closeSmartModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && smartModal.classList.contains("is-open")) {
    closeSmartModal();
  }
});

validateSmartEmail.addEventListener("click", () => {
  const email = smartEmail.value.trim().toLowerCase();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    smartMessage.textContent = "Please enter a valid registered company email address.";
    smartMessage.className = "form-message is-error";
    smartEmail.focus();
    return;
  }

  const isVerifiedPrototype = email.includes("cbqa") || email.includes("nexora") || email.includes("demo");
  setSmartState(isVerifiedPrototype ? "verified" : "not-registered");
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.com$/i;

  if (companyName.value.trim().length < 2) {
    showRegisterMessage("Company name is required.", "is-error");
    companyName.focus();
    return;
  }

  if (fullName.value.trim().length < 2) {
    showRegisterMessage("Full name is required.", "is-error");
    fullName.focus();
    return;
  }

  if (!emailPattern.test(registerEmail.value.trim())) {
    showRegisterMessage("Work email must be a valid email address ending in .com.", "is-error");
    registerEmail.focus();
    return;
  }

  if (registerPhone.value.trim().length < 8) {
    showRegisterMessage("Phone or WhatsApp number is required.", "is-error");
    registerPhone.focus();
    return;
  }

  if (registerPassword.value.length < 8) {
    showRegisterMessage("Password must contain at least 8 characters.", "is-error");
    registerPassword.focus();
    return;
  }

  if (registerPassword.value !== confirmPassword.value) {
    showRegisterMessage("Password confirmation does not match.", "is-error");
    confirmPassword.focus();
    return;
  }

  if (Number(registerCaptchaAnswer.value) !== registerCaptchaResult) {
    showRegisterMessage("The captcha answer is incorrect. Please try again.", "is-error");
    registerCaptchaAnswer.focus();
    return;
  }

  showRegisterMessage("Registration request captured. The CBQA Global team will review and activate your OneConnect access.", "is-success");
});

createRegisterCaptcha();

const captchaQuestion = document.getElementById("captchaQuestion");
const captchaAnswer = document.getElementById("captchaAnswer");
const refreshCaptcha = document.getElementById("refreshCaptcha");
const loginForm = document.getElementById("loginForm");
const formMessage = document.getElementById("formMessage");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const togglePassword = document.getElementById("togglePassword");

let captchaResult = 0;

function createCaptcha() {
  const first = Math.floor(Math.random() * 8) + 2;
  const second = Math.floor(Math.random() * 8) + 2;
  captchaResult = first + second;
  captchaQuestion.textContent = `${first} + ${second} = ?`;
  captchaAnswer.value = "";
  formMessage.textContent = "";
  formMessage.className = "form-message";
}

refreshCaptcha.addEventListener("click", createCaptcha);

togglePassword.addEventListener("click", () => {
  const isVisible = loginPassword.type === "text";
  loginPassword.type = isVisible ? "password" : "text";
  togglePassword.classList.toggle("is-visible", !isVisible);
  togglePassword.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
  togglePassword.setAttribute("aria-pressed", String(!isVisible));
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailPattern = /^[^\s@]+@[^\s@]+\.com$/i;

  if (!emailPattern.test(loginEmail.value.trim())) {
    formMessage.textContent = "Username must be a valid email address ending in .com.";
    formMessage.className = "form-message is-error";
    loginEmail.focus();
    return;
  }

  if (Number(captchaAnswer.value) !== captchaResult) {
    formMessage.textContent = "The captcha answer is incorrect. Please try again.";
    formMessage.className = "form-message is-error";
    captchaAnswer.focus();
    return;
  }

  formMessage.textContent = "Login successful. Redirecting to your dashboard...";
  formMessage.className = "form-message is-success";
  setTimeout(() => {
    window.location.href = window.location.protocol === "file:" ? "dashboard.html" : "dashboard";
  }, 800);
});

createCaptcha();

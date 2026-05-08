const forgotCaptchaQuestion = document.getElementById("forgotCaptchaQuestion");
const forgotCaptchaAnswer = document.getElementById("forgotCaptchaAnswer");
const forgotRefreshCaptcha = document.getElementById("forgotRefreshCaptcha");
const forgotForm = document.getElementById("forgotForm");
const forgotFormMessage = document.getElementById("forgotFormMessage");

let forgotCaptchaResult = 0;

function createForgotCaptcha() {
  const first = Math.floor(Math.random() * 8) + 2;
  const second = Math.floor(Math.random() * 8) + 2;
  forgotCaptchaResult = first + second;
  forgotCaptchaQuestion.textContent = `${first} + ${second} = ?`;
  forgotCaptchaAnswer.value = "";
  forgotFormMessage.textContent = "";
  forgotFormMessage.className = "form-message";
}

forgotRefreshCaptcha.addEventListener("click", createForgotCaptcha);

forgotForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (Number(forgotCaptchaAnswer.value) !== forgotCaptchaResult) {
    forgotFormMessage.textContent = "The captcha answer is incorrect. Please try again.";
    forgotFormMessage.className = "form-message is-error";
    forgotCaptchaAnswer.focus();
    return;
  }

  forgotFormMessage.textContent = "If the email is registered, reset instructions will be sent to the account owner.";
  forgotFormMessage.className = "form-message is-success";
});

createForgotCaptcha();

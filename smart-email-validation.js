const smartEmail = document.getElementById("smartEmail");
const validateSmartEmail = document.getElementById("validateSmartEmail");
const smartMessage = document.getElementById("smartMessage");
const smartFormState = document.getElementById("smartFormState");
const smartVerifiedState = document.getElementById("smartVerifiedState");
const smartNotRegisteredState = document.getElementById("smartNotRegisteredState");

function setSmartState(state) {
  smartFormState.hidden = state !== "form";
  smartVerifiedState.hidden = state !== "verified";
  smartNotRegisteredState.hidden = state !== "not-registered";
}

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

smartEmail.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    validateSmartEmail.click();
  }
});

setSmartState("form");

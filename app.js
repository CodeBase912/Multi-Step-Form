const multi_step_form = document.querySelector("[data-multistep-form]");
const form_step_cards = document.querySelectorAll(".form__card");
const progress_bar = document.querySelector(
  "[data-multistep-form-progress-bar]"
);
const progress_bar_icons = document.querySelectorAll("[data-step-icon]");
const submit_btn = document.querySelector("#msf-btn-submit");

console.log("form_step_cards: ", form_step_cards);

// Add click event listener to the multi-step form
multi_step_form.addEventListener("click", (e) => {
  if (e.target.dataset?.action) {
    // Form button was clicked, handle form step actions
    const currentStep = e.target.action;
    if (e.target.dataset.action === "next") {
      // Show next form step
    } else if (e.target.dataset.action === "previous") {
      // Show previous form step
    } else if (e.target.dataset.action === "submit") {
      // Submit the form
    }
  }
});

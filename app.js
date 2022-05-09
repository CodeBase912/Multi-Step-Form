const multi_step_form = document.querySelector("[data-multistep-form]");
const form_step_cards = document.querySelectorAll(".form__card");
const progress_bar = document.querySelector(
  "[data-multistep-form-progress-bar]"
);
const progress_bar_icons = multi_step_form.querySelectorAll(".progress__step");
const submit_btn = document.querySelector("#msf-btn-submit");

// Add click event listener to the multi-step form
multi_step_form.addEventListener("click", (e) => {
  if (e.target.dataset?.action) {
    // Form button was clicked, handle form step actions
    const currentStep = e.target.dataset.currentStep;
    if (e.target.dataset.action === "next") {
      // Show next form step

      // Start by hiding current form step
      const current_step_card = [...form_step_cards].find((card) =>
        card.classList.contains("form__active-step")
      );
      // Remove any reverse animations
      current_step_card.classList.remove("form_default-step");
      current_step_card.classList.remove("form__active-step-reverse");
      current_step_card.classList.remove("form__previous-step-reverse");
      current_step_card.classList.toggle("form__active-step");
      current_step_card.classList.toggle("form__previous-step");

      // Then show the next form step
      const next_form_step_card = form_step_cards[currentStep];
      // Remove any reverse animations
      next_form_step_card.classList.remove("form__previous-step-reverse");
      next_form_step_card.classList.remove("form__active-step-reverse");
      // Toggle step change animations
      next_form_step_card.classList.toggle("form__active-step");
      next_form_step_card.classList.toggle("form__next-step");

      // Update current step progress bar styles
      multi_step_form
        .querySelector(".progress__step-active")
        .classList.add("progress__step-complete");
      multi_step_form
        .querySelector(".progress__step-active")
        .classList.remove("progress__step-active");

      progress_bar_icons[currentStep].classList.remove(
        "progress__step-inactive"
      );
      progress_bar_icons[currentStep].classList.add("progress__step-active");
    } else if (e.target.dataset.action === "previous") {
      // Show previous form step

      // Start by hiding current form step
      let previous_step_index;
      const current_step_card = [...form_step_cards].find((card, cardIndex) => {
        if (card.classList.contains("form__active-step")) {
          previous_step_index = cardIndex - 0;
          return true;
        }
      });
      // Add reverse animations
      current_step_card.classList.add("form__previous-step-reverse");
      // Toggle step change animations
      current_step_card.classList.toggle("form__active-step");
      current_step_card.classList.toggle("form__next-step");

      // Then show the next form step
      const previous_form_step_card = form_step_cards[previous_step_index - 1];
      // Add reverse animations
      previous_form_step_card.classList.add("form__active-step-reverse");
      // Toggle step change animations
      previous_form_step_card.classList.toggle("form__active-step");
      previous_form_step_card.classList.toggle("form__previous-step");

      // Update current step progress bar styles
      multi_step_form
        .querySelector(".progress__step-active")
        .classList.add("progress__step-inactive");
      multi_step_form
        .querySelector(".progress__step-active")
        .classList.remove("progress__step-active");
      progress_bar_icons[previous_step_index - 1].classList.add(
        "progress__step-active"
      );
    } else if (e.target.dataset.action === "submit") {
      // Submit the form
    }
  }
});

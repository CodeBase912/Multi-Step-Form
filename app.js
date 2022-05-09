const multi_step_form = document.querySelector("[data-multistep-form]");
const form_step_cards = document.querySelectorAll(".form__card");
const form_inputs = document.querySelectorAll(".form__input");
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
      // Validate current step input fields
      if (validateStepFields(currentStep)) return;

      // No errors found show next form step

      // Start by hiding current form step
      const current_step_card = [...form_step_cards].find((card) =>
        card.classList.contains("form__active-step")
      );
      const next_card = form_step_cards[currentStep];
      const direction = "forward";

      // Animate step change
      animateStepCardChange(current_step_card, next_card, direction);

      // Handle progress bar step change
      handleProgressBarChange(multi_step_form, progress_bar_icons, currentStep);
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
      const next_card = form_step_cards[previous_step_index - 1];
      const direction = "back";

      // Animate step change
      animateStepCardChange(current_step_card, next_card, direction);

      // Handle progress bar step change
      handleProgressBarChange(
        multi_step_form,
        progress_bar_icons,
        previous_step_index - 1,
        direction
      );
    } else if (e.target.dataset.action === "submit") {
      // Submit the form
    }
  }
});

// ----------------------------------------------------------------
// UTILITY FUNCTIONS
// ----------------------------------------------------------------

/**
 * validates the input fields of the current form step. Also updates the
 * current form step UI to notify the user which fields have an error.
 * Returns true if there is any number of the fields has an error false
 * otherwise
 * @param {number} currentStep the current form step. First step = 1
 * @returns {boolean}
 */
function validateStepFields(currentStep) {
  const step_inputs_groups =
    form_step_cards[currentStep - 1].querySelectorAll(".form__input-group");
  const isInputError = [...step_inputs_groups].filter(
    (input_group, input_group_index) => {
      const input_element = input_group.querySelector(".form__input");
      const input__error_element =
        input_group.querySelector(".form__input-error");
      console.log("Valid: ", input_element.checkValidity());
      if (!input_element.checkValidity()) {
        console.log(
          `${input_element.getAttribute("name")} validation error: `,
          input_element.validationMessage
        );
        input__error_element.innerHTML = input_element.validationMessage;
        input_element.classList.add("form__input-error-mode");
        return true;
      }
      input__error_element.innerHTML = "";
      input_element.classList.remove("form__input-error-mode");
    }
  );

  if (isInputError.length > 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * animates to the next form step depending on the given direction
 * @param {Element} current_card the current form step card
 * @param {Element} next_card the next form step card to bring into view
 * @param {string} direction default "forward". Enter "back" if you want
 *                           to animate in the reverse direction (i.e. to
 *                           the previous form step)
 */
function animateStepCardChange(current_card, next_card, direction = "forward") {
  switch (direction) {
    case "forward":
      // Remove any reverse animations
      current_card.classList.remove("form__default-step");
      current_card.classList.remove("form__active-step-reverse");
      current_card.classList.remove("form__previous-step-reverse");
      current_card.classList.toggle("form__active-step");
      current_card.classList.toggle("form__previous-step");

      // Remove any reverse animations
      next_card.classList.remove("form__previous-step-reverse");
      next_card.classList.remove("form__active-step-reverse");
      // Toggle step change animations
      next_card.classList.toggle("form__active-step");
      next_card.classList.toggle("form__next-step");
      break;

    case "back":
      // Add reverse animations
      current_card.classList.add("form__previous-step-reverse");
      // Toggle step change animations
      current_card.classList.toggle("form__active-step");
      current_card.classList.toggle("form__next-step");

      // Then show the next form step
      // Add reverse animations
      next_card.classList.add("form__active-step-reverse");
      // Toggle step change animations
      next_card.classList.toggle("form__active-step");
      next_card.classList.toggle("form__previous-step");
      break;

    default:
      break;
  }
}

/**
 * handles updating the status of the progress bar on form step
 * change
 * @param {Element} multi_step_form the multistep form container/element
 * @param {NodeListOf<Element>} progress_bar_icons list of the progress step icon elements
 * @param {number} currentStep the current form step. First step = 1
 * @param {string} direction default "forward". Enter "back" if you want
 *                           to animate in the reverse direction (i.e. to
 *                           the previous form step)
 */
function handleProgressBarChange(
  multi_step_form,
  progress_bar_icons,
  currentStep,
  direction = "forward"
) {
  switch (direction) {
    case "forward":
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
      break;

    case "back":
      // Update current step progress bar styles
      multi_step_form
        .querySelector(".progress__step-active")
        .classList.add("progress__step-inactive");
      multi_step_form
        .querySelector(".progress__step-active")
        .classList.remove("progress__step-active");
      progress_bar_icons[currentStep].classList.add("progress__step-active");
      break;

    default:
      break;
  }
}

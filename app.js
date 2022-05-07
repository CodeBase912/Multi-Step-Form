const step_1_form = document.querySelector('[data-step="1"]');
const form_steps_containers = document.querySelectorAll("[data-step]");
const progress_bar_icons = document.querySelectorAll("[data-step-icon]");
const submit_btn = document.querySelector("#msf-btn-submit");

// Utitlity funcitons

/**
 * triggers the transition animation to display the next form step
 *
 * @param {NodeListOf<HTMLButtonElement>} nextBtns List of next buttons
 *                                                 in the multi-step form
 * @param {number} currentStepIndex the current active form step
 */
const nextTransition = (nextBtns, currentStepIndex) => {
  // Animate the next step into view
  nextBtns[currentStepIndex + 1].style.transform = "translateX(0px)";
  nextBtns[currentStepIndex + 1].style.opacity = "1";
  nextBtns[currentStepIndex + 1].style.pointerEvents = "all";

  // Animate the current step out of view
  nextBtns[currentStepIndex].style.transform = "translateX(-500px)";
  nextBtns[currentStepIndex].style.opacity = "0";
  nextBtns[currentStepIndex].style.pointerEvents = "none";
};

/**
 * triggers the transition animation to display the previous form step
 *
 * @param {NodeListOf<HTMLButtonElement>} prevBtns List of prev buttons
 *                                                 in the multi-step form
 * @param {number} currentStepIndex the current active form step
 */
const prevTransition = (prevBtns, currentStepIndex) => {
  // Animate the prev step into view
  prevBtns[currentStepIndex - 1].style.transform = "translateX(0px)";
  prevBtns[currentStepIndex - 1].style.opacity = "1";
  prevBtns[currentStepIndex - 1].style.pointerEvents = "all";

  // Animate the current step out of view
  prevBtns[currentStepIndex].style.transform = "translateX(500px)";
  prevBtns[currentStepIndex].style.opacity = "0";
  prevBtns[currentStepIndex].style.pointerEvents = "none";
};

// Loop through all the form step containers and addEvenlisteners
const all_next_btns = document.querySelectorAll('[data-action="step-next"]');
const all_prev_btns = document.querySelectorAll('[data-action="step-prev"]');

// Add click event listeners to form buttons
for (let i = 0; i < all_next_btns.length; i++) {
  //   console.log("curentIteration: ", all_next_btns[i]);
  all_next_btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    // Determine current active form step
    const currentStep = parseInt(e.target.getAttribute("data-current-step"));
    const currentStepIndex = currentStep - 1;

    // Update progress bar state
    if (
      progress_bar_icons[currentStepIndex].style.fill ===
      "var(--progress-complete-color)"
    ) {
    } else {
      progress_bar_icons[currentStepIndex].style.fill =
        "var(--progress-complete-color)";
    }
    if (
      progress_bar_icons[currentStepIndex + 1].style.fill ===
      "var(--progress-complete-color)"
    ) {
    } else {
      progress_bar_icons[currentStepIndex + 1].style.fill = "white";
    }

    // Trigger transition to next step
    if (e.target.getAttribute("type") !== "submit") {
      nextTransition(form_steps_containers, currentStepIndex);
    }
  });

  all_prev_btns[i].addEventListener("click", (e) => {
    e.preventDefault();

    // Determine current active form step
    const currentStep = parseInt(e.target.getAttribute("data-current-step"));
    const currentStepIndex = currentStep - 1;

    // Trigger transition to previous step
    if (e.target.getAttribute("type") !== "submit") {
      prevTransition(form_steps_containers, currentStepIndex);
    }
  });
}

submit_btn.addEventListener("click", (e) => {
  e.preventDefault();
  let form_data = {};

  // Get all form input values
  const form_inputs = document.querySelectorAll(".form__input");
  for (let i = 0; i < form_inputs.length; i++) {
    form_data[form_inputs[i].getAttribute("name")] = form_inputs[i].value;
  }

  // ....
  // Handle form submission here
  console.log("form_data: ", form_data);
  alert(`form_data: \n${JSON.stringify(form_data)}`);
});

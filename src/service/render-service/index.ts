import { createElement, createInputElement } from './render-service-util';

// ---------------------------------------------------------------------
// Render Service
// ---------------------------------------------------------------------

class RenderService implements RenderServiceInterface {
	constructor(
    public formElement: HTMLElement,
    public template: FormStepTemplate[]
	) {
		this.renderFormTemplate(this.formElement, this.template);
	}

	public renderFormTemplate(
		formElement: HTMLElement,
		template: FormStepTemplate[]
	) {
		template.map((formStep, formStepIndex) => {
			// Render the given form step id if it is defined else
			// generate one from the form step index. Start at 1
			const formStepId = formStep?.stepElementId
				? formStep?.stepElementId
				: `step-${formStepIndex}`;

			// Render the form step container
			const formStepContainer = createElement('div', { id: formStepId });

			// Loop through inputs array and render each input field
			formStep.inputsTemplate.map((inputTemplate) => {
				// Render the input element group
				this.renderInputGroup(formStepContainer, inputTemplate);
			});
			formElement.appendChild(formStepContainer);
		});
	}

	public renderInputGroup(
		formStepContainer: HTMLElement,
		inputTemplate: InputTemplate
	) {
		// Create input group container
		const inputId = inputTemplate.attributes?.id
			? inputTemplate.attributes.id
			: inputTemplate.attributes.name;
		const inputGroupContainer = createElement('div', {
			id: `input-group-${inputId}`,
		});

		// Create label element and append to inputGroupContainer
		const label = createElement('label', { for: inputId });
		label.innerHTML = inputTemplate.attributes.labelText
			? inputTemplate.attributes.labelText
			: inputTemplate.attributes.name;
		inputGroupContainer.appendChild(label);

		// Create input element and append to inputGroupContainer
		const input = createInputElement(inputTemplate.tagName, {
			...inputTemplate.attributes,
			id: inputId,
		});
		inputGroupContainer.appendChild(input);

		// Create error message element and append to inputGroupContainer
		const errorMsg = createElement('p', { class: 'input-error-inactive' });
		inputGroupContainer.appendChild(errorMsg);

		// Append the input group to the formStepContainer
		formStepContainer.appendChild(inputGroupContainer);
	}
}

export default RenderService;

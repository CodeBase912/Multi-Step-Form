// ---------------------------------------------------------------------
// Service Layer
// ---------------------------------------------------------------------

class Form {
	template: FormStepTemplate[];
	RenderService: RenderServiceInterface;

	constructor(options?: Options) {
		if (!options) {
			throw new TypeError(
				'options object is undefined. Use {} for default options'
			);
		}
		this.template = options.formTemplate;

		// Get the formContainer from the DOM
		const formContainer = document?.querySelector(options.appendTo);
		if (formContainer === null) {
			throw new Error(
				`Element with identifier '${options.appendTo}' not found. Make sure appendTo property has the correct value`
			);
		}

		// Create the form element
		const formElement = createElement('form');
		// Render the form template
		this.RenderService = new RenderService(formElement, this.template);

		// Append form element to form container
		formContainer?.appendChild(formElement);
	}
}

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

// ---------------------------------------------------------------------
// Utility Functions
// ---------------------------------------------------------------------

function createElement(elementTagName: string, attributes?: ElementAttributes) {
	const element = document.createElement(elementTagName);
	// Loop through attributes and add them to the element
	if (attributes) {
		Object.keys(attributes).map((key) => {
			element.setAttribute(key, attributes[key as never]);
		});
	}

	return element;
}

function createInputElement(
	elementTagName: string,
	attributes: InputElementAttributes
) {
	const element = document.createElement(elementTagName);
	// Loop through attributes and add them to the element
	if (attributes) {
		Object.keys(attributes).map((key) => {
			element.setAttribute(key, attributes[key as never]);
		});
	}

	return element;
}

export default Form;

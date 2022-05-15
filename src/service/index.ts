import RenderService from "./render-service";

// ---------------------------------------------------------------------
// Service Layer
// ---------------------------------------------------------------------

class Service {
	template: FormStepTemplate[];
	RenderService: RenderServiceInterface;

	constructor(options?: Options) {
		if (!options) {
			throw new TypeError(
				"options object is undefined. Use {} for default options"
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
		const formElement = createElement("form");
		// Render the form template
		this.RenderService = new RenderService(formElement, this.template);

		// Append form element to form container
		formContainer?.appendChild(formElement);
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

export default Service;

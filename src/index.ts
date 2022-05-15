class Form {
	template: {
    stepElementId: string;
    inputsTemplate: InputTemplate[];
  }[];

	constructor(options?: Options) {
		if (!options) {
			throw new TypeError(
				'options object is undefined. Use {} for default options'
			);
		}
		this.template = options.formTemplate;

		// Render the form element
		const formElement = document.createElement('form');

		const formContainer = document?.querySelector(options.appendTo);

		if (formContainer === null) {
			throw new Error(
				`Element with identifier '${options.appendTo}' not found. Make sure appendTo property has the correct value`
			);
		}

		// Append form element to form container
		formContainer?.appendChild(formElement);
	}
}

export default Form;

/**
 * ----------------------------------------------------------
 * **IMPORTANT NOTE
 * -----------------------------------------------------------
 *
 * This file should only be used for testing vanilla JS usage
 * in development
 */

// Import the package from the /dist folder since this is the
// version that will be used in production
import Form from './dist/multi-step-form.esm.js';

const options = {
	appendTo: '#form-container',
	formSteps: 3,
	formTemplate: [
		{
			stepElementId: '#step-1',
			inputsTemplate: [
				{
					formElement: 'input', // the type of HTML input tag, e.g. input or select
					type: 'text', // the type of input expected e.g text, email, tel, date. Allows the browser to display the appropriate keypad on mobile devices
					name: 'first_name', // the "name" field of a form input
					label: 'First Name',
					placeholder: 'First Name',
					defaultValue: 'John',
					// Can define any HTML input attributes here
					attributes: {
						required: true,
						readOnly: false,
						min: 10,
						max: 20,
					},
					//   orderInStep: 0, // the order in which this input should appear in the form step container (i.e div element)
					// Custom validation defined by the user
					validation: () => {
						// Do your custom validation here
						// return type should be boolean
						return true;
					},
				},
			],
		},
	],
};

const form = new Form(options);

console.log(form);

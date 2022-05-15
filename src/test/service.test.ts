import Service from "../service";
import { screen } from "@testing-library/dom";

const options: Options = {
	appendTo: "#form-container",
	formSteps: 3,
	formTemplate: [
		{
			stepElementId: "#step-1",
			inputsTemplate: [
				{
					tagName: "input", // the type of HTML input tag, e.g. input or select
					attributes: {
						type: "text", // the type of input expected e.g text, email, tel, date. Allows the browser to display the appropriate keypad on mobile devices
						name: "first_name", // the "name" field of a form input
						labelText: "First Name",
						placeholder: "First Name",
						defaultValue: "John",
						// Can define any HTML input attributes here
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

// ----------------------------------------------------------------------
// Test Service Class constructor
// ----------------------------------------------------------------------

describe("Service object constuctor", () => {
	let htmlBody: HTMLElement;
	beforeEach(() => {
		// Get the rendered HTML
		htmlBody = document.body;
	});

	afterEach(() => {
		// Remove the Form container
		removeFormContainer(htmlBody);
	});

	// Test if error is thrown if no options passed
	it("cannot run without options", () => {
		const newService = () => {
			new Service();
		};
		expect(newService).toThrow(TypeError);
	});

	// Test if Service object can render the form element
	it("can render the form element given form container is defined in the HTML page", () => {
		// Provide the form container
		provideFormContainer(htmlBody);
		// Instantiate the Service
		new Service(options);
		// Expect form element to be rendered by Service constructor
		expect(htmlBody.querySelector("form")).not.toBeNull();
	});

	// Test if Service object can render the form element
	it("can throw an error if the element to appendTo does not exist", () => {
		// NOTE: the form container is not provided rendered since we do
		// not run the provideFormContainer method

		// Instantiate the Service
		const newService = () => {
			new Service(options);
		};

		/**
     * ----------------------------------------------------------
     * TODO: this assertion is an implimentation test. Rather test if the
     * form element is not rendered
     * ----------------------------------------------------------
     */

		// Expect the Service constructor to throw an error since form container
		// is not in the HTML document
		expect(newService).toThrow(Error);
	});

	// Test if Service class renders the first name text input
	it("renders a first name text input", () => {
		// Provide the form container
		provideFormContainer(htmlBody);
		new Service(options);
		// Test if the input label text is rendered on the screen
		expect(screen.getByLabelText("First Name")).not.toBeNull();
	});
});

// ----------------------------------------------------------------------
// Test RenderService Class constructor
// ----------------------------------------------------------------------

describe("RenderService Class", () => {
	let htmlBody: HTMLElement;
	beforeEach(() => {
		// Get the rendered HTML
		htmlBody = document.body;
	});

	afterEach(() => {
		// Remove the Service container
		removeFormContainer(htmlBody);
	});

	// Test if Service class renders the first name text input
	it("renders a first name text input", () => {
		// Provide the form container
		provideFormContainer(htmlBody);
		new Service(options);
		// Test if the input label text is rendered on the screen
		expect(screen.getByLabelText("First Name")).not.toBeNull();
	});
});

// ----------------------------------------------------------------------
// Utility Functions
// ----------------------------------------------------------------------

/**
 * renders the formContainer to which the form will be appended to
 * @param htmlBody the HTML Body element of the page in
 *                               which the formContainer will be rendered
 * @returns the rendered formContainer Div element
 *
 * @description
 * This function implements the following test scenario:
 *
 * User should provide an HTML file that contains a Div
 * element with an id = `form-container`
 */
function provideFormContainer(htmlBody: HTMLElement) {
	// Create the form container that should be provided
	// by the user.
	const formContainer = document.createElement("div");

	// Set the Div element's id = `form-container`
	formContainer.setAttribute("id", "form-container");
	// Attach the form container to the HTML page body element
	htmlBody.appendChild(formContainer);

	return formContainer;
}

/**
 * removes the formContainer from the htmlBody
 * @param htmlBody the HTML Body element of the page in
 *                               which the formContainer will be rendered
 *
 * @description
 * This function implements the following test scenario:
 *
 * User did not provide an HTML file that contains a Div
 * element with an id = `form-container`
 */
function removeFormContainer(htmlBody: HTMLElement) {
	// Create the form container that should be provided
	// by the user.
	const formContainer = htmlBody.querySelector("#form-container");

	if (formContainer) {
		// Remove the form container from the HTML page body element
		formContainer.remove();
	}
}

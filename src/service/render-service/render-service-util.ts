export function createElement(
	elementTagName: string,
	attributes?: ElementAttributes
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

export function createInputElement(
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

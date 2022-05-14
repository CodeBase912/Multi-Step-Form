class Form {
	template: {
    stepElementId: string;
    inputsTemplate: InputTemplate[];
  }[];

	constructor(options?: Options) {
		if (!options)
			throw new TypeError(
				"options object is undefined. Use {} for default options"
			);
		this.template = options.formTemplate;
	}
}

export default Form;

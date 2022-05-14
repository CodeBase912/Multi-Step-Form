class Form {
  template: {
    stepElementId: string;
    inputsTemplate: InputTemplate[];
  }[];

  constructor(options: Options) {
    this.template = options.formTemplate;
  }
}

export default Form;

type InputTemplate = {
  formElement: string;
  type: string;
  name: string;
  placeholder: string;
  defaultValue: string;
  attributes: {
    required: boolean;
    readOnly: boolean;
    min: 10;
    max: 20;
  };
  validation: (value: any, formState: any) => boolean;
};

type Options = {
  appendTo: string;
  formSteps: number;
  formTemplate: {
    stepElementId: string;
    inputsTemplate: InputTemplate[];
  }[];
};

class Form {
  template;

  constructor(options: Options) {
    this.template = options.formTemplate;
  }
}

export default Form;

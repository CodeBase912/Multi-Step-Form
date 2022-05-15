type InputTemplate = {
  formElement: string;
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  defaultValue: string;
  attributes: {
    required: boolean;
    readOnly: boolean;
    min: number;
    max: number;
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

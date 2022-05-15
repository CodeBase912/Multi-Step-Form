type ElementAttributes = {
  id?: string;
  name?: string;
  label?: string;
  class?: string;
  for?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
};

type InputElementAttributes = {
  id?: string;
  name: string;
  labelText: string;
  class?: string;
  for?: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  readOnly?: boolean;
  min?: number;
  max?: number;
};

type InputTemplate = {
  tagName: string;
  attributes: InputElementAttributes;
  validation?: (value: any, formState: any) => boolean;
};

type FormStepTemplate = {
  stepElementId?: string;
  defaultStep?: boolean;
  inputsTemplate: InputTemplate[];
};

type Options = {
  appendTo: string;
  formSteps: number;
  formTemplate: FormStepTemplate[];
};

type RenderServiceInterface = {
  formElement: HTMLElement;
  template: FormStepTemplate[];
  renderFormTemplate: (
    formElement: HTMLElement,
    template: FormStepTemplate[]
  ) => void;
  renderInputGroup: (
    formStepContainer: HTMLElement,
    inputTemplate: InputTemplate
  ) => void;
};

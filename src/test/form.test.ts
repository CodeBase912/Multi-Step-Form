import Form from '..';

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
          validation: (value: any, formState: any) => {
            if (value && formState) {
            }
            // Do your custom validation here
            // return type should be boolean
            return true;
          },
        },
      ],
    },
  ],
};

describe('Form object', () => {
  // Test if error is thrown if no options passed
  it('cannot be instantiated without options', () => {
    const newForm = () => {
      //@ts-ignore
      new Form();
    };
    expect(newForm).toThrow(TypeError);
  });

  // Test if the form object can be instaltiated
  it('has template', () => {
    //@ts-ignore
    const form = new Form(options);
    expect(form.template).toEqual(options.formTemplate);
  });
});

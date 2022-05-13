// class Form {
//   formContainer; // HTML div that will contain the entire form container
//   initialState = {};
//   #formState;
//   template;

//   constructor(options) {
//     this.template = options.formTemplate;
//     // Loop throught all the inputTemplate and generate the initial form state
//     // for (let i = 1; i < this.template.length; i++) {
//     //   // Should return the initial form state in
//     // }

//     console.log(this.template);

//     this.template.map((step, stepIndex) => {
//       console.log('Step: ', step);
//       return step.inputsTemplate.map((input, inputIndex) => {
//         return (this.initialState[input.name] = {
//           elementId: input.name,
//           value: input?.defaultValue ? input?.defaultValue : '',
//           validation: {
//             isValid: true,
//           },
//           belongsToStep: step.stepElementId,
//           // orderInStep: input?.orderInStep ? input?.orderInStep : inputIndex,
//         });
//       });
//     });

//     console.log('Initial state: ', this.initialState);

//     this.renderForm(options);
//   }

//   renderForm(template) {
//     this.formContainer = console.log('Template: ', template);
//   }
// }

export const test = (name: string) => {
  console.log(`Hello there ${name}`);
};

// export default Form;

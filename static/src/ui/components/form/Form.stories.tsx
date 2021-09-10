import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { FormBase, InputProps } from ".";
import { AppContainer, GlobalPageContainerStyle } from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";

export default {
  title: "Components",
  component: FormBase
} as Meta;

const mockFormFieldData : InputProps[] = [
  {
    inputHeader: "Input header",
    inputInfo: "Something informative goes here",
    fieldLabel: "Enter email",
    fieldName: "email",
    type: "email"
  }
];

const Template: Story<ComponentProps<typeof FormBase>> = (args) => {
  const { formFieldData, submitButtonLabel } = args;

  return (
    <AppContainer>
      <GlobalPageContainerStyle>
        {" "}
        <FormBase
          formFieldData={formFieldData}
          submitButtonLabel={submitButtonLabel}
          onSubmit={(data) => console.log(`form submitted: ${JSON.stringify(data)}`)}
        />
      </GlobalPageContainerStyle>
    </AppContainer>
  );
};

export const FormBaseStory = Template.bind({});

FormBaseStory.args = {
  formFieldData: mockFormFieldData,
  submitButtonLabel: connectionPageCopy.connectFormSubmitButtonLabel
};

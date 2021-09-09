import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { FormBase } from ".";
import { AppContainer, GlobalPageContainerStyle } from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";

export default {
  title: "Components",
  component: FormBase
} as Meta;

const mockFormFieldData = [
  {
    inputHeader: "Input header",
    inputInfo: "Something informative goes here",
    fieldLabel: "Enter name",
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

import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { FormBase } from ".";
import { AppContainer, GlobalPageContainerStyle } from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";

export default {
  title: "Components",
  component: FormBase
} as Meta;

const Template: Story<ComponentProps<typeof FormBase>> = (args) => {
  const { secretFieldLabel, submitButtonLabel } = args;

  return (
    <AppContainer>
      <GlobalPageContainerStyle>
        {" "}
        <FormBase
          secretFieldLabel={secretFieldLabel}
          submitButtonLabel={submitButtonLabel}
        />
      </GlobalPageContainerStyle>
    </AppContainer>
  );
};

export const FormBaseStory = Template.bind({});

FormBaseStory.args = {
  secretFieldLabel: connectionPageCopy.connectFormSecretInputLabel,
  submitButtonLabel: connectionPageCopy.connectFormSubmitButtonLabel
};

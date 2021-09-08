import React, { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react";
import { FormExample } from ".";
import { AppContainer } from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";

export default {
  title: "Components",
  component: FormExample
} as Meta;

const Template: Story<ComponentProps<typeof FormExample>> = (args) => {
  const { secretFieldLabel, submitButtonLabel } = args;

  return (
    <AppContainer>
      <FormExample
        secretFieldLabel={secretFieldLabel}
        submitButtonLabel={submitButtonLabel}
      />
    </AppContainer>
  );
};

export const FormExampleStory = Template.bind({});

FormExampleStory.args = {
  secretFieldLabel: connectionPageCopy.connectFormSecretInputLabel,
  submitButtonLabel: connectionPageCopy.connectFormSubmitButtonLabel
};

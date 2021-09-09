import React from "react";
import CopyIcon from "@atlaskit/icon/glyph/copy";
import Button from "@atlaskit/button/standard-button";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  ValidMessage
} from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import {
  FormContainer,
  FieldContainer,
  InputContainer,
  CopyIconContainer
} from "./Form.styles";

function validate(value: unknown) {
  if (value !== "open sesame") {
    return "INCORRECT_PHRASE";
  }
  return undefined;
}

interface FormExampleProps {
  secretFieldLabel: string;
  submitButtonLabel: string;
}

export const FormBase = (props: FormExampleProps) => {
  // TODO - add submit logic
  const handleSubmit = (formState: { command: string }) => {
    console.log("form state", formState);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {({ formProps }) => (
          <form {...formProps} name="validation-example">
            <FieldContainer>
              <div>
                <h3>Webhook URL</h3>
                <p>
                  Paste this webhook into your GitHub Enterprise settings to
                  complete the integration. This is unique to your Jira site.
                </p>
              </div>
              <Field
                label={props.secretFieldLabel}
                name="command"
                validate={validate}
                defaultValue=""
              >
                {({ fieldProps, error, meta: { valid } }: any) => (
                  <InputContainer>
                    <Textfield {...fieldProps} />
                    {/* TODO - update alidation message. */}
                    {valid && <ValidMessage>Your wish granted</ValidMessage>}
                    {error === "INCORRECT_PHRASE" && (
                      // TODO - update error message
                      <ErrorMessage>
                        Incorrect, try &lsquo;open sesame&rsquo;
                      </ErrorMessage>
                    )}
                    <CopyIconContainer>
                      <CopyIcon
                        label="Copy"
                        primaryColor="#42526E"
                        secondaryColor="#fafbfc"
                      />
                    </CopyIconContainer>
                  </InputContainer>
                )}
              </Field>
            </FieldContainer>

            <FieldContainer>
              <div>
                <h3>Secret</h3>
                <p>
                  This secret must be inputed in your GitHub Enterprise settings
                  to complete the integration. Edit your secret to create a
                  custom password.
                </p>
              </div>
              <Field
                label={props.secretFieldLabel}
                name="command"
                validate={validate}
                defaultValue=""
              >
                {({ fieldProps, error, meta: { valid } }: any) => (
                  <InputContainer>
                    <Textfield {...fieldProps} />
                    {/* TODO - update alidation message. */}
                    {valid && <ValidMessage>Your wish granted</ValidMessage>}
                    {error === "INCORRECT_PHRASE" && (
                      // TODO - update error message
                      <ErrorMessage>
                        Incorrect, try &lsquo;open sesame&rsquo;
                      </ErrorMessage>
                    )}
                    <CopyIconContainer>
                      <CopyIcon
                        label="Copy"
                        primaryColor="#42526E"
                        secondaryColor="#fafbfc"
                      />
                    </CopyIconContainer>
                  </InputContainer>
                )}
              </Field>
            </FieldContainer>

            <FormFooter>
              <Button type="submit" appearance="primary">
                {props.submitButtonLabel}
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </FormContainer>
  );
};

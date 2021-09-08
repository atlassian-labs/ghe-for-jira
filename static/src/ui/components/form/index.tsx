import React, { Fragment } from "react";
import CopyIcon from "@atlaskit/icon/glyph/copy";

import Button from "@atlaskit/button/standard-button";
import Form, {
  ErrorMessage,
  Field,
  FormFooter,
  ValidMessage
} from "@atlaskit/form";

import Textfield from "@atlaskit/textfield";
import { FormContainer, FieldContainer } from './Form.styles';

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

export const FormExample = (props: FormExampleProps) => {
  const handleSubmit = (formState: { command: string }) => {
    console.log("form state", formState);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {({ formProps }) => (
          <form {...formProps} name="validation-example">
            <FieldContainer>
              <Field
                label={props.secretFieldLabel}
                name="command"
                validate={validate}
                defaultValue=""
              >
                {({ fieldProps, error, meta: { valid } }: any) => (
                  <Fragment>
                    <Textfield {...fieldProps} />
                    {valid && <ValidMessage>Your wish granted</ValidMessage>}
                    {error === "INCORRECT_PHRASE" && (
                      <ErrorMessage>
                        Incorrect, try &lsquo;open sesame&rsquo;
                      </ErrorMessage>
                    )}
                  </Fragment>
                )}
              </Field>
              <CopyIcon label="Copy" />
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

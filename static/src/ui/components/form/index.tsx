import React from "react";
import CopyIcon from "@atlaskit/icon/glyph/copy";
import QuestionCircleIcon from "@atlaskit/icon/glyph/question-circle";
import Button from "@atlaskit/button/standard-button";
import Form, { Field, FormFooter } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import { TextFieldWrapper } from "./Form.styles";
import {
  InputHeaderContainer,
  InputInfo,
  InputHeader,
  HeaderContainer
} from "./Form.styles";
import {
  FormContainer,
  FieldContainer,
  InputContainer,
  CopyIconContainer
} from "./Form.styles";
export interface Inputprops {
  inputHeader: string;
  inputInfo: string;
  fieldLabel: string;
  type: string;
}

interface FormBaseProps {
  formFieldData: Inputprops[];
  submitButtonLabel: string;
}

export const FormBase = (props: FormBaseProps) => {
  // TODO - add submit logic
  const handleSubmit = (formState: { command: string }) => {
    console.log("form state", formState);
  };

  const { formFieldData, submitButtonLabel } = props;
  console.log(formFieldData);

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {({ formProps }) => (
          <form {...formProps} name="connection-form">
            {formFieldData.map((field, i) => (
              <FieldContainer key={i}>
                <InputHeaderContainer>
                  <HeaderContainer>
                    <InputHeader>{field.inputHeader}</InputHeader>
                    <QuestionCircleIcon
                      label="Question"
                      primaryColor="#505F79"
                      size="small"
                    />
                  </HeaderContainer>
                  <InputInfo>{field.inputInfo}</InputInfo>
                </InputHeaderContainer>

                <Field label={field.fieldLabel} name="command" defaultValue="">
                  {({ fieldProps }: any) => (
                    <InputContainer>
                      <Textfield {...fieldProps} type={field.type} />
                      <CopyIconContainer>
                        <CopyIcon label="Copy" primaryColor="#42526E" />
                      </CopyIconContainer>
                    </InputContainer>
                  )}
                </Field>
              </FieldContainer>
            ))}

            <FormFooter>
              <Button type="submit" appearance="primary">
                {submitButtonLabel}
              </Button>
            </FormFooter>
          </form>
        )}
      </Form>
    </FormContainer>
  );
};

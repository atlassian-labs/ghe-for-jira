import React from "react";
import CopyIcon from "@atlaskit/icon/glyph/copy";
import QuestionCircleIcon from "@atlaskit/icon/glyph/question-circle";
import Button from "@atlaskit/button/standard-button";
import Form, { Field, FormFooter } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
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
import { OnSubmitHandler } from "@atlaskit/form/types";

export interface InputProps {
  inputHeader: string;
  inputInfo: string;
  fieldName: string;
  fieldLabel: string;
  defaultValue?: () => string,
  type: string;
}

interface FormBaseProps {
  formFieldData: InputProps[];
  submitButtonLabel: string;
  onSubmit: OnSubmitHandler<any>;
}

export const FormBase = (props: FormBaseProps) => {

  const { formFieldData, submitButtonLabel, onSubmit } = props;
  console.log(formFieldData);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
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

                <Field label={field.fieldLabel} name={field.fieldName} defaultValue={field.defaultValue ? field.defaultValue : ""}>
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

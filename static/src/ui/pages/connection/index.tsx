import React from "react";
import {
  GlobalTitleStyle,
  GlobalPageContainerStyle
} from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";
import { Navbar } from "../../components/navbar/index";
import { ConnectJiraAndGitHubImage } from "../../components/images-and-icons/ConnectJiraAndGitHub";
import { FormBase } from "src/ui/components/form";

export const ConnectionPage = (): JSX.Element => {
  const {
    formFieldData,
    connectFormSubmitButtonLabel
  } = connectionPageCopy;

  return (
    <>
      <Navbar />

      <GlobalPageContainerStyle>
        <ConnectJiraAndGitHubImage />
        <GlobalTitleStyle>
          {connectionPageCopy.connectionPageTitle}
        </GlobalTitleStyle>

        <FormBase
          formFieldData={formFieldData}
          submitButtonLabel={connectFormSubmitButtonLabel}
        />
      </GlobalPageContainerStyle>
    </>
  );
};

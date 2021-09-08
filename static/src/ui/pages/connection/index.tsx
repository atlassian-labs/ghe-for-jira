import React from "react";
import {
  GlobalTitleStyle,
  GlobalPageContainerStyle
} from "../../../index.styles";
import { connectionPageCopy } from "../../../common/copy";
import { Navbar } from "../../components/navbar/index";
import { ConnectJiraAndGitHubImage } from "../../components/images-and-icons/ConnectJiraAndGitHub";

export const ConnectionPage = (): JSX.Element => {
  return (
    <>
      <Navbar />

      <GlobalPageContainerStyle>
        <ConnectJiraAndGitHubImage />
        <GlobalTitleStyle>
          {connectionPageCopy.connectionPageTitle}
        </GlobalTitleStyle>
      </GlobalPageContainerStyle>
    </>
  );
};

import React from "react";
import { AdminPageMessage } from './AdminPage.styles';
import { jiraAdminPageCopy } from "../../../common/copy";
import { GitHubIntegrationImage } from "../../components/images-and-icons/GitHubIntegration";
import { ActionButton } from "../../components/button";
import { GlobalTitleStyle, GlobalPageContainerStyle } from '../../../index.styles';

const AdminEmptyState = (): JSX.Element => {
  const { emptyStateTitle, emptyStateMessage, connectToGitHubButtonLabel } =
    jiraAdminPageCopy;

  return (
    <>
      <GitHubIntegrationImage />
      <GlobalTitleStyle>{emptyStateTitle}</GlobalTitleStyle>
      <AdminPageMessage>{emptyStateMessage}</AdminPageMessage>
      <ActionButton>{connectToGitHubButtonLabel}</ActionButton>
    </>
  );
};

export const AdminPage = (): JSX.Element => {
  return (
    <GlobalPageContainerStyle>
      <AdminEmptyState />
    </GlobalPageContainerStyle>
  );
};

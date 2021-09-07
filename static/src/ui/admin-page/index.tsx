import React from "react";
import { AdminPageTitle, AdminPageContainer, AdminPageMessage } from './AdminPage.styles';
import { jiraAdminPageCopy } from "../../common/copy";
import { GitHubIntegrationImage } from "../images-and-icons/GitHubIntegration";
import { ActionButton } from "../button/index";

const AdminEmptyState = (): JSX.Element => {
  const { emptyStateTitle, emptyStateMessage, connectToGitHubButtonLabel } =
    jiraAdminPageCopy;

  return (
    <AdminPageContainer>
      <GitHubIntegrationImage />
      <AdminPageTitle>{emptyStateTitle}</AdminPageTitle>
      <AdminPageMessage>{emptyStateMessage}</AdminPageMessage>
      <ActionButton>{connectToGitHubButtonLabel}</ActionButton>
    </AdminPageContainer>
  );
};

export const AdminPage = (): JSX.Element => {
  return (
    <AdminPageContainer>
      <AdminEmptyState />
    </AdminPageContainer>
  );
};

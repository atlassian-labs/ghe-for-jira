export const jiraAdminPageCopy = {
  emptyStateTitle: "Connect GitHub Enterprise to Jira Software",
  emptyStateMessage:
    "Connect your GitHub Enterprise to Jira and start including issue keys in branches, commit messages or pull requests to see development insights in Jira.",
  connectToGitHubButtonLabel: "Connect GitHub Enterprise"
};

export const connectionPageCopy = {
  connectionPageTitle: "Connect GitHub Enterprise to your Jira site",
  connectFormSecretInputLabel: "Secret text",
  formFieldData: [
    {
      inputHeader: "Webhook URL",
      inputInfo:
        "Paste this URL into your GitHub Enterprise webhook settings to complete the integration. This is unique to your Jira site.",
      fieldLabel: "Webhook",
      type: "text"
    },
    {
      inputHeader: "Secret",
      inputInfo:
        "Configure the same secret in your GitHub Enterprise webhook settings to complete the integration. Edit your secret to create a custom password.",
      fieldLabel: "Secret text",
      type: "password"
    }
  ],
  connectFormSubmitButtonLabel: "Done"
};

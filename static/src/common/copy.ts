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
        "Paste this webhook into your GitHub Enterprise settings to complete the integration. This is unique to your Jira site.",
      fieldLabel: "Webhook",
      type: "text"
    },
    {
      inputHeader: "Secret",
      inputInfo:
        "This secret must be inputed in your GitHub Enterprise settings to complete the integration. Edit your secret to create a custom password.",
      fieldLabel: "Secret text",
      type: "password"
    }
  ],
  connectFormSubmitButtonLabel: "Done"
};

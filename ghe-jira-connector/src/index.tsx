import ForgeUI, { render, ContextMenu, Fragment, Button, Table, Head, Row, Cell, InlineDialog, Text, useState, useProductContext, useAction } from '@forge/ui';
import {sendDevInfoFromWebhooks} from "./webhooks";

// See README.md for details on generating a Translation API key
const { DEBUG_LOGGING } = process.env;

const App = () => {
  const { extensionContext } = useProductContext();
  console.log('extensionContext: ', extensionContext);
  return (
    <InlineDialog>
      <Text content="**Selected text**" format="markdown" />
      <Text content={extensionContext['selectedText']} format="plaintext" />
    </InlineDialog>
  );
};

export const run = render(
  <ContextMenu><App /></ContextMenu>
);

const Panel = () => {
  // Get the context issue key
  // @ts-ignore
  const { platformContext: { issueKey } } = useProductContext();

  /**
   * Checks if a response was successful, and log and throw an error if not. 
   * Also logs the response body if the DEBUG_LOGGING env variable is set.
   * @param apiName a human readable name for the API that returned the response object
   * @param response a response object returned from `api.fetch()`, `requestJira()`, or similar
   */
  async function checkResponse(apiName, response) {
    if (!response.ok) {
      const message = `Error from ${apiName}: ${response.status} ${await response.text()}`;
      console.error(message);
      throw new Error(message);
    } else if (true) {
      console.debug(`Response from ${apiName}: ${await response.text()}`);
    }
  }

  // Render the UI
  return (
    <Fragment>
    </Fragment>
  );
};

export const runJira = render(<Panel />);

/**
 * Extracts the cloud ID from the "installContext" string
 * (which is a Jira site ARI like "ari:cloud:jira::site/fc10a037-0294-4439-8cf4-673c6de246e7").
 */
const extractCloudId = (installContext) => (
    installContext.replace("ari:cloud:jira::site/", "")
);

exports.processPushWebhook = async (request, context) => {
  const cloudId = extractCloudId(context.installContext);
  await sendDevInfoFromWebhooks(cloudId, request.body);
}
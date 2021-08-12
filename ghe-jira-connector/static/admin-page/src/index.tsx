import { invoke } from "@forge/bridge";
import { LoadingButton as Button } from '@atlaskit/button';
import { Code } from '@atlaskit/code';
import PageHeader from '@atlaskit/page-header';

import {gheHookOverview, gheOrgTabHeadings, ghePayloadUrlField} from './resources/base64-images';
import React, { Fragment } from 'react';
import * as ReactDOM from "react-dom";

const fetchWebhookUrl = async (webhookKey: string): Promise<string> => {
    return await invoke("fetchWebhookUrl", { key: webhookKey }).then((returnedData: WebhookUrlResponse) => {
        return returnedData.url;
    }).then( url => { return url; })
}

const App = () => {
    return (
        <Fragment>
            <PageHeader>Welcome to the Github Enterprise -&gt; Jira Connector</PageHeader>
            <div>This is a Forge powered app designed to receive webhooks from your Github Enterprise on-premise
                server and associate your branches, commits, and pull-requests with Jira Issues.</div>
            <h2>Getting Started</h2>
            <div>In order to receive webhooks from GHE we must first set them up on your instance.</div>
            <div>The following steps describe which events you need to set up subscriptions for and provide the forge hook to push them to:</div>
            <li>
                Navigate to the organization or repository in your GHE and select the settings tab at the top of the page.
                (If you enable webhooks at an organization level they will send webhooks for every repository in the organization.)
                <img src={gheOrgTabHeadings} alt="Github Enterprise Organization Page Tab Headings"/>
            </li>
            <li>
                Click on the 'Add webhook' button to the right of the header to enter a new sceen to add your first webhook.
                <img src={gheHookOverview} alt="Github Enterprise Organization Hook Settings Page"/>
            </li>
            <li>
                Click <Button title="Copy" onClick={async () => {
                    const key = await fetchWebhookUrl("web-trigger-key");
                    await navigator.clipboard.writeText(key);
                    alert("Copied");}}  /> to copy the url for the <Code>Payload URL</Code> field and paste it in.
                <img src={ghePayloadUrlField} alt="Hook Settings Page Payload URL Field Highlighted"/>
            </li>
        </Fragment>
    );
};

export default ReactDOM.render(<App/>, document.getElementById("root"));
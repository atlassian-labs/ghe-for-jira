import { useWebHookUrlFetcher } from "./state/webhookUrlFetcher"
import { Code } from '@atlaskit/code';
import PageHeader from '@atlaskit/page-header';
import Spinner from '@atlaskit/spinner';
import { fontFamily as akFontFamily, typography } from '@atlaskit/theme'
import styled from 'styled-components';

import {gheAddWebhook ,gheBranchEvent, gheEventSelection, gheHookOverview, gheOrgTabHeadings, ghePayloadUrlField, ghePREvent, ghePushEvent} from './resources/base64-images';
import React, { Fragment } from 'react';
import * as ReactDOM from "react-dom";

const ContentTitle = styled.h2`
    ${typography.h700()};
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    font-family: ${akFontFamily()};
`;

const Container = styled.div`
    font-family: ${akFontFamily()};
`;

const App = () => {
    const [state, actions] = useWebHookUrlFetcher();
    actions.fetchUrls();
    return (
        <Fragment>
            <Container>
                <PageHeader >Welcome to the Github Enterprise -&gt; Jira Connector</PageHeader>
                <div>This is a Forge powered app designed to receive webhooks from your Github Enterprise on-premise
                    server and associate your branches, commits, and pull-requests with Jira Issues.</div>
                <ContentTitle>Getting Started</ContentTitle>
                <div>In order to receive webhooks from GHE we must first set them up on your instance.</div>
                <div>The following steps describe which events you need to set up subscriptions for and provide the forge hook to push them to:</div>
                <ol>
                    <li>
                        Navigate to the organization or repository in your GHE and select the settings tab at the top of the page.
                        (If you enable webhooks at an organization level they will send webhooks for every repository in the organization.)<br/>
                        <img src={gheOrgTabHeadings} alt="Github Enterprise Organization Page Tab Headings"/>
                    </li>
                    <li>
                        Click on the 'Add webhook' button to the right of the header to enter a new sceen to add your first webhook.<br/>
                        <img src={gheHookOverview} alt="Github Enterprise Organization Hook Settings Page"/>
                    </li>
                    <li>
                        Copy this url: { state.pushWebTriggerUrl == "" ? <Spinner /> : <Code>{state.pushWebTriggerUrl}</Code> } for the Payload URL field and paste it in.<br/>
                        <img src={ghePayloadUrlField} alt="Hook Settings Page Payload URL Field Highlighted"/>
                    </li>
                    <li>
                        Choose 'Let me select individual events.' from the 'Which events would you like to trigger this webhook?' section<br/>
                        <img src={gheEventSelection} alt="Hook Settings Page Event Selection highlighted"/>
                    </li>
                    <li>
                        Ensure that the 'Push' event is checked in the list of events.<br/>
                        <img src={ghePushEvent} alt="Hook Settings Page Push Event ticked"/>
                    </li>
                    <li>
                        Click the 'Add Webhook' button to finish setting up the webhook for push events.<br/>
                        <img src={gheAddWebhook} alt="Hook Settings Page Branch Add Webhook Button"/>
                    </li>
                    <li>
                        Click on the 'Add webhook' button to the right of the header to enter a new sceen to add your second webhook.<br/>
                        <img src={gheHookOverview} alt="Github Enterprise Organization Hook Settings Page"/>
                    </li>
                    <li>
                        Copy this url: { state.prWebTriggerUrl == "" ? <Spinner /> : <Code>{state.prWebTriggerUrl}</Code> } for the Payload URL field and paste it in.<br/>
                        <img src={ghePayloadUrlField} alt="Hook Settings Page Payload URL Field Highlighted"/>
                    </li>
                    <li>
                        Choose 'Let me select individual events.' from the 'Which events would you like to trigger this webhook?' section<br/>
                        <img src={gheEventSelection} alt="Hook Settings Page Event Selection highlighted"/>
                    </li>
                    <li>
                        Ensure that the 'Pull requests' event is checked in the list of events.<br/>
                        <img src={ghePREvent} alt="Hook Settings Page Pull Requests Event ticked"/>
                    </li>
                    <li>
                        Click the 'Add Webhook' button to finish setting up the webhook for Pull Request events.<br/>
                        <img src={gheAddWebhook} alt="Hook Settings Page Branch Add Webhook Button"/>
                    </li>
                    <li>
                        Click on the 'Add webhook' button to the right of the header to enter a new sceen to add your final webhook.<br/>
                        <img src={gheHookOverview} alt="Github Enterprise Organization Hook Settings Page"/>
                    </li>
                    <li>
                        Copy this url: { state.branchWebTriggerUrl == "" ? <Spinner /> : <Code>{state.branchWebTriggerUrl}</Code> } for the Payload URL field and paste it in.<br/>
                        <img src={ghePayloadUrlField} alt="Hook Settings Page Payload URL Field Highlighted"/>
                    </li>
                    <li>
                        Choose 'Let me select individual events.' from the 'Which events would you like to trigger this webhook?' section<br/>
                        <img src={gheEventSelection} alt="Hook Settings Page Event Selection highlighted"/>
                    </li>
                    <li>
                        Ensure that the 'Branch or tag creation' event is checked in the list of events.<br/>
                        <img src={gheBranchEvent} alt="Hook Settings Page Branch or tag creation Event ticked"/>
                    </li>
                    <li>
                        Click the 'Add Webhook' button to finish setting up the webhook for Pull Request events.<br/>
                        <img src={gheAddWebhook} alt="Hook Settings Page Branch Add Webhook Button"/>
                    </li>
                    <li>
                        You're now ready to start adding Jira issue keys to your commit messages, branch names, and Pull Request titles to see them linked in Jira.
                    </li>
                </ol>
            </Container>
        </Fragment>
    );
};

export default ReactDOM.render(<App/>, document.getElementById("root"));
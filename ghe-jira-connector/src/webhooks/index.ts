import {buildRepository} from "../transformations/commits";
import {GitHubOrganization, GitHubWebhook} from "../domain/github-webhooks";

const buildResponse = (statusCode) => ({
    body: '{}',
    headers: {
        'Content-Type': ['application/json'],
    },
    statusCode: statusCode,
});

function buildRequestPayload(webhook: GitHubWebhook, updateSequenceId: number, organization: GitHubOrganization) {
    return {
        "repositories": [
            buildRepository(webhook, updateSequenceId)
        ],
        "preventTransitions": false,
        "properties": {
            "organizationId": organization.node_id
        },
        "providerMetadata": {
            "product": "forge-ghe-jira-connector"
        }
    };
}

export async function sendDevInfoFromWebhooks(cloudId: string, webhook: GitHubWebhook) {
    const organization = webhook.organization;

    let updateSequenceId = Math.floor(new Date().getTime());
    const result = await global.api
        .asApp()
        .__requestAtlassian(`/jira/devinfo/0.1/cloud/${cloudId}/bulk`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(
                    buildRequestPayload(webhook, updateSequenceId, organization)
                ),
            }
        );

    console.log(result);
    console.log(`response: ${JSON.stringify(result)}`);

    return buildResponse(200);
}
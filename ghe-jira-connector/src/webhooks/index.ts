import {route} from '@forge/api';
import {buildCommit, buildRepository} from "../transformations/commits";

const buildResponse = (statusCode) => ({
    body: '{}',
    headers: {
        'Content-Type': ['application/json'],
    },
    statusCode: statusCode,
});

function buildRequestPayload(repository, firstCommit, updateSequenceId: number, organization) {
    return {
        "repositories": [
            buildRepository(repository, firstCommit, updateSequenceId)
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

export async function sendDevInfoFromWebhooks(cloudId: string, webhook: any) {
    const organization = webhook.organization;
    const repository = webhook.repository;
    const firstCommit = webhook.commits[0];

    let updateSequenceId = Math.floor(new Date().getTime());
    const result = await global.api
        .asApp()
        .__requestAtlassian(`/jira/devinfo/0.1/cloud/${cloudId}/bulk`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(
                    buildRequestPayload(repository, firstCommit, updateSequenceId, organization)
                ),
            }
        );

    console.log(result);
    console.log(`response: ${JSON.stringify(result)}`);

    return buildResponse(200);
}
import {buildRepository} from "../transformations/commits";

const buildResponse = (statusCode) => ({
    body: '{}',
    headers: {
        'Content-Type': ['application/json'],
    },
    statusCode: statusCode,
});

function buildRequestPayload(webhook: any, updateSequenceId: number, organization) {
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

export async function sendDevInfoFromWebhooks(cloudId: string, webhook: any) {
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
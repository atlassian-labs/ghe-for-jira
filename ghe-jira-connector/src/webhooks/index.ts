import {route} from '@forge/api';
import {buildCommit, buildRepository} from "../transformations/commits";

const buildResponse = (statusCode) => ({
    body: '{}',
    headers: {
        'Content-Type': ['application/json'],
    },
    statusCode: statusCode,
});

/**
 * Extracts the cloud ID from the "installContext" string
 * (which is a Jira site ARI like "ari:cloud:jira::site/fc10a037-0294-4439-8cf4-673c6de246e7").
 */
const extractCloudId = (installContext) => (
    installContext.replace("ari:cloud:jira::site/", "")
);

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

exports.processWebhook = async (request, context) => {

    const cloudId = extractCloudId(context.installContext);
    console.log(route);
    const webhook = {};
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
};

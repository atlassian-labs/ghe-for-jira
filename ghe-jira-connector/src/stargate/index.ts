import {route} from '@forge/api';

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

function buildCommit(firstCommit, updateSequenceId: number, firstCommitAuthor: { name: any; email: any; username: any }) {
    return {
        "id": firstCommit.id,
        "issueKeys": [
            "TODO-1"
        ],
        "updateSequenceId": updateSequenceId,
        "hash": firstCommit.id,
        "flags": [],
        "message": firstCommit.message,
        "author": {
            "name": firstCommitAuthor.name,
            "email": firstCommitAuthor.email,
            "username": firstCommitAuthor.username,
        },
        "fileCount": 1,
        "url": firstCommit.url,
        "files": [],
        "authorTimestamp": firstCommit.timestamp,
        "displayId": firstCommit.id.substr(0, 7),
    };
}

function buildRepository(repository, firstCommit, updateSequenceId: number, firstCommitAuthor: { name: any; email: any; username: any }) {
    return {
        "name": repository.name,
        "description": repository.description,
        "url": repository.html_url,
        "commits": [
            buildCommit(firstCommit, updateSequenceId, firstCommitAuthor)
        ],
        "branches": [],
        "pullRequests": [],
        "id": repository.node_id,
        "updateSequenceId": updateSequenceId
    };
}

function buildRequestPayload(repository, firstCommit, updateSequenceId: number, firstCommitAuthor: { name: any; email: any; username: any }, organization) {
    return {
        "repositories": [
            buildRepository(repository, firstCommit, updateSequenceId, firstCommitAuthor)
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
    const firstCommitAuthor = firstCommit.author;

    let updateSequenceId = Math.floor(new Date().getTime());
    const result = await global.api
        .asApp()
        .__requestAtlassian(`/jira/devinfo/0.1/cloud/${cloudId}/bulk`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(
                    buildRequestPayload(repository, firstCommit, updateSequenceId, firstCommitAuthor, organization)
                ),
            }
        );

    console.log(result);
    console.log(`response: ${JSON.stringify(result)}`);

    return buildResponse(200);
};

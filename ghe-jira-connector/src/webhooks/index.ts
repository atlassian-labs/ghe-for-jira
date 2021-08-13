import { Repository } from "../domain/jira-api";
import {route} from '@forge/api';

const buildResponse = (statusCode) => ({
    body: '{}',
    headers: {
        'Content-Type': ['application/json'],
    },
    statusCode: statusCode,
});

function buildDevInfoPayload(repository: Repository) {
    return {
        "repositories": [
            repository
        ],
        "preventTransitions": false,
        "providerMetadata": {
            "product": "forge-ghe-jira-connector"
        }
    };
}

export async function sendDevInfo(cloudId: string, repository: Repository) {

    const payload = buildDevInfoPayload(repository);

    console.log(`request payload: ${JSON.stringify(payload)}`);

    let updateSequenceId = Math.floor(new Date().getTime());
    // @ts-ignore
    const result = await global.api
        .asApp()
        .__requestAtlassian(`/jira/devinfo/0.1/cloud/${cloudId}/bulk`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payload),
            }
        );

    console.log(`response: ${JSON.stringify(result)}`);

    return buildResponse(200);
}


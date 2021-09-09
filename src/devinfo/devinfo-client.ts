import { DevInfo } from "./devinfo-types";

const buildDevInfoPayload = (repository: DevInfo.Repository): DevInfo.BulkRequest => {
    return {
        "repositories": [
            repository
        ],
        "preventTransitions": false,
        "providerMetadata": {
            "product": "ghe-for-jira"
        }
    };
}

export const sendDevInfo = async (cloudId: string, repository: DevInfo.Repository): Promise<number> => {

    const devInfoPayload = buildDevInfoPayload(repository);

    console.log(`sending payload to dev info API`);

    // @ts-ignore // required so that Typescript doesn't complain about the missing "api" property
    const result = await global.api
        .asApp()
        .__requestAtlassian(`/jira/devinfo/0.1/cloud/${cloudId}/bulk`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(devInfoPayload),
            }
        );

    console.log(`response status from dev info API: ${result.status}`);

    return Promise.resolve(result.status);
}



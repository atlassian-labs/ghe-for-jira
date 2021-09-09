import processWebhook, { InvalidJsonError, UnsupportedWebhookTypeError } from "./webhook-mappers/webhook-processor";
import validateSignature from "./webhook-mappers/signature-validator";

/**
 * Extracts the cloud ID from the "installContext" string
 * (which is a Jira site ARI like "ari:cloud:jira::site/fc10a037-0294-4439-8cf4-673c6de246e7").
 */
const extractCloudId = (installContext): string => {
    return installContext.replace("ari:cloud:jira::site/", "");
};

interface WebtriggerResponse {
    body: string,
    headers: object,
    statusCode: number
}

const response = (statusCode): WebtriggerResponse => ({
    body: '{}',
    headers: {
        'Content-Type': ['application/json'],
    },
    statusCode: statusCode,
});

exports.processWebhook = async (request, context) => {
    try {
        console.debug(`incoming webhook`);

        const signatureIsValid = validateSignature(request.body, request.headers);
        if (!signatureIsValid) {
            console.debug("returning 403 due to invalid signature");
            return response(403);
        }

        const cloudId = extractCloudId(context.installContext);
        const httpStatus = await processWebhook(cloudId, request.body);
        return response(httpStatus);
    } catch (e) {
        if (e instanceof UnsupportedWebhookTypeError || e instanceof InvalidJsonError) {
            console.info("dropping unidentified webhook due to " + e.name);
        }
    }
}
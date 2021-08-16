/**
 * Extracts the cloud ID from the "installContext" string
 * (which is a Jira site ARI like "ari:cloud:jira::site/fc10a037-0294-4439-8cf4-673c6de246e7").
 */
import { mapPushWebhook } from "./webhook-mappers/push";
import { sendDevInfo } from "./devinfo/devinfo-client";
import { mapCreateWebhook } from "./webhook-mappers/create";
import { mapPullrequestWebhook } from "./webhook-mappers/pullrequest";
import { GitHub } from "./github/github-types";

const extractCloudId = (installContext) => {
    console.log(`extracting cloudId`);
    return installContext.replace("ari:cloud:jira::site/", "")
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

exports.processPushWebhook = async (request, context) => {
    console.log(`incoming webhook: ${request.body}`);
    const cloudId = extractCloudId(context.installContext);
    const webhook = JSON.parse(request.body) as GitHub.PushWebhook;
    const repository = mapPushWebhook(webhook, new Date().getTime());
    const statusCode: number = await sendDevInfo(cloudId, repository);
    return response(statusCode);
}

exports.processPullrequestWebhook = async (request, context) => {
    const cloudId = extractCloudId(context.installContext);
    const webhook = JSON.parse(request.body) as GitHub.PullrequestWebhook;
    const repository = mapPullrequestWebhook(webhook, new Date().getTime());
    const statusCode: number = await sendDevInfo(cloudId, repository);
    return response(statusCode);
}

exports.processBranchWebhook = async (request, context) => {
    const cloudId = extractCloudId(context.installContext);
    const webhook = JSON.parse(request.body) as GitHub.CreateWebhook;
    const repository = mapCreateWebhook(webhook, new Date().getTime());
    const statusCode: number = await sendDevInfo(cloudId, repository);
    return response(statusCode);
}
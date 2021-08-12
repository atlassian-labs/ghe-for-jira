import { sendDevInfo } from "./webhooks";
import { transformCommitsWebhookToRepository } from "./transformations/commits";
import { transformBranchWebhookToRepository } from "./transformations/branch";
import {transformPullrequestWebhookToRepository} from "./transformations/pullrequest";

/**
 * Extracts the cloud ID from the "installContext" string
 * (which is a Jira site ARI like "ari:cloud:jira::site/fc10a037-0294-4439-8cf4-673c6de246e7").
 */
const extractCloudId = (installContext) => (
    installContext.replace("ari:cloud:jira::site/", "")
);

exports.processPushWebhook = async (request, context) => {
  const cloudId = extractCloudId(context.installContext);
  const repository = transformCommitsWebhookToRepository(request.body, new Date().getTime());
  await sendDevInfo(cloudId, repository);
}

exports.processPullrequestWebhook = async (request, context) => {
  const cloudId = extractCloudId(context.installContext);
  const repository = transformPullrequestWebhookToRepository(request.body, new Date().getTime());
  await sendDevInfo(cloudId, repository);
}

exports.processBranchWebhook = async (request, context) => {
  const cloudId = extractCloudId(context.installContext);
  const repository = transformBranchWebhookToRepository(request.body, new Date().getTime());
  await sendDevInfo(cloudId, repository);
}
import { GitHub } from "../github/github-types";
import { DevInfo } from "../devinfo/devinfo-types";
import { mapPushWebhook } from "./push";
import { mapCreateWebhook } from "./branch";
import { mapPullrequestWebhook } from "./pullrequest";
import { sendDevInfo } from "../devinfo/devinfo-client";
import getWebhookType = GitHub.getWebhookType;
import WebhookType = GitHub.WebhookType;
import { createHmac } from "crypto";

type WebhookMapper = (payload: GitHub.Webhook) => DevInfo.Repository;

export class UnsupportedWebhookTypeError extends Error {
    constructor(payload) {
        super("Unsupported webhook payload type. Payload: " + JSON.stringify(payload));
        this.name = 'UnsupportedWebhookTypeError';
    }
}

export class InvalidJsonError extends Error {
    constructor(message) {
        super("Could bot parse JSON payload: " + message);
        this.name = 'InvalidJsonError';
    }
}

export class MissingSignatureError extends Error {
    constructor() {
        super("webhook did not contain a GitHub signature");
        this.name = 'MissingSignatureError';
    }
}

const getWebhookMapper = (payload: any): WebhookMapper => {
    switch (getWebhookType(payload)) {
        case WebhookType.PUSH:
            return mapPushWebhook;
        case WebhookType.BRANCH:
            return mapCreateWebhook;
        case WebhookType.PULL_REQUEST:
            return mapPullrequestWebhook;
        default:
            throw new UnsupportedWebhookTypeError(payload);
    }
}

const validateSignature = (payload: string, githubSignature: string) => {
    if(! githubSignature){
        throw new MissingSignatureError();
    }

    console.log(`found signature from GitHub: ${githubSignature}`)

    const hmac = createHmac('sha256', 'a secret');
    hmac.update(payload);
    const ourSignature = hmac.digest('hex');
    console.log(`calculated signature: ${ourSignature}`);

    return githubSignature == ourSignature;
}

/**
 * Maps an incoming webhook payload in the expected shape and then sends it to Jira's
 * DevInfo API. Returns the HTTP status code returned by the Jira DevInfo API.
 */
export default async (cloudId: string, payload: string, githubSignature: string): Promise<number> => {
    let webhook: any;

    try {
        webhook = JSON.parse(payload);
    } catch (e) {
        throw new InvalidJsonError(e.message);
    }

    const mapper = getWebhookMapper(webhook);
    const repository = mapper(webhook);
    return sendDevInfo(cloudId, repository);
}
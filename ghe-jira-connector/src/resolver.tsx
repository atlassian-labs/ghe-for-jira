import Resolver from "@forge/resolver";
import {webTrigger} from "@forge/api";

const resolver = new Resolver();

resolver.define("fetchWebhookUrl", async ({ payload, context }) => {
    return { url: await webTrigger.getUrl(payload.key) };
});

export const handler = resolver.getDefinitions();
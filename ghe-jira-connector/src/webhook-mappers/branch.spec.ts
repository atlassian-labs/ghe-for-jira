import webhook from "./example-create-webhook";
var assert = require('assert');
import 'mocha';
import { mapCreateWebhook } from "./create";

describe("GitHub 'create' webhook", () => {
    it("should be transformed into a DevInfo Repository object", () => {
        const repository = mapCreateWebhook(webhook, new Date().getTime());
        console.log(JSON.stringify(repository));
        // no error
        // TODO: add assertions
    });
});
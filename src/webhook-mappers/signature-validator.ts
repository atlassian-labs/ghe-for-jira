import { createHmac } from "crypto";

type SignatureType = 'sha1' | 'sha256';

const createSignature = (signatureType: SignatureType, payload: string) => {
    const hmac = createHmac(signatureType, 'a secret');
    hmac.update(payload);
    return hmac.digest('hex');
}

/**
 * Generates a signature over some payload and compares it with a signature provided by GitHub to
 * validate the authenticity of the data source.
 *
 * @see https://docs.github.com/en/enterprise-server@3.1/developers/webhooks-and-events/webhooks/securing-your-webhooks
 * @param payload the payload over which to create a signature to compare with GitHub's signature.
 * @param githubHeaders headers from the GitHub webhook request. For some reason, Forge allows an array of header values
 * for a given header name, but we're only interested in the first one.
 * @return true if the signature matches, false if not
 */
export default (payload: string, githubHeaders: { string: string[] }): boolean => {

    const githubSignature = githubHeaders?.["x-hub-signature-256"]?.[0] || githubHeaders?.["x-hub-signature"]?.[0];
    const signatureType = githubHeaders?.["x-hub-signature-256"]
        ? 'sha256'
        : 'sha1';

    if (!githubSignature) {
        console.debug(`no signature provided to compare with`);
        return false;
    }

    let calculatedSignature = `${signatureType}=${createSignature(signatureType, payload)}`;
    console.debug(`calculated signature: ${calculatedSignature}`);

    return githubSignature == calculatedSignature;
}
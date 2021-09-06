import { IssueKeyExtractor } from "../common/issue-key-extractor";
import { DevInfo } from "../devinfo/devinfo-types";
import { GitHub } from "../github/github-types";

const createBranchUrl = (urlTemplate: string, branchName: string): string =>
    urlTemplate.replace("{/branch}", branchName);

const extractBranchFromWebhook = (webhook: GitHub.CreateWebhook, updateSequenceId: number): DevInfo.Branch => {
    return {
        // may only contain alphanumeric characters or [~.-_]
        id: `${webhook.repository.name}-${webhook.ref}`,
        name: webhook.ref,
        updateSequenceId: updateSequenceId,
        url: createBranchUrl(webhook.repository.branches_url, webhook.ref),
        issueKeys: IssueKeyExtractor.extractIssueKeys(webhook.ref),
        // TODO: dummy data for now! The webhook doesn't contain this info!
        lastCommit: {
            id: "dummy",
            url: "https://github.com/foobar",
            updateSequenceId: updateSequenceId,
            issueKeys: [
                "TODO-1"
            ],
            author: {
                name: "John Doe",
            },
            authorTimestamp: new Date().toISOString(),
            displayId: "cafecafe",
            hash: "cafecafe",
            message: "this is a dummy commit",
            fileCount: 42
        }
    };
}

export const mapCreateWebhook = (webhook: GitHub.CreateWebhook): DevInfo.Repository => {
    const updateSequenceId = new Date().getTime();
    return {
        id: webhook.repository.id.toString(),
        name: webhook.repository.name,
        description: webhook.repository.description,
        url: webhook.repository.html_url,
        branches: [
            extractBranchFromWebhook(webhook, updateSequenceId)
        ],
        updateSequenceId: updateSequenceId
    };
}
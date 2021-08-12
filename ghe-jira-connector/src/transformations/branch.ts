import { GitHubCreateWebhook } from "../domain/github-webhooks";
import { Branch, Repository } from "../domain/jira-api";

const createBranchUrl = (urlTemplate: string, branchName: string): string =>
    urlTemplate.replace("{/branch}", branchName);

const extractBranchFromWebhook = (webhook: GitHubCreateWebhook): Branch => {
    return {
        id: `${webhook.repository.full_name}/${webhook.ref}`,
        updateSequenceId: new Date().getTime(),
        url: createBranchUrl(webhook.repository.branches_url, webhook.ref),
        issueKeys: [
            "TODO-1"
        ],
        lastCommit: {
            id: "dummy",
            url: "https://github.com/foobar",
            updateSequenceId: new Date().getTime(),
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

export const transformBranches = (webhook: GitHubCreateWebhook): Repository => {
    return {
        id: webhook.repository.id.toString(),
        name: webhook.repository.name,
        description: webhook.repository.description,
        url: webhook.repository.html_url,
        branches: [
            extractBranchFromWebhook(webhook)
        ],
        updateSequenceId: new Date().getTime()
    };
}
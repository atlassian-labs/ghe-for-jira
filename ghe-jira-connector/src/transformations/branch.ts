import { GitHubCreateWebhook } from "../domain/github-webhooks";
import { Branch, Repository } from "../domain/jira-api";
import { IssueKeyExtractor } from "../common/issue_key_extractor";

const createBranchUrl = (urlTemplate: string, branchName: string): string =>
    urlTemplate.replace("{/branch}", branchName);

const extractBranchFromWebhook = (webhook: GitHubCreateWebhook, updateSequenceId: number): Branch => {
    return {
        id: `${webhook.repository.full_name}/${webhook.ref}`,
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

export const transformBranchWebhookToRepository = (webhook: GitHubCreateWebhook, updateSequenceId: number): Repository => {
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
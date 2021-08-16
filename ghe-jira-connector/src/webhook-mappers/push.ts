import {GitHubCommit, GitHubPushWebhook} from "../domain/github-webhooks";
import { Repository } from "../domain/jira-api";
import { IssueKeyExtractor } from "../common/issue_key_extractor";

function buildCommit(commit: GitHub.Commit, updateSequenceId: number) {
    const author = commit.author;

    return {
        "id": commit.id,
        "issueKeys": IssueKeyExtractor.extractIssueKeys(commit.message),
        "updateSequenceId": updateSequenceId,
        "hash": commit.id,
        "flags": [],
        "message": commit.message,
        "author": {
            "name": author.name,
            "email": author.email,
            "username": author.username,
        },
        "fileCount": 0,
        "url": commit.url,
        "files": [],
        "authorTimestamp": commit.timestamp,
        "displayId": commit.id.substr(0, 7),
    };
}

export function transformCommitsWebhookToRepository(webhook: GitHubPushWebhook, updateSequenceId: number): Repository{
    const firstCommit = webhook.commits[0];
    const repository = webhook.repository;

    return {
        "name": repository.name,
        // "description": repository.description,
        "url": repository.html_url,
        "commits": [
            buildCommit(firstCommit, updateSequenceId)
        ],
        "branches": [],
        "pullRequests": [],
        "id": repository.id.toString(),
        "updateSequenceId": updateSequenceId
    };
}

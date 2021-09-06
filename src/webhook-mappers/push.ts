import { IssueKeyExtractor } from "../common/issue-key-extractor";
import { GitHub } from "../github/github-types";
import { DevInfo } from "../devinfo/devinfo-types";

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

export function mapPushWebhook(webhook: GitHub.PushWebhook): DevInfo.Repository {
    console.log(`incoming webhook: ${JSON.stringify(webhook)}`);
    const updateSequenceId = new Date().getTime();
    const firstCommit: GitHub.Commit = webhook.commits[0];
    const repository: GitHub.Repository = webhook.repository;

    return {
        "name": repository.name,
        "url": repository.html_url,
        "commits": [
            // TODO: include all commits instead of just the first one
            buildCommit(firstCommit, updateSequenceId)
        ],
        "branches": [],
        "pullRequests": [],
        "id": repository.id.toString(),
        "updateSequenceId": updateSequenceId
    };
}

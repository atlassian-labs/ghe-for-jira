import {GitHubCommit, GitHubWebhook} from "../domain/github-webhooks";

function buildCommit(commit: GitHubCommit, updateSequenceId: number) {
    const author = commit.author;

    return {
        "id": commit.id,
        "issueKeys": [
            "TODO-1"
        ],
        "updateSequenceId": updateSequenceId,
        "hash": commit.id,
        "flags": [],
        "message": commit.message,
        "author": {
            "name": author.name,
            "email": author.email,
            "username": author.username,
        },
        "fileCount": 1,
        "url": commit.url,
        "files": [],
        "authorTimestamp": commit.timestamp,
        "displayId": commit.id.substr(0, 7),
    };
}

export function buildRepository(webhook: GitHubWebhook, updateSequenceId: number) {
    const firstCommit = webhook.commits[0];
    const repository = webhook.repository;

    return {
        "name": repository.name,
        "description": repository.description,
        "url": repository.html_url,
        "commits": [
            buildCommit(firstCommit, updateSequenceId)
        ],
        "branches": [],
        "pullRequests": [],
        "id": repository.node_id,
        "updateSequenceId": updateSequenceId
    };
}

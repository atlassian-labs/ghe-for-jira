
function buildCommit(commit, updateSequenceId: number) {
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

export function buildRepository(repository, commit, updateSequenceId: number) {
    return {
        "name": repository.name,
        "description": repository.description,
        "url": repository.html_url,
        "commits": [
            buildCommit(commit, updateSequenceId)
        ],
        "branches": [],
        "pullRequests": [],
        "id": repository.node_id,
        "updateSequenceId": updateSequenceId
    };
}

export interface Branch {
    id: string,
    issueKeys: string[],
    updateSequenceId: number,
    lastCommit: Commit,
    url: string
}

export interface Commit {
    id: string,
    issueKeys: string[],
    updateSequenceId: number,
    hash: string,
    message: string,
    author: Author,
    fileCount: number,
    url: string,
    authorTimestamp: string,
    displayId: string
}

export interface Author {
    name: string,
    email: string,
    username: string,
    url: string,
    avatar: string
}

export interface Repository {
    id: string,
    name: string,
    description?: string,
    forkOf?: string,
    url: string,
    commits?: Commit[],
    branches?: Branch[],
    pullRequests?: Pullrequest[],
    avatar?: string,
    avatarDescription?: string,
    updateSequenceId: number
}

export interface Pullrequest {

}
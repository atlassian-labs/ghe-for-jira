export interface GitHubPushWebhook {
    // the name of the new branch
    ref: string,
    ref_type: "tag" | "branch",
    repository: GitHubRepository,
    commits: GitHubCommit[],
    organization: GitHubOrganization,
}

export interface GitHubCreateWebhook {
    // the name of the new branch
    ref: string,
    ref_type: "tag" | "branch",
    repository: GitHubRepository,
}

export interface GitHubRepository {
    id: number,
    node_id: string,
    name: string,
    description: string,
    full_name: string,
    private: boolean,
    html_url: string,
    branches_url: string
}

export interface GitHubCommit {
    id: string,
    message: string,
    url: string,
    timestamp: string,
    author: GitHubCommitAuthor,
}

export interface GitHubCommitAuthor {
    name: string,
    email: string,
    username: string,
}

export interface GitHubOrganization {
    node_id: string,
}

export interface GitHubPullrequestUser{
    login: string
    avatar_url: string
    url: string
}

export interface GitHubPullrequestHeadBranch{
    url: string
}

export interface GitHubPullrequestBaseBranch{
    url: string
}

export interface GitHubPullrequest {
    id: number
    number: number
    state: "open" | "closed"
    url: string
    title: string
    merged: boolean
    commits: number
    comments: number
    updated_at: string
    user: GitHubPullrequestUser
    head: GitHubPullrequestHeadBranch
    base: GitHubPullrequestBaseBranch
    requested_reviewers: GitHubPullrequestUser[]
}

export interface GitHubPullrequestWebhook {
    pull_request: GitHubPullrequest
    repo: GitHubRepository,
}
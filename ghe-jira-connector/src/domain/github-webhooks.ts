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
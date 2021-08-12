export interface GitHubCreateWebhook {
    // the name of the new branch
    ref: string,

        ref_type: GitHubRefType,

}

export enum GitHubRefType{
    BRANCH = "branch",
    TAG = "tag"
}

export interface GitHubRepository {
    id: number,
    node_id: string,
    name: string,
    full_name: string,
    private: boolean,
    html_url: string,
    branches_url: string
}
export namespace GitHub {

    /**
     * Payload of a GitHub "push" webhook.
     * @see https://docs.github.com/en/enterprise-server@2.22/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push
     */
    export interface PushWebhook {
        ref: string,
        ref_type: "tag" | "branch",
        repository: Repository,
        commits: Commit[],
        organization: Organization,
    }

    /**
     * Payload of a GitHub "create" webhook.
     * @see https://docs.github.com/en/enterprise-server@2.22/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#create
     */
    export interface CreateWebhook {
        ref: string,
        ref_type: "tag" | "branch",
        repository: Repository,
    }

    /**
     * Payload of a GitHub "pull_request" webhook.
     * @see https://docs.github.com/en/enterprise-server@2.22/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
     */
    export interface PullrequestWebhook {
        pull_request: Pullrequest
        repository: Repository,
    }

    export interface Repository {
        id: number,
        node_id: string,
        name: string,
        description: string,
        full_name: string,
        private: boolean,
        html_url: string,
        branches_url: string
    }

    export interface Commit {
        id: string,
        message: string,
        url: string,
        timestamp: string,
        author: CommitAuthor,
    }

    export interface CommitAuthor {
        name: string,
        email: string,
        username: string,
    }

    export interface Organization {
        node_id: string,
    }

    export interface PullrequestUser {
        login: string
        avatar_url: string
        url: string
    }

    export interface PullrequestHeadBranch {
        ref: string
    }

    export interface PullrequestBaseBranch {
        url: string
    }

    export interface Pullrequest {
        id: number
        number: number
        state: "open" | "closed"
        url: string
        title: string
        merged: boolean
        commits: number
        comments: number
        updated_at: string
        user: PullrequestUser
        head: PullrequestHeadBranch
        base: PullrequestBaseBranch
        requested_reviewers: PullrequestUser[]
    }

}

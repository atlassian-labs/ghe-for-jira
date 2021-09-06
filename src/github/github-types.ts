export namespace GitHub {

    export enum WebhookType {
        UNKNOWN,
        PULL_REQUEST,
        BRANCH,
        PUSH
    }

    /**
     * Tries to identify the type of an incoming webhook payload by checking fields that uniquely describe the webhook type.
     */
    export const getWebhookType = (payload: any): WebhookType => {
        if (payload.action
            && payload.number
            && payload.pull_request) {
            // https://docs.github.com/en/enterprise-server@3.1/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
            return WebhookType.PULL_REQUEST;
        } else if (payload.ref
            && payload.ref_type
            && payload.master_branch) {
            // https://docs.github.com/en/enterprise-server@3.1/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#create
            return WebhookType.BRANCH;
        } else if (payload.ref
            && payload.before
            && payload.after
            && payload.commits) {
            // https://docs.github.com/en/enterprise-server@3.1/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push
            return WebhookType.PUSH;
        }

        return WebhookType.UNKNOWN;
    }

    /**
     * Marker interface for all supported webhook types.
     */
    export interface Webhook {

    }


    /**
     * Payload of a GitHub "push" webhook.
     * @see https://docs.github.com/en/enterprise-server@2.22/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#push
     */
    export interface PushWebhook extends Webhook {
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
    export interface CreateWebhook extends Webhook {
        ref: string,
        ref_type: "tag" | "branch",
        repository: Repository,
    }

    /**
     * Payload of a GitHub "pull_request" webhook.
     * @see https://docs.github.com/en/enterprise-server@2.22/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#pull_request
     */
    export interface PullrequestWebhook extends Webhook {
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

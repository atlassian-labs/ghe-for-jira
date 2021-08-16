/**
 * Interfaces that describe the shape of the data the Jira Devinfo
 * API expects.
 */
export namespace DevInfo {

    /**
     * Shape of the request to send dev info to the DevInfo API.
     * @see https://developer.atlassian.com/cloud/jira/software/rest/api-group-development-information/#api-devinfo-0-10-bulk-post.
     */
    export interface BulkRequest {
        repositories: Repository[],
        preventTransitions: boolean,
        providerMetadata: { [key:string]:string; }
    }

    export interface Branch {
        id: string,
        name: string,
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
        fileCount?: number,
        url: string,
        authorTimestamp: string,
        displayId: string
    }

    export interface Author {
        name: string,
        email?: string,
        username?: string,
        url?: string,
        avatar?: string
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

    export enum PullRequestStatus {
        OPEN,
        MERGED,
        DECLINED,
        UNKNOWN
    }

    export enum PullRequestApprovalStatus {
        APPROVED,
        UNAPPROVED
    }

    export interface PullrequestAuthor {
        name: string
        email?: string
        username?: string
        url?: string
        avatar?: string
    }

    export interface PullrequestReviewer {
        name: string
        approvalStatus?: PullRequestApprovalStatus
        url?: string
        avatar?: string
    }

    export interface Pullrequest {
        id: number,
        issueKeys: string[],
        updateSequenceId: number
        status: PullRequestStatus
        title: string
        author: PullrequestAuthor
        commentCount: number
        sourceBranch: string
        lastUpdate: string
        url: string
        displayId: string
        sourceBranchUrl?: string
        destinationBranch?: string
        reviewers?: PullrequestReviewer[]
    }
}
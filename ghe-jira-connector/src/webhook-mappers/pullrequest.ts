import {GitHubPullrequestWebhook} from "../domain/github-webhooks";
import {
    Pullrequest,
    PullRequestStatus,
    Repository
} from "../domain/jira-api";
import {IssueKeyExtractor} from "../common/issue_key_extractor";

const getStatus = (action: string, merged: boolean): PullRequestStatus => {
    if(action == "open")
        return PullRequestStatus.OPEN
    else if (action == "closed" && merged)
        return DevInfo.PullRequestStatus.MERGED
    else if (action == "closed" && !merged)
        return DevInfo.PullRequestStatus.DECLINED
    else
        return DevInfo.PullRequestStatus.UNKNOWN
}

const extractPullrequestromWebhook = (webhook: GitHub.PullrequestWebhook, updateSequenceId: number): DevInfo.Pullrequest => {
    return {
        id: webhook.pull_request.id,
        issueKeys: IssueKeyExtractor.extractIssueKeys(webhook.pull_request.title),
        updateSequenceId: updateSequenceId,
        status: getStatus(webhook.pull_request.state, webhook.pull_request.merged),
        title: webhook.pull_request.title,
        author: {
            name: webhook.pull_request.user.login,
            username: webhook.pull_request.user.login,
            url: webhook.pull_request.user.url,
            avatar: webhook.pull_request.user.avatar_url,
        },
        commentCount: webhook.pull_request.comments,
        sourceBranch: webhook.pull_request.head.ref,
        lastUpdate: webhook.pull_request.updated_at,
        url: webhook.pull_request.url,
        displayId: webhook.pull_request.number.toString(),
        sourceBranchUrl: createBranchUrl(webhook.repository.branches_url, webhook.pull_request.head.ref),
        destinationBranch: webhook.pull_request.base.url,
        reviewers: webhook.pull_request.requested_reviewers.map(
                (user) => {
                    return {name: user.login}
                }
            )
    };
}

export const transformPullrequestWebhookToRepository = (webhook: GitHubPullrequestWebhook, updateSequenceId: number): Repository => {
    return {
        id: webhook.repository.id.toString(),
        name: webhook.repository.name,
        description: webhook.repository.description,
        url: webhook.repository.html_url,
        pullRequests: [
            extractPullrequestromWebhook(webhook, updateSequenceId)
        ],
        updateSequenceId: updateSequenceId
    };
}
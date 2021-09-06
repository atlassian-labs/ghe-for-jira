import { IssueKeyExtractor } from "../common/issue-key-extractor";
import { DevInfo } from "../devinfo/devinfo-types";
import { GitHub } from "../github/github-types";

const createBranchUrl = (urlTemplate: string, branchName: string): string =>
    urlTemplate.replace("{/branch}", branchName);

const getStatus = (action: string, merged: boolean): DevInfo.PullRequestStatus => {
    if (action == "open")
        return DevInfo.PullRequestStatus.OPEN
    else if (action == "closed" && merged)
        return DevInfo.PullRequestStatus.MERGED
    else if (action == "closed" && !merged)
        return DevInfo.PullRequestStatus.DECLINED
    else
        return DevInfo.PullRequestStatus.UNKNOWN
}

const extractPullrequestFromWebhook = (webhook: GitHub.PullrequestWebhook, updateSequenceId: number): DevInfo.Pullrequest => {
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
                return { name: user.login }
            }
        )
    };
}

export const mapPullrequestWebhook = (webhook: GitHub.PullrequestWebhook): DevInfo.Repository => {
    console.log(`pullrequest webhook: ${JSON.stringify(webhook)}`);
    const updateSequenceId = new Date().getTime();
    return {
        id: webhook.repository.id.toString(),
        name: webhook.repository.name,
        description: webhook.repository.description,
        url: webhook.repository.html_url,
        pullRequests: [
            extractPullrequestFromWebhook(webhook, updateSequenceId)
        ],
        updateSequenceId: updateSequenceId
    };
}
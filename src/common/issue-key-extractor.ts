import issueKeyParser from "jira-issue-key-parser";

export class IssueKeyExtractor {

    static extractIssueKeys(message: string): string[] {
        return issueKeyParser().parse(message);
    }
}
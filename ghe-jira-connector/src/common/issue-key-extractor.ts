export class IssueKeyExtractor {

    // TODO: replace with the more robust https://www.npmjs.com/package/jira-issue-key-parser
    static extractIssueKeys(message: string) {
        let regex = /\s?[A-Z]+-\d+/;
        return message.match(regex) || [];
    }
}
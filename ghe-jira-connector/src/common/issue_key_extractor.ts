export class IssueKeyExtractor {
    static extractIssueKeys(message: string) {
        let regex = /\s?[A-Z]+-\d+?/;
        return message.match(regex) || [];
    }
}
export class IssueKeyExtractor {
    static extractIssueKeys(message: string) {
        let regex = /\s?[A-Z]+-\d+\s?/;
        return message.match(regex) || [];
    }
}
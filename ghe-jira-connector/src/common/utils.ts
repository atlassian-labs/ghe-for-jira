export class Utils {
    static isNullOrUndefined<T>(obj?: T) {
        return obj === undefined || obj === null;
    }

    static stripPunctuation(word: string) {
        return word
            .replace(/\{(color)(:*#*[\dabcdef]{0,6})\}/g, "") //strip color tags
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") //strip punctuation
            .replace(/\s{2,}/g, " ") // strip dangling space
            .replace(/\n/g, " ") // strip newline characters
            
    }

    static allSubsets<T>(arr: T[]): T[][] {
        return arr.reduceRight((a, x) => [...a, ...a.map(y => [x, ...y])], [
            []
        ]).filter(x => x.length > 0);
    }
}
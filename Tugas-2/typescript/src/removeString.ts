const args: any = process.argv.slice(2);

function removeString(words: string, sentence: string): string {
    return words.replace(sentence, "");
}

export {}

console.log("output: string = " + args[0] + ", search string = " + args[1] + " -> " + removeString(args[0], args[1]));
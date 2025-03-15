const args = process.argv.slice(2);

function removeString(words, sentence) {
    return words.replace(sentence, "");
}

console.log("output: string = " + args[0] + ", search string = " + args[1] + " -> " + removeString(args[0], args[1]));
function removeWord(words: string, sentence: string): string {
    return words.replace(sentence, "");
}
export { removeWord };
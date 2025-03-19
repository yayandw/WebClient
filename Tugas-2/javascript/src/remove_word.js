/**
 * Remove word in sentence
 *
 * @param {string} sentence - The sentence.
 * @param {string} word - The word want to remove.
 * @returns {string} Result clean sentence.
 * @example
 * // Returns "Ho World!"
 * removeWord("Hello World!", "ell");
 */
function removeWord(sentence, word) {
    return sentence.replace(word, "");
}
export { removeWord };
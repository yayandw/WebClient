/**
 * Check is palindrome
 *
 * @param {string} string - The string want to check.
 * @returns {boolean} Result true / false.
 * @example
 * // Returns "true"
 * isPalindrome("madam");
 */
function isPalindrome(string: string): boolean {
    const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
export { isPalindrome };
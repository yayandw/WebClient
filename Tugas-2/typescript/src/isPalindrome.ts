const args: any = process.argv.slice(2);

function isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

export {}

console.log("output: " + args[0] + " -> " + (isPalindrome(args[0]) ? "palindrome" : "not palindrome"));
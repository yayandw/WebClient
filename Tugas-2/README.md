# Tugas 2
| Task                                                                                                  | Expectation                                                                               |
|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Write a program that takes a temperature in Fahrenheit as input and converts it to Celsius            | Input: A temperature in Fahrenheit. Expected Output: The temperature converted to Celsius |
| Write a code to convert centimeter to kilometer or vice versa                                         | Example: 10000 -> "1 km"                                                                  |
| Write a function that takes an integer n as input and returns true if n is odd and false if n is even | Example: 1000 -> isEven: true; 1001 -> isEvent: false                                     |
| Write a code to remove the first occurrence of a given "search string" from a string                  | Example: string = "Hello world", search string = "ell" -> "Ho world"                      |
| Write a code to check whether a string is a palindrome or not                                         | Example: "madam" -> palindrome                                                            |


## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
2. [Test](#test)
3. [Documentation](#documentation)

---

## Getting Started

### Prerequisites
First, we need to set up our environment to run `JavaScript` or `TypeScript` on our local server or personal computer. In this project, I used [Node.js](https://nodejs.org/en) . You can download and install it [here](https://nodejs.org/en/download) .


### Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yayandw/WebClient.git
   ```
2. Navigate to the project directory:
   ```bash
   cd ./WebClient/Tugas-2
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Build `TypeScript`
   ```bash
   npm run build
   ```
   
---

## Test
- You can Run `test.js` or with npm
   ```bash
    npm run test:js
   ```
- Output:
   ```text
   output: 37.78°C
   output: 3km
   output: isEven: true
   output: string = Hello World!, search string = ell -> Ho World!
   output: madam -> palindrome
   ```
---

## Documentation
### Task 1
> Write a program that takes a temperature in Fahrenheit as input and converts it to Celsius

Function:
```javascript
/**
 * Convert fahrenheit to celsius
 *
 * @param {number} fahrenheit - The fahrenheit want to convert.
 * @returns {number} Result in celsius.
 * @example
 * // Returns "37.78"
 * fahrenheitToCelsius(100);
 */
function fahrenheitToCelsius(fahrenheit) {
    return parseFloat(((fahrenheit - 32) * (5 / 9)).toFixed(2));
}
```

### Task 2
> Write a code to convert centimeter to kilometer or vice versa

Function:
```javascript
/**
 * Convert centimeter to kilometer
 *
 * @param {number} centimeter - The centimeter want to convert.
 * @returns {number} Result in kilometer.
 * @example
 * // Returns "3"
 * centiToKiloMeter(300000);
 */
function centiToKiloMeter(centimeter) {
    return centimeter / 100 / 1000;
}
```

### Task 3
> Write a function that takes an integer n as input and returns true if n is odd and false if n is even

Function:
```javascript
/**
 * Check is even
 *
 * @param {number} number - The number want to check.
 * @returns {boolean} Result true / false.
 * @example
 * // Returns "true"
 * isEven(1000);
 */
function isEven(number) {
    return number % 2 === 0;
}
```

### Task 4
> Write a code to remove the first occurrence of a given "search string" from a string

Function:
```javascript
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
```

### Task 5
> Write a code to check whether a string is a palindrome or not

Function:
```javascript
/**
 * Check is palindrome
 *
 * @param {string} string - The string want to check.
 * @returns {boolean} Result true / false.
 * @example
 * // Returns "true"
 * isPalindrome("madam");
 */
function isPalindrome(string) {
    const cleanedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
```
---

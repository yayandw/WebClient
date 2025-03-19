import {isPalindrome} from "./javascript/src/is_palindrome.js";
import {centiToKiloMeter} from "./javascript/src/centi_to_kilo_meter.js";
import {fahrenheitToCelsius} from "./javascript/src/fahrenheit_to_celsius.js";
import {removeWord} from "./javascript/src/remove_word.js";
import {isEven} from "./javascript/src/is_even.js";

const fahrenheit = 100;
console.log("output: " + fahrenheitToCelsius(fahrenheit).toFixed(2) + "°C");
const centimeter = 300000;
console.log("output: " + centiToKiloMeter(centimeter) + "km");
const number = 1000;
console.log("output: isEven: " + isEven(number));
const sentence = "Hello World!";
let word = "ell";
console.log("output: string = " + sentence + ", search string = " + word + " -> " + removeWord(sentence, word));
word = "madam";
console.log("output: " + word + " -> " + (isPalindrome(word) ? "palindrome" : "not palindrome"));
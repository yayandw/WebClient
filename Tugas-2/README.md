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
```typescript
function centiToKiloMeter(centimeter) {
    return centimeter / 100 / 1000;
}
```

Output:
```text
output: 30°C
```

### Task 2
> Write a code to convert centimeter to kilometer or vice versa

Run the script:
```bash
  node centi_to_kilo_meter 100000
```

Output:
```bash
  output: 1km
```

### Task 3
> Write a function that takes an integer n as input and returns true if n is odd and false if n is even

Run the script:
```bash
  node is_even 1000
```

Output:
```bash
  output: isEven: true
```

### Task 4
> Write a code to remove the first occurrence of a given "search string" from a string

Run the script:
```bash
  node remove_string "Hello world" "ell"
```

Output:
```bash
  output: string = "Hello world", search string = "ell" -> "Ho world"
```

### Task 5
> Write a code to check whether a string is a palindrome or not

Run the script:
```bash
  node is_palindrome "madam"
```

Output:
```bash
  output: "madam" -> palindrome
```
---

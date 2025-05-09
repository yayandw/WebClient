# Tugas 1
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
   cd ./WebClient/Tugas-1
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
- You can Run `index.js` or with npm
   ```bash
    npm run test:js
   ```
- Output:
   ```text
   15
   diameter = 10, circumference = 31.4159, area = 78.53975
   35
   2
   YDW
   ```
---

## Documentation
### Task 1
> Write a code to find area of rectangle
Function:
```javascript
/**
 * Calculates the area of a rectangle.
 *
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @return {number} The area of the rectangle.
 */
export function getRectangle(length, width) {
    return length * width;
}
```

### Task 2
> Write a code to find diameter, circumference and area of circle

Function:
```javascript
const pi = 3.14159;

/**
 * Calculates the diameter of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle.
 * @return {number} The diameter of the circle.
 */
export function getDiameter(radius) {
    return 2 * radius;
}

/**
 * Calculates the circumference of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle.
 * @return {number} The circumference of the circle.
 */
export function getCircumference(radius) {
    return 2 * pi * radius;
}

/**
 * Calculates the area of a circle given its radius.
 *
 * @param {number} radius - The radius of the circle.
 * @return {number} The calculated area of the circle.
 */
export function getArea(radius) {
    return pi * radius ** 2;
}
```

### Task 3
> Write a code to find angles of triangle if two angle are given
Function:
```javascript
const sumTriangle = 180;

/**
 * Calculates the remaining angle in a triangle by subtracting the sum of the two given angles
 * (`a` and `b`) from the total sum of the angles in a triangle.
 *
 * @param {number} a - The first angle of the triangle in degrees.
 * @param {number} b - The second angle of the triangle in degrees.
 * @return {number} - The remaining angle of the triangle in degrees.
 */
export function getAngle(a, b) {
    return sumTriangle - (a + b);
}
```

### Task 4
> Write a code to get difference between two dates in days
Function:
```javascript
/**
 * Calculates the absolute difference in days between two dates.
 *
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @return {number} The absolute difference in days between the two dates.
 */
export function getDifferenceInDays(date1, date2) {
    return Math.abs(Math.round((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
}
```

### Task 5
> Write a code to print your name initial in uppercase

Function:
```javascript
/**
 * Extracts and returns the initials from a given name.
 *
 * @param {string} name - The full name from which initials will be extracted.
 * @return {string} The initials of the given name, with each initial capitalized.
 */
export function getInitial(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
```
---

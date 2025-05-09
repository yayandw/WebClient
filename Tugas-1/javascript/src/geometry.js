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
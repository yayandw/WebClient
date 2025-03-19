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
export { fahrenheitToCelsius };
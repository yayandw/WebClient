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
export { centiToKiloMeter };
const sumTriangle: number = 180;

/**
 * Calculates the remaining angle in a triangle by subtracting the sum of the two given angles
 * (`a` and `b`) from the total sum of the angles in a triangle.
 *
 * @param {number} a - The first angle of the triangle in degrees.
 * @param {number} b - The second angle of the triangle in degrees.
 * @return {number} - The remaining angle of the triangle in degrees.
 */
export function getAngle(a: number, b: number): number {
    return sumTriangle - (a + b);
}
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
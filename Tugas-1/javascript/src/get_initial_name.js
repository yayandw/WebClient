/**
 * Extracts and returns the initials from a given name.
 *
 * @param {string} name - The full name from which initials will be extracted.
 * @return {string} The initials of the given name, with each initial capitalized.
 */
export function getInitial(name) {
    return name.split(' ').map(word => word[0].toUpperCase()).join('');
}
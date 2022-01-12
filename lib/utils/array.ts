/**
 * Checks if 2 arrays intersect.
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @private
 */
export function intersects<T>(arr1: T[], arr2: T[]): boolean {
  return arr1.some(v => arr2.includes(v));
}

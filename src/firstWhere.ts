import './firstIndex'

declare global {
  interface Array<T> {
    /**
     * Iterates over the array and finds the first element that matches the predicate
     * @param predicate the predicate used for matching elements
     */
    firstWhere(predicate: (element: T) => boolean): T | null
  }
}

if (Array.prototype.firstWhere === undefined) {
  Array.prototype.firstWhere = function <T>(this: T[], predicate: (element: T) => boolean) {
    const firstIndex = this.firstIndex(predicate)
    if (firstIndex == null) {
      return null
    } else {
      return this[firstIndex]
    }
  }
}

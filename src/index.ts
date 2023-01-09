export {}

declare global {
  interface Array<T> {
    /**
     * Maps all objects in the array based on the transform method.
     * @param transform the predicate used for matching elements
     */
    compactMap<N>(transform: (element: T) => N | null | undefined): Array<N>

    /**
     * Returns a new array only containing the items that match the predicate
     * @param predicate the predicate used for matching elements
     */
    filteredWhere(predicate: (element: T) => boolean): Array<T>

    /**
     * Iterates over the array and finds the index of the first element that matches the predicate
     * @param predicate the predicate used for matching elements
     */
    firstIndex(predicate: (element: T) => boolean): number | null

    /**
     * Iterates over the array and finds the first element that matches the predicate
     * @param predicate the predicate used for matching elements
     */
    firstWhere(predicate: (element: T) => boolean): T | null
  }
}

if (Array.prototype.compactMap === undefined) {
  Array.prototype.compactMap = function <T, N>(this: T[], transform: (element: T) => N | null | undefined) {
    let transformedArray: Array<N> = []
    for (const element of this) {
      const transformedValue = transform(element) as N
      if (transformedValue) {
        transformedArray.push(transformedValue)
      }
    }
    return transformedArray
  }
}

if (Array.prototype.filteredWhere === undefined) {
  Array.prototype.filteredWhere = function <T>(this: T[], predicate: (element: T) => boolean) {
    let filteredArray: Array<T> = []
    for (let item of this) {
      if (predicate(item)) {
        filteredArray.push(item)
      }
    }
    return filteredArray
  }
}

if (Array.prototype.firstIndex === undefined) {
  Array.prototype.firstIndex = function <T>(this: T[], predicate: (element: T) => boolean) {
    if (this === undefined || this.length == 0) {
      return null
    }
    for (let i = 0; i < this.length; i++) {
      if (predicate(this[i])) {
        return i
      }
    }
    return null
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

import './blank'

declare global {
  interface Array<T> {
    /**
     * Maps all objects in the array based on the transform method.
     * @param transform the predicate used for matching elements
     */
    compactMap<N>(transform: (element: T) => N | null | undefined): Array<N>
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

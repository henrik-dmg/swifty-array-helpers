/**
 * Maps all objects in the array based on the transform method.
 * @param transform the predicate used for matching elements
 */
export function compactMap<T, N>(array: Array<T>, transform: (element: T) => N | null | undefined): Array<N> {
  const transformedArray: Array<N> = []
  for (const element of array) {
    const transformedValue = transform(element) as N
    if (transformedValue) {
      transformedArray.push(transformedValue)
    }
  }
  return transformedArray
}

/**
 * Iterates over the array and finds the index of the first element that matches the predicate
 * @param predicate the predicate used for matching elements
 */
export function firstIndex<T>(array: Array<T>, predicate: (element: T) => boolean): number | undefined {
  if (array.length === 0) {
    return undefined
  }
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i
    }
  }
  return undefined
}

/**
 * Iterates over the array and finds the first element that matches the predicate
 * @param predicate the predicate used for matching elements
 */
export function firstWhere<T>(array: Array<T>, predicate: (element: T) => boolean): T | undefined {
  const index = firstIndex(array, predicate)
  if (index === undefined) {
    return undefined
  }
  return array[index]
}

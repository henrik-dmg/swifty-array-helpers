/**
 * Maps all objects in the array based on the transform method.
 * @param transform the predicate used for matching elements
 */
export function compactMap<T, N>(array: Array<T>, transform: (element: T) => N | null | undefined): Array<N> {
  let transformedArray: Array<N> = []
  for (const element of array) {
    const transformedValue = transform(element) as N
    if (transformedValue) {
      transformedArray.push(transformedValue)
    }
  }
  return transformedArray
}

/**
 * Returns a new array only containing the items that match the predicate
 * @param predicate the predicate used for matching elements
 */
export function filteredWhere<T>(array: Array<T>, predicate: (element: T) => boolean): Array<T> {
  let filteredArray: Array<T> = []
  for (let item of array) {
    if (predicate(item)) {
      filteredArray.push(item)
    }
  }
  return filteredArray
}

/**
 * Iterates over the array and finds the index of the first element that matches the predicate
 * @param predicate the predicate used for matching elements
 */
export function firstIndex<T>(array: Array<T>, predicate: (element: T) => boolean): number | null {
  if (array === undefined || array.length == 0) {
    return null
  }
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return i
    }
  }
  return null
}

/**
 * Iterates over the array and finds the first element that matches the predicate
 * @param predicate the predicate used for matching elements
 */
export function firstWhere<T>(array: Array<T>, predicate: (element: T) => boolean): T | null {
  const index = firstIndex(array, predicate)
  if (index == null) {
    return null
  } else {
    return array[index]
  }
}

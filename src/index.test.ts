import { compactMap, firstIndex, firstWhere } from '.'

describe('compactMap', () => {
  test('Should filter out null objects', () => {
    const someArray = [1, 3, 4, null]
    const mappedArray = compactMap(someArray, element => {
      return element
    })
    expect(mappedArray).toHaveLength(3)
    expect(mappedArray).toStrictEqual([1, 3, 4])
  })
  test('Should filter out undefined objects', () => {
    const someArray = [1, 3, 4, undefined]
    const mappedArray = compactMap(someArray, element => {
      return element
    })
    expect(mappedArray).toHaveLength(3)
    expect(mappedArray).toStrictEqual([1, 3, 4])
  })
  test('Should filter out transformed null objects', () => {
    const someArray = [1, null, 3, 4, undefined]
    const mappedArray = compactMap(someArray, element => {
      return element ? `${element}` : null
    })
    expect(mappedArray).toHaveLength(3)
    expect(mappedArray).toStrictEqual(['1', '3', '4'])
  })
})

describe('firstIndex', () => {
  test('Should find value in array', () => {
    const someArray = [1, 4, 19, 21]
    const index = firstIndex(someArray, element => element === 4)
    expect(index).toBe(1)
  })
  test('Should find not value that doesnt exist in array', () => {
    const someArray = [1, 4, 19, 21]
    const index = firstIndex(someArray, element => element === 5)
    expect(index).toBe(undefined)
  })
  test('Should return undefined on empty arraz', () => {
    const someArray = []
    const index = firstIndex(someArray, element => element === 5)
    expect(index).toBe(undefined)
  })
})

describe('firstWhere', () => {
  test('Should find value in array', () => {
    const someArray = ['Alice', 'Bob', 'Sarah']
    const name = firstWhere(someArray, element => element.startsWith('S'))
    expect(name).toBe('Sarah')
  })
  test('Should find not value that doesnt exist in array', () => {
    const someArray = ['Alice', 'Bob', 'Sarah']
    const name = firstWhere(someArray, element => element.startsWith('H'))
    expect(name).toBe(undefined)
  })
  test('Should return undefined on empty arraz', () => {
    const someArray = []
    const name = firstWhere(someArray, element => element.startsWith('S'))
    expect(name).toBe(undefined)
  })
})

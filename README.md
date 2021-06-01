# Array Helpers for JavaScript

![npm](https://img.shields.io/npm/v/swifty-array-helpers?logo=npm)
![npm](https://img.shields.io/npm/dm/swifty-array-helpers?logo=npm)

## What is this?

A collection of functions for the `Array.prototype` inspired by the methods that are available in Swift

## Usage

### Import

You need to import the methods first. Example:

```js
// ES6 module
import 'swifty-array-helper/firstWhere'

// node.js
require('swifty-array-helper/firstWhere')
```

### firstIndex

Finds the index of the first element matching the predicate.
Example:

```js
const array = [5, 3, 7, 12]
const index = array.firstIndex(x -> x <= 4) // 1
```

### firstWhere

Finds the first element matching the predicate (similar to `firstIndex`).
Example:

```js
const array = [5, 3, 7, 12]
const index = array.firstWhere(x -> x <= 4) // 3
```

### filterWhere

Filters the array based on the passed predicate
Example:

```js
const array = [5, 3, 7, 12]
const index = array.filterWhere(x -> x <= 6) // [5, 3]
```

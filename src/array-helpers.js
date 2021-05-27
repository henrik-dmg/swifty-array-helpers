function isFunction(fn) {
  return typeof fn === "function";
}

Array.prototype.firstIndex = function (predicate) {
  if (!isFunction(predicate)) {
    throw "Passed in predicate is not a function";
  }
  if (!this.length) {
    return null;
  }
  for (i = 0; i < this.length; i++) {
    if (predicate(this[i])) {
      return i;
    }
  }
  return null;
};

Array.prototype.firstWhere = function (predicate) {
  const index = firstIndex(predicate);
  if (index != null) {
    return this[index];
  } else {
    return null;
  }
};

Array.prototype.filterWhere = function (predicate) {
  if (!isFunction(predicate)) {
    throw "Passed in predicate is not a function";
  }
  let newArray = [];
  for (const element of this) {
    if (predicate(element)) {
      newArray.push(element);
    }
  }
  return newArray;
};

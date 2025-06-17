'use strict'
// disables the coercion of "this"
Array.prototype.find = function (fn, thisArg) {
  // edge cases
  if (this == null) {
    throw new TypeError("Cannot read properties of null (reading 'find')")
  }

  if (typeof fn !== 'function') {
    throw new TypeError("undefined is not a function")
  }

  for (let i = 0; i < this.length; i++) {
    const el = this[i]
    if (fn.call(thisArg, el, i, this)) {
      return el
    }
  }

  return undefined
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
}

Array.prototype.findIndex = function (fn, thisArg) {
  // edge cases
  if (this == null) {
    throw new TypeError("Cannot read properties of null (reading 'findIndex')")
  }

  if (typeof fn !== 'function') {
    throw new TypeError("undefined is not a function")
  }

  const NOT_FOUND = -1

  for (let i = 0; i < this.length; i++) {
    const el = this[i]
    if (fn.call(thisArg, el, i, this)) {
      return i
    }
  }

  return NOT_FOUND
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
}

Array.prototype.includes = function (search) {
  // edge cases
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read properties of null (reading 'includes')")
  }

  for (let i = 0; i < this.length; i++) {
    const el = this[i]
    if (el === search) return true
  }
  return false
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
}

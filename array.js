'use strict'
Array.prototype.find = function(fn) {
  // edge cases
  if(this == null) {
    throw new TypeError("Cannot read properties of null (reading 'find')")
  }

  if(typeof fn !== 'function') {
    throw new TypeError("undefined is not a function")
  }

  // option 1
  for(let i = 0; i < this.length; i++) {
    // added this variable for clarity but does take up some mem can be removed
    const el = this[i]
    if(fn(el)) return el 
  }
  return undefined
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
}

Array.prototype.findIndex = function(fn) {
  // edge cases
  if (this == null) {
    throw new TypeError("Cannot read properties of null (reading 'find')")
  }

  if (typeof fn !== 'function') {
    throw new TypeError("undefined is not a function")
  }

  const NOT_FOUND = -1

  for (let i = 0; i < this.length; i++) {
    const el = this[i]
    if (fn(el)) return i
  }

  return NOT_FOUND
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
}

Array.prototype.includes = function(search) {
  // edge cases
  if (this === null || this === undefined) {
    throw new TypeError("Cannot read properties of null (reading 'find')")
  }

  for (let i = 0; i < this.length; i++) {
    const el = this[i]
    if(el === search) return true
  }
  return false
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
}

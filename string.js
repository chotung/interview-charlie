String.prototype.endsWith = function (search, position) {
  if (search instanceof RegExp) {
    throw new TypeError("First argument to String.prototype.endsWith must not be a regular expression")
  }
  // normalized input & split string
  const normalizedStr = search.toString()
  if (position) {
    const substring = this.slice(0, position)
    return substring.includes(normalizedStr)
  }
  // runtime o(n) from the includes call
  // space is o(1) or o(k) for the size of the substring created 
  return this.includes(normalizedStr)
}

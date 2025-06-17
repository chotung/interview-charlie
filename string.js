String.prototype.endsWith = function (search, position) {
  if (search instanceof RegExp) {
    throw new TypeError("Invalid type: first can't be a Regular Expression")
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

String.prototype.endsWith = function (search, position) {
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

String.prototype.endsWith = function(search, position) {
  // normalized input & split string
  const normalizedStr = search.toString()
  if(position) {
    const substring = this.slice(0,position)
    return substring.includes(normalizedStr)
  }
  // runtime o(n) as we go through the length of the array 
  // space is o(1) does not grow with our input size
  return this.includes(normalizedStr)
}

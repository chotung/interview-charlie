describe('Array', function() {
  describe('#find()', function() {
    it('should return the first object for which the passed function returns true', function() {
      expect([1,2,3].find(function(item) { return item === 2 })).to.equal(2)
    })

    it('should return undefined if the function never returns true', function() {
      expect([1,2,3].find(function(item) { return false })).to.equal(undefined)
    })

    it('should work with empty array', function() {
      expect([].find(x => true)).to.be.undefined
    })

    it('should return object by property', function(){
      const posts = [
        { id: 1, title: 'cool', version: 1 },
        { id: 2, title: 'cool 2', version: 2 },
        { id: 3, title: 'cool 3', version: 3 },
      ]
      const res = posts.find(post => post.version === 2)
      expect(res).to.deep.equal({ id: 2, title: 'cool 2', version: 2 })
    })
    
    it("should return a TypeError: cannot read properties of null (reading 'find')", function () {
      expect(() => {
          Array.prototype.find.call(null, x => true)
      }).to.throw(TypeError, "Cannot read properties of null (reading 'find')")
    })

    it("should return a  TypeError: undefined is not a function", function() {
      expect(() => [1,2,3].find()).to.throw(TypeError, "undefined is not a function")
      expect(() => [1, 2, 3].find("not a fn")).to.throw(TypeError, "undefined is not a function")
      expect(() => [1, 2, 3].find(null)).to.throw(TypeError, "undefined is not a function")
      expect(() => [1, 2, 3].find({})).to.throw(TypeError, "undefined is not a function")
    })

    it("should update the value of this", function() {
      const arr = [1,2,3]
      const context = { multi: 2}
      const result = arr.find(function(x) {
        return x * this.multi === 6
      }, context)

      expect(result).to.equal(3)
    })

  })

  describe('#findIndex()', function() {
    it('should return the index of the first object for which the passed function returns true', function() {
      expect([50, 100, 150].findIndex(function(item) { return item === 100 })).to.equal(1)
    })

    it('should return -1 if the function never returns true', function() {
      expect([1,2,3].findIndex(function(item) { return false })).to.equal(-1)
    })

    it("should return a TypeError: cannot read properties of null (reading 'find')", function () {
      expect(() => {
        Array.prototype.find.call(null, x => true)
      }).to.throw(TypeError, "Cannot read properties of null (reading 'find')")
    })

    it("should return a  TypeError: undefined is not a function", function () {
      expect(() => [1, 2, 3].find()).to.throw(TypeError, "undefined is not a function")
      expect(() => [1, 2, 3].find("not a fn")).to.throw(TypeError, "undefined is not a function")
      expect(() => [1, 2, 3].find(null)).to.throw(TypeError, "undefined is not a function")
      expect(() => [1, 2, 3].find({})).to.throw(TypeError, "undefined is not a function")
    })
  })

  describe('#includes()', function() {
    it('should return true if the array includes the given value', function() {
      expect([1,2,3].includes(1)).to.equal(true)
    })

    it('should return false if the array does not include the given value', function() {
      expect([1,2,3].includes(100)).to.equal(false)
    })

    it("should return a TypeError: cannot read properties of null (reading 'find')", function () {
      expect(() => {
        Array.prototype.find.call(null, x => true)
      }).to.throw(TypeError, "Cannot read properties of null (reading 'find')")
    })

  })
})

describe('String', function () {
  describe('#endsWith()', function () {
    it('should return true if the string ends with the given string', function () {
      expect("foo".endsWith("oo")).to.equal(true)
    })

    it('should return false if the string does not end with the given string', function () {
      expect("foo".endsWith("bar")).to.equal(false)
    })

    it('should return false if given a number', function () {
      expect("foo".endsWith(1)).to.equal(false)
    })

    it('should return false if given a object', function () {
      expect("foo".endsWith({})).to.equal(false)
    })

    it('should return true if given an array', function () {
      expect("foo".endsWith([])).to.equal(true)
    })

    it('should throw a TypeError if given regex', function () {
      expect(() => {
        "foo".endsWith(/([A-Z])\w+/g)
      }).to.throw(TypeError, "Invalid type: first can't be a Regular Expression")
    })

    context('with a position argument', function () {
      it('returns true if the postion argument lines up with the search string', function () {
        expect("foobar".endsWith("oo", 3)).to.equal(true)
      })

      it('returns false if the position argument does not line up with the search string', function () {
        expect("foobar".endsWith("ar", 3)).to.equal(false)
      })
    })
  })
})

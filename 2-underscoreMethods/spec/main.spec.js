describe('first', function () {
  it('is a function', function () {
    expect(first).to.be.a('function');
  });
  it('should return 1 for first( [1,2,3], 1 ) *NOTE: it should\'t return an array, just the first element', function () {
    expect(first([1,2,3], 1)).to.equal(1);
  });
  it('should return [4, 5] for first( [4,5,6], 2 )', function () {
    expect(first([4,5,6], 2)).to.eql([4,5]);
  });
  it('should return [7, 8, 9] for first( [7, 8, 9], 3 )', function () {
    expect(first([7, 8, 9], 3)).to.eql([7, 8, 9]);
  });
  describe('bonus: it should return the first element if the second argument is not provided', function () {
    it('should return "hello" for first( ["hello", "fellow", "coder"] )', function () {
      expect(first(["hello", "fellow", "coder"])).to.eql("hello")
    });
  });
});

describe('rest', function () {
  it('is a function', function () {
    expect(rest).to.be.a('function');
  });
  it('should return [4, 3, 2, 1] for rest([5, 4, 3, 2, 1], 1)', function () {
    expect(rest([5,4,3,2,1], 1)).to.eql([4,3,2,1]);
  });
  it('should return [3, 2, 1] for rest([5, 4, 3, 2, 1], 2)', function () {
    expect(rest([5,4,3,2,1], 2)).to.eql([3,2,1]);
  });
  it('should return [2, 1] for rest([5, 4, 3, 2, 1], 3)', function () {
    expect(rest([5,4,3,2,1], 3)).to.eql([2,1]);
  });
  describe('bonus: it should return everything but the first element if the second arbument is not provided', function () {
    it('should return ["fellow", "coder"] for rest( ["hello", "fellow", "coder"] )', function () {
      expect(rest(["hello", "fellow", "coder"])).to.eql(["fellow", "coder"]);
    });
  });
});

describe('contains', function () {
  it('is a function', function () {
    expect(contains).to.be.a('function');
  });
  it('should return true for contains([1,2,3], 3)', function () {
    expect(contains([1,2,3], 3)).to.equal(true);
  });
  it('should return false for contains([4,5,6], 7)', function () {
    expect(contains([4,5,6], 7)).to.equal(false);
  });
  describe('bonus: it should start searching at the index provided as the third argument', function () {
    it('should return false for contains([1,2,3], 1, 1) (because it starts searching from index 1)', function () {
      expect(contains([1,2,3], 1, 1)).to.equal(false);
    });
    it('should return true for contains([1,2,3,1], 1, 2)', function () {
      expect(contains([1,2,3, 1], 1, 2)).to.equal(true);
    });
  });
});

describe('compact', function () {
  it('is a function', function () {
    expect(compact).to.be.a('function');
  });
  it('should return [] for compact([false, 0, \'\', undefined, null])', function () {
    expect(compact([false, 0, '', undefined, null])).to.eql([]);
  });
  it('should return [1, 2, 3] for compact([0, 1, false, 2, \'\', 3])', function () {
    expect(compact([0, 1, false, 2, '', 3])).to.eql([1,2,3]);
  });

});

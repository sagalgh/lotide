const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("if array is even, should return two values. Return 3, 4 for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
});
  it("if array is even, should return two values. Return 3, 4 for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6,7]), [4]);
  })

});



//const assertArraysEqual = require('../assertArraysEqual');
//const array1= [1, 2, 3, 4,5,6,7,8,9, 101, 42];
//const array2= [1, 2, 3, 4, 5, 6];

//const middleNum= middle([1, 2, 3, 4, 5, 6])
//console.log(assertArraysEqual(middleNum, [3,4]))

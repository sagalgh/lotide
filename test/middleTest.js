const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const array1= [1, 2, 3, 4,5,6,7,8,9, 101, 42];
const array2= [1, 2, 3, 4, 5, 6];

const middleNum= middle([1, 2, 3, 4, 5, 6])
console.log(assertArraysEqual(middleNum, [3,4]))
  
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true))
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5, 6]), true))
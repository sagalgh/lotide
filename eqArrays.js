

// TEST CODE
//console.log(assertEqual(1, 1));

/* Implement a function eqArrays which takes in two arrays 
and returns true or false, based on a perfect match. */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
    return false;
    }
  }
  return true
}
module.exports = eqArrays;


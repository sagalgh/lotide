const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};

// TEST CODE
console.log(assertEqual([1, 2, 3], [1, 2, 3]));
//console.log(assertEqual(1, 1));

/* Implement a function eqArrays which takes in two arrays 
and returns true or false, based on a perfect match. */
const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("fail")
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] == arr2[i]) {
      console.log("pass")
    }
  }
  return true
}



console.log(eqArrays([1, 2], [1, 2, 3]))
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS
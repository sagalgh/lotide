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
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};

const assertArraysEqual = function (arr1, arr2){
  const result = eqArrays(arr1,arr2)
  if (result){
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
  console.log (`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  }
  assertArraysEqual([1,2,3], [1,2,3,4])
  
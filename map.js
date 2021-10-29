//Our map function will take in two arguments:
//1. An array to map
//2. A callback function
//The map function will return a new array based on the results of the callback function.
//Add a collection of words to your empty map.js file:
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}
const firstLetterofWord = word => word[0]
const results1 = map(words,firstLetterofWord);
console.log(results1);

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
const assertArraysEqual = function (arr1, arr2){
  const result = eqArrays(arr1,arr2)
  if (result){
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
  console.log (`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
  }
  assertArraysEqual((results1), ["g", "c", "t", "m", "t"])
  
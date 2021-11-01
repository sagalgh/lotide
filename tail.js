const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};
const tail = function(words) {
  let newArr = words.slice(1, words.length);
  //console.log(newArr);
  return newArr;
  console.log(newArr)
};

module.exports = tail;
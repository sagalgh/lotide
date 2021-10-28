const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};

// TEST CODE
//console.log(assertEqual("Shoes", "Pants"));
//console.log(assertEqual(1, 1));

const countLetters = function (sentence) {
  const countingNum = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i]
    if (countingNum[letter]) {
      countingNum[letter] += 1
    }
    else {
      countingNum[letter] = 1
    }
  }
  return countingNum
}

console.log(countLetters('LHL'))
const result = countLetters("LHL")
console.log(assertEqual(result["L"], 2))
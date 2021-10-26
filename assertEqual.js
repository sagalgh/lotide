const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `🔴🔴🔴 Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `✅✅✅ Assertion Failed: ${actual} !== ${expected} `;
  }
};

// TEST CODE
console.log(assertEqual("Shoes", "Pants"));
console.log(assertEqual(1, 1));
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



const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let prop in object1) {
    if (Array.isArray(object1[prop]) && Array.isArray(object2[prop])) {
      return eqArrays(object1[prop], object2[prop]);
    }
    if (object1[prop] !== object2[prop]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect
  if (eqObjects(actual,expected)){
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  else {
    console.log (`🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(assertObjectsEqual(ab, ba)); // => true
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertObjectsEqual(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, cd2)); // => false
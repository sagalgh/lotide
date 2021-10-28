const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅  Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected} `;
  }
};
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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
  

/*const movie1 = {
  movie: "Parasite",
  genre: "horror",
  year: "2020"
}

const movie2 = {
  movie: "Parasite",
  genre: "horror",
  year: "2021"
}
console.log(eqObjects(movie1, movie2))*/

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
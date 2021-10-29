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
  const inspect = require('util').inspect;

};

console.log(`Example label: ${inspect(actual)}`);
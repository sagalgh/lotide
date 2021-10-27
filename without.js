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
const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
    console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}
//assertArraysEqual([1, 2, 3], [1, 2, 3, 4])

const without = function (source, itemsToRemove){
  const newArray = [];
  for (let i=0; i < source.length; i++){
    if (!itemsToRemove.includes(source[i])){
      newArray.push(source[i])
    } 
  }
  return newArray
  }
  
  console.log(without([1, 2, 3], [1,2])) // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

 
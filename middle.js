const assertArraysEqual = function (arr1, arr2){
  const result = eqArrays(arr1,arr2)
  if (result){
    console.log(`✅✅✅  Assertion Passed: ${arr1} === ${arr2}`);
  }
  else {
  console.log (`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

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
const middle = function (arr){
  let newArray = [];
  let middleNumIndex =0;
  let secondMiddleIndex = 0; 
    if(arr.length % 2 !== 0) {
    //Since you need to access the middle index,  
     middleNumIndex = (arr.length-1)/2
     newArray.push(arr[middleNumIndex])
    }
    else{
     middleNumIndex = (Math.floor((arr.length)/2))- 1
     secondMiddleIndex = (Math.floor((arr.length)/2)) 
     newArray.push(arr[middleNumIndex])
     newArray.push(arr[secondMiddleIndex])
    }
  return newArray
}

console.log(middle([1, 2, 3, 4,5,6,7,8,9, 101, 42])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]))// => [3, 4]












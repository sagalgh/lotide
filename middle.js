const assertArraysEqual = require('./assertArraysEqual');

const middle = function (arr){
  let newArray = [];
  let middleNumIndex =0;
  let secondMiddleIndex = 0; 
    if(arr.length % 2 !== 0) {
    //Since you need to access the middle inde˜x,  
     middleNumIndex = (arr.length-1)/2
     newArray.push(arr[middleNumIndex])
    }
    else{
     middleNumIndex = (arr.length)/2- 1
     secondMiddleIndex = (arr.length)/2
     newArray.push(arr[middleNumIndex])
     newArray.push(arr[secondMiddleIndex])
    }
  return newArray
}

module.exports = middle;











const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("it should return every element except the head(first element) of the array", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [2,3,4,5,6]);
});
 
});








//const assertEqual = require('../assertEqual')
//const words = ["Yo Yo", "Lighthouse", "Labs"];
//console.log(assertEqual(tail(words), 3));


const tail = require('../tail');
const assertEqual = require('../assertEqual')
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(assertEqual(tail(words), 3));


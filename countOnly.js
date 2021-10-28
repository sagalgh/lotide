// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// const countOnly = function (allItems, itemsToCount) {
//   let truthyValues = [];
//   let countNum =0;
//   const final= {};
//   for (let prop in itemsToCount) {
//     if (itemsToCount[prop] === true) {
//       truthyValues.push(prop)
//       final[prop]=0
//     }
//   }
//   for (let i=0; i < allItems.length; i++){
//     for (let j=0; j<truthyValues.length; j++){
//       if(allItems[i] === truthyValues[j]){
//         final[truthyValues[j]] += 1;
//       }
//     }
//   }
//   return final
// }
//const final = {"Jason": 0, "Karima": 0}
//final[name] = final[name] + 1

//object = {name: value:}
// for (let i=0; i < allItems.length, i++) {}
//if(allItems[i] === truthyValues[i])
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

//1) create the key in the object
//2) add the number of times it occurs 



const countOnly = function(allItems, itemsToCount) {
  let result =  {}

  for (let name of allItems){
    if(itemsToCount[name]){ 
     if(result[name]){ 
       result[name] = result[name] + 1
     }
     else {
      result[name] = 1
     }
    }
  }
  return result
}


const x =  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }

console.log(countOnly(firstNames,x))

//{"Jason":1, "Fang":2,}


  //Return: an object containing counts 
  //of everything that the input object listed
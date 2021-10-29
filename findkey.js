//Implement the function findKey which takes in an object and a callback. 
//It should scan the object and return the first key for 
//which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = function(namesList, callBack){
  for(let name in namesList){
    if(callBack(namesList[name])){
    return name
}
  }
  return "We couldn't find value"
}
namesList = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}
//namesList.name.stars
//name.stars

//const values= Object.values(object)
findKey(namesList, x => x["stars"] === 2) // => "noma"
//console.log(object["Blue Hill"]["stars"])
console.log(findKey(namesList,x => x["stars"] === 2 ))

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. 
//If no key is found, then it should return undefined.
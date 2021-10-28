const letterPositions = function(sentence) {
  const results = {};
for (let i= 0; i<sentence.length; i++){
  letter=sentence[i]
  if(results[letter]){
    results[letter].push(i)
  }
  else {
    results[letter]= [i];
  }
}
  return results;
};
console.log(letterPositions("Hello"))


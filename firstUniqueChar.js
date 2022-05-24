//PROBLEM
//function takes a string of lowercase english letters and returns the index of the first unique character.
//if there are no unique characters then return -1

//EDGE CASES
//what if the string is empty?
//what if there are invalid characters input?

//EXAMPLES
//firstNonRepeatingCharacter("abcddeefga") => 1
//firstNonRepeatingCharacter("RJTqqa3COgh") => 5
//firstNonRepeatingCharacter("") => -1
//firstNonRepeatingCharacter("aabbccdd") => -1

//iterate over the string
//use an object to keep track of characters by making the letters the keys and the frequency is the value
// once the object is built, check to see which characters only appear once
//iterate over the string one more time and return the indice you find the first unique character at

//O(n) time or O(n+m) most likely but lets see

//PROBLEM
//function takes a string of lowercase english letters and returns the index of the first unique character.
//if there are no unique characters then return -1

//EDGE CASES
//what if the string is empty?
//what if there are invalid characters input?

//EXAMPLES
//firstNonRepeatingCharacter("abcddeefga") => 1
//firstNonRepeatingCharacter("RJTqqa3COgh") => 5
//firstNonRepeatingCharacter("") => -1
//firstNonRepeatingCharacter("aabbccdd") => -1

//iterate over the string
//use an object to keep track of characters by making the letters the keys and the frequency is the value
// once the object is built, check to see which characters only appear once
//iterate over the string one more time and return the indice you find the first unique character at

//O(n) time or O(n+m) most likely but lets see

function firstNonRepeatingCharacter(string) {
  //table to keep track of frequency
  let freqTable = {};
  //iterate over string to fill out table
  for (let letter of string) {
    //either increase the value at that letter key by one or if it doesnt exist add it and assign 1 to the value
    freqTable[letter] = ++freqTable[letter] || 1;
  }

  // console.log(freqTable)
  // console.log('KEYS', Object.keys(freqTable))
  // console.log('VALUES', Object.values(freqTable))

  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (freqTable[char] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstNonRepeatingCharacter('string'));
console.log(firstNonRepeatingCharacter('abccdeffa'));
console.log(firstNonRepeatingCharacter(''));
console.log(firstNonRepeatingCharacter('aaa'));

//write a function that accepts two string arguments, and determine if the second string is an anagram of the first.
//you can assume that there will be only valid, lowercase inputs of two strings.

// function validAnagram(str1, str2) {
//   //if the strings are different lengths fail them immediatly
//   if (str1.length !== str2.length) {
//     return false;
//   }
//   //set up frequency counters and populate them
//   letlookupFrequency = {};
//   let str2Frequency = {};
//   for (let letter of str1) {
//    lookupFrequency[letter] = ++str1Frequency[letter] || 1;
//   }
//   for (let char of str2) {
//     str2Frequency[char] = ++str2Frequency[char] || 1;
//   }
//   //iterate over the frequency counters and see if they are matching
//   for(let key inlookupFrequency){
//     if (str1Frequency[key] !== str2Frequency[key]) {
//       return false;
//     }
//   }
//   return true;
// }


//same  big O but better readability
function validAnagram(str1, str2) {
  //if the strings are different lengths fail them immediatly
  if (str1.length !== str2.length) {
    return false;
  }
  //set up frequency counter and populate it
  let lookupFrequency = {};
  for (let letter of str1) {
   lookupFrequency[letter] = ++lookupFrequency[letter] || 1;
  }
  for(let char of str2){
    if (!lookupFrequency[char]) {
      return false;
    } else {
      lookupFrequency[char] = --lookupFrequency[char];
    }
  }
  return true;
}

//tests
console.log("expected true and got: ", validAnagram("zuma", "umaz"))
console.log("expected true and got: ", validAnagram("", ""))
console.log("expected true and got: ", validAnagram("aabbaa", "ababaa"))
console.log("expected false and got: ", validAnagram("zuma", "uma"))
console.log("expected false and got: ", validAnagram("money", "monie"))

var isAnagram = function(s, t) {
  if(s.length !== t.length) return false;
  let sFrequency = {}
  for(let i = 0; i < s.length; i++){
      let char = s[i];
      sFrequency[char] = sFrequency[char] ? ++sFrequency[char] : 1;
  }
 console.log(sFrequency)
  for(let j = 0; j <t.length; j++){
      let char2 = t[j];
      if(!sFrequency[char2]) return false;
      sFrequency[char2] = --sFrequency[char2]
  }
  return true
};


//time complexity => O(n)
//space complexity => O(1)

//write a function that accepts two string arguments, and determine if the second string is an anagram of the first.
//you can assume that there will be only valid, lowercase inputs of two strings.

function validAnagram(str1, str2) {
  //if the strings are different lengths fail them immediatly
  if (str1.length !== str2.length) {
    return false;
  }
  //set up frequency counters and populate them
  let str1Frequency = {};
  let str2Frequency = {};
  for (let letter of str1) {
    str1Frequency[letter] = ++str1Frequency[letter] || 1;
  }
  for (let char of str2) {
    str2Frequency[char] = ++str2Frequency[char] || 1;
  }
  //iterate over the frequency counters and see if they are matching
  for(let key in str1Frequency){
    if (str1Frequency[key] !== str2Frequency[key]) {
      return false;
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


//time complexity => O(n)
//space complexity => O(1)

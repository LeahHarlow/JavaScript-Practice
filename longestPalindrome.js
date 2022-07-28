// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

const  longestPalindrome = (s) => {
  let letterCount = {};
  let longest = 0;

  //this bit deals with all the pairs of numbers
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if(!letterCount[char]) {
      letterCount[char] = 1
    } else{
      letterCount[char]++;
      if (letterCount[char] > 1) {
        longest += 2;
        delete letterCount[char];
      }
    }
  }
  //at this point our object will just be the single letters
  const remainingLetters = Object.keys(letterCount);
  // if there are single letters, add one of them that can be at the center of the palindrome
  if (remainingLetters.length > 0) {
    longest++;
  }
  return longest;
};

console.log('expected 7 and got', longestPalindrome('abccccdd'));

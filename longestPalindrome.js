// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

const longestPalindrome = (s) => {
  if (s.length === 1) return 1;
  let letters = {};
  let longest = 0;

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter] = ++letters[letter];
      if (letters[letter] === 2) {
        longest += 2;
        delete(letters[letter])
      }
    }
  }
  let remainingLetters = Object.keys(letters);
  if(remainingLetters.length){
    longest++;
  }
  return longest;
};

console.log('expected 7 and got', longestPalindrome('abccccdd'));

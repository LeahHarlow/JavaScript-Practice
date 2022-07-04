// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;
  let letterFrequencies = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    letterFrequencies[char] = ++letterFrequencies[char] || 1;
  }
  // console.log(letterFrequencies);
  for (let j = 0; j < t.length; j++) {
    let anagramChar = t[j];
    if (letterFrequencies[anagramChar]) {
      letterFrequencies[anagramChar]--;
    } else {
      return false;
    }
  }
  return true;
};

console.log('expected true and got:', isAnagram('hello', 'olleh'));
console.log('expected false and got:', isAnagram('helloo', 'olleh'));
console.log('expected true and got:', isAnagram('shopify', 'yipfosh'));

// Runtime: 138 ms, faster than 32.09% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42.4 MB, less than 93.05% of JavaScript online submissions for Valid Anagram.

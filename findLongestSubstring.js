//write a function called findLongestSubstring that accepts a string and returns the length of the longest substring with all distinct characters. Assume only lowercase letters will be input without spaces

//psuedocode:
//need to track the longest length
// need to track what we've seen already
//iterate over str
//if weve already seen the character
//update the starting point to the index of the character already seen
//set longest var to i - start+1 to include the current index in count ---
//then store the index of the seen character to not double count
//then return longest var

const findLongestSubstring = (str) => {
  if (!str.length) return null;
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(seen[char], start);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
};
//tests
console.log('expected 3 and got:', findLongestSubstring('hello')); //hel
console.log('expected 6 and got:', findLongestSubstring('abcdef'));
console.log('expected 1 and got:', findLongestSubstring('xxxxxxx'));
console.log('expected null and got:', findLongestSubstring(''));

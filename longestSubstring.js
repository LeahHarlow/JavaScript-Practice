const lengthOfLongestSubstring = function (s) {
  let longestStr = '';
  let currStr = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (!currStr.includes(char)) {
      currStr += char;
      console.log(currStr);
    }
    if (currStr.includes(char)) {
      longestStr = Math.max(longestStr.length, currStr.length);
      currStr = char;
    }
  }
  return Math.max(longestStr.length, currStr.length);
};

console.log('expected 3 and got :', lengthOfLongestSubstring(
  "abcabcbb"))

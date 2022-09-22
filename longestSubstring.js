// const lengthOfLongestSubstring = function (s) {
//   //define longest and current to compare
//   let longestStr = '';
//   let currStr = '';

//   //iterate over the entire string once checking each character
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];

//     //if the current character is not already in the string add it to the current string and keep checking.
//     if (!currStr.includes(char)) {
//       currStr += char;
//       //console.log('CURRSTR', currStr);
//     }
//     //if we find char to be in the current string already, save the longest string to longestStr, and reset the current string to be the current char then continue;
//     else {
//       longestStr = longestStr.length >= currStr.length ? longestStr : currStr;
//       //console.log('LONGESTSTR', longestStr);
//       let cut = currStr.indexOf(char)
//       currStr = currStr.slice(cut);
//     }
//   }
//   // once weve run through the whole string return the longet between longest and current
//   return Math.max(longestStr.length, currStr.length);
// };

const lengthOfLongestSubstring = function (s) {
  let longestLength = 0
  let window = [];
  for(let i = 0; i < s.length; i++){
    let char = s[i];
    if(!window.includes(char)){
      window.push(char);
    } else {
      window.unshift()
      // good start but this doesnt work either if the repeat char isnt the first one in window
    }
  }
  return Math.max(longestLength, window.length)
}

console.log('expected 3 and got :', lengthOfLongestSubstring('abcabcbb'));
console.log('expected 1 and got :', lengthOfLongestSubstring(' '));
console.log('expected 2 and got :', lengthOfLongestSubstring('au'));
console.log('expected 3  and got :', lengthOfLongestSubstring('dvdf'));

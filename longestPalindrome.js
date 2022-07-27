// Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.
// Example 1:
// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.


// var longestPalindrome = function(s) {
//     let longestLength = 0;
//     if(s.length === 1) return 1;
//     let dict = {};

//     for(let i = 0; i < s.length; i++){
//         let char = s[i];
//         dict[char] =  dict[char] ? ++dict[char] : 1;
//     }

//     if(Object.keys(dict).length === 2){
//         for(let key in dict){
//         if(Object.keys(dict).length === 1){
//         return dict[key];
//     }
//         if(dict[key] % 2 === 0){
//             longestLength += dict[key];
//         }
//         if((dict[key]-1) % 2 === 0){
//             longestLength += (dict[key]-1);
//         }
//     }
//     }

//     for(let key in dict){
//         if(dict[key] === 1){
//             longestLength += 1;
//             break;
//         }
//     }
//     return longestLength;
// };

// const longestPalindrome = function(string) {
//   const unpairedChars = new Set();
//   let palindromeCharCount = 0;

//   for (let char of string) {
//       if (unpairedChars.has(char)) {
//           palindromeCharCount += 2
//           unpairedChars.delete(char);
//       } else {
//           unpairedChars.add(char);
//       }
//   }

//   return palindromeCharCount + unpairedChars.size >= 1 ? 1 : 0;
// };

var longestPalindrome = function(s) {
  let letterCount = {}
  let total=0;
  for(let i=0; i<s.length; i++){
      if(!letterCount[s[i]]){
          letterCount[s[i]] = 1;
      } else {
          letterCount[s[i]]++;
          if(letterCount[s[i]] > 1) {
              total += 2;
              delete letterCount[s[i]];
          }
      }
  }

  const remainingLetters = Object.keys(letterCount);
  if(remainingLetters.length > 0){
      total++;
  }
  return total;
};

console.log("expected 7 and got", longestPalindrome("abccccdd"))

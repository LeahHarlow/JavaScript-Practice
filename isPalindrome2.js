var isPalindrome = function(s) {
  s = s.replace(/[^0-9A-Z]+/gi,"").toLowerCase();
  let reversed = s.split('').reverse().join('');
  if(s === reversed) return true;
  return false
};

console.log('Expected true and got:', isPalindrome('racecar'));
console.log('Expected true and got:',isPalindrome("A man, a plan, a canal: Panama"));
console.log('Expected true and got:',isPalindrome(""));
console.log('Expected false and got:',isPalindrome('hey there'));
console.log('Expected true and got:',isPalindrome('abba:::abba'));

// Runtime: 74 ms, faster than 94.40% of JavaScript online submissions for Valid Palindrome.
// Memory Usage: 46.3 MB, less than 46.12% of JavaScript online submissions for Valid Palindrome.

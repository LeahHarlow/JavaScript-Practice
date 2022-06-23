//write a recursive function that takes a string as an argument and returns true if that string is a palindrome and false if not. use Recursion.

// if the string reversed === the string inputted then return true

const isPalindrome = (str) => {
  let reversedStr = '';

  const helper = (subStr) => {
    if (!subStr.length) return subStr;
    else {
      reversedStr += subStr[subStr.length - 1];
      helper(subStr.slice(0, -1));
    }
  };

  helper(str);

  if (reversedStr === str) return true;
  return false;
};

//tests
console.log('expected true and got:', isPalindrome('racecar'));
console.log('expected true and got:', isPalindrome('hannah'));
console.log('expected false and got:', isPalindrome('racecars'));
console.log('expected false and got:', isPalindrome('banana'));

var isPalindrome = function(s) {
  s = s.replace(/[^0-9A-Z]+/gi,"");
  let half = Math.floor(s.length/2)
  let firstHalf = s.slice(0,half)
  console.log(firstHalf)
  let secondHalf = s.slice(half);
  console.log(secondHalf)
  if(firstHalf === secondHalf.split('').reverse().join('')) return true;
  return false;
};

console.log(isPalindrome('racecar'));
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome(""))

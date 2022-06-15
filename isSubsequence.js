// Write a function called isSubsequence that takes in two strings as arguements and and checks whether the characters in the first string form a subsequence of the characters in the second string.
//Basically, the function should check  to see if the first strings characters appear somewhere in the second string without their order changing.
//assume always lowercase letters

// the idea is to have two pointers.
// pointer i will iterate through str1, if it hits the end return true
// pointer j will iterate through str2;
// while i !== the end of str1, check to see if it equals string2[j];
//if it does increase each pointer
// if not equal increase just j
//if we cant get all the way through str1 return false;

const isSubsequence = (str1, str2) => {
  let i = 0;
  let j = 0;
  while(i !== str1.length){
    if(str1[i] === str2[j]){
      i++;
      j++;
    } else if(str1[i] !== str2[j]){
      j++;
    } else{
      return false
    }
  }
  return true;
}

//tests
console.log('expected true and got:', isSubsequence('abc', 'abacaba'))
console.log('expected false and got:', isSubsequence('abc', 'bca'))
console.log('expected true and got:', isSubsequence('hey', 'oh hey'))
console.log('expected false and got:', isSubsequence('string', 'sting'))

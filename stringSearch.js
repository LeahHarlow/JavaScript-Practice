//write a function that accepts a string and a substring that we're searching for.

//psuedocode:
//define count
//loop over longer string
//loop over the shorter string
//if the characters dont match, break out of the inner loop
// If the characters do match keep going
//if you complete the inner loop of the substring increment count
//return the count

const naiveSearch = (string, substring) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < substring.length; j++) {
      if (string[i + j] !== substring[j]) break;
      if (j === substring.length - 1) count++; //very important check here
    }
  }
  return count;
};

//wowowzzbwo
//wow

console.log('expected 1 and got:', naiveSearch('lolsiepop', 'pop'));
console.log('expected 0 and got:', naiveSearch('lolsieoop', 'pop'));
console.log('expected 3 and got:', naiveSearch('lolsiepopopop', 'pop'));

//nested for loop though gives us quadradic time. O(n )

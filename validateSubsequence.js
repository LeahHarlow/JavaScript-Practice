//iterate over array and look for the first element in the sequence.
//If you find it, look for the next element in the sequence. continue until the end of the array.
//once done with the array, check to see if you reached the end of hte sequence, if you did, return true else return false.

//edge cases: number is repeated
//sequence is out of order in array

function isValidSubsequence(array, sequence) {
  let seqIdx = 0;
  for (let i = 0; i < array.length; i++) {
    if (sequence[seqIdx] === array[i]) {
      seqIdx++;
    }
  }
  return seqIdx === sequence.length;
}

//testing testing
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
//true

console.log(isValidSubsequence([5, 1, 25, -1, 8, 10], [1, 6, -1, 10]));
//false


//O(n) time bc depends on the length of the input
//O(1) space bc the function needs the same number of "checkers"" regardless of input size


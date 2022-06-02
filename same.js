//write a function called same that accepts 2 arrays. same should return true if every value in the array has its corresponding value squared in the secnd array. the frequency of the values must be the same.


// ====> first way of solving, quadradic time though so not great although functioning.
// const same = (array1, array2) => {
//   if(array1.length !== array2.length){
//     return false;
//   }
//   for(let i = 0; i < array1.length; i++){
//     let char = array1[i];
//     let squared = char * char;
//     if (!array2.includes(squared)){
//       return false;
//     }
//   }
//   return true;
// }

//optimized same using frequency counter for O(n) time
const same = (array1, array2) => {
  //first rule out arrays of different lengths
  if (array1.length !== array2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};
  //populate the frequency counters
  for (let val of array1) {
    freqCounter1[val] = ++freqCounter1[val] || 1;
  }
  for (let val of array2) {
    freqCounter2[val] = ++freqCounter2[val] || 1;
  }
  //iterate over the keys in the frequency counter for the first array and
  //return false if we hit one where there is no corresponding squared value in the frequency counter for the second array
  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    //checks to make sure the frequency of the coresponding keys is even if its not return false
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
};

//test cases
console.log('expect true', same([1, 2, 3], [1, 4, 9]));
console.log('expect false', same([1, 2, 3, 3], [1, 4, 9]));
console.log('expect true', same([1, 2, 2, 3, 3], [1, 4, 4, 9, 9]));
console.log('expect true', same([], []));
console.log('expect false', same([1, 2, 2, 3], [1, 4, 9]));

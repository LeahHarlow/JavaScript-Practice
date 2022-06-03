// Given an array of integers, return the first pair that equals 0 when added together
// assume that only pos and negatiive numbers are given and the array is sorted

const zeroSum = (array) => {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

console.log('expect [-2,2]', zeroSum([-3, -2, 2, 5]));
console.log('expect [-3,3]', zeroSum([-3, -2, 2, 3, 5]));

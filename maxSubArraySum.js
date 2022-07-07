//Given an array of integers and a number, write a funtion called maxSubArraySum which finds the maximum sum of a subarray with the length of the number passed into the function.
// The subarray must consist of consecutive numbers from the original array in the length of the number arguement.

//can I assume there will only be numbers input? yes.

// I want to create a sliding window to check for consecutive sums of a variable length.
// if array.length < num return null immediatly
//start window at 0
//end window at num
//maxSum variable
// tempSum variable to keep track of those and compare them
//initially loop over integers in the first window and set that to max sum
//make it equal temp sum as well
// subtract array[start] and increase start by 1
//  add array[end +1 ]increase end by 1 as well to move window
//as long as end does not equal the array length keep checking the sum against maxSum and return it at the end

const maxSubArraySum = (array, num) => {
  if (array.length < num) {
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += array[i];
  }
  maxSum = tempSum;
  for (let j = num; j < array.length; j++) {
    tempSum = tempSum + array[j] - array[j - num];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  return maxSum;
};

//tests
// console.log('expected 15 and got:', maxSubArraySum([1, 2, 3, 4, 5, 6], 3));
// console.log('expected 330 and got:', maxSubArraySum([100, 10, 300, 30], 2));
// console.log('expected 21  and got:', maxSubArraySum([-1, 20, 2, -30, 35], 3));
// console.log('expected null and got:', maxSubArraySum([], 5));
// console.log('expected null and got:', maxSubArraySum([1, 2], 7));

//time complexity O(n+m)
//space complexity O(1)

////////////////////////////////////////////////////////////////////////////////

// Added Challenge Variation:
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.


//pseudocode
//start pointer at front
// add one and check sum until the end comparing sum to the max each time
// increase start by one and repeat until start = end of array
//return max sum

let add = (num1, num2) => {
  return num1 + num2;
}

var maxSubArray = function(nums) {
  let max = 0;
  let start = 0;
  let end = 0;
  let tempSum = 0;
  if(!nums.length) return 0;
  if(nums.length === 1) return nums[0];
  while(start < nums.length && end < nums.length){
   let count = 0;
    tempSum += nums[start] + nums[start+count];
    console.log('TEMPSUM',tempSum)
    max = Math.max(tempSum, max);
    start++;
    console.log(start)
  }
  return max;
};

console.log('expected 0 and got:', maxSubArray([]));
console.log('expected 3 and got:', maxSubArray([3]));
console.log('expected 15 and got:', maxSubArray([4, 5, 6]));

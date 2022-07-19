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

var maxSubArray = function (nums) {
  //if empty array then return 0;
 if(!nums.length) return 0;
 //if theres ony one element in the array then return that number;
 if(nums.length === 1) return nums[0];
//max keeps track of the greatest sum that we will ultimately return;
 let maxTotal = nums[0];
 //keeps track of the larger between greatest between the current sum and the addition of the new current number to it. 
 let currentSum = nums[0];

 for(let i = 1; i < nums.length; i++){
  //think first time : nums[1] or nums[0] + nums[1]
  //second time : nums[2] or whichever was greater + nums[3]
  let currentNum = nums[i];
    currentSum = Math.max(currentNum, currentSum + currentNum);
    maxTotal = Math.max(maxTotal, currentSum);
 }
 return maxTotal;
};

console.log('expected 0 and got:', maxSubArray([]));
console.log('expected 3 and got:', maxSubArray([3]));
console.log('expected 15 and got:', maxSubArray([4, 5, 6]));
console.log('expected 15 and got:', maxSubArray([-1, -4, 4, 5, 6, -3]));
console.log('expected 9 and got:', maxSubArray([-1, -4, 4,-1, 6, -3]));

//alternative:
// var maxSubArray = function(nums) {
//   if(nums.length == 0) return 0;
//     let result = -Infinity;
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum += nums[i];
//         result = sum>result ? sum : result
//         sum = sum < 0 ? 0 : sum;
//     }
//     return result;
// };

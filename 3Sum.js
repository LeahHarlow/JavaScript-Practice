// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

// Example 2:
// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

const threeSum = function (nums) {
  let triplets = [];
  if (nums.length < 3) return [];
  if (nums.length === 3) {
    if (nums[0] + nums[1] + nums[2] === 0) {
      return nums;
    } else {
      return [];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        //console.log(nums[i], nums[j])
        let needed = 0 + (nums[i] + nums[j]);
        if (
          nums.includes(needed) &&
          nums.indexOf(needed) !== i &&
          nums.indexOf(needed) !== j
        ) {
          let currentTriplet = [needed, nums[i], nums[j]];
          if (!triplets.includes(currentTriplet)) {
            triplets.push(currentTriplet);
          } else {
            continue;
          }
        }
      } else {
        continue;
      }
    }
  }
  return triplets;
};

//can sort it, pointers?
//helper?
// find all sums of two and see what we need? need to keep track of indices though, frequency counter?
// could triple loop it but that would be gnarly

//ok what if we...
//sort nums
// make two pointers at start and end
//see what 0 + their sum equals
// then check to see if that missing piece exists in the array and isnt the same index as one of them
//

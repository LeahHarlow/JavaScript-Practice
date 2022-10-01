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

// const threeSum = function (nums) {
//   let triplets = [];
//   if (nums.length < 3) return [];
//   if (nums.length === 3) {
//     if (nums[0] + nums[1] + nums[2] === 0) {
//       return nums;
//     } else {
//       return [];
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j) {
//         //console.log(nums[i], nums[j])
//         let needed = 0 + (nums[i] + nums[j]);
//         if (
//           nums.includes(needed) &&
//           nums.indexOf(needed) !== i &&
//           nums.indexOf(needed) !== j
//         ) {
//           let currentTriplet = [needed, nums[i], nums[j]];
//           if (!triplets.includes(currentTriplet)) {
//             triplets.push(currentTriplet);
//           } else {
//             continue;
//           }
//         }
//       } else {
//         continue;
//       }
//     }
//   }
//   return triplets;
// };

//can sort it, pointers?
//helper?
// find all sums of two and see what we need? need to keep track of indices though, frequency counter?
// could triple loop it but that would be gnarly

//ok what if we...
//sort nums
//while current index isnt the end and left pointer doesnt equal right pointer
//see what 0 - nums[current] is
//see if the sum of the two pointers equals that
// if its too high move right down
// if its too low move left up.
// if we find one that equals 0, add it to triplets
// otherwise continue to the end

//ok new idea:
const threeSum = function (nums) {
  //edge case if there arent 3 elements return [];
  if (nums.length < 3) return [];

  let triplets = [];
  //sort is O(NlogN) doesnt matter coz its already O(N^2)
  nums.sort((a, b) => a - b);

  let mustEqual = 0;

  //first as in first in sorted set, so if it exceeds 0 we can stop looking
  for (let first = 0; first < nums.length; first++) {
    if (nums[first] > mustEqual) break;
    // if we hit a duplicate number skip is bc we already checked.
    if (first > 0 && nums[first] === nums[first - 1]) continue;

    // second will represent the second element in the triplet,
    //we will either increase second or decrease third until they meet and
    // increase first once they do, showing weve checked everything
    let second = first + 1;

    // then set third to be the end
    let third = nums.length - 1;

    //I think this can be refactored similarly to my first try to avoid quadradic time.
    while (second < third) {
      let sum = nums[first] + nums[second] + nums[third];
      if (sum === mustEqual)
        triplets.push([nums[first], nums[second], nums[third]]);
      while (nums[second] === nums[second + 1]) second++;
      while (nums[third] === nums[third - 1]) third--;

      second++;
      third--;

      if (sum < mustEqual) {
        second++;
      } else {
        third--;
      }
    }
  }
  return triplets;
};

threeSum([-1, 2, 0, 1]);

//this might be the refactor we need
// while (current <= nums.length && left < right) {
//   let currentNum = nums[current];
//   if(currentNum + nums[left] + nums[right] === 0){
//     triplets.push([currentNum, nums[left], nums[right]])
//   } else if(currentNum + nums[left] + nums[right] > 0){
//     right--;
//   }else if(currentNum + nums[left] + nums[right] < 0){
//     left++;
//   }
//   current++;
// }

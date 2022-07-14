//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
//pseudocode:
//create map
//loop over array
//figure out what each number would need to add up to the target
//chck to see if its in the map
//if it is, return the index of the complementary number from the map and i
//if its not, add it to the map
//a the very end return an empty array if no sum can be found

const twoSum = function (nums, target) {
  let map = new Map();
  for(let i = 0; i < nums.length; i++){
    let complement = target - nums[i];
    if(map.has(complement)) return [map.get(complement), i];
    map.set(nums[i],i); ///two args, key and value
  }
  return [];
};

var twoSumPt2 = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
      let needed = target - nums[i];
      if(nums.includes(needed) && nums.indexOf(needed) !== i){
          return [i, nums.indexOf(needed)]
      }
  }
  return -1
};

console.log('Expected [0,3] and got:', twoSum([1, 2, 7, 4], 5));
console.log('Expected [] and got:', twoSum([1, 2, 7, -3], 1));
console.log('Expected [0,5] and got:', twoSum([1, 2, 7, 6, 8, 4], 5));
console.log('Expected [0,1] and got:', twoSum([3, 3], 6));

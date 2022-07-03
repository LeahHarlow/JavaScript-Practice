//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//unoptimized, have one loop over and other loop over and

const twoSum = (nums, target) => {
  var map = new Map();

  for(var i = 0; i<nums.length; i++) {
      var num = nums[i];
      if(map.get(num) === undefined) map.set(target-num, i);
      else return [map.get(num), i];
  }
  return []
};

console.log('Expected [0,3] and got:', twoSum([1, 2, 7, 4], 5));
console.log('Expected [] and got:', twoSum([1, 2, 7, -3], 1));
console.log('Expected [0,5] and got:', twoSum([1, 2, 7, 6, 8, 4], 5));
console.log('Expected [0,1] and got:', twoSum([3,3], 6));

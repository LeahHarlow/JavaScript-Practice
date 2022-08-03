// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
  let numsCount = {};
  for(let i = 0; i < nums.length; i++){
      numsCount[nums[i]] = numsCount[nums[i]] ? ++numsCount[nums[i]] : 1;
  }
  console.log(numsCount)
  for(let key in numsCount) {
      console.log(numsCount[key])
      if(numsCount[key] > 1) return true;
  }
  return false
};

console.log('expected true and got:', containsDuplicate([1,2,3,1]))
console.log('expected false and got:', containsDuplicate([1,2,3]))

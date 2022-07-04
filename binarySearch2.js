// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

const binarySearch = (nums, target) => {
  if(nums[0] === target || nums.length === 1) return 0;
  if(nums[nums.length-1] === target) return nums.length-1;
  let leftPt = 0;
  let rightPt = nums.length - 1;
  let middle = Math.floor(nums.length / 2);
  while (leftPt < rightPt && nums[middle] !== target) {
    if (target < nums[middle]) {
      rightPt = middle -1;
      middle = Math.floor(rightPt + leftPt / 2);
    }
    if (target > nums[middle]) {
      leftPt = middle + 1;
      middle = Math.floor(rightPt - leftPt / 2);
    }
  }
  return nums[middle] === target ? middle : -1
};

console.log(binarySearch([1,4,6,8,9], 9))

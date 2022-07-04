// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

const binarySearch = (nums, target) => {
  let leftPt = 0;
  let rightPt = nums.length - 1;
  while (leftPt < rightPt) {
    let middle = Math.floor(nums.length / 2);
    if (target === middle) return middle;
    if (target < middle) {
      rightPt = middle;
      middle = Math.floor(rightPt - leftPt / 2);
    }
    if (target > middle) {
      leftPt = middle;
      middle = Math.floor(rightPt - leftPt / 2);
    }
    break;
  }
  return -1
};

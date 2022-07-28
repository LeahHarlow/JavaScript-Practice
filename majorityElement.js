// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

var majorityElement = function(nums) {
  let numsCounter = {}

  for(let i = 0; i < nums.length; i++){
      let char = nums[i];
      numsCounter[char] = numsCounter[char] ? ++numsCounter[char] : 1;
  }

  //let elements = Object.keys(numsCounter);
  for(let key in numsCounter ){
      if(numsCounter[key] > nums.length/2){
          return key
      }
  }
  return false;
};

console.log("expected 3 and got:", majorityElement([1,2,3,3,3,5,9,3,3,3]))



// Runtime: 107 ms, faster than 41.51% of JavaScript online submissions for Majority Element.
// Memory Usage: 43.9 MB, less than 56.87% of JavaScript online submissions for Majority Element.

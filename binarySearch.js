// Has to be sorted.
//pick the middle, is the value we're looking for before or after that
// pick the half of that and repeat
//continue until you have it.
// this makes in logarithmic time

// write a function that takes an array of integers and a search value and returns true if it finds it and false if not

//pseudocode:
//function accepts array and value
//create a left pointer and a right pointer
// while the left pointer comes before the right pointer...
//create a pointer in the middle
// if you find the value you want return the index
//if the value is too small move the pointer up.
//if the value is too large move the right pointer down
// if you never find the value return -1

const divideAndConquer = (array, val) => {
  array.sort((a, b) => a - b);
  if(array.length === 1 || array[0] === val) return 0;
  let leftPt = 0;
  let rightPt = array.length - 1; // -1 so were not out of bounds
  let midPt = Math.floor((leftPt + rightPt) / 2);
  //ahhhhh it was missing array[] and just had midpoint
  while (array[midPt] !== val && leftPt <= rightPt) {
    if (val < array[midPt]) rightPt = midPt - 1;
    leftPt = midPt + 1; //dont just have multiple ifs
    midPt = Math.floor((leftPt + rightPt) / 2);
  }
  return array[midPt] === val ? midPt : -1;
};

console.log('expected 0 and got:', divideAndConquer([1, 2, 3, 4, 5, 6], 1));
console.log('expected 6 and got:', divideAndConquer([1, 4, 7, 5, 3, 6, 6], 7));
console.log('expected -1 and got:', divideAndConquer([1, 2, 4, 5, 6], 3));

//for binary search, worse and average case are O(log n) best case is O(1);

var search = function(nums, target) {

  let left = 0;
  let right = nums.length-1;
  let midpoint = Math.floor((left+ right)/2);

  if(target > nums[right] || target < nums[left])return -1;

  while(nums[midpoint] !== target && left <= right){
      if ( target < nums[midpoint]){
          right = midpoint-1;
          midpoint = Math.floor((left+ right)/2);
      }
      if ( target >nums[midpoint]){
          left = midpoint+1;
          midpoint = Math.floor((left+ right)/2);;
      }
  }
  return nums[midpoint] === target ? midpoint : -1;
};

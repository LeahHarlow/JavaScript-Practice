/* given an array and a target number, mutate the array in place and return the array with
all of the target numbers moved to the end of the array. The order of the array does not matter other than
the target numbers all being moved to the end */

function moveElementToEnd(array, numToMove) {
  let startPt = 0;
  let endPt = array.length - 1;
  while (startPt < endPt) {
    while (startPt < endPt && array[endPt] === numToMove) endPt--; //if the number we want at the end is already there, move the end pointer to the left rather than switching the number out unessisarily.
    if (array[startPt] === numToMove) moveIt(startPt, endPt, array);
    //if we encounter the number we want to move before the end of the array we want to switch it out with the array at endPt since we already checked to make sure its not the number we want at the end with the while loop on line 9.
    startPt++;// after switching, increase the startPt to check the next number in the array.
  }
  return array;
}

function moveIt(startPt, endPt, array) {//made this a helper function rather than convolute the code above. 
  let temp = array[endPt];
  array[endPt] = array[startPt];
  array[startPt] = temp;
}

console.log(moveElementToEnd([2, 1, 3, 5, 2], 2)); // expect [1,3,5,2,2]
console.log(moveElementToEnd([], 2)); //expect []
console.log(moveElementToEnd([2, -5, 3, 5, 22, 10], -5)); //expect [2,3,5,22,10,-5]
console.log(moveElementToEnd([2, 2, 2, 2, 2, 2], 2)); //expect [2,2,2,2,2,2]

/* time complexity is O(n) because the pointers move inward in the nested while loop
space complexity is O(1) */

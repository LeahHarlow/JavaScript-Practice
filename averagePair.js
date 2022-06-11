//write a function called averagePair, that given a sorted array of integers and a target average will determine if theres is a pair of values in the array thats average equals the target value. there may be more than one pair that averages the value, simply return true or false;

const averagePair = (array, target) => {
  //place pointers at both ends;
  let start = 0;
  let end = array.length-1;
  //edge case for if array is empty;
  if (array.length === 0) return false;
  //otherwise check all the pairs and compare to target
  while (start !== end) {
    let average = (array[start] + array[end]) / 2;
    if (average === target) {
      return true;
    }
    else if(average > target) {
      end--;
    }
    else if(average < target) {
      start++;
    }
  }
  return false;
};

//tests
console.log('expected true and got:', averagePair([1, 2, 3, 5], 4));
console.log('expected false and got:', averagePair([1, 2, 3, 5], 12));
console.log('expected true and got:', averagePair([-3, 1, 9, 5], 3));
console.log('expected true and got:', averagePair([1, 2, 3, 5], 2.5));
console.log('expected false and got:', averagePair([], 3));

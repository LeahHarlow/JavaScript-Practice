//given an array of positive integers and a positive integer. This function should return the minimal length of contiguous subarray values that that are equal to or greater than the integer passed in. If there isnt one return null.

//psuedocode it out:
//if array.length = 0 return null.
//sum variable to compare to number.
//remember that they need to be contiguous. and need to return length.
//start with window length of 1 and run through the array, if you dont find it add 1 to window length and sum
//indices of window and ccompare to num
// if the window length is as long as the array and it still doesnt add to num return nulllll.
//this leads to a terrible time complexity.

const minSubArrayLength = (array, num) => {
  //if the array is empty return null;
  if (!array.length) return null;
  //sum will be the total of the elements within the window
  let sum = 0;
  //start is the first indice of the window
  let start = 0;
  //end is the last indice of the window
  let end = 0;
  //set the minimum length to infinity bc when we compare the minimum length we want it to be as dynamic and scalable as possible.
  let minLength = Infinity;

  //as long as start isnt the end of the array
  while (start < array.length) {
    //if sum < the target number and end isnt at the end of the array, add array[end] to the sum and increase ends indice value by one to its movign toward the end of the array.
    if (sum < num && end < array.length) {
      //add end to the sum, which a the start is array[0] remember;
      sum += array[end];
      //then move end up one which expands the window by 1 indice.
      end++;
      //if the sum is greater than or equal to the target num
    } else if (sum >= num) {
      //if we found one that passes, set the min length by subtracting the end from the start to give the length
      minLength = Math.min(minLength, end - start);
      //subtract that number from the sum though to see if any others pass the test.
      sum -= array[start];
      //increase start by one to make window smaller again
      start++;
      //include a break so that we avoid an infinite loop in the case that were at the end of the array but less than the target value
    } else {
      break;
    }
  }
  //if we never found a min length return null otherwise return the minLength
  return minLength === Infinity ? null : minLength;
};

//tests
console.log('expected 2 and got:', minSubArrayLength([1, 2, 3, 5], 7)); //bc [3,5]
console.log('expected 4 and got:', minSubArrayLength([1, 1, 1, 1], 4)); //bc need all of them
console.log('expected null and got:', minSubArrayLength([1, 2], 13)); //no worky
console.log('expected 1 and got:', minSubArrayLength([15, 1, 10, 5], 11)); //bc [15] > 11


//time O(n)


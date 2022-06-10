// write a function that accepts an array and a number and finds the largest possible sum from a subarray of consecutive numbers with the length of the number argument.
const maxSubArraySum = (array, num) => {
  //maxSum will be returned at the end
  let maxSum = 0;
  //tempSum will be compared to maxSum
  let tempSum = 0;

  //edge case for if the array is less than the number of digits were supposed to sum.
  if (array.length < num) return null;

  //add up the first sum by looping over the length of num from the beginning of the array and adding each val to maxSum
  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }

  //set the tempSum to the maxSum so that we have something to do math with. Can also think of them starting out the same because we only have the one sum so far.
  tempSum = maxSum;

  //loop over the array starting where the first sum ended.
  for (let i = num; i < array.length; i++) {
    //this is the sliding window bit. were moving the window over 1 index so, since were starting our for loop at num, we want to remove the first index of that and add the digit at i.
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log('expected: 7 , got: ', maxSubArraySum([1, 2, 3, 4], 2));
console.log('expected: 15 , got: ', maxSubArraySum([1, 10, -3, 8], 3));

// write a function that accepts an array and a number and finds the largest possible sum from an subarray of consecutive numbers with the length of the number argument.

const slide = (array, number) => {
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < number; i++) {
    tempSum += array[i];
  }
  maxSum = tempSum;
  for (let i = number; i < array.length; i++) {
    tempSum = tempSum + array[i] - array[i - number];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

console.log('expected: 7 , got: ', slide([1, 2, 3, 4], 2));
console.log('expected: 15 , got: ', slide([1, 10, -3, 8], 3));

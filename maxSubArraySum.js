//Given an array of integers and a number, write a funtion called maxSubArraySum which finds the maximum sum of a subarray with the length of the number passed into the function.
// The subarray must consist of consecutive numbers from the original array in the length of the number arguement.

//can I assume there will only be numbers input? yes.

// I want to create a sliding window to check for consecutive sums of a variable length.
// if array.length < num return null immediatly
//start window at 0
//end window at num
//maxSum variable
// tempSum variable to keep track of those and compare them
//initially loop over integers in the first window and set that to max sum
//make it equal temp sum as well
// subtract array[start] and increase start by 1
//  add array[end +1 ]increase end by 1 as well to move window
//as long as end does not equal the array length keep checking the sum against maxSum and return it at the end

const maxSubArraySum = (array, num) => {
  if(array.length < num){
    return null;
  }
  let tempSum = 0;
  let maxSum = 0;
  for( let i = 0; i < num; i++){
    tempSum += array[i];
  }
  maxSum = tempSum;
  for(let j = num; j < array.length; j++){
   tempSum = tempSum + array[j] - array[j - num];
    if(tempSum > maxSum){
      maxSum = tempSum;
    }
  }
  return maxSum;
}

//   i
//[1,2,3,4,5]
//       j

//tests
console.log('expected 15 and got:', maxSubArraySum([1,2,3,4,5,6], 3));
console.log('expected 330 and got:', maxSubArraySum([100, 10, 300, 30], 2))
console.log('expected 21  and got:', maxSubArraySum([-1, 20, 2, -30, 35], 3))
console.log('expected null and got:', maxSubArraySum([], 5))
console.log('expected null and got:', maxSubArraySum([1,2], 7))

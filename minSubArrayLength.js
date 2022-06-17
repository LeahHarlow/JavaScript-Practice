//given an array of positive integers and a positive integer. This function should return the minimal length of contiguous subarray values that that are equal to or greater than the integer passed in. If there isnt one return null.

//psuedocode it out:
//if array.length = 0 return null.
//sum variable to compare to number.
//remember that they need to be contiguous. and need to return length.
//start with window length of 1 and run through the array, if you dont find it add 1 to window length and sum
//indices of window and ccompare to num
// if the window length is as long as the array and it still doesnt add to num return nulllll.

const minSubArrayLength = (array, num) => {
  if(!array.length) return null;
  let windowLength = 0;
  for(let i = 0; i < array.length; i++){
    let window = array[i] + windowLength;
    let windowSum = sumItUp(window);
    if(windowSum >= num){
      return window.length;
    }
    if(windowSum < num){
      windowLength++
    }
  }
}

const sumItUp = (array) => {
  let sum = 0;
  array.forEach(element => { sum += element
  });
  return sum;
}


//tests
console.log('expected 2 and got:', minSubArrayLength([1,2,3,5], 7))//bc [3,5]
console.log('expected 4 and got:', minSubArrayLength([1,1,1,1], 4))//bc need all of them
console.log('expected null and got:', minSubArrayLength([1,2], 13))//no worky
console.log('expected 1 and got:', minSubArrayLength([15,1,10,5], 11))//bc [15] > 11

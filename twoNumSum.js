//When you pass the function (a, b) => a - b, you’re telling the .sort() function to sort the numbers in ascending order.

//first sort the given array use (array.sort((a, b) => a - b)) for numbers
  //define left pointer as smallest number
  //define right pointer as largest number
  //while we havent run through all of them
  //add left pointer to right pointer and check it against the target num
  //if it hits the target num return it in an array
  //if its less than the target number increase the left pointer to the next biggest
  //if its greater than the target number decrease the right pointer by one element
  //keep running the while loop to check all of these
  //outside the while loop in none of the numbers work return an empty array
const twoNumSum = (array, targetSum) => {
  array.sort((a,b)=> a-b);
  let leftPt = 0;
  let rightPt = array.length-1;
  while(leftPt < rightPt){
    let currentSum = array[leftPt] + array[rightPt];
    if(currentSum === targetSum){
      return [array[leftPt], array[rightPt]];
    }
    else if(currentSum < targetSum){
      leftPt++;
    }
    else if(currentSum > targetSum){
      rightPt--;
    }
  }
  return []
};

console.log(twoNumSum([1,5,8,3,2], 10));

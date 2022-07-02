//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//unoptimized, have one loop over and other loop over and

const twoSum = (array, target) => {
  let indexObj = {}
    for(let i = 0; i < array.length; i++){
        indexObj[array[i]] = i;
    }
  let sortedArr = array.sort((a,b) => a -b);
    let leftPt = 0;
    let rightPt = sortedArr.length-1;
    while (leftPt < rightPt){
        let sum = sortedArr[leftPt] + sortedArr[rightPt];
        if(sum === target) {
            let num1 = sortedArr[leftPt];
            let num2 = sortedArr[rightPt]
            return [indexObj[num1], indexObj[num2]]
        }
        if(sum < target){
            ++leftPt;
        }
        if(sum > target){
            --rightPt;
        }
    }
    return []
};

console.log('Expected [0,3] and got:', twoSum([1, 2, 7, 4], 5));
// console.log('Expected -1 and got:', twoSum([1, 2, 7, -3], 1));
// console.log('Expected [0,5] and got:', twoSum([1, 2, 7, 6, 8, 4], 5));

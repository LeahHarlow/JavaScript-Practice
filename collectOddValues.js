//write a function that accepts an array of integers and returns a new array of all of the odd integers. If there are no odd integers just return an empty array.

//this is written with a helper function for recursion to work around having a global variable.

const collectOddValues = (array) => {
  if(!array.length) return [];

  let result = [];

  const helper = (subArray) => {
    if (!subArray.length) return;

    if (subArray[0] % 2 !== 0) {
      result.push(subArray[0]);
    }
    subArray = subArray.slice(1);
    helper(subArray);
  };
  helper(array);
  return result;
};

//tests
console.log('extected [1,3,5] and got:', collectOddValues([1, 2, 3, 4, 5]));
console.log('extected [] and got:', collectOddValues([2,4,6]));
console.log('extected [] and got:', collectOddValues([]));
console.log('extected [1,7,3,9] and got:', collectOddValues([1, 2, 7, 3, 4, 9]));

//time complexity O(n)


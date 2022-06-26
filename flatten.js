//write a function that takes an array of arrays and returns one flattened array. Use recursion.

//define flattened array
//iterate over the input array
// if we come across a nezted array at any index
//call flatten again on input array[i] and concatonate that onto the flattened array
// otherwise if its a number just push it onto flattened array
// then return it

const flatten = (inputArray) => {
  let flattenedArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      flattenedArray = flattenedArray.concat(flatten(inputArray[i]));
    } else {
      flattenedArray.push(inputArray[i]);
    }
  }
  return flattenedArray;
};

//tests:
console.log('expected [1,2,3,4]', flatten([1, [2, 3], 4]));
console.log('expected [1,2,3]', flatten([[1], [2], [3]]));
console.log('expected [1,2,3,4,5]', flatten([[1, [2, 3], 4], 5]));
console.log('expected [13]', flatten([[[[13]]]]));


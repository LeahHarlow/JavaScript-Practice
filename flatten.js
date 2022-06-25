//write a function that takes an array of arrays and returns one flattened array. Use recursion.

//define flattened array
//if inputArray.length = 0; return flattened array;
//else if inputArray[0] is a number concatinate it onto flattened array
//slice the first index off of input array

const flatten = (inputArray) => {
   let flattenedArray = [];
   for(let i = 0; i < inputArray.length; i++){
     if(Array.isArray(inputArray[i])){
       flattenedArray = flattenedArray.concat(flatten(inputArray[i]));
      }
      else{
        flattenedArray.push(inputArray[i]);
      }
   }
   return flattenedArray;
}

//tests:
console.log('expected [1,2,3,4]', flatten([1,[2,3],4]));
console.log('expected [1,2,3]', flatten([[1],[2],[3]]));
console.log('expected [1,2,3,4,5]', flatten([[1,[2,3],4],5]));
console.log('expected [13]', flatten([[[[13]]]]));

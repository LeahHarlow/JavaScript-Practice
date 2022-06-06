//write a function called CountUniqueValues that accepts an array of integers and return the same array with only unique integers
//the array eill always be sorted

// i
//[1,1,1,2,2,3,4,5,5]
//   j

//the idea here is to move the two pointers across the array and modifying the array to
//have 0-i be all the unique values and return that array
const pointersUnique = (array) => {
  let leftPt = 0;
  let rightPt = 1;
  //as long as the rightPt pointer hasnt hit the end of the array...
  while (rightPt < array.length) {
    //if the left pointer doesnt equal the right pointer then increase the left by one index because its a unique value, and set its new index to what j currently was to create the array of unique values
    if (array[leftPt] !== array[rightPt]) {
      leftPt++;
      array[leftPt] = array[rightPt];
    }
    //if they are the same, increase the right pointer by one to keep searching and comparing for new values
    if (array[leftPt] === array[rightPt]) {
      rightPt++;
    }
  }
  //slice off at i + 1 bc slice excludes the last index and all the values up to and including i will be the unique values from previous sorting. 
  array = array.slice(0, leftPt + 1);
  return array;
};

console.log('expected [1, 2] and got:', pointersUnique([1, 1, 2, 2]));
console.log('expected [1,2,7] and got:', pointersUnique([1, 1, 2, 2, 7]));
console.log('expected [] and got:', pointersUnique([]));

//time complexity O(n)
//space complexity O(1)

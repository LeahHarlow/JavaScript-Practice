function sortedSquaredArray(array) {
  let squareArr = [];
  for (let i = 0; i < array.length; i++) {
    let square = array[i] * array[i];
    squareArr.push(square);
  }
  return squareArr.sort((a, b) => a - b);
}

console.log(sortedSquaredArray([1,2,3,4]));

console.log(sortedSquaredArray([-1,4,6,9]));

//O(nlogn) time bc...
//O(n) space bc length of input array

//O(nlogn) is known as loglinear complexity. O(nlogn) implies that logn operations will occur n times. O(nlogn) time is common in recursive sorting algorithms, sorting algorithms using a binary tree sort and most other types of sorts.

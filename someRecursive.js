// write a function called someRecursive that accepts an array and a callback. someRecursive should return true if a single element in the array returns true when passed into the callback, otherwise return false.

const someRecursive = (array, callback) => {
  if (!array.length) {
    return false;
  } else {
    if (callback(array[0]) === true) {
      return true;
    } else {
      array = array.slice(1);
      return someRecursive(array, callback); //not having the return here was giving me undefined for false
    }
  }
};

// test callback: returns true if num is odd
const isOdd = (num) => {
  if (num % 2 !== 0) return true;
  return false;
};

//test callback: returns true if number is greater than 5
const overFive = (num) => {
  if (num > 5) return true;
  return false;
};

//tests:
console.log('expected true and got:', someRecursive([1, 2, 3], isOdd));
console.log('expected false and got:', someRecursive([2, 2, 6], isOdd));
console.log('expected true and got:', someRecursive([13, 2, 8], overFive));

//time complexity = O(n);

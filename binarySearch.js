// Has to be sorted.
//pick the middle, is the value we're looking for before or after that
// pick the half of that and repeat
//continue until you have it.
// this makes in logarithmic time

// write a function that takes an array of integers and a search value and returns true if it finds it and false if not

//pseudocode:
//function accepts array and value
//create a left pointer and a right pointer
// while the left pointer comes before the right pointer...
//create a pointer in the middle
// if you find the value you want return the index
//if the value is too small move the pointer up.
//if the value is too large move the right pointer down
// if you never find the value return -1

const divideAndConquer = (array, val) => {
  //first sort array
  array.sort((a, b) => a - b);
  //console.log(array)

  let leftPt = 0;
  let rightPt = array.length;

  while (leftPt < rightPt) {
    let midPt = Math.floor((leftPt + rightPt) / 2);
    if (midPt === val) return midPt;
    else if (val < midPt) {
      rightPt = midPt;
    } else if (val > midPt) {
      leftPt = midPt;
    }
  }
};

console.log('expected true and got:', divideAndConquer([1, 2, 3, 4, 5, 6], 3));
console.log(
  'expected true and got:',
  divideAndConquer([1, 4, 7, 5, 3, 6, 6], 7)
);
console.log('expected false and got:', divideAndConquer([1, 2, 4, 5, 6], 3));

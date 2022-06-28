const classicSwap = (val1, val2) => {
  //condtional to show order we want
  // ie if(array[val1] < array[val2])
  let temp = val1;
  val1 = val2;
  val2 = temp;
};

const ES6Swap = (array, idx1, idx2) => ([array[idx1], array[idx2]] = [array[idx2], array[idx1]]);

const naiveBubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

console.log('expected [1,2,4,5] and got:', naiveBubbleSort([4, 2, 1, 5]));

const betterBubbleSort = (array) => {
  let noSwap = true;
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return array;
};

console.log(
  'expected [1,2,4,5] and got:',
  betterBubbleSort([4, 2, 1, 5, 6, 12, 2, 13])
);

//note:
//selection sort is basically bubble sort in reverse but with less swaps.

//bubble sort works really well if the data is almost sorted. Selection sort is useful if you want to compute less swaps. insertion sort works really well if the data is nearly sorted. All have O(n^2) though. space complexity is all O(1). These work pretty well with like 20 elements or less, but they really dont scale well.


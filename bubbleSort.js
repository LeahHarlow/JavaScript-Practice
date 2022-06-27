const swap = (val1, val2) => {
  //condtional to show order we want
  // ie if(array[val1] < array[val2])
  let temp = val1;
  val1 = val2;
  val2 = temp;
};

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

// ideally choose the median value for the pivot but you cant always know that, so if you dont just pick one.

const pivot = (array, start = 0, end = array.length) => {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  //here were assuming th epivot is always the first element
  let pivot = array[start];
  let swapIdx = [start];

  for (let i = start + 1; i <= end; i++) {
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  //swap the pivot from the start to the swap point
  swap(array, start, swapIdx);
  return swapIdx;
};

const quickSort = () => {};

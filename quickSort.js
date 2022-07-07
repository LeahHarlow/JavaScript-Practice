// ideally choose the median value for the pivot but you cant always know that, so if you dont just pick one.

const pivot = (array, start = 0, end = array.length) => {
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  //here were assuming the pivot is always the first element
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

const quickSort = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(array, left, right);
    //recursivley work through each half
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }
  return array;
};


console.log('expected [1,2,3,4,5] and got:', quickSort([3,4,5,1,2]));

//time complexity O(n log n);
//space complexity O(log n);

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newIntervalerval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

const insertInterval = (intervals, newInterval) => {
  if (intervals.length === 0) return [newInterval];

  let current = 0;

  while (current < intervals.length && intervals[current][0] < newInterval[0]) {
    current++;
  }
  intervals.splice(current, 0, newInterval);

  if (current !== intervals.length - 1) {
    let pointer = current + 1;
    if (intervals[pointer][0] <= newInterval[1]) {
      while (
        pointer < intervals.length &&
        intervals[pointer][0] <= newInterval[1]
      ) {
        pointer++;
      }
      newInterval[1] = Math.max(newInterval[1], intervals[pointer - 1][1]);
      intervals.splice(current + 1, pointer - (current + 1));
    }
  }

  if (current !== 0) {
    if (intervals[current - 1][1] >= newInterval[0]) {
      newInterval[0] = intervals[current - 1][0];
      newInterval[1] = Math.max(newInterval[1], intervals[current - 1][1]);
      intervals.splice(current - 1, 1);
    }
  }
  return intervals;
};

// const insertInterval = (intervals, newInterval) => {
//   let overlap = true;
//   while(overlap){
//     //basically the idea here is keep updating the set until theres no overlap and then return the whole thing.
//   }
// }

console.log(
  'expected [[2,5],[6,9],[10,11]] and got: ',
  insertInterval(
    [
      [6, 9],
      [10, 11],
    ],
    [2, 5]
  )
);
console.log(
  'expected [[2,5],[6,9],[10,11]] and got: ',
  insertInterval(
    [
      [2, 5],
      [6, 9],
    ],
    [10, 11]
  )
);
console.log(
  'expected [[1,5],[6,9]] and got: ',
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
);
console.log(
  'expected [[1,2],[3,10],[12,16]] and got: ',
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 9]
  )
);

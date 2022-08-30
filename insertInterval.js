// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

const insertInterval = (intervals, newInt) => {
  if (intervals.length === 0) return newInt
  let newIntervals = [];
  for(let i = 0; i < intervals.length; i++){
    let currentInt = intervals[i];
    if(newInt[1] < currentInt[0]) {
      intervals.unshift(newInt);
      return intervals
    }
    if(newInt[0] > currentInt[1]){
      intervals.push(newInt);
      return intervals;
    }
    //finding the starting insertion point
    let currentIdx = 0;
    while(currentIdx < intervals.length && intervals[currentIdx][0] < newInt[0]){
      currentIdx++
    }
  }
  console.log(newIntervals);
  return newIntervals;
}

// const insertInterval = (intervals, newInt) => {
//   let overlap = true;
//   while(overlap){
//     //basically the idea here is keep updating the set until theres no overlap and then return the whole thing.
//   }
// }



console.log('expected [[2,5],[6,9],[10,11]] and got: ', insertInterval([[6,9],[10,11]],[2,5]));
console.log('expected [[2,5],[6,9],[10,11]] and got: ', insertInterval([[2,5],[6,9]],[10,11]));
// console.log('expected [[1,5],[6,9]] and got: ', insertInterval([[1,3],[6,9]],[2,5]))
// console.log('expected [[1,2],[3,10],[12,16]] and got: ', insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))



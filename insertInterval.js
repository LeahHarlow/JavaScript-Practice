// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

const insertInterval = (set, newInt) => {

}


console.log('expected [[1,5],[6,9]] and got: ', insertInterval([[1,3],[6,9]],[2,5]))
console.log('expected [[1,2],[3,10],[12,16]] and got: ', insertInterval([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))



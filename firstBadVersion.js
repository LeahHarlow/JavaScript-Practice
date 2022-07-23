// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.



//Runtime: 66 ms, faster than 85.01% of JavaScript online submissions for First Bad Version.
// Memory Usage: 42.2 MB, less than 17.34% of JavaScript online submissions for First Bad Version.
const solution = function(isBadVersion) {
  return function(n) {
    let leftPos = 1;
    let rightPos = n;
    let result = -1;
    while(leftPos <= rightPos) {
        const middle = Math.floor((leftPos + rightPos) / 2);
      if (isBadVersion(middle)) {
        result = middle;  // save the middle value
        rightPos = middle - 1; // update to search for the left most occurence
      } else {
        leftPos = middle + 1;
      }
    }
    return result;
  };
};

module.exports = solution;

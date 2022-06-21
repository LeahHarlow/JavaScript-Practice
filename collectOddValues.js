const collectOddValues = (array) => {
  let result = [];

  const helper = (subArray) => {
    if (!subArray.length) return;

    if (subArray[0] % 2 !== 0) {
      result.push(subArray[0]);
    }
    subArray = subArray.slice(1);
    helper(subArray);
  };
  helper(array);
  return result;
};

console.log('extected [1,3,5] and got:', collectOddValues([1, 2, 3, 4, 5]));

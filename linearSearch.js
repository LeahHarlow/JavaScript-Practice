//pseudocode prompt:

//function accepts an array and a value
//loop through the array and check if the current array element is egual to the value input
//if it is, return the index at which the element is found
// if the value is never found return -1

//basically make the indexOf method

const linearSearch = (array, val) => {
  for(let i = 0; i < array.length; i++){
    let current = array[i];
    if(current === val) return i;
  }
  return -1;
}

console.log('expected 2 and got:', linearSearch([1,2,3,4], 3));
console.log('expected -1 and got:', linearSearch([], 3));
console.log('expected 5 and got:', linearSearch([1,2,3,7,8,6], 6));


//O(n);

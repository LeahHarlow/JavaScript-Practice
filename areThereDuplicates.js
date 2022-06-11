//Implement a function called areThereDuplicates that accepts a variable number of aguements and checks whether there are any duplicates among the arguments passed in. Return true if there are duplicates and false if there are not.

const areThereDuplicates = (...args) => {
  //spreading into an array for simple iteration
  let inputs = [...args];
  //defining where I will track frequencies
  let frequencies = {};
  //populating my frequencies object
  for (let i = 0; i < inputs.length; i++) {
    let char = inputs[i];
    frequencies[char] = ++frequencies[char] || 1;
  }
  //iterate over the object keys for frequency and if its value is > 1 return false otherwise return true;
  for (let key in frequencies) {
    if (frequencies[key] > 1) {
      return true;
    }
  }
  return false;
};

//tests
console.log('expected false and got:', areThereDuplicates(1, 2, 3, 4));
console.log('expected false and got:', areThereDuplicates('a', 'b', 'c'));
console.log('expected true and got:', areThereDuplicates(1, 2, 3, 4, 1));
console.log('expected true and got:', areThereDuplicates(-2, -3, 4, 0, -3, 4, 4));

const pointerSolution = (...args) => {
  // array needs to be sorted for pointers to work;
  args.sort((a,b) => a> b);
  let start = 0;
  let next = 1;
  while( next !== args.length-1){
    if(args[start] === args[next]){
      return true;
    }
    if(args[start] !== args[next]){
      start++
      next++
    }
  }
  return false;
}

console.log('expected false and got:', pointerSolution(1, 2, 3, 4));
console.log('expected true and got:', pointerSolution(1,2,3,3,4));

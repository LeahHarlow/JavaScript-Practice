//Implement a function called areThereDuplicates that accepts a variable number of aguements and checks whether there are any duplicates among the arguments passed in.

// I need to iterate over all fo the arguements somehow and check their frequency

const areThereDuplicates = (...args) => {
  //spreading into an array for simple iteration
  let inputs = [...args];
  console.log('ARGS', inputs)

  //defining where I will track frequencies
  let frequencies = {};

  //populating my frequencies object
  for (let i = 0; i < inputs.length; i++) {
    let char = inputs[i];
    frequencies[char] = ++frequencies[char] || 1;
  }

  console.log('FREQUENCY TABLE', frequencies)

  //iterate over the object keys for frequency and if its value is > 1 return false otherwise return true;
  for (let key in frequencies) {
    console.log('KEY', key)
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

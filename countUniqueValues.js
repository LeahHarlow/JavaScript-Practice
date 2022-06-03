//write a function called CountUniqueValues that accepts an array of integers and return the number of unique integers
//the array eill always be sorted

const CountUniqueValues = (array) => {
  let frequencies = {}
  for(let val of array) {
    frequencies[val] = ++frequencies[val] || 1
  }
  return Object.keys(frequencies).length;
}

console.log("expected 2 and got:", CountUniqueValues([1,1,2,2]))
console.log("expected 3 and got:", CountUniqueValues([1,1,2,2,7]))
console.log("expected 0 and got:", CountUniqueValues([]))

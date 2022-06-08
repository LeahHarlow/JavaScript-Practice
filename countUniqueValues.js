//write a function called CountUniqueValues that accepts an array of integers and return the number of unique integers
//the array will always be sorted


const CountUniqueValues = (array) => {
  let frequencies = {}
  //populate an object that keeps all of the frequencies
  for(let val of array) {
    frequencies[val] = ++frequencies[val] || 1
  }
  //return the length of the object to show the number of unique values by number of keys in it
  return Object.keys(frequencies).length;
}


console.log("expected 2 and got:", CountUniqueValues([1,1,2,2]))
console.log("expected 3 and got:", CountUniqueValues([1,1,2,2,7]))
console.log("expected 0 and got:", CountUniqueValues([]))

//time complexity O(n)
//space complexity O(1)

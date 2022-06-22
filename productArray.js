//write a func called productArray that takes in an array of numbers and returns the product of them all.

const productArray = (array) => {
  //return array.reduce((prev,current) => prev * current)
  if(!array.length) return 1;
  return array[0] * productArray(array.slice(1));
}

//tests:
console.log('expected 6 and got:', productArray([1,2,3]));
console.log('expected 60 and got:', productArray([1,2,3,10]));

//write a function that accepts a number and returns its factorial using recursion. Dont worry about negatives.

//needs to accept a number
//return the total of that number times each descending number until 0;

const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(--num);
};

//tests:
console.log('expected 6 and got:', factorial(3));
console.log('expected 1 and got:', factorial(0));
console.log('expected 5040 and got:', factorial(7));

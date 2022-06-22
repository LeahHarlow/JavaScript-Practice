//write a function called recursiveRange that accepts a number as an argument and adds up all the nubers form 0 to the number passed into thte function. Use recursion.

//so, like a factorial but with addition essentially

const recursiveRange = (num) => {
  if(num === 0) return 0;
  return num + recursiveRange(--num);
}

//tests:
console.log('expected 6 and got:', recursiveRange(3));
console.log('expected 15 and got:', recursiveRange(5));
console.log('expected 21 and got:', recursiveRange(6));

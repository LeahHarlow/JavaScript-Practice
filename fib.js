//write a recursive function called fib that accepts a number as an arguments and returns the nth number int he Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1,1,2,3,5,8 where it starts with one and one and adds every number there after to be the sum of the previous two numbers.

//so basically if the Fibonacci sequence was an array we want to return the number at the indice+1 of the input num

const fib = (n) => {
  //if its one of the first two digits we know its 1;
  if(n <= 2) return 1;
  //otherwise add the previous two number to n
  return fib(n-1) + fib(n-2);
}
// double recursion!!!

//tests:
console.log('expected 2 and got:', fib(3));
console.log('expected 3 and got:', fib(4));
console.log('expected 55 and got:', fib(10));

//time complexity O(n+m)? 

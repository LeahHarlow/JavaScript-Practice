//write a function called power that should return the power of the base to the exponent, mimicing the funcitonality of Math.pow()
//do not worry about negative bases and exponents

//pseudocode:
//if the exponent = 0 return 0
//else: base times base for exponent number of times
//remove one from exponent each time

const power = (base,exp) => {
  if(exp === 0){
    return 1;
  }
  return base * power(base, --exp)
}

//ok, the whole issue here was that you were using exp-- in the recursion call and you needed to use exp-1 or --exp.

//tests:
console.log('expected 1 and got:', power(2,0));
console.log('expected 4 and got:', power(2,2));
console.log('expected 16 and got:', power(2,4));

//2x1 = 2, 2x2 = 4, 4x2 = 8, 8x2 = 16.

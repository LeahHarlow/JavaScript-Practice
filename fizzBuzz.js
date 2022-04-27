const FizzBuzz = () => {
  for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
};

console.log(FizzBuzz());

//time O(1) bc its always printing to 100? wouod be O(n) if it was dependant on an input


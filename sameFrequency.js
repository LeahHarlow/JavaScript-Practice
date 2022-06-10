//write a function called sameFrequency. Given two positive integers, fund out if the two numbers have the same frequency of digits.

const sameFrequency = (num1, num2) => {
  //convert to string to iterate over the numbers
  num1 = num1.toString();
  num2 = num2.toString();
  //if theyre different lengths fail immediatly
  if(num1.length !== num2.length){
    return false;
  }
  //make a frequency counter for num1
  let num1Frequency = {};
  //populate it
  for(let i = 0; i < num1.length; i++){
    let num = num1[i]
    num1Frequency[num] = ++num1Frequency[num] || 1;
  }
  //loop over num2 and if it is in the frequency counter the right amount of times return true, otherwise return false.
  for(let j = 0; j < num2.length; j++){
    let numCheck = num2[j]
    if(numCheck in num1Frequency){
      return true
    }
    return false
  }
}

//tests
console.log('expected true and got:', sameFrequency(281,821))
console.log('expected false and got:', sameFrequency(21,8213))
console.log('expected true and got:', sameFrequency(2888,8288))
console.log('expected false and got:', sameFrequency(2131,8261))


//time complexity = O(n);
//space O(1)

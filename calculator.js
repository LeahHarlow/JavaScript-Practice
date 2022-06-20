// Given a string s representing an expression, implement a basic calculator to evaluate it.
// s consists of digits, '+', '-', '(', ')', and ' '.
// s represents a valid expression.
//s could include spaces though;

//aproach:
//keep track of length
//if length is 0 return 0;
//keep track of a stack
// keep track of result
//set sign to 1 to keep track of positives and negatives
//remove spaces
//iterat over the input string.
//for each character, parce it, and if it is a number (isNaN === false) set that number to current
// then, while the next value is not the end of s and the character after i is also a number
// set current to be current times 10 (needs the base 10 from the radix?) and add the number after current
//increase i
//at the end of the while loop add current to result multiplied by sign
//else if the char is - set sign to -1
//else if char is + reset sign to 1
//else if char is (
// push result to stack
//reset result to 0
//push the sign onto the stack
//set sign to 1
//else if char is )
//result = result * last thing onto stack + last thing onto stack
//return result

const calculator = (s) => {
  if (!s.length) return 0;

  let stack = [];
  let result = 0;
  let posOrNeg = 1;

  s.replace(' ', '');
  // console.log(s);

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (!isNaN(parseInt(char))) {
      let current = parseInt(char);
      //console.log(current);
      while (i + 1 !== s.length && !isNaN(parseInt(s[i + 1]))) {
        current = current * 10 + parseInt(s[i + 1]);
        i++;
      }
      result += current * posOrNeg
    }
    else if(char === '-'){
      posOrNeg = -1;
    }
    else if(char === '+'){
      posOrNeg = 1;
    }
    else if(char === '('){
      stack.push(result);
      result = 0;
      stack.push(posOrNeg);
      posOrNeg = 1;
    }
    else if(char === ')'){
      result = result * stack.pop() + stack.pop();
    }
  }
  return result;
};

//tests:
console.log('expected 2 and got:', calculator('1+ 1'));
console.log('expected 4 and got:', calculator(' 2 / 2 +3'));
console.log('expected 23 and got:', calculator('(1+(4+5+2)-3)+(6+8)'));
console.log('expected 201 and got:', calculator(' 2 - 1 + 200 '));

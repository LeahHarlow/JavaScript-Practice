// const validParens = (s) => {
//   if (!s.length || s.length % 2 !== 0) return false;
//   let validPairs = {
//     '(': ')',
//     '{': '}',
//     '[': ']',
//   };
//   let leftPt = 0;
//   let rightPt = 1;
//   while (rightPt <= s.length - 1) {
//     let x = s[leftPt]
//     if (validPairs[x] === s[rightPt]) {
//       leftPt = rightPt + 1;
//       rightPt = leftPt + 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// };

const validParens = (s) => {
  if (!s.length || s.length % 2 !== 0) return false;
  let validPairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  //get all the open brackets here
  let openStack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      openStack.push(s[i]);
    }
    //if its closing see if there is a valid open one on the stack ready to line up with it. and return false if not.
    else if (validPairs[s[i]] !== openStack.pop()) {
      return false;
    }
  }
  //if the stack array has all been popped off then we know it was all symetrical
  return !openStack.length;
};

var isValid = function (s) {
  let validPairs = {
    '}': '{',
    ')': '(',
    ']': '[',
  };
  let openBrackets = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === '{' || char === '[' || char === '(') {
      openBrackets.push(char);
    }
    if (char === '}' || char === ']' || char === ')') {
      if (validPairs[char] !== openBrackets.pop()) {
        return false;
      }
    }
  }
  if (openBrackets.length === 0) return true;
  return false;
};

console.log('Expected true and got:', validParens('{}'));

console.log('Expected true and got:', validParens('{}[]()'));
console.log('Expected false and got:', validParens('{]'));
console.log('Expected false and got:', validParens('([)]'));

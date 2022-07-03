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
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let openStack = [];
  let closedStack = [];

  for(let i = 0; i < s.length; i++){
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
      openStack.push(s[i])
    }
    else{
      closedStack.push(s[i]);
    }
  }
  console.log("CLOSED",closedStack)
  console.log("OPEN",openStack)
  while(closedStack.length){
    let open = openStack.pop();
    let closed = closedStack.pop();
    if(validPairs[open] !== closed) return false;
  }
  return true;
};



console.log('Expected true and got:', validParens('{}'))
console.log('Expected true and got:', validParens('{}[]()'))
console.log('Expected false and got:',validParens('{]'))
console.log('Expected false and got:',validParens('([)]'))

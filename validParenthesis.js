const validParens = (s) => {
  if (!s.length || s.length % 2 !== 0) return false;
  let validPairs = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let leftPt = 0;
  let rightPt = 1;
  while (rightPt <= s.length - 1) {
    let x = s[leftPt]
    if (validPairs[x] === s[rightPt]) {
      leftPt = rightPt + 1;
      rightPt = leftPt + 1;
    } else {
      return false;
    }
  }
  return true;
};


console.log('Expected true and got:', validParens('{}'))
console.log('Expected true and got:', validParens('{}[]()'))
console.log('Expected false and got:',validParens('{]'))

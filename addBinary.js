// Given two binary strings a and b, return their sum as a binary string.

var addBinary = function (a, b) {
  let binarySum = [];
  let stackA = a.split('');
  let stackB = b.split('');
  let remember = false;

  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    let aChar = stackA.pop();
    let bChar = stackB.pop();
    if (aChar === '1' && bChar === '1') {
      remember = true;
      binarySum.push('0');
    }
    if (aChar === '1' && bChar === '0') {
      if (remember) {
        binarySum.push('0');
      }
      if (!remember) {
          binarySum.push('1');
        }
    }
    if (aChar === '0' && bChar === '0') {
      if (remember) {
        binarySum.push('1');
        remember = false;
      }
      if (!remember) {
        binarySum.push('0');
      }
    }
    if (aChar === '0' && bChar === '1') {
      if (remember) {
        binarySum.push('0');
      }
      if (!remember) {
        binarySum.push('1');
      }
    }
  }
  if (remember) binarySum.push('1');
  return binarySum.reverse().join('');
};

console.log('expected 100 and got:', addBinary('11', '1')); //adds to 4
console.log('expected 10101 and got:', addBinary('1010', '1011')); //adds to 21
///1010
///1011
//10101

////1
///11
//100

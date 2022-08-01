// Given two binary strings a and b, return their sum as a binary string.

//first attempt. It works but lets do it better.

// var addBinary = function (a, b) {
//   let binarySum = [];
//   let binarySumA = a.split('');
//   let binarySumB = b.split('');
//   let remember = false;

//   while (a.length || b.length) {
//     let aChar = binarySumA.pop();
//     let bChar = binarySumB.pop();
//     if (aChar === '1' && bChar === '1') {
//       remember = true;
//       binarySum.push('0');
//     }
//     if (aChar === '1' && bChar === '0') {
//       if (remember) {
//         binarySum.push('0');
//       }
//       if (!remember) {
//           binarySum.push('1');
//         }
//     }
//     if (aChar === '0' && bChar === '0') {
//       if (remember) {
//         binarySum.push('1');
//         remember = false;
//       }
//       if (!remember) {
//         binarySum.push('0');
//       }
//     }
//     if (aChar === '0' && bChar === '1') {
//       if (remember) {
//         binarySum.push('0');
//       }
//       if (!remember) {
//         binarySum.push('1');
//       }
//     }
//   }
//   if (remember) binarySum.push('1');
//   return binarySum.reverse().join('');
// };

const addBinary = (a, b) => {
    //start both strings at the end.
    let currentAIndex = a.length - 1
    let currentBIndex = b.length - 1
    const binarySum = []
    let remember = 0

    while (a[currentAIndex] || b[currentBIndex]) {
        const sum = Number(a[currentAIndex] || 0) + Number(b[currentBIndex] || 0) + remember
        if (sum < 2) {
            binarySum.push(sum)
            remember = 0
        } else {
            binarySum.push(sum - 2)
            remember = 1
        }
        currentAIndex--
        currentBIndex--
    }

    if (remember) binarySum.push(remember)

    return binarySum.reverse().join('')
};

console.log('expected 100 and got:', addBinary('11', '1')); //adds to 4
console.log('expected 10101 and got:', addBinary('1010', '1011')); //adds to 21
///1010
///1011
//10101

////1
///11
//100

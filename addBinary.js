// Given two binary strings a and b, return their sum as a binary string.

//first attempt. It no work but cant delete it.

// var addBinary = function (a, b) {
//   let binarySum = [];
//   let binarySumA = a.split('');
//   let binarySumB = b.split('');
//   let remember = false;

//   while (binarySumA || binarySumB) {
//     let aChar = binarySumA.pop();
//     let bChar = binarySumB.pop();
//     if (aChar === '1' && bChar === '1') {
//       if (remember) {
//         binarySum.push('1');
//       }
//       if (!remember) {
//           binarySum.push('1');
//          remember = false;
//         }
//     }
//     if (aChar === '1' && bChar === '0') {
//       if (remember) {
//         binarySum.push('1');
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
    let currentAIndex = a.length - 1;
    let currentBIndex = b.length - 1;
    //push on without reindexing then easier to reverse;
    const binarySum = [];
    //to show carring the 1
    let remember = 0;

    //as long as one of them has length
    while (a[currentAIndex] || b[currentBIndex]) {
        //convert the strings to numbers and add either 1 or 0, the || 0 also keeps us from hitting invalid if one strign is shorter + remember will show if we're carrying a 1 or not.
        const sum = Number(a[currentAIndex] || 0) + Number(b[currentBIndex] || 0) + remember;
        //if they add up to 1 or 0 just push it on
        if (sum < 2) {
            binarySum.push(sum)
            //reset remember to 0 bc it would have been added.
            remember = 0
        } else {
            //say they are two 1's we want to subtract it to zero and push that on but remember to carry the 1
            //if they were three 1's we want to subtract it to 1 and push that on then keep remember as 1
            binarySum.push(sum - 2)
            remember = 1
        }
        currentAIndex--
        currentBIndex--
    }
    //If we have remember left over than push that on
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

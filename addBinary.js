// Given two binary strings a and b, return their sum as a binary string.




var addBinary = function(a, b) {
    let binarySum = ''; //concatonate onto then reverse it before returning? save reindexing?
    let stackA = a.split('');
    let stackB= b.split('');
    console.log(stackA)
};


console.log("expected 100 and got:", addBinary("11", "1")) //adds to 4
console.log("expected 10101 and got:", addBinary("1010", "1011")) //adds to 21

// Given n pairs of parentheses, write a function to generate all combinations of closed parentheses.

//EXAMPLE:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

//one closed parenthsis created for each 1 value of the input number
//think of it as openers and closers?
// input 2 = ["open open close close", "open close open close"]
//close cannot come before open, so cannot randomly assign open or closed.
//create object pairs? Need to check if balanced.

const generateParenthesis = (num) => {
  //store all the possible combinations
  let allStrArray = [];
  //define current string
  let currStr = '';
  //store only the balanced strings
  let balancedStr = [];
  //this doesnt really work bc we might need more than the given number of strings returned....
  for (let i = 0; i < num; i++) {
    //loop over the number given multiplied by 2 because we're not adding parenthesis as pairs
    for (let j = 0; j < num * 2; j++) {
    //randomly generat open or closed brackets depending on status of 0 or 1
    let status = Math.floor(Math.random() * 2);
    if (status === 0) currStr.concat('(');
    else currStr = currStr.concat(')');
    //push the 6 randomly chosen single parenthesis that make up currStr onto the allStrArray
    allStrArray.push(currStr);
  }
}
//now loop over all of the posible strings
  for(let i=0; i< allStrArray.length; i++){
    let str = allStrArray[i];
    //if the string is balanced, add it to the balancedStr array
    if(checkBalance(str)){
      balancedStr.push(str);
    }
  }
  return balancedStr;
};

//helper func to see if the output array is balanced or not => but this still doesnt tell you if theyre matching closed parens
const checkBalance = (str) => {
  let balance = 0;
  for (let element in str) {
    if (element === '(') balance++;
    else balance--;
  }
  if (balance !== 0) return false;
  else return true;
};

console.log(generateParenthesis(2)); // expect ["(())", "()()"]
console.log(generateParenthesis(4)); // expect ["(((())))","(()()())","((()))()","()((()))","()()()()","(()())()","((())())","()((()))","(()(()))","((())())","(()(()))"]

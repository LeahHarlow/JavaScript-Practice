//write a function called reverse that takes a string and returns a new string in reverse. Use recursion.

//pseudocode:
//define vew string
//if input str === 0 return empty string; or just return;
//else return new string += last character of input str
//slice off the last character and call reverse again

const reverse = (str) => {
  let reversedStr = '';
  const helper = (subStr) => {
    if(!subStr.length) return subStr;
    else{
      reversedStr += subStr[subStr.length-1]
      helper(subStr.slice(0,-1))
    }
  }
  helper(str);
  return reversedStr;
}

//tests:
console.log('expected olleh and got:', reverse('hello'));
console.log('expected   and got:', reverse(''));
console.log('expected dar and got:', reverse('rad'));
console.log('expected yfipohs and got:', reverse('shopify'));

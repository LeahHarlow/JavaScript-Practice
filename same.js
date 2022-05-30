//write a function called same that accepts 2 arrays. same should return true if every value in the array has its corresponding value squared in the secnd array. the frequency of the values must be the same.


const same = (array1, array2) => {
  if(array1.length !== array2.length){
    return false;
  }
  for(let i = 0; i < array1.length; i++){
    let char = array1[i];
    let squared = char * char;
    if (!array2.includes(squared)){
      return false;
    }
  }
  return true;
}


console.log(same([1,2,3],[1,4,9])) // expect true
console.log(same([1,2,3,3],[1,4,9])) // expect false


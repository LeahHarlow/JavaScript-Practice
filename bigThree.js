
function findThreeLargestNumbers(array) {
  if(array.length < 3){
		return -1
	}
	let bigThree = [-1000,-1000,-1000];
	for(let i = 0; i < array.length; i++){
		if(array[i] >= bigThree[2]){
			bigThree[0] = bigThree[1]
			bigThree[1] = bigThree[2]
			bigThree[2] = array[i];
		}
		else if(array[i] >= bigThree[1]){
			bigThree[0] = bigThree[1]
			bigThree[1] = bigThree[2]
			bigThree[1] = array[i];
		}
		else if(array[i] >= bigThree[0]){
			bigThree[0] = array[i];
		}
	}
	return bigThree;
}


console.log(findThreeLargestNumbers([-1,2,57,36,22,10])) //[22,36,57]

console.log(findThreeLargestNumbers([57,10])) //-1

console.log(findThreeLargestNumbers([346,-1,200,573])) //[22,36,57]

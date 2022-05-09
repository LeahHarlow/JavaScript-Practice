function findThreeLargestNumbers(array) {
  if(array.length < 3){
		return -1
	}
	let bigThree = [null,null,null];
	for(let i = 0; i < array.length; i++){
		if(array[i] === null || array[i] > bigThree[2]){
			bigThree[2] = array[i];
		}
		if(array[i] === null || array[i] > bigThree[1]){
			bigThree[1] = array[i];
		}
		if(array[i] === null ||array[i] > bigThree[0]){
			bigThree[0] = array[i];
		}
	}
	return bigThree;
}


console.log(findThreeLargestNumbers([-1,2,57,36,22,10]))

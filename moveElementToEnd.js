/* given an arrau and a target number, mutate the array in place and return the array with
all of the target numbers moved to the end of the array. The order of the array does not matter other than
the target numbers all being moved to the end */

function moveElementToEnd(array, toMove) {
	let i = 0;
	let j = array.length-1;
  while (j > i){
		while( j > i && array[j] === toMove) j--;
		if(array[i] === toMove) moveIt(i,j,array);
		i++;
	}
	return array;
}

function moveIt(i,j,array){
	let temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}

console.log(moveElementToEnd([2,1,3,5,2], 2)) // expect [1,3,5,2,2]
console.log(moveElementToEnd([], 2)) //expect []
console.log(moveElementToEnd([2,-5,3,5,22,10], -5)) //expect [2,3,5,22,10,-5]
console.log(moveElementToEnd([2,2,2,2,2,2], 2)) //expect [2,2,2,2,2,2]


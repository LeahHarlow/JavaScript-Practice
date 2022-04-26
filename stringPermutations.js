//Examples:
// stringPermutations('one');
// // should return  [ 'eno', 'eon' 'neo', 'noe', 'oen', 'one']
// stringPermutations('app');
// // should return  [ 'app','pap','ppa']
// stringPermutations('nn'); //should return  [ 'nn' ]

//permutations problems will tend to be factorial time and space complexity.

function stringPermutations(str) {
  var results = [];
  var letters = str.split('');
  results.push([letters.shift()]); //add first letter (as an array) to results
  while (letters.length) {
    var curLetter = letters.shift();
    var tmpResults = [];
    results.forEach(function(curResult) {
      for (var i = 0; i <= curResult.length; i++) {
        var tmp = curResult.slice(); //make copy so we can modify it
        //insert the letter at the current position
        tmp.splice(i, 0, curLetter);
        tmpResults.push(tmp);
      }
    });
    results = tmpResults; //overwrite the previous results
  }
  return results
    .map(function(letterArr) {
      return letterArr.join('');
    })
    .filter(function(el, index, self) {
      return self.indexOf(el) === index; //filter out non-unique words
    })
    .sort();
}

console.log(stringPermutations('str'));

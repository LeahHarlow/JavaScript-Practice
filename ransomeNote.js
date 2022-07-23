// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.



var canConstruct = function (ransomNote, magazine) {
  let letters = {};
  for (let i = 0; i < magazine.length; i++) {
    let magChar = magazine[i];
    letters[magChar]
      ? (letters[magChar] = ++letters[magChar])
      : (letters[magChar] = 1);
  }
  // console.log("LETTTERS", letters)
  for (let j = 0; j < ransomNote.length; j++) {
    let ransomeChar = ransomNote[j];
    if (!letters[ransomeChar]) return false;
    --letters[ransomeChar];
  }
  return true;
};

console.log("expected true and got:", canConstruct("aba","aabbaa"))

module.exports = canConstruct;

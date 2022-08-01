const blindMice = (allLocations) => {
  let blindMice = 0;
  let cheeseLocation = allLocations.indexOf('C');

  for (let index = 0; index < allLocations.length; index++) {
    let char = allLocations[index];
    let nextChar = allLocations[index + 1];
    let prevChar = allLocations[index - 1];

    if (index < cheeseLocation && char === 'M') {
      blindMice = nextChar === '~' ? ++blindMice : blindMice;
    }
    if (index > cheeseLocation && char === 'M') {
      blindMice = prevChar === '~' ? ++blindMice : blindMice;
    }
    if (index === cheeseLocation || char === ' ') continue;
  }
  return blindMice;
};

console.log(blindMice('~M CM~~M~M'));
console.log(blindMice('M~~M ~MM~C~MM~M~'));

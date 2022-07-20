const validAnagram = require('./anagram');

test('tests zuma and umaz expecting true', () => {
  expect(validAnagram("zuma", "umaz")).toBe(true);
});

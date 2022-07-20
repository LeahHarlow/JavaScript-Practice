const validAnagram = require('./anagram');

test('tests zuma and umaz expecting true', () => {
  expect(validAnagram('zuma', 'umaz')).toBe(true);
});
test('tests empty string expecting true', () => {
  expect(validAnagram('', '')).toBe(true);
});
test('tests zuma and uma expecting false', () => {
  expect(validAnagram('zuma', 'uma')).toBe(false);
});
test('tests money and monie expects false', () => {
  expect(validAnagram('money', 'monie')).toBe(false);
});

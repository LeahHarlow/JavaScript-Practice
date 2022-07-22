const canConstruct = require('./ransomeNote');

test('tests "aba", "aabbaa" expecting true', () => {
  expect(canConstruct( "aba", "aabbaa")).toBe(true);
});
test('tests empty string expecting true', () => {
  expect(canConstruct('', '')).toBe(true);
});
test('tests "ello" and "hello" expecting false', () => {
  expect(canConstruct('ello', 'helllo')).toBe(true);
});
test('tests money and monie expects false', () => {
  expect(canConstruct('money', 'monie')).toBe(false);
});


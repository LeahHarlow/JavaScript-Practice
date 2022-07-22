const canConstruct = require('./ransomeNote');

test('tests "aabbaa" and "aba" expecting true', () => {
  expect(canConstruct("aabbaa", "aba")).toBe(true);
});
test('tests empty string expecting true', () => {
  expect(canConstruct('', '')).toBe(true);
});
test('tests "ello" and "hello" expecting false', () => {
  expect(canConstruct('ello', 'helllo')).toBe(false);
});
test('tests money and monie expects false', () => {
  expect(canConstruct('money', 'monie')).toBe(false);
});

const sub = require('../src/sub');

test('3 - 2 to equal 1', () => {
  expect(sub(3, 2)).toBe(1)
});

test('validate inputs', () => {
  expect(sub('a', 'b')).toBe(0)
})
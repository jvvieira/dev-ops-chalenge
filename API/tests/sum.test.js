const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
});

test('validate inputs', () => {
  expect(sum('a', 'b')).toBe(0)
})

test('validate inputs 2', () => {
  expect(sum('a', 2)).toBe(0)
})
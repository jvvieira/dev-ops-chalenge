const sum = require('../src/sum');

test('adds 1 + 2 to equal 3', () => {
  let value = sum(1, 2)
  expect(value.result).toBe(3)
});

test('validate inputs', () => {
  let value = sum('a', 'b')
  expect(value.result).toBe(0)
})

test('validate inputs 2', () => {
  let value = sum('a', 2)
  expect(value.result).toBe(0)
})
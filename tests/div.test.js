const div = require('../src/div');

test('6 / 3 to equal 2', () => {
  let value = div(6, 3)
  expect(value.result).toBe(2)
});

test('validate inputs', () => {
  let value = div('a', 'b')
  expect(value.result).toBe(0)
})

test('denominator eq 0', () => {
  let value = div(1000, 0)
  expect(value.result).toBe(0)
})
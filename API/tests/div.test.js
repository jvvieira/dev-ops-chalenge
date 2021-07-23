const div = require('../src/div');

test('6 / 3 to equal 2', () => {
  expect(div(6, 3)).toBe(2)
});

test('validate inputs', () => {
  expect(div('a', 'b')).toBe(0)
})

test('denominator eq 0', () => {
  expect(div(1000, 0)).toBe(0)
})
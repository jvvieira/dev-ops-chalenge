const sub = require('../src/sub');

test('3 - 2 to equal 1', () => {
  let value = sub(3, 2)
  expect(value.result).toBe(1)
});

test('validate inputs', () => {
  let value = sub('a', 'b')
  expect(value.result).toBe(0)
})

test('negative numbers', () => {
  let value = sub(-1, 2)
  expect(value.result).toBe(-3)
})

test('Chanlenge example', () => {
  let value = sub(4, 1)
  expect(value.result).toBe(3)
})

test('Missing parameter', () => {
  let value = sub(4, undefined)
  expect(value.result).toBe(0)
})
const validate = require('./common')

function sum(a, b) {
  if (validate.validateNumber(a) && validate.validateNumber(b)) {
    return a + b;
  } else {
    return 0
  }
}

module.exports = sum;
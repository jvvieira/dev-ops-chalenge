const validate = require('./common')

function div(a, b) {
  if (validate.validateNumber(a) && validate.validateNumber(b) && b > 0) {
    return a / b;
  } else {
    return 0
  }
}

module.exports = div;
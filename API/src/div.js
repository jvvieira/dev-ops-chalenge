const validate = require('./common')

function div(term_one, term_two) {
  if (validate.validateNumber(term_one) && validate.validateNumber(term_two) && term_two > 0) {
    let calculatedValue = Number.parseFloat(term_one) / Number.parseFloat(term_two)
    return {
      'result': calculatedValue
    }
  } else {
    return {
      'result': 0
    }
  }
}

module.exports = div;
const validate = require('./common')

function mul(term_one, term_two) {
  if (validate.validateNumber(term_one) && validate.validateNumber(term_two)) {
    return {
      'result': Number.parseFloat(term_one) * Number.parseFloat(term_two)
    };
  } else {
    return {
      'result': 0
    }
  }
}


module.exports = mul;
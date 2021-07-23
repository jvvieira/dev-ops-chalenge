const validate = require('./common')

function sub(a, b) {
    if (validate.validateNumber(a) && validate.validateNumber(b)) {
        return a - b;
    } else {
        return 0
    }
}

module.exports = sub;
module.exports = {
    validateNumber: function (params) {
        if (typeof params === 'undefined') {
            return false
        }
        let string = params.toString()
        let number = Number.parseFloat(string)
        return !Number.isNaN(number)
    }
}
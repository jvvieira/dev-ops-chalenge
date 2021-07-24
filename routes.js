'use strict';
module.exports = function (app) {

    //Sum
    var sum = require('./src/sum')
    app.get('/api/sum', function (req, res) {
        res.send(sum(req.query.term_one, req.query.term_two))
    })

    //Mul
    var mul = require('./src/mul')
    app.get('/api/mul', function (req, res) {
        res.send(mul(req.query.term_one, req.query.term_two))
    })

    //div
    var div = require('./src/div')
    app.get('/api/div', function (req, res) {
        res.send(div(req.query.term_one, req.query.term_two))
    })

    //sub
    var sub = require('./src/sub')
    app.get('/api/sub', function (req, res) {
        res.send(sub(req.query.term_one, req.query.term_two))
    })

    app.get('/', (req, res) => {
        res.send('Select the operation')
    })
};
var express = require('express'),
    app = express(),
    port = process.env.PORT || 8000


let routes = require('./routes')
routes(app)

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
var express = require('express'),
    resource = require('express-resource'),
    app = express(),
    _PORT = 3000;

var main = app.resource(require('./controllers/main'));
var forums = app.resource('forums', require('./controllers/forum'));
var threads = app.resource('threads', require('./controllers/thread'));
forums.add(threads);

app.listen(_PORT);
console.log(`Listening on ${_PORT}`);

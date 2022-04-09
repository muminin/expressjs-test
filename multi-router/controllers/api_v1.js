var express = require('express');
var apiV1 = express.Router();

apiV1.get('/', function (req, res) {
    res.send('Hello from APIv1');
});

apiV1.get('/users', function (req, res) {
    res.send('List from APIv1');
});

module.exports = apiV1;
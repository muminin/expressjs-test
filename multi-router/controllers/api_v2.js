var express = require('express');
var apiV2 = express.Router();

apiV2.get('/', function (req, res) {
    res.send('Hello from APIv2');
});

apiV2.get('/users', function (req, res) {
    res.send('List from APIv2');
});

module.exports = apiV2;
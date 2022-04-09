var express = require('express');
var app = module.exports = express();

app.use('/api/v1', require('./controllers/api_v1'));
app.use('/api/v2', require('./controllers/api_v2'));

app.get('/', function (req, res) {
    res.send("hello route");
});

// istanbul ignore text
if (!module.parent) {
    app.listen(3000);
    console.log('Started on PORT 3000');
}
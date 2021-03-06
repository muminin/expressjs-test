/**
 * Module dependencies.
 */

var express = require('express');
var app = express();

var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
const chalk = require('chalk');

var site = require('./site');
var post = require('./post');
var user = require('./user');

var _PORT = 1234;

module.exports = app;

// Config

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

/* istanbul ignore next */
if (!module.parent) {
    app.use(logger('dev'));
}

app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// General

app.get('/', site.index);

// User

app.get('/users', user.list);
app.all('/user/:id/:op?', user.load);
app.get('/user/:id', user.view);
app.get('/user/:id/view', user.view);
app.get('/user/:id/edit', user.edit);
app.put('/user/:id/edit', user.update);

// Posts

app.get('/posts', post.list);

/* istanbul ignore next */
if (!module.parent) {
    app.listen(_PORT);
    console.log(chalk.blue(`Express started on port ${_PORT}`));
}
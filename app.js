'use strict';
const fs = require('fs');
const readline = require('readline');
const rs = fs.ReadStream('./fuji-popu.csv');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
const map = new Map();

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const users = require('./routes/users');

const app = express();

// 登山者数の読み込み
rl.on('line', (lineString) => {
  const columns = lineString.split(',');
  const year = parseInt(columns[0]);
  const month = parseInt(columns[1]);
  const number = parseInt(columns[2]);
  const week = columns[3];
  const yoshida = parseInt(columns[4]);
  const subashiri = parseInt(columns[5]);
  const gotenba = parseInt(columns[6]);
  const fujinomiya = parseInt(columns[7]);
  const popu = parseInt(columns[8]);

if (year === 2017 && month === 8 && number === 4 && week === "月"){
  console.log(year);
  console.log(month);
  console.log(number);
  console.log(week);
  console.log(yoshida);
  console.log(subashiri);
  console.log(gotenba);
  console.log(fujinomiya);
  console.log(popu);
}

});
rl.resume();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;


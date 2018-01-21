'use strict';
const express = require('express');
const http = require('http');
var router = express.Router();



const fs = require('fs');
const readline = require('readline');
const rs = fs.ReadStream('./fuji-popu.csv');
const rl = readline.createInterface({ 'input': rs, 'output': {} });
const map = new Map();

// 投稿内容の表示
router.post('/', function(req, res, next) {
  res.render('result');
});

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

module.exports = router;
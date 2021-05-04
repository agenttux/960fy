'use strict';

var board1 = Chessboard('board1');
var data = require('./960.json');
// console.log(data[222].Chess960FEN); 

var rn = require('random-number');
var gen = rn.generator({
  min: 0,
  max: 959,
  integer: true
});

var num = gen();
var fenString = data[num].Chess960FEN;
board1.position(fenString);
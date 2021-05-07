'use strict';

var chess = require('../node_modules/@chrisoakman/chessboardjs/dist/chessboard-1.0.0.min.js');
var board1 = Chessboard('board1');
var data = require('./960.json');
var clipboard = require('clipboard');
var fenText = document.getElementById("fenText");
var posNumInput = document.getElementById("posNumInput");

var fenString;

// generate random 960 position
var rn = require('random-number');
var gen = rn.generator({
  min: 0,
  max: 959,
  integer: true
});

// function to set the board to a random 960 position
function setRandomPos() {
  var num = gen();
  fenString = data[num].Chess960FEN;
  board1.position(fenString);
  fenText.value = fenString;
  posNumInput.value = num;
}

// initially set board to random 960 position
setRandomPos();

// on random button click, get new random position
$('#genRandomButton').on('click', function () {
  setRandomPos();
});

$('#analyzeButton').on('click', function () {
  window.open('https://lichess.org/analysis/chess960/' + fenString);
});

$('#gitButton').on('click', function () {
  window.open('https://github.com/agenttux/960fy/');
});

posNumInput.addEventListener('change', function () {
  try {
    fenString = data[posNumInput.value].Chess960FEN;
  } catch (e) {
    $('#illegalPos').show();
    return;
  }
  board1.position(fenString);
  fenText.value = fenString;
  if ($('#illegalPos').is(":visible")) {
    $('#illegalPos').hide();
  }
});

new clipboard('.copyButton');
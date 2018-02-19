/* eslint-disable semi */

var helpers = require('./helpers');
var part = require('./csce322Homework02Part02');

var hands = helpers.readDominoesFile('test.hands.doc');
var trains = helpers.readDominoesFile('test.trains.doc');
var before = trains[0].slice(0);
console.log(before);
var theFunction = part.onePlayerManyMoves(before);
var after = theFunction(hands[0].slice(0));
console.log(after);

var helpers = require( './helpers' );
var part = require( './csce322Homework02Part04' );

var hands = helpers.readDominoesFile( 'test.hands.doc' );
var trains = helpers.readDominoesFile( 'test.trains.doc' );
var before = trains.slice( 0 );
var theFunction = part.manyPlayersManyMoves( before );
var after = theFunction( hands.slice( 0 ) );
console.log( after );

/* eslint-disable no-unused-vars, semi */

module.exports = {
  manyPlayersManyMoves: manyPlayersManyMoves
}

var helpers = require('./helpers');

function manyPlayersManyMoves (trains) {
  function whatever (hands) {
    //  console.log('Begin train.');
    //  console.log(trains);
    //  console.log('End train.');

    for (var i = 0; i < hands.length; i++) {
      var hand = hands[i];
      var train = trains[i];

      for (var j = 0; j < hand.length; j++) {
        var domino = hand[j];
        if (domino[1] === train[0][0]) {
          train.unshift(domino);
          hand.splice(j, 1);
          j = -1;
        } else if (domino[0] === train[0][0]) {
          domino = helpers.flip(domino);
          train.unshift(domino);
          hand.splice(j, 1);
          j = -1;
        } else if (domino[0] === train[train.length - 1][1]) {
          train.push(domino);
          hand.splice(j, 1);
          j = -1;
        } else if (domino[1] === train[train.length - 1][1]) {
          domino = helpers.flip(domino);
          train.push(domino);
          hand.splice(j, 1);
          j = -1;
        }
      }
    }

    //  console.log('Begin hand.');
    //  console.log(hands);
    //  console.log('End hand.');

    return trains;
  }
  return whatever;
}

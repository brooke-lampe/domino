/* eslint-disable no-unused-vars, semi */

module.exports = {
  onePlayerManyMoves: onePlayerManyMoves
}

var helpers = require('./helpers');

function onePlayerManyMoves (train) {
  function whatever (hand) {
    //  console.log('Begin train.');
    //  console.log(train);
    //  console.log('End train.');

    for (var i = 0; i < hand.length; i++) {
      var domino = hand[i];
      if (domino[1] === train[0][0]) {
        train.unshift(domino);
        hand.splice(i, 1);
        i = -1;
      } else if (domino[0] === train[0][0]) {
        domino = helpers.flip(domino);
        train.unshift(domino);
        hand.splice(i, 1);
        i = -1;
      } else if (domino[0] === train[train.length - 1][1]) {
        train.push(domino);
        hand.splice(i, 1);
        i = -1;
      } else if (domino[1] === train[train.length - 1][1]) {
        domino = helpers.flip(domino);
        train.push(domino);
        hand.splice(i, 1);
        i = -1;
      }
    }

    //  console.log('Begin hand.');
    //  console.log(hand);
    //  console.log('End hand.');

    return train;
  }

  return whatever;
}

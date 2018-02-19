/* eslint-disable no-unused-vars, semi */

module.exports = {
  onePlayerOneMove: onePlayerOneMove
}

var helpers = require('./helpers');

function onePlayerOneMove (train) {
  function whatever (hand) {
    //  console.log('Begin train.');
    //  console.log(train);
    //  console.log('End train.');

    for (var domino of hand) {
      if (domino[1] === train[0][0]) {
        train.unshift(domino);
        break;
      } else if (domino[0] === train[0][0]) {
        domino = helpers.flip(domino);
        train.unshift(domino);
        break;
      } else if (domino[0] === train[train.length - 1][1]) {
        train.push(domino);
        break;
      } else if (domino[1] === train[train.length - 1][1]) {
        domino = helpers.flip(domino);
        train.push(domino);
        break;
      }
    }

    //  console.log('Begin hand.');
    //  console.log(hand);
    //  console.log('End hand.');

    return train;
  }

  return whatever;
}

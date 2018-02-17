module.exports = {
    onePlayerOneMove: onePlayerOneMove
}

var helpers = require('./helpers');

function onePlayerOneMove(train) {

	function whatever(hand) {

		console.log("This is the train.");
		console.log(train);

		for (domino of hand) {
			if (domino[1] === train[0][0] {
				train.prepend(domino);
			} else if (domino[0] === train[0][0] {
				domino = flip(domino);
				train.prepend(domino);
			} else if (domino[0] === train[train.length - 1][1] {
				train.append(domino);
			} else if (domino[1] === train[train.length - 1][1] {
				domino = flip(domino);
				train.append(domino);
			}
		}

		console.log("This is the hand.");
		console.log(hand)
		console.log("End hand.");

		return train;
    }

    return whatever;
}

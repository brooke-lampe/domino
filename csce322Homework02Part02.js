module.exports = {
    onePlayerManyMoves: onePlayerManyMoves
}

var helpers = require( './helpers' );

function onePlayerManyMoves( train ){
    function whatever( hand ){
	return train;
    }
    return whatever;
}

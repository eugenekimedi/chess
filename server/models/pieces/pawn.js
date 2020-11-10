const Piece = require('../pieces/piece.js');

class Pawn extends Piece {
    constructor(name, color) {
        super(name, color);
    }
}

module.exports = Pawn;

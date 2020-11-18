const Piece = require('../pieces/piece.js');

class Pawn extends Piece {
    constructor(name, color) {
        super(name, color);
        this.possibleMoves = []
    }

    calculatePossibleMoves() {
        if (this.color === "white") {
            if (this.hasMoved) {
                this.possibleMoves = [-8]
            } else {
                this.possibleMoves = [-8, -16]
            }
        } else {
            if (this.hasMoved) {
                this.possibleMoves = [8]
            } else {
                this.possibleMoves = [8, 16]
            }
        }
    }
}

module.exports = Pawn;

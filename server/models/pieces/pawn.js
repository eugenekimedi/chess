const Piece = require('../pieces/piece.js');

class Pawn extends Piece {
    constructor(name, color, position) {
        super(name, color, position);
        this.possibleMoves = []
    }

    calculatePossibleMoves() {
        if (this.color === "white") {
            if (this.position[1] != 8) {
                if (this.hasMoved) {
                    this.possibleMoves = [-8]
                } else {
                    this.possibleMoves = [-8, -16]
                }
            }
        } else {
            if (this.position[1] != 1) {
                if (this.hasMoved) {
                    this.possibleMoves = [8]
                } else {
                    this.possibleMoves = [8, 16]
                }
            }
        }
    }
}

module.exports = Pawn;

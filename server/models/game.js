const Pawn = require("./pieces/pawn")

class Game {
    constructor(player1, player2) {
        this.pieces = {
            whitePawn: new Pawn("pawn", "white"),
            blackPawn: new Pawn("pawn", "black")
        };
        this.gameState = {
            state: "active",
            player1: {
                name: player1,
                color: "white",
                graveyard: []
            },
            player2: {
                name: player2,
                color: "black",
                graveyard: []
            },
            turn: "white"
        };
        this.board = [
            {position: "a8", color: "white", piece: {}},
            {position: "b8", color: "black", piece: {}},
            {position: "c8", color: "white", piece: {}},
            {position: "d8", color: "black", piece: {}},
            {position: "e8", color: "white", piece: {}},
            {position: "f8", color: "black", piece: {}},
            {position: "g8", color: "white", piece: {}},
            {position: "h8", color: "black", piece: {}},
            {position: "a7", color: "white", piece: this.pieces.blackPawn},
            {position: "b7", color: "black", piece: this.pieces.blackPawn},
            {position: "c7", color: "white", piece: this.pieces.blackPawn},
            {position: "d7", color: "black", piece: this.pieces.blackPawn},
            {position: "e7", color: "white", piece: this.pieces.blackPawn},
            {position: "f7", color: "black", piece: this.pieces.blackPawn},
            {position: "g7", color: "white", piece: this.pieces.blackPawn},
            {position: "h7", color: "black", piece: this.pieces.blackPawn},
            {position: "a6", color: "white", piece: {}},
            {position: "b6", color: "black", piece: {}},
            {position: "c6", color: "white", piece: {}},
            {position: "d6", color: "black", piece: {}},
            {position: "e6", color: "white", piece: {}},
            {position: "f6", color: "black", piece: {}},
            {position: "g6", color: "white", piece: {}},
            {position: "h6", color: "black", piece: {}},
            {position: "a5", color: "white", piece: {}},
            {position: "b5", color: "black", piece: {}},
            {position: "c5", color: "white", piece: {}},
            {position: "d5", color: "black", piece: {}},
            {position: "e5", color: "white", piece: {}},
            {position: "f5", color: "black", piece: {}},
            {position: "g5", color: "white", piece: {}},
            {position: "h5", color: "black", piece: {}},
            {position: "a4", color: "white", piece: {}},
            {position: "b4", color: "black", piece: {}},
            {position: "c4", color: "white", piece: {}},
            {position: "d4", color: "black", piece: {}},
            {position: "e4", color: "white", piece: {}},
            {position: "f4", color: "black", piece: {}},
            {position: "g4", color: "white", piece: {}},
            {position: "h4", color: "black", piece: {}},
            {position: "a3", color: "white", piece: {}},
            {position: "b3", color: "black", piece: {}},
            {position: "c3", color: "white", piece: {}},
            {position: "d3", color: "black", piece: {}},
            {position: "e3", color: "white", piece: {}},
            {position: "f3", color: "black", piece: {}},
            {position: "g3", color: "white", piece: {}},
            {position: "h3", color: "black", piece: {}},
            {position: "a2", color: "white", piece: this.pieces.whitePawn},
            {position: "b2", color: "black", piece: this.pieces.whitePawn},
            {position: "c2", color: "white", piece: this.pieces.whitePawn},
            {position: "d2", color: "black", piece: this.pieces.whitePawn},
            {position: "e2", color: "white", piece: this.pieces.whitePawn},
            {position: "f2", color: "black", piece: this.pieces.whitePawn},
            {position: "g2", color: "white", piece: this.pieces.whitePawn},
            {position: "h2", color: "black", piece: this.pieces.whitePawn},
            {position: "a1", color: "white", piece: {}},
            {position: "b1", color: "black", piece: {}},
            {position: "c1", color: "white", piece: {}},
            {position: "d1", color: "black", piece: {}},
            {position: "e1", color: "white", piece: {}},
            {position: "f1", color: "black", piece: {}},
            {position: "g1", color: "white", piece: {}},
            {position: "h1", color: "black", piece: {}}
        ];

    }

    move(oldPosition, newPosition){
        const pieceToMove = this.board[oldPosition].piece
        const possibleMoves = pieceToMove.calculatePossibleMoves()
        if (possibleMoves.contains(oldPosition - newPosition)) {
            this.board[newPosition].piece = pieceToMove
            this.board[oldPosition].piece = {}
        }
    }
}

module.exports = Game;
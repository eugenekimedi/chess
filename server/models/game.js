const Pawn = require("./pieces/pawn")

class Game {
    constructor(player1, player2) {
        this.pieces = {
            whitePawns: this.createPawns("white"),
            blackPawns: this.createPawns("black")
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
            {position: "a7", color: "white", piece: this.pieces.blackPawns[0]},
            {position: "b7", color: "black", piece: this.pieces.blackPawns[1]},
            {position: "c7", color: "white", piece: this.pieces.blackPawns[2]},
            {position: "d7", color: "black", piece: this.pieces.blackPawns[3]},
            {position: "e7", color: "white", piece: this.pieces.blackPawns[4]},
            {position: "f7", color: "black", piece: this.pieces.blackPawns[5]},
            {position: "g7", color: "white", piece: this.pieces.blackPawns[6]},
            {position: "h7", color: "black", piece: this.pieces.blackPawns[7]},
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
            {position: "a2", color: "white", piece: this.pieces.whitePawns[0]},
            {position: "b2", color: "black", piece: this.pieces.whitePawns[1]},
            {position: "c2", color: "white", piece: this.pieces.whitePawns[2]},
            {position: "d2", color: "black", piece: this.pieces.whitePawns[3]},
            {position: "e2", color: "white", piece: this.pieces.whitePawns[4]},
            {position: "f2", color: "black", piece: this.pieces.whitePawns[5]},
            {position: "g2", color: "white", piece: this.pieces.whitePawns[6]},
            {position: "h2", color: "black", piece: this.pieces.whitePawns[7]},
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

    getPieceAtIndex(index) {
        return this.board[index].piece;
    }

    move(oldPosition, newPosition){
        const pieceToMove = this.board[oldPosition].piece
        const possibleMoves = pieceToMove.getPossibleMoves()
        const moveAsInt = newPosition - oldPosition
        if (possibleMoves.includes(moveAsInt)) {
            this.board[newPosition].piece = pieceToMove
            this.board[newPosition].piece.possibleMoves = [];
            this.board[newPosition].piece.position = this.board[newPosition].position;
            this.board[oldPosition].piece = {}
        }
    }

    createPawns(color) {
        const pawns = []
        const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
        const row = color === "white" ? "2" : "7"
        for (let i = 0; i < columns.length; i++) {
            let pawn = new Pawn("pawn", color, columns[i] + row)
            pawns.push(pawn)
        }
        return pawns
    }
}

module.exports = Game;
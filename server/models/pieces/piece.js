class Piece {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }
    
    move(newPosition) {
        this.position = newPosition;
    }
}

module.exports = Piece;

class Piece {
    constructor(name, color, position) {
        this.name = name;
        this.color = color;
        this.position = position;
        this.hasMoved = false;
    }
}

module.exports = Piece;

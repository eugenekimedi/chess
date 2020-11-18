const assert = require('assert');
const Piece = require('../pieces/piece.js');


describe('Piece', function () {

    beforeEach(function () {
        piece = new Piece("piece", "white", "a2");
    });

    it('should initialize with a name', function() {
        const expected = "piece"
        assert.deepStrictEqual(piece.name, expected);
    });

    it('should initialize with a color', function() {
        const expected = "white"
        assert.deepStrictEqual(piece.color, expected);
    });

    it('should initialize with a position', function() {
        const expected = "a2"
        assert.strictEqual(piece.position, expected)
    });

    it('should initialize with a hasMoved flag', function() {
        assert.strictEqual(piece.hasMoved, false)
    });
});

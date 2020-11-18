const assert = require('assert');
const Pawn = require('../pieces/pawn.js');


describe('Pawn', function () {

    beforeEach(function () {
        pawn = new Pawn("pawn", "white");
    });

    it("should initialize with an array of possible moves", function() {
        const expected = []
        assert.deepStrictEqual(pawn.possibleMoves, expected);
    });

    it("should be able to figure out it's initial possible moves based on its color - white", function() {
        const expected = [-8, -16]
        pawn.calculatePossibleMoves()
        assert.deepStrictEqual(pawn.possibleMoves, expected);
    });

    it("should be able to figure out it's initial possible moves based on its color - black", function() {
        blackPawn = new Pawn("pawn", "black");

        const expected = [8, 16]
        blackPawn.calculatePossibleMoves()
        assert.deepStrictEqual(blackPawn.possibleMoves, expected);
    });

    it("should be able to figure out it's possible move - non initial", function() {
        pawn.hasMoved = true;
        const expected = [-8]
        pawn.calculatePossibleMoves()
        assert.deepStrictEqual(pawn.possibleMoves, expected);
    });

    it("should be able to figure out it's possible moves - non initial black", function() {
        blackPawn = new Pawn("pawn", "black");
        blackPawn.hasMoved = true;
        const expected = [8]
        blackPawn.calculatePossibleMoves()
        assert.deepStrictEqual(blackPawn.possibleMoves, expected);
    });
});

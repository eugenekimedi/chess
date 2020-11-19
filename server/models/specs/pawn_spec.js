const assert = require('assert');
const Pawn = require('../pieces/pawn.js');


describe('Pawn', function () {

    beforeEach(function () {
        pawn = new Pawn("pawn", "white", "b2");
    });

    it("should initialize with an array of possible moves", function() {
        const expected = []
        assert.deepStrictEqual(pawn.possibleMoves, expected);
    });


    it("should be able to getPossibleMoves()", function() {
        const expected = [-8, -16]
        assert.deepStrictEqual(pawn.getPossibleMoves(), expected);
    });


    it("should be able to figure out it's initial possible moves based on its color - white", function() {
        const expected = [-8, -16]
        assert.deepStrictEqual(pawn.getPossibleMoves(), expected);
    });

    it("should be able to figure out it's initial possible moves based on its color - black", function() {
        blackPawn = new Pawn("pawn", "black", "a7");

        const expected = [8, 16]
        assert.deepStrictEqual(blackPawn.getPossibleMoves(), expected);
    });

    it("should be able to figure out it's possible move - non initial", function() {
        pawn.hasMoved = true;
        const expected = [-8]
        assert.deepStrictEqual(pawn.getPossibleMoves(), expected);
    });

    it("should be able to figure out it's possible moves - non initial black", function() {
        blackPawn = new Pawn("pawn", "black", "a7");
        blackPawn.hasMoved = true;
        const expected = [8]
        assert.deepStrictEqual(blackPawn.getPossibleMoves(), expected);
    });

    it("should not be able to move if at the end of the board - white", function() {
        whitePawnAtEnd = new Pawn("pawn", "white", "a8")
        whitePawnAtEnd.hasMoved = true;
        const expected = [];
        assert.deepStrictEqual(whitePawnAtEnd.getPossibleMoves(), expected)
    })

    it("should not be able to move if at the end of the board - black", function() {
        blackPawnAtEnd = new Pawn("pawn", "black", "a1")
        blackPawnAtEnd.hasMoved = true;
        const expected = [];
        assert.deepStrictEqual(blackPawnAtEnd.getPossibleMoves(), expected)
    })
});

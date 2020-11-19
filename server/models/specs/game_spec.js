const assert = require('assert');
const Game = require('../game.js');
const Pawn = require('../pieces/pawn.js')


describe('Game', function () {

  beforeEach(function () {
    game = new Game("John", "Jane");
  });

  it('should initialize with players', function() {
    assert.deepStrictEqual(game.gameState.player1.name, "John");
    assert.deepStrictEqual(game.gameState.player2.name, "Jane");

  });

  it('should initialize with a board of 64 objects', function() {
    assert.deepStrictEqual(game.board.length, 64);
  });

  it('should initialize an array of white pawns', function() {
    const expected = [
        new Pawn("pawn", "white", "a2"),
        new Pawn("pawn", "white", "b2"),
        new Pawn("pawn", "white", "c2"),
        new Pawn("pawn", "white", "d2"),
        new Pawn("pawn", "white", "e2"),
        new Pawn("pawn", "white", "f2"),
        new Pawn("pawn", "white", "g2"),
        new Pawn("pawn", "white", "h2")
    ]
    assert.deepStrictEqual(game.pieces.whitePawns, expected);
  });

  it('should initialize an array of black pawns', function() {
    const expected = [
        new Pawn("pawn", "black", "a7"),
        new Pawn("pawn", "black", "b7"),
        new Pawn("pawn", "black", "c7"),
        new Pawn("pawn", "black", "d7"),
        new Pawn("pawn", "black", "e7"),
        new Pawn("pawn", "black", "f7"),
        new Pawn("pawn", "black", "g7"),
        new Pawn("pawn", "black", "h7")
    ]
    assert.deepStrictEqual(game.pieces.blackPawns, expected);
  });

  it('should initialize with 2 rows of pawns', function() {
    const pawnStartingPositions = [8, 9, 10, 11, 12, 13, 14, 15, 48, 49, 50, 51, 52, 53, 54, 55]
    for (position of pawnStartingPositions) {
        assert.strictEqual(game.board[position].piece instanceof Pawn, true)
    }
  })

  it('should be able to move a pawn 1 square up', function() {
      game.move(48, 40)
      const oldPosition = game.board[48].piece
      const newPosition = game.board[40].piece
      assert.deepStrictEqual(oldPosition, {})
      assert.deepStrictEqual(newPosition, new Pawn("pawn", "white", "a3" ))
  })

  it('should be able to move a pawn 2 squares up as initial move', function() {
    game.move(48, 32)
    const oldPosition = game.board[48].piece
    const newPosition = game.board[32].piece
    assert.deepStrictEqual(oldPosition, {})
    assert.deepStrictEqual(newPosition, new Pawn("pawn", "white", "a4" ))
})
});

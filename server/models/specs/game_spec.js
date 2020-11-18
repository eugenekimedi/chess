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

  it('should initialize a white pawn pice', function() {
    pawn = new Pawn("pawn", "white");
    assert.deepStrictEqual(game.pieces.whitePawn, pawn);
  });

  it('should initialize a white pawn pice', function() {
    pawn = new Pawn("pawn", "black");
    assert.deepStrictEqual(game.pieces.blackPawn, pawn);
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
      assert.deepStrictEqual(newPosition, new Pawn("pawn", "white", ))
  })
});

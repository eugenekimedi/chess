const assert = require('assert');
const Piece = require('../pieces/piece.js');


describe('Piece', function () {

  beforeEach(function () {
    piece = new Piece("piece", "a1");
  });

  it('should initialize with a name', function () {
    const expected = "piece"
    assert.deepStrictEqual(piece.name, expected);
  });

  it('should initialize with a position', function () {
    const expected = "a1"
    assert.deepStrictEqual(piece.position, expected);
  });

  it('should be able to move', function () {
    const expected = "a2"
    piece.move("a2")
    assert.deepStrictEqual(piece.position, expected);
  });
});

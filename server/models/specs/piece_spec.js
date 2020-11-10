const assert = require('assert');
const Piece = require('../pieces/piece.js');


describe('Piece', function () {

  beforeEach(function () {
    piece = new Piece("piece", "white");
  });

  it('should initialize with a name', function() {
    const expected = "piece"
    assert.deepStrictEqual(piece.name, expected);
  });

  it('should initialize with a color', function() {
    const expected = "white"
    assert.deepStrictEqual(piece.color, expected);
  });
});

const { pairingTest } = require('../src/pairing-test');
const Game = require('../src/Game')

let game

test('a once failing test, now passing', () => {
  expect(pairingTest()).toBe(true);
});

describe('game', function() {
  beforeEach(function() {
    game = new Game
  })

  it('has a hash of letter values', function() {
    expect(game.letterValues).toBeDefined()
  })

  it('has letter values defined in its hash', function() {
    expect(game.size(game.letterValues)).toEqual(26)
  })
})
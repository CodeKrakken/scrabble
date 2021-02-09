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

  it('has a bag of letters', function() {
    expect(game.bag).toBeDefined()
  })

  it('can remove a letter from the bag', function() {
    game.pick(1)
    expect(game.bag.length).toEqual(97)
  })

  it('has a rack', function() {
    expect(game.rack).toBeDefined()
  })

  it('puts a letter from the bag into the rack', function() {
    game.pick(1)
    expect(game.rack.length).toBeGreaterThan(0)
  })

  it('can fetch the score of a letter', function() {
    expect(game.getValue('E')).toEqual(1)
  })

  it('can calculate the score of a word', function() {
    expect(game.score('GUARDIAN')).toEqual(10)
  })

  it('can return an array of real anagrams', function() {
    expect(game.makeWords('BE')).toEqual(['BE'])
    expect(game.makeWords('GET')).toEqual(['GET', 'TEG'])
  })

  it('has a dictionary array', function() {
    expect(game.dictionary).toBeDefined()
  })

  it('has text in its dictionary file', function() {
    expect(game.dictionary).not.toEqual('')
  })

  it('can tell a real word from a false one according to its dictionary', function() {
    expect(game.checkWord('SPANNER')).toEqual(true)
    expect(game.checkWord('BUNGE')).toEqual(false)
  })

  it('returns longest valid word from letter selection', function() {
    expect(game.returnLongest('CRADDLESHUFT')).toEqual('leg')
  })

})
fs = require('fs')

function Game(){
  this.letterValues = {
    'A' : 1,
    'B' : 3,
    'C' : 3,
    'D' : 2,
    'E' : 1,
    'F' : 4,
    'G' : 2,
    'H' : 4,
    'I' : 1,
    'J' : 8,
    'K' : 5,
    'L' : 1,
    'M' : 3,
    'N' : 1,
    'O' : 1,
    'P' : 3,
    'Q' : 10,
    'R' : 1,
    'S' : 1,
    'T' : 1,
    'U' : 1,
    'V' : 4,
    'W' : 4,
    'X' : 8,
    'Y' : 4,
    'Z' : 10
  },
  this.bag = 'EEEEEEEEEEEEAAAAAAAAAIIIIIIIIIOOOOOOOONNNNNNRRRRRRTTTTTTLLLLSSSSUUUUDDDDGGGBBCCMMPPFFHHVVWWYYKJXQZ'.split('')
  this.rack = []
  this.dictionary = fs.readFileSync('dictionary.txt', 'utf8').split('\n')
}

Game.prototype.size = function(object) {
  var size = 0,
    key;
  for (key in object) {
    if (object.hasOwnProperty(key)) size++;
  }
  return size;
};

Game.prototype.pick = function(howMany) {
  for(i=0;i<howMany;i++) {
    index = Math.floor(Math.random() * this.bag.length)
    this.rack.push(this.bag.splice(index, 1)[0])
  }
  console.log(this.rack)
}

Game.prototype.makeWords = function(nonWord) {
  nonWord = nonWord.split("");
  heldWord = nonWord.slice(0, nonWord.length)
  let anagrams = []
  for (let h = nonWord.length; h >= 0; h--) {
    for (let i = 0; i < nonWord.length; i++) {
      for (let j = 0; j < nonWord.length; j++) {
        newWord = this.swapLetters(nonWord, i, j)
        console.log(newWord)
        // if (this.checkWord(newWord)) { 
          anagrams.push(newWord) 
        // }
      }
    }
    nonWord = heldWord.slice(0, heldWord.length)
    nonWord.splice(h, 1)
  }
  
  return this.output(anagrams)
}

Game.prototype.swapLetters = function(nonWord, i, j) {

  if (i != j) {
      let holder = nonWord[i];
      nonWord[i] = nonWord[j];
      nonWord[j] = holder;
  }
  return nonWord.join("");
}

Game.prototype.checkWord = function(word) {
  return this.dictionary.includes(word.toLowerCase())
}

Game.prototype.returnLongest = function(word) {
  words = this.makeWords(word)
  return words
}

Game.prototype.score = function(word) {
  total = 0
  wordArray = word.split('')
  wordArray.forEach(letter => {
    total += this.letterValues[letter]
  })
  return this.output(total)
}

Game.prototype.getValue = function(letter) {
  value = this.letterValues[letter]
  return this.output(value)
}

Game.prototype.output = function(data) {
  console.log(data)
  return data
}

module.exports = Game

//adds colors to the terminal
var colors = require('colors');
//inquire the package
//create a constructer that displays the letter guessed or "-"
var Letter = function (word, guess) {
    this.word = word;
    //auto to false
    this.guess = guess;
    this.compareGuess = function () {
        for (let i = 0; i < this.word.length; i++) {
            if (this.guess === this.word[i]) {
                return true;
            }
        }
        return false;
    }
};
Letter.prototype.printStats = function () {
    //return letter is guessed
    if (this.word === " ") {
        this.guess = true;
        return "";
    }
    if (this.guess = false) {
        return "_";
    }
    else {
        return this.word;
    }
}
//test
var test = new Letter("a", true);
console.log(test.printStats().rainbow);
//export the constructor
module.exports = Letter;
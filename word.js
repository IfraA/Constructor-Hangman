//require letter.js
var Letter = require("./letter.js");
//an array containing the words to be guessed
function Word() {
    this.wordArray = [
        "casablanca",
        "taxi driver",
        "the godfather",
        "citizen kane",
        "pulp fiction",
        "braveheart",
        "goodfellas",
        "jaws",
        "psycho",
        "forrest gump",
        "rocky",
        "titanic",
        "gladiator",
        "jurassic park",
        "raging bull",
        "vertigo",
        "lord of the rings",
        "flight club",
        "inception",
        "the graduate",

    ];
    this.wordHidden = [];
    this.word = "";
    //function that selects the random word from the array
    this.getWord = function () {
        this.word = this.wordArray[Math.floor(Math.random() * 20)];
        return this.word;
        // console.log(this.getWord);
    };

    this.getWordHidden = function (word) {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === " ") {
                this.wordHidden[i] = " ";
            } else {
                this.wordHidden[i] = "_";
            }
        }
        return this.wordHidden;
    };
    this.compareGuess = function (guess, word) {
        this.guess = guess;
        this.word = word;
        var letter = new Letter(this.guess, this.word);
        return letter.compareGuess();

    };
}

module.exports = Word;
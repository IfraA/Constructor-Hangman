//inquire the package
var inquirer = require("inquirer");

//create a constructer that display the letter guessed
var Letter = function (character, boolean) {
    this.character = character;
    this.guessed = boolean;
}
Letter.prototype.printStats = function () {
    //return character is guessed
    if (this.guessed === true) {
        console.log(this.character)
        return this.character;
    }
    else {
        console.log("-");
        return "-";

    }
}
Letter.prototype.corrGuess = function (userKey) {
    if (userKey === this.character)
        (this.guessed == true);
}
var test = new Letter("b", true);
console.log(test.printStats());
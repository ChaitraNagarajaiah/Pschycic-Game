
var Wins = 0;
var losses = 0;
var Guesses_left = 9;

var guessChoices = [];


var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


document.onkeyup = function () {
    var userguess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userguess);


    var computerGuess = options[Math.floor(Math.random() * options.length)];
    console.log(computerGuess);

    if (userguess === computerGuess) {
        console.log('true');
        Wins++;
        Guesses_left = 9;
        guessChoices = [];
    }

    else {
        console.log('false');
        Guesses_left--;

        guessChoices.push(userguess);

        if (Guesses_left == 0) {
            losses++;
            Guesses_left = 9;
            guessChoices = [];
        }
        console.log(Guesses_left);
    }

    document.getElementById("Wins").innerHTML = Wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guessLeft").innerHTML = Guesses_left;
    document.getElementById("guessChoices").innerHTML = guessChoices;

}



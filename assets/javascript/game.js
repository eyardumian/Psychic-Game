var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];


  document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var computerLetterChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    //add new guesses to array
    guessesSoFar.push(userGuess);

    if(userGuess === computerLetterChoice){
        wins++;
        alert("Congrats! You won!");
        guessesLeft = 9;
        guessesSoFar.length = 0;
        computerLetterChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    else {
      guessesLeft --;

    }

    if(guessesLeft === 0){
        losses++;
        alert("You lost!");
        guessesLeft = 9;
        guessesSoFar.length = 0;
        computerLetterChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    document.querySelector("#wins").innerHTML = "Wins: " + wins;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    document.querySelector("#guessesLeft").innerHTML = "Guesses left:" + guessesLeft;
    document.querySelector("#guessesSoFar").innerHTML = "Your guesses so far:" + guessesSoFar;
  }

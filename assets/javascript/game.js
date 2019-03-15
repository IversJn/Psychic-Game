var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var guesslist = " ";
var counter =0;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

var userChoiceText = document.getElementById("userchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesleft-text");
var guesslistText = document.getElementById("guesslist-text");


document.onkeyup = function(event){ 
    var userGuess = event.key;
    console.log(computerGuess);
    if(guessesleft != 0){
        counter +=1;
        if (computerGuess === userGuess){
            wins++;
            guessesleft = 9;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            guesslist = " ";
        }
        else {
            guessesleft --;
            guesslist += userGuess + " ";
        }
    }
    else{
        guessesleft = 9;
        losses += 1;
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        guesslist = " ";
    }
    
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesLeftText.textContent = "guesses left: " + guessesleft;
        guesslistText.textContent = "guesses: " + guesslist;
    }
    
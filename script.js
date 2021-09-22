var userOption = ["Rock", "Paper", "Scissors"]
var computerOption = ["Rock", "Paper", "Scissors"]
var computerChosenOption = computerOption[Math.floor(Math.random() * computerOption.length)];
var results = confirm("These are the results: play again?");


function startButton() {
    userOption = prompt("Rock, Paper, or Scissors?");
    if (userOption != null) {
        alert(`The computer chose ${computerChosenOption} !`);
        return;

    }
  }
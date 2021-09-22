var userOption = ["Rock", "Paper", "Scissors"]
var computerOption = ["Rock", "Paper", "Scissors"]
var computerChosenOption = computerOption[Math.floor(Math.random() * computerOption.length)];
var scores = ["wins", "losses", "ties"]


  function startButton(computerChosenOption, userOption) {
    userOption = prompt("Rock, Paper, or Scissors?");
      if (computerChosenOption === userOption) {
        alert(`The computer chose ${computerChosenOption} !`);
        var results = confirm(`You both chose the same option: ${scores} play again?`);
      } else if (computerChosenOption !== userOption) {
        alert(`The computer chose ${computerChosenOption} !`);
      } else {
        var results = confirm(`The computer won, here are the scores ${scores} play again?`);
      }
  }


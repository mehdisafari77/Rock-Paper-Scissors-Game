
function startButton() {
    var chosenOption = prompt("Rock, Paper, or Scissors?");
    if (chosenOption != null) {
      document.getElementById("RPS").innerHTML =
      "You chose " + chosenOption + "but the computer chose X?";
    }
  }
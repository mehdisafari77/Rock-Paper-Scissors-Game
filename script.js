var userOption = ["r", "p", "s"];
var computerOption = ["r", "p", "s"];
var computerChosenOption = computerOption[Math.floor(Math.random() * computerOption.length)];
var scores = ["wins", "losses", "ties"];

var wins = 0;
var losses = 0;
var ties = 0;

for (var i = 0; i <10 ; i++) {
    var computerOption = computerChosenOption;
}

function playGame() {
    userOption = prompt("R, P, or S?");
    userOption = userOption.toLowerCase();
    if (userOption === "r" || userOption === "p" || userOption === "s") {
        alert(`The computer chose ${computerChosenOption} !`);

        if (( userOption === "r" && computerChosenOption === "s") ||
        (userOption === "s" && computerChosenOption === "p") ||
        (userOption === "p" && computerChosenOption === "r")) {
            wins++;
            alert(`You have won ${wins} time(s)!`);
        }  else if (userOption === computerChosenOption) {
            ties++
            alert(`You have tied ${ties} time(s).`);
        } else if (userOption !== computerChosenOption){
            losses++
            alert(`You have lost ${losses} time(s).`);
        } else {
            alert('Pleas enter only R, P, or S')
        }
    }
    alert(`Total wins: ${wins} \nTotal ties: ${ties} \nTotal losses: ${losses}`)
    let ifPlayAgain = confirm("Press OK if you want to play again!")
    if (ifPlayAgain) {
        playGame()
    }
}

document.getElementById('wins').innerHTML = wins
document.getElementById('losses').innerHTML = losses
document.getElementById('ties').innerHTML = ties
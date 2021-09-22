
function myFunction() {
    var person = prompt("Rock, Paper, or Scissors?");
    if (person != null) {
      document.getElementById("RPS").innerHTML =
      "Hello " + person + "! How are you today?";
    }
  }
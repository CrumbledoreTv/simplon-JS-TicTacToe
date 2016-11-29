var tab = document.getElementById('tableau');
var cells = tab.getElementsByTagName('td');
var h2 = document.getElementById('turn');
var win = document.getElementById('win');
var score = document.getElementById('score')


var scP1 = 0;
var scP2 = 0;

function reset() {
tab.innerHTML = "";
h2.innerHTML = "";
win.innerHTML = "";
win.style.visibility = "hidden";

scP1 = 0;
scP2 = 0;
score.innerHTML = "P1 : " +scP1+ " <br> " +" P2 : "+scP2;
play();
}

function play() {
tab.innerHTML = "";
h2.innerHTML = "";
win.innerHTML = "";

  //TABLEAU 3x3
  var nbrelignes = 3;
  var nbreColonnes = 3;
  for (var m = 0; m < nbrelignes; m++) {
      var row = tab.insertRow();
      for (var n = 0; n < nbreColonnes; n++) {
          var cell = row.insertCell();
          cell.onclick = game;
      }
  }

var p1 = true;
var p2 = false;

function game(e) {
    if (e.target.style.color == "blue") {
        e.target.style.color = "blue";

    } else if (e.target.style.color == "red") {
        e.target.style.color = "red";

    } else if (p1) {
        e.target.style.color = "blue";
        e.target.innerHTML = "O";
        h2.innerHTML = "Player 2";
        p1 = false;
        p2 = true;

    } else if (p2) {
        e.target.style.color = "red";
        e.target.innerHTML = "X";
        h2.innerHTML = "Player 1";
        p2 = false;
        p1 = true;
    }
    combinaison(0, 1, 2);
    combinaison(3, 4, 5);
    combinaison(6, 7, 8);
    combinaison(0, 3, 6);
    combinaison(1, 4, 7);
    combinaison(2, 5, 8);
    combinaison(0, 4, 8);
    combinaison(6, 4, 2);
}

function combinaison(a, b, c) {
    if (cells[a].innerHTML == "O" && cells[b].innerHTML == "O" && cells[c].innerHTML == "O") {
        win.style.visibility = "visible";
        win.innerHTML = "Player 1 win !" + "<br>" + win.innerHTML
        scP1++;
        score.innerHTML = "P1 : " +scP1+ " <br> " +" P2 : "+scP2;
    } else if (cells[a].innerHTML == "X" && cells[b].innerHTML == "X" && cells[c].innerHTML == "X") {
        win.style.visibility = "visible";
        win.innerHTML = "Player 2 win !" + "<br>" + win.innerHTML
        scP2++;
        score.innerHTML = "P1 : " +scP1+ " <br> " +" P2 : "+scP2;
    }
}
}

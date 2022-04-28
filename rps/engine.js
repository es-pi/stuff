var giocatore = '';
var computer = '';
var giocatorePunti = 0;
var computerPunti = 0;

document.querySelector("#sasso").addEventListener("click", function () {
  giocatore = "sasso";
  gioco();
});

document.querySelector("#carta").addEventListener("click", function () {
  giocatore = "carta";
  gioco();
});

document.querySelector("#forbici").addEventListener("click", function () {
  giocatore = "forbici";
  gioco();
});

function computerSceglie() {
    computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
      computer = 'sasso';
    } else if (computer == 1) {
      computer = 'carta';
    } else {
      computer = 'forbici';
    }
}

function gioco() {
    computerSceglie();

    if (giocatore == computer) {
        console.log('pareggio! (entrambi hanno scelto '+giocatore+')');
        alert('pareggio! (entrambi hanno scelto '+giocatore+')');
    } else if (giocatore == 'sasso' && computer == 'carta') {
        console.log('CPU sceglie '+computer+' e vince contro ' + giocatore);
        computerPunti++;
    } else if (giocatore == 'carta' && computer == 'forbici') {
        console.log('CPU sceglie '+computer+' e vince contro ' + giocatore);
        computerPunti++;
    } else if (giocatore == 'forbici' && computer == 'sasso') {
        console.log('CPU sceglie '+computer+' e vince contro ' + giocatore);
        computerPunti++;
    } else {
        console.log('P1 sceglie '+giocatore+' e vince contro '+computer);
        giocatorePunti++;
    }

    document.querySelector("#giocatorePunti").innerHTML = giocatorePunti;
    document.querySelector("#computerPunti").innerHTML = computerPunti;
}
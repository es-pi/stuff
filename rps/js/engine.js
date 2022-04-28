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

    let playerVince = 'P1 sceglie <i>'+giocatore+'</i> e <b>vince</b> contro <i>'+computer+'</i>';
    let computerVince = 'CPU sceglie <i>'+computer+'</i> e <b>vince</b> contro <i>'+giocatore+'</i>';
    let draw = 'pareggio! (entrambi hanno scelto '+giocatore+')';

    if (giocatore == computer) {
        console.log(draw);
        document.querySelector("#risultato").innerHTML = draw;
    } else if (giocatore == 'sasso' && computer == 'carta') {
        console.log(computerVince);
        document.querySelector("#risultato").innerHTML = computerVince;
        computerPunti++;
    } else if (giocatore == 'carta' && computer == 'forbici') {
        console.log(computerVince);
        document.querySelector("#risultato").innerHTML = computerVince;
        computerPunti++;
    } else if (giocatore == 'forbici' && computer == 'sasso') {
        console.log(computerVince);
        document.querySelector("#risultato").innerHTML = computerVince;
        computerPunti++;
    } else {
        console.log(playerVince);
        document.querySelector("#risultato").innerHTML = playerVince;
        giocatorePunti++;
    }

    document.querySelector("#giocatorePunti").innerHTML = giocatorePunti;
    document.querySelector("#computerPunti").innerHTML = computerPunti;
}
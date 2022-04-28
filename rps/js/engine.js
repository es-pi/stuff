// inizializzo le variabilii che mi serviranno per il gioco
var giocatore = '';
var computer = '';
var giocatorePunti = 0;
var computerPunti = 0;

// querySelector mi aggancia il bottone e il suo valore
// un Listener resterà in ascolto di ogni possibile evento click scatenato sui bottoni
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

document.querySelector("#mitra").addEventListener("click", function () {
  giocatore = "mitra";
  gioco();
});

// funzione che permette al computer di scegliere una mossa
function computerSceglie() {
    // gli do' la possibilità di scegliere un numero fra 0 e 2
    computer = Math.floor(Math.random() * 3);
    // il numero verrà tradotto con un simbolo fra i tre disponibili
    if (computer == 0) {
      computer = 'sasso';
    } else if (computer == 1) {
      computer = 'carta';
    } else {
      computer = 'forbici';
    }
}

// la logica del gioco è tutta qui!
function gioco() {
    // richiamo la funzione per far scegliere al computer una mossa
    computerSceglie();

    // i messaggi di vittoria, pareggio, sconfitta
    let playerVince = '<span class="reds">Vinci tu!</span><br><i>'+giocatore+'</i> contro <i>'+computer+'</i>';
    let computerVince = '<span class="reds">Vince la CPU!</span><br><i>'+computer+'</i> contro <i>'+giocatore+'</i>';
    let draw = '<span class="reds">pareggio!</span><br>(entrambi hanno scelto <i>'+giocatore+'</i>)';
    let shoot = '<span class="reds">Vinci tu!</span><br>(<i>è un mitra, cosa ti aspettavi?</i>)';

    // la logica viene calcolata con un classico if else. switch non era la scelta migliore in questo caso (si inceppava il pareggio)
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
    } else if (giocatore == 'mitra'){
        console.log(shoot);
        document.querySelector("#risultato").innerHTML = shoot;
        giocatorePunti++;
    } else {
        console.log(playerVince);
        document.querySelector("#risultato").innerHTML = playerVince;
        giocatorePunti++;
    }

    // aggiorna i punteggi dei giocatori e della CPU
    document.querySelector("#giocatorePunti").innerHTML = giocatorePunti;
    document.querySelector("#computerPunti").innerHTML = computerPunti;
}
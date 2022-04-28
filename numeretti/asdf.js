function somma() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var somma = Number(num1) + Number(num2);
    document.getElementById("risultato").innerHTML += somma;
}
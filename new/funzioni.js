function verifica() {
    var nome = document.getElementById('nome').value;
    var indirizzo = document.getElementById('indirizzo').value;
    var numeroDiTelefono = document.getElementById('numeroDiTelefono').value;

    if (nome == '' || indirizzo == '' || numeroDiTelefono == '') {
        alert('Inserire tutti i campi');
    } else {
        console.log(nome,indirizzo,numeroDiTelefono);
    }
}
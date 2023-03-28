
function pGen() {
    let nome = prompt("Scrivi il tuo nome qui, su.", "Nome");
    let cognome = prompt("Scrivi il tuo cognome qui, su.", "Cognome");
    let colorepref = prompt("Ora ci manca il tuo cognome e possiamo darti la migliore delle password ;)", "Colore");
    let numero = Math.floor(Math.random() * 1000);
    if (nome != null) {
        document.getElementById("demo").innerHTML =
            nome + cognome + colorepref + numero;
    }
}

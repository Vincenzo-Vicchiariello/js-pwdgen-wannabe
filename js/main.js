
function pGen() {
    let nome = prompt("Scrivi il tuo nome qui.", "Nome");
    let cognome = prompt("Scrivi il tuo cognome qui, su.", "Cognome");
    let colorepref = prompt("Ci serve il tuo colore preferito, ci siamo quasi!", "Colore");
    let numero1 = prompt("Dicci un numero, grazie.", "Numero");
    let numero2 = prompt("Dicci un altro numeretto e ci siamo, grazie.", "Numero");
    let numero = numero1 / numero2;
    if (nome != null) {
        document.getElementById("demo").innerHTML =
            nome + cognome + colorepref + numero;
    }
}

// let codiceColore;

// document.getElementById("colorPicker").addEventListener("input", function(event) {
//     let colore = event.target.value;
//     codiceColore = colore;
//     console.log = colore;
//     const sito = document.getElementById("all");
//     sito.style.backgroundColor("$codiceColore")
// })



document.addEventListener("DOMContentLoaded", function() {
    let codiceColore = ""; // Variabile per memorizzare il colore

    document.getElementById("colorPicker").addEventListener("input", function(event) {
        // Ottieni il colore in formato #RRGGBB
        let colore = event.target.value;

        // Salva il colore nella variabile "ciao"
        codiceColore = colore;
        console.log(colore); // Stampa il colore nella console
        const sito = document.getElementById("all");
        sito.style.backgroundColor = codiceColore;
    });
});
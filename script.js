// Inserisci un numero, se è pari stampa il numero,
//  se è dispari stampa il numero successivo.
//  Si potrebbe fare saltando un if o comunque accorpando porzioni di codice.
//  Occhio solo a non saltare troppi passaggi logici che per qualcuno sono ostici.;

let numeroInserito = parseInt(prompt("Inserisci un numero: "));
if (numeroInserito % 2 === 0) {
    console.log(numeroInserito);
} else {
    console.log(numeroInserito + 1);
}

//Chiedere all'utente di scegliere pari o dispari 
var sceltaPariODispariUtente = prompt('Benvenuto scegli pari o dispari :');
console.log('scelta utente : ' + sceltaPariODispariUtente);

//Chiedere un numero da 1 a 5
var numeroRandomUtente = parseInt(prompt('Ora dimmi un numero da 1 a 5'));
console.log('scelta numeroutente : ', numeroRandomUtente);


//Generare un numero random da 1 a 5 per il pc con una funzione 

var numeroPc = getnumeroRandomPc (1,5);
console.log('numero random da 1 a 5 del pc è : ', numeroPc);

function getnumeroRandomPc (min, max) {
    var numeroRandomPc = Math.floor(Math.random() * (max - min + 1) ) + min;

    return numeroRandomPc;
}

// sommiamo i numeri 

var sommaUtentePiuSommaPc = numeroRandomUtente + numeroPc;
console.log('somma dei numeri random : ', sommaUtentePiuSommaPc);

//stabiliamo se la somma dei numeri è pari o disapri (funzione)

function getPariOdispari (numeroDaValutare) {
    var risultato;

    if (numeroDaValutare % 2 == 0 ) {
        risultato = 'pari, hai vinto!';
    } else {
        risultato = 'dispari, hai perso!';
    }

    return risultato;
}

//dichiariamo chi ha vinto (alert o html)

var risultatoFinale = getPariOdispari(sommaUtentePiuSommaPc);
alert(risultatoFinale);












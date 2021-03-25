//scrivere una funzione per capire se una parola è palindroma

//chiedo la parola all'utente
//alert('Benvenuto qui potrai scoprire se una parola è palindroma o meno. Premi invio per iniziare')

var parolaUtente = prompt('inserisci qui la parola da verificare : ');
console.log(parolaUtente);

var parolaDaComparare = getPalindrome(parolaUtente);

if (parolaDaComparare == parolaUtente) {
    alert("La parola inserita è palindroma!");
} else {
    alert("La parola inserita non è palindroma");
}


function getPalindrome (parolaDaValutare) {

    var parolaValutata = "";

    for ( var i = parolaDaValutare.length - 1; i >= 0; i--) {

        parolaValutata = parolaValutata + parolaDaValutare[i];
    }

    console.log(parolaValutata);


    return parolaValutata;
}













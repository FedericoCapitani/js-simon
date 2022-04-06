/* Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */

// funzione per generare i numeri casuali
function GenRndNumbers(numbers) {
    let numeri_generati = []
    for (let i = 0; i < numbers; i++){
        rnd_num  = Math.floor(Math.random() * 100) + 1;
        numeri_generati[i] = rnd_num;
    }
    return numeri_generati;
}
// scrivere i numeri nel file html
function scrivereNumeri(selector, array_length, tag_name, numeri_generati) {
    const numeri_da_copiare = document.querySelector(selector)
    numeri_da_copiare.innerHTML = ''
    for(let i = 0; i < array_length; i++){
        const numero = document.createElement(tag_name)
        numero.append(`${i+1}° numero: ${numeri_generati[i]}`)
        numeri_da_copiare.append(numero)
    }
}
// nascondere i numeri generati
function nascondere(){
    document.getElementById('numbers').innerHTML = ''
}
// 
function inserire_numeri(){
    inserire_numeri_in_html(numeri.length, numeri)
}
// far inserire i numeri all'utente e controlalre se sono corretti
function inserire_numeri_in_html(counter, array){
    let numeri_utente = [];
    let numero_utente  = 0;
    const numeri_da_scrivere = document.querySelector('#numeri_indovinati')
    numeri_da_scrivere.innerHTML  =''
    for(let i = 0; i < counter; i++){
        numero_utente = parseInt(prompt(`Inserisci il ${i+1}° numero`))
        numeri_utente[i] = numero_utente
        console.log(`numeri utente ${numeri_utente}`);
        const numero_da_scrivere = document.createElement('div')
        // scrivere i numeri trovati e non
        if(array[i] == numeri_utente[i]){
            numero_da_scrivere.append(`Hai trovato il ${i+1}° numero: ${array[i]}`)
            numeri_da_scrivere.append(numero_da_scrivere)
        }else{
            numero_da_scrivere.append(`Non hai trovato il numero`)
            numeri_da_scrivere.append(numero_da_scrivere)
        }
    }
}
// assegnare numeri generati ad un array per visualizzarli a schermo
let numeri = []
numeri = GenRndNumbers(5);
console.log(numeri);
const scrittura_numeri = scrivereNumeri('#numbers', numeri.length, 'div', numeri);
// countdown dei secondi che l'utente ha per leggere i numeri 
var tempo_rimasto = 30;
var countdown = setInterval(function(){
    if(tempo_rimasto <= 0){
        clearInterval(countdown);
        document.querySelector('#timer').innerHTML = 'Tempo scaduto';
    } else {
        document.querySelector('#timer').innerHTML =  `Rimangono ${tempo_rimasto} secondi`;
    }
    tempo_rimasto -= 1;
}, 1000)
// nascondere numeri
const nascondere_numneri = setTimeout(nascondere, 31000);
const risultato_domande = setTimeout(inserire_numeri, 32000)

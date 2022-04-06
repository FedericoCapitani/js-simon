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
// countdown

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

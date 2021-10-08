const userKm = prompt("Quanti Km vuoi percorrere?");
const userAge = prompt("Qual è la tua età?");

const ticketPrice = (userKm * 0.21);

let finalPrice;
// console.log(userKm)
// console.log(typeof(userKm))
// console.log(isNaN(userKm))

if (isNaN(userKm) || userKm < 0){

    alert("Valore Km inserito non valido.")

} else if (isNaN(userAge) || userAge < 0) {

    alert("Valore Età inserito non valido.")

} else {

    if (userAge > 65) {
        finalPrice = ((ticketPrice * 60) / 100)
    } else if ( userAge < 18){
        finalPrice = ((ticketPrice * 80) / 100)
    } else {
        finalPrice = ticketPrice;
    }
}

// console.log(finalPrice)
alert("Il prezzo del biglietto è: " + finalPrice.toFixed(2) + "€")
const userKm = prompt("Quanti Km vuoi percorrere?");
const userAge = prompt("Qual è la tua età?");

const ticketPrice = (userKm * 0.21);


let finalPrice;

// console.log(ticketPrice)

if (userAge > 65) {
    finalPrice = ((ticketPrice * 60) / 100)
} else if ( userAge < 18){
    finalPrice = ((ticketPrice * 80) / 100)
} else {
    finalPrice = ticketPrice;
}


// console.log(finalPrice)
alert("Il prezzo del biglietto è: " + finalPrice.toFixed(2))
/* 3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20 (uključivo 1 i 20). Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan.

3a. Ako je broj paran, ispisati u konzolu tekst: "Broj X je paran". X zamijeniti sa brojem koji se provjerava.

3b. Ako je broj neparan, ispisati u konzolu tekst: "Broj X je neparan". X zamijeniti sa brojem koji se provjerava.


BONUS:

4. Omogućiti da se pomoću varijabli definiraju početni i krajnji broj petlje.

 */

var i = 1;
var firstNumber = 1;
var lastNumber = 20;
while (i <= 20) {
    if (i % 2 !== 0) {
        console.log("Broj", i, "je neparan");
    } else {
        console.log("Broj", i, "je paran");
    }
    i++;
}

console.log("Prvi broj", firstNumber, "Zadnji broj", lastNumber);

var start = 1;
var end = 20;

for (var i = start; i <= end; i++) {
    if (i % 2 === 0) {
        console.log('Broj ' + i + ' je paran');
    } else {
        console.log('Broj' + i + ' je neparan');
    }
}
console.log(start);
console.log(end);
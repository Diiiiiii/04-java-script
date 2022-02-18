/* Vježba: JS - Promises
1. Definirajte Promise koji će nakon 5s:
1a. Odrediti nasumični broj od 1 do 6 (uključivo)
1b. U slučaju broja 3 ili većeg resolveati s dobivenim brojem
1c. U slučaju broja manjeg od 3 rejectati s dobivenim brojem

2. Resolveati Promise iz točke 1 tako da vrijedi:
2a. U slučaju uspjeha ispisati dobiveni broj
2b. U slučaju neuspjeha ispisati za koliko je dobiveni broj trebao biti veći da bi se promise smatrao uspješnim

BONUS:

3. Ponoviti Promise za određivanje broja ako dođe do greške u koraku 2b. */
/* Odgovor:Moramo napraviti novi Promise jer je postojeći ispunjen kod .catch. Ispunjen je rezultat, više se ne možemo pozivati na isti Promise i tražiti da nam vrati drugačiji rezultat. Ako želimo ponoviti takav jedan Promise, moramo napraviti funkciju koja će kreirati i vratit novi Promise i onda s tim novim Promiseom možemo raditi što god hoćemo
 */
const diceTossPromise = new Promise((resolve, reject) => setTimeout(() => {
    const dice = Math.round(Math.random() * 6);
    console.log(dice);

    if (dice >= 3) {
        resolve(dice);
    } else {
        reject(dice);
        }
    }, 5000));



Promise.resolve(diceTossPromise)
.then((dice) => console.log('Tossed', dice))
.catch((dice) => console.log('The numer should be by', 3 - dice, 'larger to be OK!')); 




// var je hoistan - prisutan u globalnom scopu pa se prije izvrši vrijednost kroz petlju for i inkrementira  var i = 10 nego se setTimeout može izvršiti

var i;
for (i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log('var i =', i);
    }, i * 1000);
}
 

//u istom bloku koda se izvodi iteracija a conosole log izvodi svaki puta novi deklarirani let i koji je dostupan samo unutar tog bloka koda 
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log('let i =', i);
    }, i * 1000);
}

// Nedostupno (razlika od var)
/* console.log(x);
let x = 1; */

/* const names = ['a', 'b', 'c'];

function sayHello(name, ...others) {
    console.log(others);
    console.log('Hi', name);
} */

//sayHello(names);

//uzima samo prvo ime jer je u funkciji sayHello parametar samo jedno ime, proširujemo dodajući rest operatora ...others za ostale članove niza, kad bi imali samo jedanog člana u nizu, poc console.log(others) bi dobili prazan niz

//sayHello(...names);

const names = ['Anica', 'Dado'];

function sayHello(name, ...others) {
    console.log('Hi', name);
    if (others.length > 0) {
        console.log('... and others!');
    }
}

sayHello(...names);

//za kopiju niza se koristi često

console.log([...names]);

//i dodavanje elemenata nizu -često se koristi

console.log(['PRVI', ...names, 'DRUGI']);
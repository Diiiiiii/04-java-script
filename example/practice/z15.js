var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",
};

var quotes = [
    "I'm going to my friends. I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin.",
];
/* 
---

1. Pratite kod zadan gore.

2. Nadite prototip objekta "character" (naputak: koristite metode globalnog Object objekta). Nadite prototip tog prototipa. Ispisite ih.

// Object.getPrototypeOf

3. Dodajte prototipu objekta "character" funkciju koja vraća jedan (slucajno odabran) citat iz niz "quotes". */

// istražiti prototype property na objektima (npr. character.prototype)
// Math.random()

//console.log(Object.getPrototypeOf(character));

var proto1 = Object.getPrototypeOf(character);
var proto2 = Object.getPrototypeOf(proto1);

console.log(proto1, proto2);

proto1.getRandomQuote = function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

//proto1.getrandomQuote = getRandomQuote;
console.log(proto1.getRandomQuote());
console.log(character.getRandomQuote());

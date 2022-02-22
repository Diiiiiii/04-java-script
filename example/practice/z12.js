

printMe();
//* umjesto da pišemo u svakom objektu funciju i puno puta ju ponavljamo kroz različite objekte, umjesto toga imamo jednu funkciju koja se dodjeljuje na objekt a funkcija će preko this-a pristupiti objektu i pokupiti svojstva koja bi odradila ispis. Lakše kod razvoja i debugiranja i pronalaženje grešaka.
/* var person = {
    name: "Dijana",
    getInfo: function () {console.log(this.name); },
}; */

var person = {
    name: "Dijana",
    getInfo: printMe,
};

var cat = {
    name: "Caotain Claw",
    getInfo: printMe,
};

var chair = {
    model: "Office chair",
    getInfo: printMe,
};

person.getInfo();
cat.getInfo();
chair.getInfo();

/* function runApp() {
    var person = {
        name: "Mladen",
        getInfo:printMe
    };

    person.getInfo();
} */

runApp();

// Primjer Hoistinga - pozivamo funkcije bez obzira jer smo ih deklarirali na kraju, deklaracija varijable se hoista, a inicijalizacija se ne hoista - vrijedsnosti ovise o trenutku kada se dodijele

function printMe() {
    console.log(this.name);
}

function runApp() {
    person.getInfo();
}
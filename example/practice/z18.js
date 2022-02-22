/* Vježba: JS - Prototype
Trajanje: 20min (19:00 - 19:20)
---

0. Definirajte funkciju Dog koja će služiti za konstruiranje novih Dog objekata.

1. Dodajte Dog funkciji varijablu "name" koja se postavlja pri kreiranju objekta i označava ime psa. Defaultna vrijednost imena psa je "Rex". 

2. Kreirajte objekt iz Dog funkcije.

3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa. Pozovite ju iz novostvorenog objekta i ispisite rezultat.

4. Dodajte Dog funkciji metodu koja laje. Pozovite ju iz novostvorenog objekta i ispišite rezultat. Lavež birajte sami. Pas mora nasumično lajati od 1 do 3 puta (svaki poziv funkcije pas laje različit broj puta, ali minimalno jednom, maksimalno tri puta).

npr. "vau"
npr. "vau vau vau"
npr. "vau vau" */

function Dog(name = "Rex") {
    var  _name = name;

    this.getName = function () {
        return _name;   
   }
}

var nero = new Dog("Nero");
console.log(nero.getName());

Dog.prototype.bark = function () {
    var barks = ["woof", "woof woof","woof woof woof"];

    return barks[Math.floor(Math.random() * barks.length)];
};

console.log(nero.bark());
console.log(nero.bark());
console.log(nero.bark());
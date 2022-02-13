// Klasični objekt
var character = {
    name: "SpongBob",
    home: "Bikini Bottom"
};

console.log(character);

//Objekt kreiran kroz konstruktor funkciju (prototip)
/* function Character() {
    this.name = "SponeBob";
    this.home = "Bikini Bottom";
}

var spogeBob = new Character();
console.log(spogeBob); */

function Character(name = "Unknown", home = "Homeless") {
    var oib = '12345678903'
    this.name = name;
    this.home = home;
    this.getOib = function() {return oib;};

}

var spongeBob = new Character("SpongeBob", "Bikini Bottom");
var homer = new Character("Homer", "Springfield");
console.log(spongeBob);
console.log(homer);

//Provjera jeli homer objekt instanca Character - konstruktor funkcije

console.log(homer instanceof Character);
console.log(homer.getOib());
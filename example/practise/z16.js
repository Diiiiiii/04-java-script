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
   //OIB je privatan
    var oib = '12345678903'
    this.name = name;
    this.home = home;
    //dodijelimo funkciju koja bi nam pristupila OIBu radi closura -definirana na mjestu gdje se može vidjeti funkcija, možemo napraviti i funkciju s kojom ćemo mijenjati oib al to radio samo kad ćemo mijenjti još neke stvari s promjenom OIBa- uprotivnom možemo samo staviti da je to svojstvo na objektu a ne varijabla
    this.getOib = function() { return oib; };

}

var spongeBob = new Character("SpongeBob", "Bikini Bottom");
var homer = new Character("Homer", "Springfield");
console.log(spongeBob);
console.log(homer);

//Provjera jeli homer objekt instanca Character - konstruktor funkcije

console.log(homer instanceof Character);
console.log(homer.getOib());
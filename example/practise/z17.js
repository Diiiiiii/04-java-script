//Primjer privatnih propertia, public propertia, funkcija kao metoda na Characteru i statične funkcije koja ne ovisi o instanci Charactera, još možemo sami birati što želimo vratit u tom objektu pomoću return-umjesto da stalno mijenjamo this

function Character(
    name = "Unkonwn",
    home = "Homeless",
    oib = "") {
     var _oib = oib;
     this.name = name;
     this.home = home;
     this.getOib = function() { return _oib; };
    }
     /* return {
        name: name;
        home: home;
        getOib: function() { return _oib; }
      }; */
     
    
     //funkcija koja uvijek radi istu stvar -kod svake kreacije Characteraa kreira funkciju koja smao vraća OIB i tu funkciu dodijljujemo našem Characteru pod getOib
     
    
 //Primjer prototip funkcije na konstruktorima - (ne ovisi na nečem sto je privatno za tu instancu), dodjeljivanje funkcije na prototip smo dobili da se ta funkcija definira samo jednom i ta funkcija je dostupna svim Characterima koji se kreiraju -opće pristupno
 
 Character.prototype.getInfo = function () {
     return `${this.name} (${this.getIub()}) is from ${this.home}`;
 }

var spongeBob = new Character("SpongeBob", "Bikini Bottom", "12345678903");
var homer = new Character("Homer", "Springfield", "99999999999");
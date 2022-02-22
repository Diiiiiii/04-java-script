// Mala baza (modul) za pohranu objekata, funkcija set postavlja vrijednost a get dohvaća

// funkcije i db su globalnom scopu, ne možemo ih više definirati, trebamo ih odvojiti u zaseban modul da bi naša app dobila svoj scope, odvojimo ih stvaranjem IIFE -zagrade izvan riječi function
var db = (function () {
var db = {};

function set(key, value) {
    db[key] = value;
}

function get(key) {
    return db[key];
}

  return { set, get};
})();
//Moramo pustiti prema van modula set i get za korištenje u aplikaciji -dodajemo objekt var db tj spremamo u varijablu i vraćamo unutar njega funkcije set i get (didajemo db.set i dv.get u pozivu)
db.set('foo', 'bar');
console.log(db.get('foo'));

//Saznajemo što je sve u bazi db
console.log(db);


//2.način omogućavanja dohvaćanja funkcija set i get - umjesto spremanja u varijablu, koristimo globalni objekt i scopamo u njega - modificiramo globalni objekt sa tim properiima
(function (global) {
    var db = {};
    
    function set(key, value) {
        db[key] = value;
    }
    
    function get(key) {
        return db[key];
    }
    global.__db = {
        set:set, 
        get:get
    };
    }) (this);
    
    this.__db.set('foo', 'bar');
    console.log(this.__db.get('foo'));
    console.log(this.__db);

    //3.način -definiramo dva modula
    //Prvi Modul
    var db='text';
    var xy = (function () {
        var db = {};
        
        function set(key, value) {
            db[key] = value;
        }
        
        function get(key) {
            return db[key];
        }
        
          return { set, get};
        })();
        
        // Drgi Modul - Odvajamo taj dio koda

        (function(db) {
         db.set('foo', 'bar');
        console.log(db.get('foo'));
        console.log(db);   
        })(xy);
        
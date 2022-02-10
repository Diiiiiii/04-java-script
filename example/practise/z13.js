//Globalna, trebamu scope napraviti lokalno da nam se ne krše funkcije međusobno, lokalne i globalne
function sayHello() {
    console.log('Hello');
};

sayHello();

// Funkcija koja poziva samu sebe - omotamo funkciju u zagradu - stvara scope i na kraju ju pozovemo kao svaku drugu funkciju -dvostruke zagrade
(function sayHello() {
    console.log('Hello');
})();

// Ne trebamo joj dati naziv jer ju ne možemo pozvati, ona poziva samu sebe - izolirana od vanjskog scopa
(function () {
    function sayHello() {
    console.log('Hello');
    }

    sayHello();
})();

sayHello();


//Scope i  Closure - varijabla name može uvijek pristupiti u parametru name
(function() {

function getGreetings(name) {
    return {
        sayHello: function sayHello() {
            return "Hello " + name;
        },
        
        sayHelloHr: function sayHelloHr() {
            return "Pozdrav " + name;
        },
        
        sayHelloHa: function sayHelloHa() {
            return "Aloha " + name;
        },
        
        sayHelloFr: function sayHelloFr() {
            return "Bonjour " + name;
        }

    };
}

var domagojGreetings = getGreetings("Domagoj");
console.log(domagojGreetings.sayHello());
console.log(domagojGreetings.sayHelloHr());
console.log(domagojGreetings.sayHelloHa());
console.log(domagojGreetings.sayHelloFr());


/* console.log(sayHello("Domagoj"));
console.log(sayHelloHr("Domagoj"));
console.log(sayHelloHa("Domagoj"));
console.log(sayHelloFr("Domagoj")); */

})();
//Vježba funkcije, petlje

///1) dio logike se ponavlja u ovisnosti o nekom parametru

console.log("Hello world!");
console.log("Hello Domagoj!");
console.log("Hello Sanja!");
console.log("Hello Mateo!");

//funkcija nam omogućuje da proslijeđujemo različite vrijednosti za name i na taj način ispišemo drugačiju poruku
/// 2) dio logike se ponavlja u obliku poziva funkcije gdje se parametar mijenja
var name;
console.log(`Hello ${name}!`);

function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello("world");
sayHello("Domagoj");
sayHello("Sanja");
sayHello("Mateo");

//Pozivamo istu funkciju ili više njih s različitim vrijednostima - kreiramo niz i petlju u kojoj navodimo sve funkcije:
const names = ["world", "Domagoj", "Sanja", "Mateo"];

for (let i = 0; i <names.length; i++){
  sayHello(names[i]);
}

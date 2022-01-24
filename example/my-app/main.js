/* var firstName;
firstName= 'Dijana';

console.log(firstName); */

var firstName = "Anamarija Ksenija Brunhilda Šimić";

console.log("Hello " + firstName);
console.log("Your name is " + firstName.length + "characters long");
//console.log("Your fantasy name is " + firstName.replaceAll("i", "y"));

var text = "Lorem ipsum dolor sit amet.";
var length = text.length;
//var sit = text.slice(18, 22);
var sit = text.slice(text.indexOf("sit") + 3)
console.log(sit);
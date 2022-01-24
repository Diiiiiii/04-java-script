/* var firstName;
firstName= 'Dijana';

console.log(firstName); */

/*
var text = ' Lorem ipsum dolor sit amet';

---
Koristeći metode rada nad stringovima iz zadanog stringa:
  1. Spremite duljinu stringa u varijablu.
  2. Izdvojite riječ 'sit' u zasebnu varijablu.
  3. Zamijenite riječ 'amet' sa riječi 'elit'.
  4. Konkatenirajte u novu varijablu zadani string sa stringom 'consectetur adipiscing elit', sa zarezom izmedu.
  5. Konvertirajte sve riječi u orginalnom stringu u velika slova
  6. Maknite počenu prazninu u stringu
  7. Nađite slovo na poziciji 12
*/
var firstName = "Anamarija Ksenija Brunhilda Šimić";

console.log("Hello " + firstName);
console.log("Your name is " + firstName.length + "characters long");
//console.log("Your fantasy name is " + firstName.replaceAll("i", "y"));

var text = "Lorem ipsum dolor sit amet.";
var length = text.length;
//var sit = text.slice(18, 22);
var sit = text.slice(text.indexOf("sit"), text.indexOf("sit") + 3);
text.replace("amet", "elit");
var newText = text + " consectetur adipiscing elit";
text.toLocaleUpperCase();
text.trim();
text.charAt(12);
text[12];
//console.log(sit);
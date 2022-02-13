/* 1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom (" ") između imena i prezimena. 

2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
var x = z === 2? y : 5;

- varijablu z, y možete deklarirati i inicijalizirati po želji

 */

var firstName = "Dijana";
var lastName = "Đuran";
fullName = firstName + " " + lastName;
console.log(fullName);

//var x = z === 2? y : 5; 
//(ako je z jednak 2 po tipu i vrijednosti onda y spremi u x ako nije onda 5 spremi u x)

var z = 2;
var y = 3;
var x;

if (z === 2) {
    x = y;
} else {
    x = 5;
}
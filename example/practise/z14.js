/* Vježba: JS - Events
Trajanje: 20min (20:30 - 20:50)
---

// 1.
var x = "John Doe"; 
function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
}
var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

---

1. Pratite kod gore. Koje su vrijednosti y i z varijabli na kraju programa?

2. Od funkcije u prvom zadatku stvorite samopozivajuću anonimnu funkciju (IIFE) koja prima parametar "name". Kreirajte globanu varijablu koju ta funkcija koristi i zadajte joj vrijednost.
 */

1) var y je funkcija, var z je undefined jer nismo pozvali funkciju sa nekim argumentom

2)

var myName = "Jane Doe";

var y = (function vratiNesto(name) {
   var x = name;
   function f() { return x; }
   return f;
})(myName);

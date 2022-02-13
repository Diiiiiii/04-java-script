var x = false;
var y = 0;
console.log(x || 'hello1' || 'hello2');

/* Vježba: JS - Operators
Trajanje: 20 min (20:37- 20:57)
--- */

var x = "Lorem ipsum",
    y = 2345,
    z = "2345"
	q = false;
	
// 1. 
var trueFalse = !!"false" == !!"true";
// truty vrijednost prve varijable je true jer se radi o stringu koji nije prazan. Prva negacija joj daje vrijednost falls i druga negacija true - znači vrijednost joj je true. Druga vrijednost je isti kao i prva true. Kad se usporede dvije negacije dobije se vrijednost true.

// 2. 
console.log(q || x || y || z);
// ispisat će vrijednost iz x jer je ona prva truty vrijednost u nizu

// 3. 
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;    
const taxRate = 0.082;

let totalPrice = price + (price * taxRate);
totalPrice = totalPrice.toFixed(2);

console.log("Total:", totalPrice);


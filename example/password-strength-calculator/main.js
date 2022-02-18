/**
 * Write a program that will rate a password according to the following rules:
 * 1. At least 8 characters long
 * 2. At least one number
 * 3. At least one uppercase character
 * 4. At least one lowercase charaster
 * 5. At least one special character (!, #, (, ), ?, _)
 * 
 * For every rule that the password passes, give the password 1 point.
 * 
 * Example:
 * 12345678 - 2 points (rule 1 and 2)
 * 1234567 - 1 point (rukes 2)
*/

var testCases = [
    {password: '12345678', rating: 2},
    {password: '1234567', rating: 1}
];

/* var password1 = "12345678";
var result1 = 2;

var password2 = "1234567";
var result2 = 1; */

function checkMinimumLenght(password) {
    return password.length >= 8;
}

function checkPassword(password) {
    var rating = 0;
    if(checkMinimumLenght(password)) {
        rating++;
    }
    return rating;
}

for (var i = 0; i < testCases.length; i++) {
    var testCase = testCases[i];
    console.log(testCase, checkMinimumLenght(testCase.password));
}

/* 3. Napišite funkciju testRule() koja će provjeriti za jedno od pravila (po vašem izboru) barem jedan napisani slučaj. Funkcija treba provjeriti hoće li pravilo uistinu za zadani input vratiti očekivani output.
3a. Ispisati u konzolu poruku "Expected: _očekivano_, Got: _dobiveno_" za provjeru */ 

//Input 12345678, Output: true
/* function testRule() {
    console.log('Expected:', true, 'Got:', checkMinimumLenght('12345678'))
}

testRule();

//Drugačije pišemo isto
function testRule(gotValue, expectedValue) {
    console.log('Expected:', expectedValue, 'Got:', gotValue)
}

testRule(checkMinimumLenght('12345678'), true); */

//Treći način pisanja
function testRule(rule, input, output) {
    console.log('Input:', input, 'Expected:', output, 'Got:', rule(input));
}

testRule(checkMinimumLenght, '12345678', true);
testRule(checkMinimumLenght, '1234567', false);
/* Vježba: JS - Quality Control
Trajanje: 25min (20:25 - 20:45)
---

1. Otvorite password-strength-calculator projekt na kojem ste radili u ranijim vježbama.

2. Za svako pravilo prema kojem se određuje jačina passworda napišite 5 slučajeva na način da:
- Definirate ulaznu vrijednost za pravilo
- Očekivanu izlaznu vrijednost (rezultat provjere pravila)

Npr. 
At least 8 characters long
1. Input: 1, Output: false
2. Input 12345678, Output: true */
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


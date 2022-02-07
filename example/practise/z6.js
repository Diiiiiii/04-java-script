var x = 2;
var y;

switch (x) {
    case 4: y ='A'; break;
    case 3: y ='B'; break;
    case 2: y = 'C';
    case 1: y = 'D';
    default: // nothing
}

console.log(y);

var x = 0;
while (x < 10) {
    x++;
    console.log(x);
}

var y = 0;
do {
    y++;
    console.log(y);
} while (y < 10);

// x ako ima ostatka u djeljenju sa dva je paran a ako nema onda je neparan
var x = 0;
while (x < 10) {
    if ( x % 2 === 0) {
        console.log(x, 'is even');
    } else {
        console.log(x, 'is odd');
    }
}

var text = "abcdefabcabcefg";
var numberOfA = 0;
for (var i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
        numberOfA++;
    }
}


/* 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.

2. Koja je vrijednost isprintana u konzoli? */

var varOne = 0;
for (i = 0; i < 4; i++){
    for (j = 0; j < 4; j++){
        varOne++;
    }
}
console.log(varOne);

// ne ispisati one djeljive sa 9

var i = 3;
while (i < 20) {
    if (i % 9 === 0) {
    } else {
        console.log(i);
    }
    i++;
}
// ispisati one nedjeljive sa 9
var i = 3;
while (i < 20) {
    if (i % 9 !== 0) {
        console.log(i);
    }
    i++;
}

var i = 1;
while (i <= 20) {
    if (i % 2 !== 0) {
        console.log("Broj" + i + "je paran");
    } else {
        console.log("Broj" + i + "je neparan");
    }
    i++;
}

var names = ['John', 'Jane', 'Mike'];
for (var i = 0; i <names.length; ++i) {
    console.log(names[i]);
}
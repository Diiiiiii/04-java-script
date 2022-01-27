/* 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.

2. Dodajte svoje ime na kraj niza.

3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon išto ispišete "Jane" izađite iz petlje.

4. Napišite kod za uklanjanje undefined vrijednosti iz niza (možete koristiti filter ili možete koristiti petlju da napravite novi niz koji ne sadrži undefined vrijednost). */

var names = ['John', 'Jane', 'Bob',, 'Mike'];


for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
 
names.push('Dijana');

 for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
    if(names[i] === 'Jane') {
        break;
    }
}

/* var filteredNames = names.filter(function(item){
    return item !== 'undefined';
});
console.log(filteredNames); */

var filteredNames = [];
for (var i = 0; i < names.length; i++) {
    if(names[i] !== undefined) {
        filteredNames.push(names[i]);
    }
}
console.log(filteredNames);
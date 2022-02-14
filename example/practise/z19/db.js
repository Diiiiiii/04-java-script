// Mala baza za pohranu objekata


var db = {};

function set(key, value) {
    db[key] = value;
}

function get(key) {
    return db[key];
}

set('foo', 'bar');
console.log(get('foo'));
console.log(db);
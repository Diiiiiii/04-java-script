//Kad grešku imamo kod APIja -krivo upisani http dobivamo grešku ispisanu kod Responsa a ne .chatcha. To znači da nam je API, server vratio grešku dolazi u obliku Responsa u then-u. Do .catch dolazi kad pukne nešto pri slanju zahtjeva (npr. izgubili smo vezu s internetu u trenutku slanja zahtjeva, ili je nešto kod same logike slanja pogrešno -naša logika koju smo radili a ne uz server).

//Na kraju selektiramo pokemona i apendamo sve unutra
const pokemonElement = document.querySelector('#pokemon');

const endpoint = "https://pokeapi.co/api/v2/pokemon/bulbasaur";

fetch(endpoint)
    .then((response) => {
        if (response.ok) {
            return response.json();
            //console.log(response);
        } else {
            console.log('Error');
        }
    })
    .then(json) => {
       // console.log(json);
       const name = json.name;
       const abilities = json.abilities;
       const sprite = json.sprites.front_default;
       console.log(name, abilities, sprite);

       const nameElement = document.createElement('div');
       nameElement.innerHTML = name;

       const abilitiesElement = document.createElement('div');
       for(let i = 0; i < abilities.length; i++) {
           const abilityElement = document.createElement('div');
           abilityElement.innerHTML = abilities[i].ability.name;
           abilitiesElement.append(abilityElement);
       }

       const spriteElement = document.createElement('img');
       spriteElement.setAttribute('src', sprite);

       pokemonElement.append(spriteElement);
       pokemonElement.append(nameElement);
       pokemonElement.append(abilitiesElement);
    })
    .catch((error) => console.log(error));

    /* Vježba: JS - Promises
Trajanje: 20min (18:40 - 19:00)
---

1. Pošaljite zahtjev za vašim najdražim pokemonom putem Fetch API i PokeAPI-ja

2. Kada dobijete odgovor, na temelju odgovora napravite elemente koji će ispisati sljedeće podatke u DOM:
2a. Ime pokemona (name)
2b. Imena poteza (abilities)
2c. Izgled pokemona (front_default sprite)
2d. Dodajte elemente u DOM (npr. napravite novi element s nekim ID-jem i upišite sadržaj u njega)

3. U slučaju greške (response nije OK) ispišite grešku u DOM.

4. U slučaju greške (catch na fetch-u) ispišite grešku u DOM.

NOTES
- Ne zaboravite koristiti metode poput document.createElement() i propertyje poput innerHTML kod kreacije DOM-a za ispisivanje pokemona*/
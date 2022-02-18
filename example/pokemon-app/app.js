//Kad grešku imamo kod APIja -krivo upisani http dobivamo grešku ispisanu kod Responsa a ne .chatcha. To znači da nam je API, server vratio grešku dolazi u obliku Responsa u then-u. Do .catch dolazi kad pukne nešto pri slanju zahtjeva (npr. izgubili smo vezu s internetu u trenutku slanja zahtjeva, ili je nešto kod same logike slanja pogrešno -naša logika koju smo radili a ne uz server).

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
    })
    .catch((error) => console.log(error));
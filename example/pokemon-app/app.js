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
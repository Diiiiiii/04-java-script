//Selektiramo sve elemete koji su u HTML-u
const formElement = document.querySelector("#pokemon-form");
const formQueryElement = document.querySelector("#pokemon-form-query");
const pokemonErrorElement = document.querySelector("#pokemon-error");
const pokemonResult = document.querySelector("#pokemon-result");
// Definiramo endpoint
const endpoint = "https://pokeapi.co/api/v2/pokemon";

//Funkcije koje prikazuju, jedna pogrešku a druga pokemona, izbriše starog i na mjesto tog elementa ako pokemonn nije null upiše elemente - name, abilities i sprite
function showError(message) {
  pokemonErrorElement.innerHTML = message;
}

function showPokemon(pokemon) {
  pokemonResult.innerHTML = "";

  //Ako pokemon nije null uzme njegovo ime, abilities, sprite 
  if (pokemon == null) {
    return;
  }

  const name = pokemon.name;
  const abilities = pokemon.abilities;
  const sprite = pokemon.sprites.front_default;

  // name, abilities i sprite upisuje u kreirane elemente i na kraju ih appenda
  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon");

  const nameElement = document.createElement("div");
  nameElement.classList.add("pokemon__name");
  nameElement.innerHTML = name;

  const abilitiesElement = document.createElement("div");
  abilitiesElement.classList.add("pokemon__abilities");
  for (let i = 0; i < abilities.length; i++) {
    const abilityElement = document.createElement("div");
    abilityElement.classList.add("pokemon__ability");
    abilityElement.innerHTML = abilities[i].ability.name;
    abilitiesElement.append(abilityElement);
  }

  const spriteElement = document.createElement("img");
  spriteElement.classList.add("pokemon__sprite");
  spriteElement.setAttribute("src", sprite);

 //Appendanje
  pokemonElement.append(spriteElement);
  pokemonElement.append(nameElement);
  pokemonElement.append(abilitiesElement);
  pokemonResult.append(pokemonElement);
}

//Reakcija na submit obrasca -kad se submita obrazac, spriječi se defoaultno ponašanje tj. relaud preglednika, uzima se iz imput elementa (formQueryElement.value)njegova vrijednost - vrijednost u upisanom inputu. Za tu vrijednost se radi fetch.
formElement.addEventListener("submit", function (event) {
  event.preventDefault();

  const value = (formQueryElement.value || "").trim().toLocaleLowerCase();

  if (value === "") {
    showError("Please enter Pokémon name or ID");
    showPokemon(null);

    return;
  }
// Za vrijednost upisanu u inputu se radi fetch -dohvaćanje pokemona. Traži se endpoint / vrijednost upisana u inputu
  fetch(`${endpoint}/${value}`)
    .then((response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Could not find Pokémon");
      }
    })
    .then((json) => {
      showError("");
      showPokemon(json);
    })
    .catch((error) => {
      showError(error.message);
      showPokemon(null);
    });
});
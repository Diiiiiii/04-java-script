//Selektiramo elemente u HTML-u (u DOM-u će bit kad se HTML parsa)
const formElement = document.querySelector('#form');
const inputElement = document.querySelector('#input');
const resultElement = document.querySelector('#result');
// na formElement zakačimo submit koji će uzeti vrijednost iz inputa i upisati u resultElement
formElement.addEventListener('submit', (event) => {
    //sprečavanje defaultnog ponašanja
    event.preventDefault();
    const value = inputElement.value;
    resultElement.innerHTML = value;

    //možemo s fetchem dohvatiti neke podatke - u Pokemon aplikaciji
});



///Obrasci imaju action atribut koji određuju gdje će se slati sadržaj koji se submita, šalju se kroz http requeste u pregledniku, ako ne upišemo u action neku stranicu npr.https://duckduckgo.com/, https://www.google.com/ itd. onda se trenutna stranica smatra kao zadana - defaultno ponašanje preglednika na submit obrasca (otvara ono što je u action)
/// danas se šalju kroz asinkrone pozive - kroz javascrpit
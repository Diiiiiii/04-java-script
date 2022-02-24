//3) seketiramo productListElement iz div index.html
const productListElement = document.querySelector("#product-list");

// 2) Prikaz proizvoda na ekranima
// Kreacija klase Product koja predstavlja model proizvoda - stavljamo što želimo da ima taj proizvod i na kraju ga pozivamo sa funkcijom render
class Product {
    constructor(barcode, image, name) {
        this.barcode = barcode;
        this.image = image;
        this.name = name;
    }
//3) U Render metodi smo returnali naš productElement(koji sadrži sve druge elemente) kojeg smo kreirali
    render() {
        //console.log(this.barcode, this.image, this.name);
        // Po index skici div-a producta radimo dalje ispis - prikaz informacija u Konzolu: name, barkod, image i proizvod te nakon toga proizvod appendamo u aplikaciju

        //name - kreirali smo element za naziv našeg proizvoda, dali smo mu klasu, popunili smo ga s podatkom imena (sadržajem)
        const nameElement = document.createElement('div');
        nameElement.classList.add('product__name');
        nameElement.innerHTML = this.name;

        //barcode - kreirali element, dodali klasu, popunili smo ga s podacima this.barcode.
        const barcodeElement = document.createElement('div');
        barcodeElement.classList.add('product__barcode');
        barcodeElement.innerHTML = this.barcode;

        //image
        const imageElement = document.createElement('img');
        imageElement.classList.add('product__image');
        imageElement.setAttribute('src', this.image);

        // --Druga točka--dodavanje funkcionalnosti i buttona za pohranu proizvoda u košaricu 
        const buttonElement = document.createElement('button');
        buttonElement.classList.add('button');
        buttonElement.innerHTML = "Add to cart";
        //Informacija o tome da smo kliknuli na pojedini proizvod -JavaScript rješenje dodavanje događaja, dodaje se proizvod u košaricu
        buttonElement.addEventListener("click", () => {
            //console.log("Clicked on product", this);
            //KREIRAMO VLASTITI EVENT, dodajemo prefiks koji se neće miješati sa standardnim nazivima eventova(npr. click), i dodajemo objekt detail s objektom koji sadrži informacije o konkretnom produktu, da bi ga poslali van prema aplikaciji, trebamo definirati samo gdje ga šaljemo(dispatchamo)
            const event = new CustomEvent("app@add-to-cart", { detail: { product: this} });
            // Mi ga sašeljmo nad čitavim dokumentom, stranicom. Obzannjujemo cijeloj stranici da se dogodio taj event
            //Na klik buttona smo polali dogašaj u čitav dokument kojeg sad možemo prepoznati i na njega reagirati
            document.dispatchEvent(event);
        });

        //glavni element -parent element  za čitav proizvod, dali klasu i appendali podatke
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        // prosljedimo u njega sve elemenate koje želimo ubaciti (niz)
        productElement.append(nameElement, barcodeElement, imageElement, buttonElement);

        


        // ispišemo productElement -on je kreiran i sad je u memoriji, preostaje nam ga još appendat u naš DOM - Document Object Model(3)- Prije napravimo malo promjenu i skici Index.html-a, a ovdje zakomentiramo 11 liniju console.log i vratimo van return productElement iz render()metode
        return productElement;
    }
}



//Properies je items koji je prazan niz i pripada Cartu, u konstruktoru ćemo slušati app@add-to-cart event i kad se dogodi event košarica će se sama pobrinuti da doda item unutra, this.render da vidimo pomjenu u Konzoli
class Cart {
    //Dodajemo parent od cart-itema i cart-item__name - pohranju ta dva elementa kao jedan propertie cartItemListElement
    cartItemListElement = document.querySelector('#cart-item-list');
    items = [];

    constructor() {
        //Primjer primjene eventa New Event, logika predaje proizvoda u Cart(košaricu) - premjestimo ju u class Cart,a ne držimo ju izvan
        document.addEventListener("app@add-to-cart", (event) => { this.items.push(event.detail.product);
            //  Da  nebi sve prethodne ispiše isto ispisao, na DOM element lijepimo cijelu kosaru, clean DOM elementa
            this.cartItemListElement.innerHTML = "";
            this.cartItemListElement.append(...this.render());

    // dodavanjem detaila o našem eventu u const event { detail: { product: this} }
    //console.log(event.detail.product);
});
    }

    //Pojednostavljivanje, prebacivanje 
    renderCartItem(currentItem) {
        const cartItemNameElement = document.createElement('div');
        cartItemNameElement.classList.add('cart-item__name');
        cartItemNameElement.innerHTML = currentItem.name;
    
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.append(cartItemNameElement);
    
        return cartItemElement;
    
    }
    render() {
        const elements = [];
        // console.log("cart", this.items);
        //Povezano sa trećim zadatkom, vežemo cart-item-list, isto kao kod proizvoda samo ovdje su itemi
        //Prolazimo kroz sve iteme koji se nalaze na našoj listi Cartu, za svaki taj item kreiramo item__name i upisujemo u name tog properia, kreiramo item element u kojeg appendamo name element i na kraju se u našem elemantu nalazi ime a mi ga stavljamo u list -u parent element koji sadrži sve druge
        for(let i = 0; i < this.items.length; i++ ) {
            
            //kod rendera moramo upisati i parenta
            elements.push(this.renderCartItem(this.items[i]));
        }
        return elements;
    }
}
//Kreirali smo Cart(Košarica) mada ga još ne koristimo nigdje a koristit ćemo ga da ga prvi puta zapišemo u DOM i inicijalni prikaz ima tamo
const cart = new Cart();
/* const product = new Product("barcode", "image", "name");
product.render(); */

// 1) Dohvaćamo proizvode pomoću fetcha - simuliramo poziv na API
fetch("./products.json")
    .then((response) => {
        if (response.ok) {
            //Pretvaranje proizvoda u json
            return response.json();
        }else {
            console.log("Error!");
        }
    })
    .then((json) => {
        //Ispis jsona
        console.log(json);
        // 2a) Uzimamo naš niz proizvoda i provlačimo kroz petlju, uhvatili smo u iteraciji trenutni proizvod, napravili smo novi proizvod i onda smo taj proizvod ispisali u konzolu s render metodom
        for (let i = 0; i < json.length; i++) {
            const currentProduct = json[i];
            const product = new Product(
                currentProduct.barcode, 
                currentProduct.image, 
                currentProduct.name,
                );
            //U Petlji koja kreira proizvode, svaki puta kad se proizvod kreira i kad se pozove render metoda, mi to što vrati render metoda stavimo u varijablu kojeg onda appendamo u listu(productListElement)
            /* const productElement = product.render();
            productElement.append(productElement); */
            productListElement.append(product.render());
        }
    })
    .catch((error) => {
        console.log(error);
    });

   
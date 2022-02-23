//3) seketiramo productListElement iz div index.html
const productListElement = document.querySelector("#produce-list");

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

        //glavni element -parent element  za čitav proizvod, dali klasu i appendali podatke
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        // prosljedimo u njega sve elemenate koje želimo ubaciti (niz)
        productElement.append(nameElement, barcodeElement, imageElement);

        // ispišemo productElement -on je kreiran i sad je u memoriji, preostaje nam ga još appendat u naš DOM - Document Object Model(3)- Prije napravimo malo promjenu i skici Index.html-a, a ovdje zakomentiramo 11 liniju console.log i vratimo van return productElement iz render()metode
        return productElement;
    }
}

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

   
/* function User(username) {
    this.username = username;
    this.greet = function () {...};
}

const user = new User('domagoj);
console.log(user);
 */

 //umjesto funkcije koristimo klase, dodavanje metode je drugačije-preglednije
/* class User {
    constructor(username) {
        this.username = username;
    }

    greet() {
        return `Hi I'm ${this.username}!`;
    }
}

const user = new User('domagoj');

console.log(user.greet());
 */
//primjer arrow funkcije, console.log(this)-vidimo koja su to svojstva u Timeautu.  Pozivamo direktno u funkciji onda se this odnosi na setTimeout-ove metode koje su globalno zadane, a this se odnosi na kontekst u kojem se funkcija pozove. Da bi se izbjegla promjena konteksta pozivanja tj da this poziva Userov kontekst, napravimo arrow funkciju greet = () =>
//na objektu User arrow funkcija postaje svojstvo i fiksira this na User klasu

/* class User {
    constructor(username) {
        this.username = username;
     }

     greet = () => {
        console.log(`Hi I'm ${this.username}!`) ;
    } 
 
    /*  greet() {
        console.log(this);
        console.log(`Hi I'm ${this.username}!`) ;
    }  */
//}

/* const user = new User('domagoj');

setTimeout(user.greet, 1000);

user.greet(); */

// informaciju o resolvu i rejectu možemo prosljediti tu vrijednost dodajući coin kao argument u resolve i reject

const coinTossPromise = new Promise((resolve, reject) => setTimeout(() => {
    const coin = Math.round(Math.random());
    console-log(coin);

    if (coin === 1) {
        resolve(coin);
    } else {
        reject(coin);
        }
    }, 3000);
});

Promise.resolve(coinTossPromise)
.then((coin) => console.log('Successful coin toss!'))
.catch((coin) => console.log('Unsuccessful coin toss!'));


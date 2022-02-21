/**
 * Vježba: JS - DOM
Trajanje: 15min (18:45 - 21:00)
---

1. Onoga trenutka kada timer dođe do 0, sadržaj u timeru mora biti crvene boje.

2. Onoga trenutka kada timer dođe 10 sekundi prije završetka, sadržaj u timeru mora blicati (na kratko se vidi, na kratko se ne vidi).

1. Ispraviti grešku sa veličinom fonta. Svaki naredni klik na "Start timer" button treba staviti font na početnu vrijednost kao što je bilo kod prvog klika na button.

2. Ispraviti grešku sa stilovima. Svaki naredni klik na "Start timer" button treba prikazati timer onako kako je bio prikazan i kod prvog klika na button.

DZ
1. Promijeniti logiku klika na "Start timer" button tako da nakon klika button bude disabled.

2. Promijeniti logiku klika na "Start timer" button tako da se sa drugim klikom timer pauzira, a sa narednim klikom opet nastavi odbrojavati.


*/




var timerElement = document.getElementById('timer');

var startButton = document.querySelector('[data-action-start]');

var timerElementStyle = getComputedStyle(timerElement);
var initialFontSize = parseInt(timerElementStyle.fontSize);

var intervalId = null;


startButton.addEventListener('click', function () {
    debugger;
    var time = parseInt(timerElement.dataset.startTime);
    var blinkTime = parseInt(timerElement.dataset.blinkTime);
    var fontSize = initialFontSize;
    
    
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    
    intervalId = setInterval(function () {
        // console.log(fontSize++);
        timerElement.innerHTML = time;
        timerElement.style.fontSize = fontSize + 'px';
        fontSize += 5;

        
            // timerElement.remove();
            // timerElement.setAttribute('class', 'expired');
            timerElement.classList.toggle('blink', time > 0 && time < blinkTime);
            timerElement.classList.toggle('expired', time === 0);

            if (time === 0) {
                clearInterval(intervalId);
                intervalId = null;
                
                return;
              }
              
              time--;
            }, 1000);
          });


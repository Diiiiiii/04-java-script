/**
 * Vježba: JS - DOM
Trajanje: 15min (18:45 - 21:00)
---

1. Onoga trenutka kada timer dođe do 0, sadržaj u timeru mora biti crvene boje.

2. Onoga trenutka kada timer dođe 10 sekundi prije završetka, sadržaj u timeru mora blicati (na kratko se vidi, na kratko se ne vidi).
 */

var timerElement = document.getElementById('timer');
console.log(timerElement.dataset);
var time = parseInt(timerElement.dataset.startTime);
var timerElementStyle = getComputedStyle(timerElement);
var fontSize = parseInt(timerElementStyle.fontSize);
var intervalId = null;

var startButton = document.querySelector('[data-action-start]');
startButton-addEventListener('click', function () {
    if (intervalId !== null) {
        clearInterval(intervalId);
    }
    
    intervalId = setInterval(function () {
        // console.log(fontSize++);
        timerElement.style.fontSize = fontSize + 'px';
        fontSize +=5;

        if (time === -1) {
            // timerElement.remove();
            // timerElement.setAttribute('class', 'expired');
            timerElement.classList.add('expired');
            clearInterval(intevalId);
            intervalId = null;
        } else {
            timerElement.innerHTML = time;
            time--;
        }
    }, 1000);
});



"use strict";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomHat = getRandomInt(1, 35);
let hat = document.getElementById("hat");
hat.src = `hats/${randomHat}.webp`;
function getHat() {
    setInterval(function() {
        randomHat = getRandomInt(1, 35);
        hat.src = `hats/${randomHat}.webp`;
    }, 5000);
}

getHat();

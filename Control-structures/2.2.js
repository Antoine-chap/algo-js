const prompt = require('prompt-sync')();


let min = Number(prompt("Choisissez un nombre minimum."));
let max = Number(prompt("Choisissez un nombre maximum."));
let current = Number(prompt("Choisissez un nombre au hasard entre les deux."));

if (isNaN(min) || isNaN(max) || isNaN(current)){
    console.log("Réponse incorrect.");
} else {
    if (min > max) {
        console.log("Réponse incorrect.");
    } else {
        if (current >= min && current <= max) {
            console.log("Bien joué");
        } else {
            console.log("Réponse incorrect.");
        }
    }
}

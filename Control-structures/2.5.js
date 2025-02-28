const prompt = require('prompt-sync')();


let question = Number(prompt("Donne moi ton muméro préferé."));


if (isNaN(question) || question != 42) {
    console.log("Réponse incorrect réssayer.")
} else {
    console.log("Bravo tu as trouvé la bonne réponse!");
}
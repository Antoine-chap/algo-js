const prompt = require('prompt-sync')();


const n = Number(prompt("Donne moi un muméro qui fera office de nombre d'étape:"));






if (isNaN(n) || n < 0){
    console.log("Réponse incorrect, Veuillez donner une réponse superieur a zéro.");
} else {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let suit = Number(prompt(`Ecris un numéro -étape ${i + 1}:`));
        if (isNaN(suit)){
            console.log("Erreur : Ceci n'est pas un nombre.");
            i--
        } else {
            sum += suit;
        }

    }
    console.log(`Voici la sommes de toutes vos nombres : ${sum}`);
    
}
const prompt = require('prompt-sync')();

let question = Number(prompt("Donne moi un chiffre de 1 à 7."));
let arr = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"]; // j'hésite encore a laisser un blanc pour ne pas compter le 0 ou mettre une formule pour decompté de 1
let number = Number(question);



if (isNaN(question) || question < 1 || question > 7){
    console.log("Réponse incorrect.");
} else {
    console.log(`Nous sommes ${arr[number -1]}.`);
}
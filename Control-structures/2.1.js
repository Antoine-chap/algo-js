const prompt = require('prompt-sync')();

let age = Number(prompt("votre âge. "));

if (isNaN(age) || age < 0) {
    console.log("Ceci n\'est pas une réponse valide.");
} else if (age >= 18) {
    console.log("Vous êtes majeur.");
} else {
    console.log("Vous n\'êtes pas encore majeur.");
}
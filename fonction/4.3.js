
const prompt = require('prompt-sync')();
/**
 * 
 * @returns a number between 1 and 10
 */
let rand10 = () => {
    return Math.floor(Math.random() * 10) +1;
}

let multiRand = Number(prompt("Entrer un nombre aléatoire."));

if(isNaN(multiRand) || multiRand <= 0){
    console.log("Cette réponse n'est pas valide.");

} else {
    const arrNumbers = [];
    for (let i = 0; i < multiRand; i++) {
        const randNumber = rand10();
        arrNumbers.push(randNumber);
    }
    console.log(`Les nombres aléatoire généres sont : ${arrNumbers.join(", ")}`);
}
// a modifier pour rendre une fonction s'attaque a la tache des que j'ai du temps


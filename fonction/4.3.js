
const prompt = require('prompt-sync')();
/**
 * 
 * @returns a number between 1 and 10
 */
let rand10 = () => {
    return Math.floor(Math.random() * 10) +1;
}
/**
 * 
 * @returns return Generic random numbers
 */
let multiRand = () => {
    let aleatRand = Number(prompt("Entrer un nombre aléatoire."));

    if(isNaN(aleatRand) || aleatRand <= 0){
        console.log("Cette réponse n'est pas valide.");

    } else {
        const arrNumbers = [];
        for (let i = 0; i < aleatRand; i++) {
        const randNumber = rand10();
        arrNumbers.push(randNumber);
        }
    return (`Les nombres aléatoire généres sont : ${arrNumbers.join(", ")}`);
    }
}
console.log(multiRand());



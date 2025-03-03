/**
 * 
 * @returns  a number between 1 and 10
 */
let rand10 = () => {
    return Math.floor(Math.random() * 10) +1;
}
console.log(`votre chiffre aléatoire est ${rand10()}`);
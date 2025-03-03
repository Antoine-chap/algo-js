const prompt = require('prompt-sync')();



let arr = ["Antoine", "Martin", "Jordan", "Manu", "Hugo", "Kamal", "Stephane", "Valentin", "Liana", "Arsenia", "Ina"];
let multiRand = Number(prompt("Entrer un nombre."));

if(isNaN(multiRand) || multiRand <= 0){
    console.log("Cette réponse n'est pas valide.");
    }
let rand10 = () => {
    return Math.floor(Math.random() * arr.length);
}
let pickLearner = (inputAr, n) => {
    const arrNumbers = [];
    for (let i = 0; i < n; i++) {
        const randNumber = rand10();
        arrNumbers.push(inputAr[randNumber]);

    }
    return arrNumbers
}
let result = pickLearner(arr,multiRand);
console.log(`Les noms aléatoire sont : ${result.join(", ")}`);
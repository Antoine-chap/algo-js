const prompt = require('prompt-sync')();

let askTvSerie = () => {
    const serie = {};
    serie.name = prompt("Entré le nom de votre série préférée:");
    serie.yearOfProduction = Number(prompt(`Entré l'année de production de votre série:`));
    serie.castMembersName = [];
    let addCast = true;
    while (addCast) {
        const castMember = prompt(`Entré le nom d'un personne du cast de la sérié ( ou laissez un espace vide pour teminer):`);
        if (castMember.trim() === ""){
        addCast = false;
        } else { serie.castMembersName.push(castMember);

        }
    }
    return serie;
}

let translationJSON = (serie) => {
const jsonString = JSON.stringify(serie, null , 2);
console.log(jsonString);
}

const preferSerie = askTvSerie();
translationJSON(preferSerie);





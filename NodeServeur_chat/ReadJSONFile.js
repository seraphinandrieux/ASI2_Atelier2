//recupérer la liste des users depuis un fichier JSON users.json
//et associe les users 2 par 2
//si un joueur est tout seul il affiche no player found
const fs = require("fs");
var monJson = require('./users.json');

fs.readFile('users.json', 'utf8', function (erreur, donnees)
{
 if (erreur)
 throw erreur; // Vous pouvez gérer les erreurs avant de parser le JSON
 var monJson = JSON.parse(donnees);
 });


var list_id = Object.values(monJson)[0].id;
for (i =1; i<=Object.values(monJson).length-1; i++){
   if (i%2 != 0){
        console.log('New game: ' + Object.values(monJson)[i-1].surName + ' VS ' + Object.values(monJson)[i].surName);
    } else if (i == Object.values(monJson).length-1) {
        console.log ('no player found ' + Object.values(monJson)[i].surName)
    }
    
}

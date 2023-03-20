

function affichageRecette(id) {
    var cardColonnes = document.querySelectorAll('.affiche');
    var filtres = document.querySelector('.filtre')
    
    //Cherche l'element sur lequel j'ai cliqué
    var cardColonnesId = document.getElementById(id);
    //Va chercher son frère
    var cardColonnesIdSibling = cardColonnesId.nextElementSibling.id;
    //Va chercher le frere du frere
    var cardColonnesIdSiblings = document.getElementById(cardColonnesIdSibling);
    // console.log(cardColonnesIdSiblings);
    
    cardColonnes.forEach(element => {
        var cardColonne = document.getElementById(element.id);
        cardColonne.style.display = 'none';
    })

    //Afficher la fiche recette cliquée
    cardColonnesIdSiblings.style.display = 'flex';
    filtres.style.display = 'flex';

}


//Cacher toutes les div enfants de #cartes et montrer le tout en format card colonne.
function retour(){
    var filtres = document.querySelector('.filtre')
    var cardColonnes = document.querySelectorAll('.cardColonne');
    var cardLignes = document.querySelectorAll('.cardLigne');
    var affiches = document.querySelectorAll('.affiche');
    var filtre = document.querySelectorAll('.filtre');

    //Montrer les cardColonnes
    cardColonnes.forEach(element => {
        var cardColonne = document.getElementById(element.id);
        cardColonne.style.display = 'flex';
    })

    //Cacher les affiches
    affiches.forEach(element =>{
        var affiche = document.getElementById(element.id);
        affiche.style.display = 'none';
    })

    filtres.style.display = 'none'

}



//Cacher toutes les div enfants de #cartes et montrer en cardLigne + affichage celle qui est selectionné.
function changerRecette(id){


    var cardColonnes = document.querySelectorAll('.cardColonne');
    var cardLignes = document.querySelectorAll('.cardLigne');
    var affiches = document.querySelectorAll('.affiche');

    var idLigne = document.getElementById(id);
    console.log(idLigne);
    var idLigneSibling = idLigne.nextElementSibling;


    //Cacher les affiches
    affiches.forEach(element =>{
        var affiche = document.getElementById(element.id);
        affiche.style.display = 'none';
    })

    idLigneSibling.style.display = 'flex';

}
//aller chercher la div ingredient de précisement la carte qui est en display flex
function afficherIngredients(id){

    var instructions = document.getElementById(id).nextElementSibling;
    var ingredients = document.getElementById(id).nextElementSibling.nextElementSibling;


    console.log(ingredients);

    instructions.style.display = 'none';
    ingredients.style.display = 'flex';
}


function afficherInstructions(id){
    var instructions = document.getElementById(id).nextElementSibling;
    var ingredients = document.getElementById(id).nextElementSibling.nextElementSibling;

    console.log(instructions);
    
    ingredients.style.display = 'none';
    instructions.style.display = 'flex';
}
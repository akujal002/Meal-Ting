let inputSearchBar = document.getElementById('text');
let cartes = document.getElementById('cartes');
let select = document.getElementById('select');
let input = document.getElementById('text');
let btnVoirPlus = document.getElementById('btnVoirPlus');


// addEventListener qui permet de valider la recherche avec entrée
input.addEventListener('focus',event=>{
  document.addEventListener('keydown',e=>{
    if ((e['key'])=='Enter') {
      buttonSearch()
    }
  })
})

// Bouton Voir plus
function afficherPlus(){
  let carte = document.querySelectorAll('.carte');
  btnVoirPlus.style.display="none";
  let i = 6;
  while(i!==(carte.length)){
    carte[i].style.display='flex';
    i++
    }
}

function buttonSearch(){
  cartes.innerHTML="";
  value = inputSearchBar.value
  if (inputSearchBar.value == '' || inputSearchBar.value == ' '){
    cartes.innerHTML ="<p>Cette recherche n'a aucun résultat.</p>"
  }else if (select.value == 'Categorie') {
    searchByCategorie(value);
  }else if (select.value == 'Ingredient') {
    searchByIngredient(value);
  }else if (select.value == 'Pays') {
    searchByArea(value);
  }else{
    searchByName(value);
  }
  inputSearchBar.value="";
}

// initialisation de la page
function initialisation(){
  let i = 0;
  while(i<6){
    randomMeal()
    i++
  }
}

initialisation()


/**
 * Fonction qui permet de compter le nombre d'ingrédient présent dans les recettes, afin de
 * simplifier leurs récupération.
 * @param  {[array]} objet comprenant toutes les informations de la recette, dont les ingrédients
 * @return {[int]} nombre total d'ingrédient (-1 car la liste d'ingrédient commence à 1
 * et l'index que nous utilisons commence à 0)
 */
function compterIngredient(data){
  verif=false
  i=1;
  while(data['strIngredient'+i+'']){
    i++
  }
  return i-1
}

/**
 * Fonction qui permet de crée une carte. La fonction récupère les datas et les passes en paramètres
 * à la class Recette.
 * @param  {[type]} data, de l'api
 * @return {[type]} pas de return mais instanciation d'un objet 'Recette' à chaque appel.
 */
function creerCarte(data){
    if (!data['meals']){
      cartes.innerHTML ="<p>Cette recherche n'a aucun résultat.</p>"
    }else{
    l = data['meals'].length;
    for (let i = 0;  l > i ; i++) {
      var titre = data['meals'][i]['strMeal'];
      var pays = data['meals'][i]['strArea'];
      var categorie = data['meals'][i]['strCategory'];
      var img = data['meals'][i]['strMealThumb'];
      var instruction = data['meals'][i]['strInstructions'];
      var lengthIngredient = compterIngredient(data['meals'][i]);
      var idRecette = data['meals'][i]['idMeal'];
      var tabIngredient = [];


      for (let x =1; x < lengthIngredient; x++) {
        tabIngredient.push('<br><br> • '+data['meals'][i]['strIngredient'+x+'']+" "+data['meals'][i]['strMeasure'+x+'']);
        }
      // Bouton voir plus si plus de 6 cartes
      nbDiv = document.querySelectorAll('#cartes > div').length;

       display = 'flex';

      if ((nbDiv+1)>6) {
          var display ='none';
          btnVoirPlus.style.display ='flex';
      }else{
          var display = 'flex';
          btnVoirPlus.style.display ='none';
      }

       var carte = new Recette(titre,categorie,instruction,img,tabIngredient,pays,idRecette,display);
      }
    }
}

//Function qui permet d'afficher les recettes en fonction d'une recherche
//par nom(param doit être une string)
function searchByName(recherche){
cartes.innerHTML="";
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s='+recherche+'')
.then(res=>res.json())
.then(data=>{
      creerCarte(data);
    })
};

//Function qui permet d'afficher les recettes en fonction d'une recherche par nom
function searchById(Id){
cartes.innerHTML="";
fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+Id+'')
.then(res=>res.json())
.then(data=>{
      creerCarte(data);
    })
};

// Recherche par Ingrédient
function searchByIngredient(ingredient){
cartes.innerHTML="";
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i='+ingredient+'')
.then(res=>res.json())
.then(data=>{
  if (!data['meals']){
      cartes.innerHTML ="<p>Cette recherche n'a aucun résultat.</p>"
    }else{
      l = data['meals'].length;
      for (let i = 0;  l > i ; i++) {
        searchById(data['meals'][i]['idMeal'])
      }
    }
    })
};

// Recherche par Categorie
function searchByCategorie(categorie){
cartes.innerHTML="";
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categorie+'')
.then(res=>res.json())
.then(data=>{
  if (!data['meals']){
      cartes.innerHTML ="<p>Cette recherche n'a aucun résultat.</p>"
    }else{
      l = data['meals'].length;
      for (let i = 0;  l > i ; i++) {
        searchById(data['meals'][i]['idMeal'])
      }
    }
    })
};

// Recherche par Pays
function searchByArea(area){
  cartes.innerHTML="";
fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a='+area+'')
.then(res=>res.json())
.then(data=>{
  if (!data['meals']){
      cartes.innerHTML ="<p>Cette recherche n'a aucun résultat.</p>"
    }else{
      l = data['meals'].length;
      for (let i = 0;  l > i ; i++) {
        searchById(data['meals'][i]['idMeal'])
      }
    }
    })
};


//Prend un repas random
function randomMeal(){
fetch('https://www.themealdb.com/api/json/v1/1/random.php')
.then(res=>res.json())
.then(data=>{
      creerCarte(data);
    })
};

//Liste des catégories
function listeCategorie(){
fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
.then(res=>res.json())
.then(data=>{
      console.log(data)
    })
};

// Liste des Pays
function listePays(){
fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
.then(res=>res.json())
.then(data=>{
      console.log(data)
    })
};



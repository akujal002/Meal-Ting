
class Recette {
    //Attributs
    _nom;
    _categorie;
    _instructions;
    _image;
    _ingredient;
    _pays;
    _idRecette;
    _display;
    

    clock = '../public/img/clock.png';
    couverts = '../public/img/couverts.png';
    cloche = '../public/img/cloche.png';

    //Constructor
    constructor(nom, categorie, instructions, image, ingredient, pays, idRecette,display) {
        this._nom = nom;
        this._categorie = categorie;
        this._instructions = instructions;
        this._image = image;
        this._ingredient = ingredient;
        this._pays = pays;
        this._idRecette = idRecette;
        this._display = display;

        //instancier
        this.afficherCarte();
    }

    //--------------- Méthodes ----------------\\

    
    //InnerHTML de chaque carte
    afficherCarte() {
        let carte = document.getElementById('cartes');
        carte.innerHTML +=
        `
        <div class="carte" style="display:${this._display};">
    <div class='cardColonne' id='${this._idRecette}.cardColonne' onclick='affichageRecette(id)'>
        <h1 class='cardColonneTitre'>${this._nom}</h1>
        <img class='cardColonneImage' src="${this._image}" style="" alt="Representation image">
        <ol class='cardColonneImgs'>
            <li><img class='afficheHorloge' src="${this.clock}" style="" alt="Clock"></li>
            <li><img class='afficheCloche' src="${this.cloche}" style="" alt="bell"></li>
            <li><img class='afficheCouverts' src="${this.couverts}" style="" alt="fork and knife"></li>
            </ol>
        <ol class='cardColonneInfos'>
            <li><p class='cardColonneTemps'>1h</p></li>
            <li><p class='cardColonneDifficulte'>medium</p></li>
            <li><p class='cardColonnePers'>3p</p></li>
        </ol>
        
            <span class='colonneTags' id='colonneTags'>
                <span>${this._pays}</span>
                <span>${this._categorie}</span>
            </span>
        </div>
        
        <div class='affiche' id='${this._idRecette}.affiche' onClick="" style="display : none;">
            <div class='X'><img id="closeRecette" src="img/cross.png" alt="" onClick='retour()'></div>
            <h1 class='afficheTitre'>${this._nom}</h1>
            <img class='afficheImage' src="${this._image}" alt="Representation image">
            <ol class='afficheImgs'>
                <li><img class='afficheHorloge' src="${this.clock}" alt="Clock"></li>
                <li><img class='afficheCloche' src="${this.cloche}" alt="bell"></li>
                <li><img class='afficheCouverts' src="${this.couverts}" alt="fork and knife"></li>
            </ol>
        <ol class='afficheInfos'>
            <li><p class='afficheTemps'>1h</p></li>
            <li><p class='afficheDifficulte'>moyen</p></li>
            <li><p class='affichePers'>3pers</p></li>
        </ol>

        <div class='onglet' id='${this._idRecette}.onglet'>
        <button class='buttonInstruction' id='${this._idRecette}.buttonRecipe' onClick="afficherInstructions('${this._idRecette}.onglet')">Recipe</button>
        <button class='buttonIngredients' id='${this._idRecette}.buttonIngredients' onClick="afficherIngredients('${this._idRecette}.onglet')">ingredients</button>
        </div>
        <p class='instructions' id="${this._idRecette}.instructions">${this._instructions}</p>
        <div class='ingredients' id="${this._idRecette}.ingredients">${this._ingredient}</div>
        
        <ol class='afficheTags' id='afficheTags'>
            <span>${this._pays}</span>
            <span>${this._categorie}</span>
        </ol>
            </div>
            </div>
            
            <span class="filtre" onClick="retour()"></span>
        `
    }

    getNom(){
        return this.nom;
    }
    getCategorie(){
        return this.categorie;
    }
    getDescription(){
        return this.description;
    }
    getImage(){
        return this.image;
    }
    getIngredient(){
        return this.ingredient;
    }
    getPays(){
        return this.pays;
    }
}

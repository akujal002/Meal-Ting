class Tags {
    pays;
    categorie;

    constructor(categorie, pays) {
        this.categorie = categorie;
        this.pays = pays;

        //instancier tags
        this.allTags();
    }

    allTags(){
        let tags = document.getElementById('Tags');
        tags.innerHTML +=
        `
            <li>${this._categorie}</li>
            <li>${this._pays}</li>
        `
    }
}
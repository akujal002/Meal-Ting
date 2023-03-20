
function filter(){
    let tags = document.querySelectorAll('.colonneTags')
    let nbCarte = tags.length;
    let tabTags = [];
    for (var i = 1; i < nbCarte; i++) {
        var text = tags[i].innerText;
        tabTags.push(text)
        console.log(text)
    }
    tabTags.forEach(element=>{
    })
}



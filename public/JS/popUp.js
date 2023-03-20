let popUp = document.getElementById('popUp');

function afficherPopUp(){
  popUp.style.display = 'flex';
  main.style.opacity = '0.5';
  main.style.filter = 'brightness(0.2)';
  main.style.filter += 'blur(1.5px)';
}
function fermerPopUp(){
  popUp.style.display = 'none';
  main.style.opacity = '1';
  main.style.filter = 'none';
}

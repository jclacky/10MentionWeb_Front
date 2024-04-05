// Dark mode

let switchBox = document.querySelector('.switch'); // Je stocke l'élément div.switch

let container = document.querySelector('.container-fluid'); // je stocke l'élément div.container

 switchBox.addEventListener('click', changeMode ); // Je déclare l'évènement  click sur la div.switch

 let nav = document.querySelector('.navbar-desktop');
let liens = document.querySelectorAll('.navbar-desktop a');
console.log(liens);

let btn_change = document.querySelector('.btn')
let icon = document.querySelector('.switch i')
let h1_change = document.querySelector('h1');
let btn = document.querySelector('.btn')
let icon1 = document.querySelector('block-bnt i')
icon1.addEventListener('click', changeMode);
function changeMode(){
    nav.classList.toggle('nav-dark');
    //la div container change de couleur de fond
    container.classList.toggle('container-change');
    
    h1_change.classList.toggle('h1-change');

    for (let lien of liens){
        lien.classList.toggle('lienDarkMode');
    }
    btn_change.classList.toggle('btn-change');
    icon.classList.toggle('icon-change')
    btn_change.classList.toggle('btn-dark')
    btn_change.classList.toggle('btn-dark:hover')


    if (icon.classList.contains('bi-sun-fill')) {

        icon.classList.remove('bi-sun-fill');
        icon.classList.add('bi-moon-fill');

        
    }
    else{
        icon.classList.remove('bi-moon-fill');
        icon.classList.add('bi-sun-fill')
    }
    switchBox.classList.toggle('switch-change')
    
    if(icon1.classList.contains('bi bi-emoji-neutral')){
        icon.classList.remove('bi bi-emoji-neutral');
        icon.classList.add('bi bi-emoji-wink');
    }
    else {
        icon.classList.add('bi bi-emoji-wink');
        icon.classList.remove('bi bi-emoji-neutral');
    }
 }


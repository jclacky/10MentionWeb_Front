/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..
// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènementà un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/


// div #rouge 
let divRouge = document.querySelector('#rouge'); // je selectionne ma div par son id ensuite je lui ajopute un écouteur d'évenement
divRouge.addEventListener('click', fDivRouge);
// l'écouteur d'évenement de décompose en deux argument
// 1 ==> L'action ici le click
// 2 ==> Le nom de la fonction ici fDivRouge

function fDivRouge(){
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.innerText = "GOLD";
}

function fP1(){
    alert('Le paragraphe est cliqué');
}

// div #orange
let divOrange = document.querySelector('#orange');
divOrange.addEventListener('dblclick', function(){
    divOrange.style.backgroundColor = "gold";
    divOrange.style.borderRadius = "50%";
    divOrange.innerText = "GOLD";
})

// le h2 avec dblclick
function dbl(){
    alert('Suite à un double clique');
}

// div #bleu
let divBleu = document.querySelector('#bleu');
divBleu.addEventListener('mouseover', function(){
    divBleu.style.backgroundColor = "gold";
    divBleu.style.borderRadius = "50%";
    divBleu.innerText = "Gold";
})

// div #primary
let divPrimary = document.querySelector('#primary');
divPrimary.addEventListener('mouseout', () =>{
    divPrimary.style.backgroundColor = "gold";
    divPrimary.style.borderRadius = "50%";
    divPrimary.innerText = "Gold";
}) 

// div #success : click et reclick
let divChangeCouleur = document.querySelector('#success');
divChangeCouleur.addEventListener('click', () =>{
    if (divChangeCouleur.classList.contains('vert')) {
        //je verifie si la div contient la class vert dans la liste classe
        divChangeCouleur.classList.remove('vert');
        divChangeCouleur.classList.add('gold')
        divChangeCouleur.innerText = "Gold";
    }else {
        divChangeCouleur.classList.remove('gold');
        divChangeCouleur.classList.add('vert')
        divChangeCouleur.innerText = "#Success";
    }
    
}) 


// Cache-cache
let imgChat = document.querySelector('img');
imgChat.style.width = '300px';

let divP = document.getElementsByClassName('divP')
console.log(divP);
for (let p of divP) {
    p.style.color = "#ff3636";
    p.style.fontWeight = "bold";
    p.style.textDecoration = "underline";
}

// d'autre façon
// for
    // for (let i = 0; i < pSection6.length; i++) {
    //         pSection6[i].style.textDecoration = 'underline';
    //         pSection6[i].style.color = '#ff3366';
    //         pSection6[i].style.fontWeight = 'bold';
    // }
    
// While
// let i = 0
// while (i < pSection6.length) {

//     pSection6[i].style.color = "#ff3366";
//     pSection6[i].style.fontWeight = "bold"
//     pSection6[i].style.textDecoration = "underline";
// }

divP[0].addEventListener('click', ()=>{
    imgChat.classList.add('hide');
});
divP[1].addEventListener('click', ()=>{
    imgChat.classList.remove('hide');
});

divP[2].addEventListener('click', ()=>{ 
    imgChat.classList.toggle('hide');
})
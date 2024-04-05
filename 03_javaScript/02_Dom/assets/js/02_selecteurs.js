// alert("ok");

/**
 * Afin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce à JS
 * 
 * 
 */


//----------------------------
// SÉLECTIONNER NOS ÉLÉMENTS
//----------------------------

// Séléction via tag

let title = document.getElementsByTagName('h1');
console.log(title);

let lesP = document.getElementsByTagName('p'); // On cherche tous les paragraphes de notre page
// on récupère un array (tableau) d'éléments
console.log(lesP);

// Grâce à ma variable dans laquelle j'ai sélectionner tous les p, je peux viser un seul des éléments grâce à son index. Pour faire du CSS j'utilise la propriété 'style' suivi des même déclarations que j'utilise en CSS, avec du camelCase à la place du kebab-case. 
// La propriété style permet d'acceder finement au style qui concerne un élément particulier.

lesP[0].style.backgroundColor = " red ";
lesP[0].style.color = "white";
lesP[0].style.textAlign = "center";
lesP[0].style.fontWeight = "bold";


// Selection via id

let titre = document.getElementById("titre");
console.log(titre);

// Selection via classe

let selectClass = document.getElementsByClassName("selectClass");
console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);
// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// MINI EXO 1 : modifier le contenu du h2 qui a la classe .subtitle : 'Je change le titre, youhou'

let subtitle = document.getElementsByClassName("subtitle");
console.log(subtitle);
subtitle[0].innerHTML = "<strong> Ceci est le titre modifié avec JavaScript </strong>";

// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

// 1ère façon de faire
// lesP[0].style.textTransform = "uppercase";
// lesP[1].style.textTransform = "uppercase";
// lesP[2].style.textTransform = "uppercase";
// lesP[3].style.textTransform = "uppercase";
// lesP[4].style.textTransform = "uppercase";

// 2ème façon de faire
for (let i = 0; i < lesP.length; i++) {
    
    lesP[i].style.textTransform = "uppercase";
    
}

// 3ème façon de faire

// Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.

for ( let p of lesP ) {

    p.style.textTransform = "uppercase";

}


// title[0].style.backgroundColor = "pink";
// title[0].style.textAlign = "center";

// Avec une classe pink dans le titre h1

let pink = document.getElementsByClassName('pink');

pink[0].style.backgroundColor = "pink";
pink[0].style.textAlign = "center";


// Sélection via queryselecteur ( sélectionne le premier élément trouvé)

let div = document.querySelector('div');
// console.log(div);

div.style.border = "1px solid #000";

// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.

// Sélection via querySelectorAll() (selectionne tous les éléments trouvés)
// sélectionne toutes les balises en ensemble et retourne un array d'éléments

let query = document.querySelectorAll('.selectClass');

for (let i = 0; i < query.length; i++) {
    
    console.log(query[i].innerText) // on a 3 paragraphe qui ont la classe selectClass
}

//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

let rajout = document.querySelector(".bg-success p");
rajout.innerText = "Je suis là";


// CRÉATION D'UN NOUVEL ÉLÉMENT 
let section = document.querySelector('section');
// Pour créer un élément, nous utilisons la méthode createElement (), puis nous l'intégrons dans le noeud souhaité
let nouveauParaFin = document.createElement('p');

nouveauParaFin.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe à la fin de la section </strong>";
nouveauParaFin.style.color = "red";

section.append(nouveauParaFin); // append() -> insère du contenu à la fin de la section.
// append() accepte tous les éléments (balise ou string).

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe au début de la section </strong>";
section.prepend(nouveauParaDebut);// prepend() -> insére du contenu au début de la section
nouveauParaDebut.style.color = "green"; 

// DÉPLACER UN ÉLÉMENT

// Pour déplacer un élément, il faut trois paramètres
/**
 *  -> le parent qui va accueillir l'élément
 *  -> l'élément à déplacer
 *  -> l'élément qui vient après
*/

let parent = document.querySelector('main');
let jeBouge = document.querySelector('h4');
let h2 = document.querySelector('subtitle');

parent.insertBefore(jeBouge, h2);


// SUPPRIMER UN ÉLÉMENT

// Pour supprimer un élément, il faut deux paramètres :
/**
 *  -> le parent 
 *  -> l'élément à supprimer
*/

let ul = document.querySelector('ul');

let li = document.querySelector('ul :nth-child(2)');
console.log(li);

// Pour supprimer, on utilise .removeChild()
ul.removeChild(li);

// CRÉER UN ATTRIBUT ET SA VALEUR
// setAttribute() : méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément

let baliseA = document.querySelector('a');
baliseA.setAttribute("attribut", "valeurAttribut"); // je rajoute un attribut à la balise a

baliseA.setAttribute("href", "01_introduction.html"); // changer la valeur de l'attribut href

let lesA = document.querySelectorAll('a');

let valeurA = lesA[3].getAttribute('href'); // ici je récupère la valeur de l'attribut href avec le getAttribute()
console.log(valeurA);

// Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné.


// let nouveauA = document.querySelector('h1');
// nouveauA = document.createElement('a');
// nouveauA.insertElement('h1', 'a');
// nouveauA = document.setAttribute("href");


// 1ère façon de faire
let container = document.querySelector('h1');
// let element = document.createElement('a');
// element.setAttribute('href', 'https://developer.mozilla.org/fr/');
// element.setAttribute('target', '_blank');
// element.style.color = "white";
// element.style.textDecoration = "none";
// element.innerText = "Cours JS";
// container.innerText = "";
// container.append(element);
// console.log(element);


// 2ème façon de faire

// container.innerHTML = "<a> Cours JavaScript </a>";
// let element = document.querySelector('h1 a');
// element.setAttribute('href', 'https://developer.mozilla.org/fr/');
// element.setAttribute('target', '_blank');
// element.style.color = "white";
// element.style.textDecoration = "none";


// 3ème façon de faire

container.innerHTML = "<a href ='https://developer.mozilla.org/fr/' target='_blank' > Cours JavaScript </a>"
let element = document.querySelector('h1 a');
element.style.color = "white";
element.style.textDecoration = "none";
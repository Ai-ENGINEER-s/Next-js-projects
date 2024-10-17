// apprendre le ES6 

// ES6  ou ECMACScript 2015 , est une version majeure de JavaScript qui a introduit des fonctionnalité puissantes , ameliorant le langage  de manière significative . Dans ce cours , nous verons ensemble toutes les fonctionnalités de ES6 



// avant ES6 on utilisait var 
// ES6 , on utilise maintenant let et const 

// let : c'est une variable modifiable , avec une portée de bloc 

// const : variable immuable , sa valeur ne peut pas etre reaffectée 


// var 
if(true){

    var age = 30; 
}

console.log(age)


if(true){

let yourAge = 45 ; 
}

// console.log(yourAge)  : result will be undefined  ; 

// II- Les fonctions flechées 

// Les fonctions flechées  permettent de dééclarer des fonctions plus concises , tout en conservant le context de this , ce qui les rend ideales pour les callbacks et les methodes 



const add = (a  , b)=> a+b ; 

console.log(add(89, 85))

// III- les fonction anonymes 


const numbers = [1,2,3,4,5] ; 

const squaresWithAnonymFunction = numbers.map(function(n){
    return n * n ; 
})

console.log(`Voici le carré de la liste avec la fonction anonyme : ${squaresWithAnonymFunction}`) ; 

const squares = numbers.map((n)=>n*n) ; 
console.log(`Voici le carré de la liste numbers : ${squares}`)



//  IV- les modèles Literaux (Template literals ):

//  Les templates literales permmettent de creer des chaines de caractere multilignes et d'inclure des expressions dynamiques  a l'interieur de ces chaines , ce qui simplifie la manipulation des chaines par rapport a l'operateur + .crrer une chaine multilignes tres facilement 


const name = "Jon" ; 

const greeting = "Hello , " + name + "!" ; 




const text_disposé_multilignes = `Ligne : BARRY SANOUSSA PART AU MARCHE 
Ligne 2 : BARRY EST TRES CONTENT AUJOURD'HUI 
Ligne 3 : Nous remercions tous Dieu d'etre toujours vivants 

`
console.log(text_disposé_multilignes) ; 

// V-Les parametres par defaut   

// ES6 introduit la possibilité de definir des parametres par defaut pour les fonctions afin d'eviter des valeurs undefined quand aucun argunment n'est passé . 


function greet(name) {
    const n = name || 'Anonyme';
    console.log(`Hello, ${n}`);
  }
  
  greet()


  function greet1(name="BARRY"){

    console.log(`hello ${name}`)
  }

  greet1()

// VI- La Destructuration (Destructuring)

// La destructuration permet d'extraire des valeurs d'objets ou de tableaux et de les assigner à des variables de manière plus concise . 


// Destructuration d'objets : 

const user = { id: 1 , name : 'Alice' , age:25} ; 
// avant ES6 
const id = user.id ; 
const nam = user.name ; 
// avec ES6   

const {id1 , name1} = user ; 
// DOM é a arvore/fluxo do meu documento HTML
// Ele serve para que o js consiga manipular (visualizar, editar, criar, excluir
// o dom ele torna os elementos html em objetos para que o js consiga acessar de fato)

let elementoBody = document.getElementsByTagName("body")

console.log(elementoBody)

// acessar pela tag h1

let elementoh1 = document.getElementsByTagName("h1")

// acessando o elemento pela sua posição

elementoh1[0].textContent = "Eu sou o melhor";

//exibe o id tecnica

let elemencriador = document.getElementById("criador")
console.log(elemencriador)

// exibe os elementos que possuem a class youtuber 

let elementoYoutuber = document.getElementsByClassName ("Youtuber")
console.log(elementoYoutuber)

//exibe o item 4 dos elementos que possuem a class youtuber

let elementosYoutuber = document.getElementsByClassName ("Youtuber")
console.log(elementosYoutuber[3])

//muda o texto do conteudo do item da 3 posição dos elementos que possuem a class youtuber

elementosYoutuber[3].textContent = "Drake pouco toque"

// muda a estilização de um elemento

elemencriador.style.color = "red";
elemencriador.style.fontSize = "25px"

//mude a cor do item 

elementoYoutuber [3].style.color = "red";
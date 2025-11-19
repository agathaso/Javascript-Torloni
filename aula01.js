// window.alert("oiiiiiii, tudo bem??")

// window.confirm("Ja'comeu hj??")
//comentario/* 
/*
Comentando Varias linhas
*/

// let nome = window.prompt("Qual é o seu nome?")

// window.alert("Bem vindo(a)!" + nome)

// console.log("Apresenta mensagens na tela")

// let numero01 = parseInt(prompt("Digite o primeiro número: "))

// let numero02 = parseInt(prompt("Digite o segundo número: "))

// let soma = numero01 + numero02

// console.log(soma)

// let num01 = parseFloat(prompt("Digite algum numero"))

// let num02 = parseFloat(prompt("Digite algum numero"))

// let resultado = num01 + num02

// console.log(resultado)

// let idade = parseInt(prompt("Qual é sua idade"))

// if (idade >= 18) {
//     console. log("Você é maior de idade, da-lheee")
// }
// else{
//     console. log("Você é menor de idade, Baixinho")
// }

let estacoes = prompt("Digite uma estação do ano: ")

switch (estacoes) {
    case "Verão":
        console.log("Muito calor e praia")
        break;

    case "Outono":
        console.log("As folhas caem, no final")
        break;

    case "Inveno":
   console.log("Está muito frio")
        break;

    case "Primavera":
        console.log("Eu vejo flores em Você...")
        break;
    default:
        break;
}
//3. Faça um programa que imprima na tela a tabuada de um número
//qualquer escolhido pelo usuário até o 10.

// let numero = parseInt(prompt("Digite um número para ver a tabuada:"));

// console.log("Tabuada do " + numero + ":");

// for (let i = 1; i <= 10; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i));
// }

 let tabuadaEscolida = parseInt(prompt("digite o numero da tabuada desejada: "));

//=====TABUADA X =====
 //    2 x 1 = 2 
 //    2 x 2 =
 //    2 x 3 =
 //    2 x 4 =

 //1 numero dentro da condição do for - inicialização - variavel
 //2 numero dentro da condição do for - condição - verifica a volta variavel 
 //3 numero dentro da condição do for - incremento - soma as voltas
 // i++ igual a i = i+1

console.log(`===== TABUADA ${tabuadaEscolida}=====`);

 for(let i = 1; i < 10; i++){
    // 2 X 4 =
     console.log(tabuadaEscolida + " X " + i + " = " + ( tabuadaEscolida * i));
 }

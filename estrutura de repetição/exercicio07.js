//7. Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.
 
//  let num = prompt("Digite um número:");

//  num = Number(num);

//  while (num >= 0) {
//     console.log(num);
//   num--;
//  }

let numeroescolhido = prompt("Digite um número positivo")

while (numeroescolhido > -1) {
    // só entra no while se a condição for verdadeiro

    console.log(numeroescolhido);
    // numeroescolhido = numeroescolhido - 1;
    numeroescolhido--; //decrementa o valor escolhido, ou seja, faz a contagem regressiva
}

function exibirtabuadaescolhida() {
    let tabuadaescolhida = parseInt(prompt("Digite um número de 1 a 10 para aparecer a tabuada desejada:"))

    console.log(`==TABUADA do ${tabuadaescolhida}==`);

    for (let i = 1; i <= 10; i++) {
        console.log(tabuadaescolhida + " X " + i + " = " + (tabuadaescolhida * i));
    }
}

//chama a minha função
exibirtabuadaescolhida();

//crie uma função para que me solicite o nome da pessoa e exiba-o
function solicitarNome() {
    let nome = prompt("Digite seu nome:");
    return nome; // retorna o nome para quem chamou a função
}

// exemplo de uso da função
let nomeDigitado = solicitarNome();
console.log("O nome digitado foi: " + nomeDigitado);

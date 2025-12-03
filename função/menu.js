//---------------------- 1
function calculoIMC(peso, altura) {



    let imc = peso / (altura * altura);


    if (imc < 18.5) {
        alert("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        alert("Peso normal");
    } else if (imc >= 25.0 && imc <= 29.9) {
        alert("Sobrepeso");
    } else if (imc >= 30.0 && imc <= 34.9) {
        alert("Obesidade grau 1");
    } else if (imc >= 35.0 && imc <= 39.9) {
        alert("Obesidade grau 2");
    } else {
        alert("Obesidade grau 3. se cuide por favor, sua vida ta em risco ");
    }

}
let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

calculoIMC(peso, altura);
//----------------------- 2

function exibirTabuadaEscolhida() {

    let tabuadaEscolhida = parseInt(prompt("Digite o número da tabuada desejada"));


    console.log(`======TABUADA ${tabuadaEscolhida} =====`);

    for (let i = 1; i <= 10; i++) {
        //    2 X 4 = ?
        console.log(tabuadaEscolhida + " X " + i + " = " + (tabuadaEscolhida * i));
    }
}

// chama minha função
//exibirTabuadaEscolhida();

//------------------------ 3
function conferirsequencia() {
    let n1 = parseFloat(prompt("Digite seu primeira número "))

    let n2 = parseFloat(prompt("Digite seu segunda número "))

    let n3 = parseFloat(prompt("Digite seu terceira número "))

    if (n1 < n2 && n2 < n3) {
        alert("Os números estão em ordem crescente.");

    }

    if (n1 > n2 && n2 > n3) {
        alert("Os números estão em ordem decrescente.");
    }
    else if (n1 <= n2 && n2 >= n3) {
        alert("Os números estão aleatórios")
    }

}

//------------------------ 4

function diasdasemana(params) {
    let semana = prompt("Digite um número de 1 a 7: ")

switch (semana) {
    case "1":
        console.log("Segunda-feira")
        break;

    case "2":
        console.log("Terça-feira")
        break;

    case "3":
        console.log("Quarta-feira")
        break;

    case "4":
        console.log("Quinta-feira")
        break;

    case "5":
        console.log("Sexta-feira")
        break;

    case "6":
        console.log("Sábado")
        break;

    case "7":
        console.log("Domingo")
        break;

    default:
        console.log("Número inválido")
        break;
}
}
//------------------------ 5

function name(params) {
    
}
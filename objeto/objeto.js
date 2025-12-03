let mercedes = {
modelo: "G63",
ano: "2025",
fabricante: "mercedes", 
cor: "preto fosco", 
acelerar(){
    console.log("acelerando...vrum...vrumm");
}, 
freiar() {
    console.log("freiando....")
}
};

console.log(mercedes.modelo);
console.log(mercedes.acelerar());

// Criar um objeto Prifessor Tadeu ou Jonas 
// 3 propiedades nome, NIF, salario
//2 conportamentos atribuirData e baterPonto
// Alem disso, escolha mais uma propiedade e mais um comportamento
let Tadeu = {
    nome: "Felipe Tadeu",
    NIF: 1234576,
    Salário: 60.000,
    datanasc: new Date(2000, 5, 13),
    hobbies: ["jogar jogos online", "fazer pizza com a vó"],

    atribuirnotas() {
    },

    baterponto() {
        let horariobatido = new Date(2025, 10, 28, 17,);
        console.log(horariobatido);

    }

};
console.log(Tadeu.hobbies)
console.log(Tadeu.datanasc);
console.log(Tadeu.baterponto);
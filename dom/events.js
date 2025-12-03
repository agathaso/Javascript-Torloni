//eventos sao interaçoes do usuario com o website e tambem
//comportamento do website, por exemplo carregar a tela
//eventos estao interacoes do usuario com o web site e tambem
//comportamentos do web site

let elementoBtn = document.getElementById("btn")
let novoElemento = document.createElement("a");
novoElemento.textContent = "Zé Neto e Cristiano - POR NOSSOS FILHOS"
novoElemento.href = "https://www.youtube.com/watch?v=wxLE0V9EFqg&list=RDwxLE0V9EFqg&index=1";

elementoBtn.addEventListener("click", () => {
    //alert("Você clicou no botão");

    //elementoBtn.style.backgroundColor = "purple"; (trocar a cor do botao)

    document.body.appendChild(novoElemento);
})
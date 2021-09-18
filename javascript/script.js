let nome = document.querySelector("#selecionar");
let botão = document.querySelector("#botão");
let res = document-querySelector("#res");
let titulo = document.querySelector("#titulo");
let img = document.querySelector("#imagem");

botão.addEventListener("click", function(resultado) {
    resultado.preventDefault();
    let valor = nome.value;

    if(valor == ''){
        alert('Selecione uma estação!')
    } else {}
})
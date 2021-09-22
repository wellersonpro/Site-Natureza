let nome = document.querySelector("#selecionar");
let botão = document.querySelector("#botão");
let res = document.querySelector("#res");
let img = document.querySelector("#imagem");

botão.addEventListener("click", function(resultado) {
    resultado.preventDefault();
    let valor = nome.value;

    if(valor == ''){
        alert('Selecione uma estação!')
    } else {
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (valor == 'Inverno'){
            res.innerHTML = ''
            img.setAttribute('', '')
            res.innerHTML += '<h1>Inverno</h1>'
            res.innerHTML += '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
        }
    }res.appendChild(img)
});
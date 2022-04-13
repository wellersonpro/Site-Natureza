function troca01() {
    let img = document.querySelector('img#trocaImagem');

    img.removeAttribute('src');
    img.setAttribute('src', 'imagens/pexels-janez-podnar-1424246.jpg');
}

function troca02() {
    let img = document.querySelector('img#trocaImagem');

    img.removeAttribute('src');
    img.setAttribute('src', 'imagens/pexels-janez-podnar-1432959.jpg');
}

function troca03() {
    let img = document.querySelector('img#trocaImagem');

    img.removeAttribute('src');
    img.setAttribute('src', 'imagens/pexels-jonathan-petersson-1237119.jpg');
}

function inverno() {
    let resultado = document.querySelector('div#resultado');
    let img = document.querySelector('img#ilustra');

    img.setAttribute('src', 'imagens/pexels-janez-podnar-1424246.jpg');
    resultado.innerHTML = ''
    resultado.innerHTML += '<h1>Inverno</h1>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non.</p>'
    resultado.appendChild(img);
}

function primavera() {
    let resultado = document.querySelector('div#resultado');
    let img = document.querySelector('img#ilustra');

    img.setAttribute('src', 'imagens/pexels-janez-podnar-1432959.jpg');
    resultado.innerHTML = ''
    resultado.innerHTML += '<h1>Primavera</h1>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore</p>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
    resultado.appendChild(img);
}

function verao() {
    let resultado = document.querySelector('div#resultado');
    let img = document.querySelector('img#ilustra');

    img.setAttribute('src', 'imagens/pexels-jonathan-petersson-1237119.jpg')
    resultado.innerHTML = ''
    resultado.innerHTML += '<h1>Verão</h1>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
    resultado.appendChild(img);
}

function outono() {
    let resultado = document.querySelector('div#resultado');
    let img = document.querySelector('img#ilustra');

    resultado.innerHTML = ''
    resultado.innerHTML += '<h1>Outono</h1>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore</p>'
    resultado.innerHTML += '<p class="textoResultado">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum.</p>'
    resultado.innerHTML += '<img src="imagens/pexels-jonathan-petersson-751605.jpg" alt="Imagem Outono" id="ilustra">'
}
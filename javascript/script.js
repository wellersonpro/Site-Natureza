let nome = document.querySelector("#selecionar");
let botão = document.querySelector("#botão");
let res = document.querySelector("#res");
let img = document.querySelector("#fotoestação")

botão.addEventListener("click", function(resultado) {
    resultado.preventDefault();
    let valor = nome.value;

    if(valor == ''){
        alert('Selecione uma estação!')
        
    } else {
        if (valor == 'Inverno'){
            img.setAttribute('src', 'imagens/pexels-janez-podnar-1424246.jpg')
            res.innerHTML = ''
            res.innerHTML += '<h1 id="estação">Inverno</h1>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
        }

        else if (valor == 'Primavera'){
            img.setAttribute('src', 'imagens/pexels-janez-podnar-1432959.jpg')
            res.innerHTML = ''
            res.innerHTML += '<h1 id="estação">Primavera</h1>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore<p>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
        }

        else if (valor == 'Verão'){
            img.setAttribute('src', 'imagens/pexels-jonathan-petersson-1237119.jpg')
            res.innerHTML = ''
            res.innerHTML += '<h1 id="estação">Verão</h1>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis.</p>'
        }

        else if (valor == 'Outono'){
            img.setAttribute('src', 'imagens/pexels-jonathan-petersson-751605.jpg')
            res.innerHTML = ''
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore</p>'
            res.innerHTML += '<p id="textobusca">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum dolores maiores laborum architecto repudiandae exercitationem aut voluptas quasi obcaecati illum odio dicta eos, veniam pariatur reprehenderit. Enim, labore odit. Lorem ducimus est quo pariatur hic nisi dolorum nemo, unde neque! Cum dolor dignissimos non harum ex maxime! Lorem ipsum dolor sit amet consectetur adipisicing elit. Estações Perferendis eos sunt saepe minima. Ab rem quidem est itaque vero consequatur veritatis ducimus, delectus id dolorum. Possimus ea voluptatum sint debitis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum</p>'
        }
    }
    res.appendChild(img)
});
let listaPosts = []
let catalogo = document.getElementById('catalogo')

function render(lista){
    for(const producto of lista){
        let card = document.createElement("div")
        card.innerHTML= `<h3>${producto.nombre}</h3>
                         <p>$ ${producto.precio}</p>
        `
        catalogo.append(card)
    }
}


function consologear(e){
    console.log(e)
}

fetch('proyect.json')
    .then((response) => response.json())
    .then((data) => render(data))

for(let button of listaPosts){
let botonMas = document.getElementById("buttonMas")
    botonMas.addEventListener('click', consologear)
    document.body.append(botonMas)
}
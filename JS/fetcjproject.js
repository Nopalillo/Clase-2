
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


fetch('proyect.json')
    .then((response) => response.json())
    .then((data) => render(data))

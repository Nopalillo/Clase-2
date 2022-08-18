class producto {
    constructor(nombre, precio, size, stock) {
        this.nombre = nombre
        this.precio = precio
        this.size = size
        this.stock = stock
    }
}
// Global Variables 
let productos = []
let precioFinal = 0
let compraFinal = false;

// -----------------------------------

const producto1 = new producto('Suavisante Suavitel', 210, 8.5 + 'L', 30);
productos.push(producto1);
const producto2 = new producto('Detergente Liquido Persil', 245, 9 + 'L', 30);
productos.push(producto2);
const producto3 = new producto('Detergente Members Mark', 218, 10 + 'L', 30);
productos.push(producto3);
const producto4 = new producto('Detergente Mas color para ropa oscura', 245, 10 + 'L', 30);
productos.push(producto4);
const producto5 = new producto('Lava trastes liquido Salvo', 103, 2.6 + 'L', 30);
productos.push(producto5);
const producto6 = new producto('Multi limpiador desinfectante Pinol', 192, 9 + 'L', 30);
productos.push(producto6);




function addTheValue(secondValue) {
    var fValue = document.getElementById("firstValue");
    firstValue.innerHTML = parseInt(fValue.innerHTML) + parseInt(secondValue);
}

function restTheValue(secondValue) {
    var fValue = document.getElementById("firstValue");
    firstValue.innerHTML = parseInt(fValue.innerHTML) - parseInt(secondValue)
    
}

for (const articulo of productos) {

    let showProducts = document.createElement('div')
    showProducts.innerHTML = `<div><strong>Nombre de producto: ${articulo.nombre}</strong></div>
                              <p>Precio: $${articulo.precio}</p>
                              <p>Unidades restantes: ${articulo.stock}</p>`
    document.body.append(showProducts)
    let estoyCansado = document.createElement('div')
    estoyCansado.innerHTML = `<b id="firstValue">0</b>
    <button type="button" onclick="addTheValue(1)">+ </button>
    <button type="button" onclick="restTheValue(1)">- </button>`
    document.body.append(estoyCansado)
    

}



















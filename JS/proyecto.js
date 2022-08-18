let usuario = prompt('Bienvenido al supermercdo de despensas para cuidado de Ropa \n-Ingrese su nombre para continuar' );

class producto {
    constructor (nombre, precio, size, stock){
        this.nombre = nombre
        this.precio = precio
        this.size = size
        this.stock = stock
    }
}

let productos = []
let precioFinal = 0
let compraFinal = false;

const producto1 = new producto('Suavisante Suavitel', 210, 8.5 + 'L', 30);
productos.push(producto1);
const producto2 = new producto('Detergente Liquido Persil', 245, 9 + 'L', 30);
productos.push(producto2);
const producto3 = new producto('Detergente Members Mark', 218, 10 + 'L', 30);
productos.push(producto3);
const producto4 = new producto('Detergente Mas color para ropa oscura', 245, 10 + 'L', 30);
productos.push(producto4);
const producto5 = new producto('Lava trastes liquido Salvo', 103, 2.6 + 'L', 30 );
productos.push(producto5);
const producto6 = new producto('Multi limpiador desinfectante Pinol', 192, 9 + 'L', 30);
productos.push(producto6);


console.log(productos.map((v) => v.nombre))


let cantidadCompras = prompt('Ingrese la cantidad de distintos productos que desea comprar' + '\n' + productos.map((v) => '\n-' + v.nombre));

function calculoPrecio(precio, cantidad, compraFinal){
    let precioTotal = 0
    precioTotal += precio * cantidad
    precioFinal += precioTotal
    if (compraFinal === true) {
         return alert(` El precio total es de: $${precioTotal} \n El total de su compra es: $${precioFinal} ` )
    }else{
        return alert('El precio total es de: $' + precioTotal)}
}

function calculoStock(stock, precio, cantidad, compraFinal){
  /*   if(stock >= cantidad){
        calculoPrecio(precio, cantidad, compraFinal)
    } else {
        alert('No disponemos de esa cantidad')
    } */

        stock >= cantidad ? calculoPrecio(precio, cantidad, compraFinal) : alert('No disponemos de esa cantidad')

        
        stock < cantidad && console.log('No disponemos de esa cantidad')

}

 for(let i = 0; i < cantidadCompras; i++){
    let compra1 = prompt('Ingrese el nombre del producto que desea comprar' + '\n' +  productos.map((v) => '\n-' + v.nombre))
    let cantidad1 = parseInt(prompt("Ingrese la cantidad del producto que quiere comprar:"))

    if(i === cantidadCompras -1){
        compraFinal = true;
    }

    
if(compra1 == producto1.nombre){
    calculoStock(producto1.stock, producto1.precio, cantidad1, compraFinal)
}else if(compra1 == producto2.nombre){
    calculoStock(producto2.stock, producto2.precio, cantidad1, compraFinal)
}else if(compra1 == producto3.nombre){
    calculoStock(producto3.stock, producto3.precio, cantidad1, compraFinal)
}else if(compra1 == producto4.nombre){
    calculoStock(producto4.stock, producto4.precio, cantidad1, compraFinal)
}else if(compra1 == producto5.nombre){
    calculoStock(producto5.stock, producto5.precio, cantidad1, compraFinal)
}else if(compra1 == producto6.nombre){
    calculoStock(producto6.stock, producto6.precio, cantidad1, compraFinal)
}
else{
    alert('No disponemos de ese producto');
}
 }

for(const articulo of productos) {

 let showProducts = document.createElement('div')
 showProducts.innerHTML = `<div><strong>Nombre de producto: ${articulo.nombre}</strong></div>
                           <p>Precio: $${articulo.precio}</p>
                           <p>Unidades restantes: ${articulo.stock}</p>`
                           document.body.append(showProducts)
}

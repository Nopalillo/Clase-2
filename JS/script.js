/*  Primera Clase
let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombre) 
 */


// Segunda Clase
/* 
 let edad = parseInt(prompt("Ingrese su edad:"))
/*  let nombre = prompt("Ingrese su nombre:") */

/* if(edad >= 18) {
  alert("Eres mayor de edad")

} 
else{
    alert("No eres mayor de edad")
}

if(nombre == 'Coder') {
  alert("Bienvenido " + nombre)

} */


/* let precio = parseInt(prompt("Ingrese el precio"))
    if (precio < 20 ){
        alert("El precio es menor que 20");
    }
    else if (precio < 50 ) {
        alert("El precio es menor que 50");
    }
    else if (precio < 100 ) {
        alert("El precio es menor que 100");
    }
    else {
        alert("El precio es mayor que 100");
    }

    console.log('Listo!')
 */



// clase 3
 //(instrucciones, hasta, actualizacion)
    // abreviaturas: i += (), i ++ (solo incrementara de 1 en 1)


/* let nombreIngresado = ''

let numero = 20

for(let i = 0; i <= numero ; i++) {

    
    if(i == 2 || i == 4){
        continue;
    }
    if(i == 10){
        break;
    }
    console.log(i)
 

     let nombreIngresado = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombreIngresado + "," + "\nSu turno es el N:" + i); 

}
alert("Nos quedamos sin turnos hoy") 
 */

/* function saludar() {
    console.log("Hola alumnos!");
}
saludar(); */

/* function suma(a, b) {
    let numero = a + b
    console.log(numero);
}
suma(11, 23);
suma(1, 2);

let numeroA = parseInt(prompt("Ingrese el primer numero:"))
let numeroB = parseInt(prompt("Ingrese el segundo numero:"))

suma(numeroA, numeroB);
 */

/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const persona1 = new Persona('Hugo', '18', 'Palma areca')
const persona2 = new Persona('Heber', '23', 'Aguilas')
const persona3 = new Persona('Yunuen', '21', "Codorniz")

console.log(persona1)
console.log(persona2)
console.log(persona3) */

// para llamar la funcion es por ejemplo: persona1.nombre = Hugo 
// o se puede llamar escribiendo persona1["nombre"]

//class es igual que una funcion constructora como la de arriba

/* class persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}
const personal = new persona('Hugo', '18', 'Palma areca')
    console.log(personal['edad']) */

/* const personal = {
    nombre: 'Homero',
    edad: 39,
    calle: 'Av. siempre viva'
}
console.log(personal['edad']) */

/* const personal = {nombre: 'Homero', edad: 39, calle: 'Av. siempre viva'};

for (const propiedad in personal){
    console.log(personal[propiedad]);
} */

// funcion flecha: () => {}

/* localStorage.setItem('Nombre', prompt('Ingrese su nombre'))
let valor = localStorage.getItem('Nombre')
console.log(valor) */
function newToDoItem(text){

    let toDoItem = document.createElement('li')
    toDoItem.innerText = text

    toDoList.append(toDoItem)
} 

function addToDoItem(){
    let itemText = toDoEntryBox.value
    newToDoItem(itemText)
    
    }


 let addButton = document.getElementById('add-button')

addButton.addEventListener("click", addToDoItem)


function newToDoItem(text){

    let toDoItem = document.createElement('li')
    toDoItem.innerText = text

    toDoList.append(toDoItem)
} 
let toDoEntryBox = document.getElementById('todo-entry-box')

let toDoList = document.getElementById('todo-list')


const alerta  = () => {
    Swal.fire({
        title: 'Warning',
        text: 'Do you want to continue?',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
}

let botonBorrar = document.getElementById('eventButton')
    botonBorrar.addEventListener('click', alerta)



/* const nombres1 = ['Juan', 'Julieta']
const nombres2 = ['Carlos', 'Mariela']

const nombres = [...nombres1, ...nombres2]
console.log(nombres)

const nombresObj = {
    ...nombres
}
console.log(nombresObj) */

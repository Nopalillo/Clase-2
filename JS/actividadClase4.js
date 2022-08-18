let nombreCurso1 = "Primeros auxilios"
let tiempoCurso1 = 8
let costoCurso1 = 1000

let nombreCurso2 = "Plomeria"
let tiempoCurso2 = 8
let costoCurso2 = 2000

let nombreCurso3 = "Electricidad"
let tiempoCurso3 = 12
let costoCurso3 = 500

let nombreCurso4 = "Carpinteria"
let tiempoCurso4 = 24
let costoCurso4 = 3000

let cantidadCursos = (prompt("Ingrese la cantidad de distitnos cursos que quiere tomar: \n- Primeros auxilios\n- Plomeria\n- Electricidad\n- Carpinteria"))
let tiempoTotal = 0
let costoTotal = 0
let costoCursos = 0


function calculoCostoTiempo(numeroCurso, cantidadCursos, costo, tiempo){
     costoCursos += costo
     costoTotal = costoCursos
     tiempoTotal += tiempo
     if(numeroCurso +=1 == cantidadCursos) alert('Costo total: $' + costoTotal + "\n- tiempo total: " + tiempoTotal + " horas")
    }

for (let i = 0; i < cantidadCursos; i ++ ) {

let compra1 =  (prompt('Ingrese el nombre del curso que quiere tomar'))
    if(compra1 == "Primeros auxilios"){
        calculoCostoTiempo(i,cantidadCursos, costoCurso1, tiempoCurso1)
        
    }
    else if(compra1 == "Plomeria"){
        calculoCostoTiempo(i,cantidadCursos , costoCurso2, tiempoCurso2)
    }
    else if(compra1 == "Electricidad"){
        calculoCostoTiempo(i,cantidadCursos , costoCurso3, tiempoCurso3)
    }
    else if(compra1 == "Carpinteria"){
        calculoCostoTiempo(i,cantidadCursos , costoCurso4, tiempoCurso4)
    }
    else{
        alert("No tenemos ese curso")

    }


}
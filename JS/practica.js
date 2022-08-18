
let nombre = prompt('Ingrese su nombre:');
let edad = parseInt(prompt('Ingrese su edad'));

if (edad >= 18){
    alert('Eres un adulto')
    console.log(nombre + ' tiene ' + edad + ' years old');
}
else if(edad >= 13){
    alert('Eres un adolescente')
    console.log(nombre + ' tiene ' + edad + ' years old');
}
else if(edad >= 3){
    alert('Eres un nino')
    console.log(nombre + ' tiene ' + edad + ' years old');
}
else if(edad >= 2){
    alert("Eres un bebe")
    console.log(nombre + ' tiene ' + edad + ' years old');
}
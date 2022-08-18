 let abecedario = parseInt(prompt('Ingrese 1 si quiere ver las letras'))

if(abecedario == 1){
 const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

 for (let i = 0; i < letras.length; i++){
    alert(letras[i]);

 }
}
else alert('Buen dia')

let abecedarioReves = prompt('Si desea ver el abecedario al reves, escriba Si')
if (abecedarioReves == 'Si'){
    const letrasAlReves = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    alert(letrasAlReves.reverse())
    

 
}








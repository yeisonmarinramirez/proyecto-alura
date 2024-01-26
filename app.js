//Practicaremos con el juego de adivina el numero 
/*

let numeroMaquina = Math.floor(Math.random()*10)+1;
let win = document.querySelector('h1');
let puntos = 0;

function adivina(){

    let numeroDigitado = parseInt(document.getElementById('valorUsuario').value);
    let informacion = document.querySelector('center');
    console.log(puntos);
    console.log(numeroMaquina);
        if(numeroDigitado > numeroMaquina){
            informacion.innerHTML = "El numero es mas bajo";
            puntos++;
        }else if (numeroDigitado < numeroMaquina){
            informacion.innerHTML = "El numero es mas alto";
            puntos++;
        }else{
            informacion.innerHTML = "Has ganado";   
            win.innerHTML = (`Has ganado con un total de intentos de : ${puntos}`);  
        }

   }
*/
//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.


//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//IMC= Peso actual (kg)÷ altura (m) x altura (m)= kg/m2




    let peso = parseInt(prompt(`Por favor ingrese su peso corporal`));
    let altura = parseInt(prompt(`Por favor ingrese su altura actual`));
    let calculo = peso+masa;
    alert(`Su inicide de masa corporal es de: ${calculo}`);


//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
 
 
/*
let contador = 0;

while(contador <3){
    let numeroDosMaquina = parseInt(Math.floor(Math.random()*10))+1;
    let numeroDelUsuario = parseInt(prompt('Por favor ingrese el numero para adivinar'));
    console.log(numeroDosMaquina);
    console.log(numeroDelUsuario);
    if(numeroDosMaquina > numeroDelUsuario ){
        alert('El numero es superior');
        contador++;
    }else if (numeroDosMaquina < numeroDelUsuario){
        alert('El numero es inferior');
        contador++
    }else{alert('Perdio')}
}
*/
 

    







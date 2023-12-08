// comentarios de una sola linea

/*comentarios 
multilineal*/


//alert ("Hola Mundo");


//console.log ("este es un mensaje para la consola");

/*var nombre = prompt("Ingresa tu nombre");
alert("Hola " + nombre + ", bienvenido a la CH35");*/

/*var numero1 = parseInt (prompt("ingresa tu edad"));
var numero2 = parseInt (prompt("Ingresa el segundo numero:"));

console.log("suma: " + (numero1 + numero2));
console.log("resta: " + (numero1 - numero2));
console.log("multiplicación: " + (numero1 * numero2));
console.log("división: " + (numero1 / numero2));*/

/*var edad;

while (true) {
    var input = prompt("Ingresa tu edad:");

    if (!isNaN(input) && input !== "") {
        // Verifica si el input es un número y no está vacío
        edad = parseInt(input);

        if (Number.isInteger(edad)) {
            // Verifica si el número es un entero
            break;
        }
    }

    alert("Por favor, ingresa un número entero válido.");
}

if (edad >= 18) {
    alert("Bienvenido a Somos Poker. ¡Disfruta de la página!");
} else {
    alert("Lo siento, debes ser mayor de 18 años para acceder a Somos Poker. Acceso denegado.");
}/*

///TIPOS DE DATOS Y VARIABLES

//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance 
var tiene un alcance global
let tiene un alcnace local
const se mantiene sin ningun cambio*/

/*string:cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

let nombre = "Daniel";
let invitadosExtras = 2;
let esMayorEdad = true;
let edad = 24;
let invitadxEspeciales = null;
let horaDeSalida = undefined;

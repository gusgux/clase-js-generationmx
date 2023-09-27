/* Flujo de control


Cuando hablamos de flujo de control hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo, izq/der). Estas instrucciones pueden ser una funcion, un console.log, un ciclo, etc.


La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (un elemento o instruccion detonante).




Condicionales


Las condicionales son palabras reservadas que nos permiten evaluar si una condicion se cumple o no, bajo ciertos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o false.


Tengo la camisa limpia?
    Si: voy a la fiesta
    No: Me quedo en casita



Tengo esta variable?
    Si: ejecuto la linea 57 de mi codigo
    No: ejecuto la linea 80 de mi codigo





Condicional if (Si)


If nos sirve para validar si una condicion se cumple o no. Si se cumple, entonces ejecutamos un bloque de codigo que esta dentro del if. Si no se cumple, entonces no hacemos nada.
Nota: Es la condiciona mas sencilla, pero la mas limitante porque solo nos da una opcion.



if (condicion) {
    //bloque de codigo que se ejecuta si la condicion es verdadera (se cumple)
}


*/

//Ejemplo: angel va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir

if ((camisaLimpia = true)) {
    //siempre tiene que ser true para que se ejecute el codigo
    console.log("angel va a la fiesta con if");
}

/*

else (de otro modo, de lo contrario, si no)


if (condicion detonante){
    //bloque de codigo que se ejecuta si la condicion es verdadera
} else {
    //bloque de codigo que se ejcuta si la condicion es falsa
}


*/

if ((camisaLimpia = true)) {
    console.log("angel va a la fiesta "); //true
} else {
    console.log("angel se queda en su casa solito y chiquitito"); //false
}

/*
else if


Esta condicion nos ayuda a jugar con mas opciones y mas detonantes, para tener muchas posibilidades en el mismo codigo. Para lograr esto, vamos a unir el else con el if


if (condicion detonante){
    //bloque de codigo si la condicion es verdadera
} else if (codicion detonante 2){
    //bloque de codigo si la condicion 1 es falsa y la condicion 2 es verdadera
}else{
    //bloque de codigo si las dos condiciones son falsas
}


*/

/*Ejemplo 2: angel tiene hambre, y quiere comer chilaquiles rojos


if (hambre=true){
    console.log("angel va a comer");
} else if (chilaquilesRojos = true){
    console.log("angel come chilaquiles");
} else {
    console.log("angel no come y se pone triste");
}

*/

//Ejemplo 3: Escribe un programa que me muestre 3 mensajes diferentes. El primer mensaje se muestra si son las 13:00 hrs y debera imprimir "vamos a descanso". El segundo mensaje se muestra si son las 14:30 hrs y debera imprimir "vamos a comer". El tercer mensaje se muestra si no se cumple nada de lo anterioor y debera imprimir "lo siento mi ciela, seguimos programando."

//Prompt es una forma de ingresar datos y poder hacer uso de ellos

let hora = prompt("Hola, dime una hora");

//let hora = 17; antes del prompt

if (hora == 13) {
    console.log("Vamos a descanso");
} else if (hora == 14) {
    console.log("Vamos a comer");
}
console.log("Lo siento mi ciela, seguimos programando");

/*

Switch (cambiar o intercambiar / segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de la opcion deseada( estado de la variable)

Wvalua una expresion comparando el valor de una variable con la expresion o caso, y ejecuta las declaraciones asociadas con ese caso, asi como los casos que siguen.

Elementos parincipales del switch: un valor a evaluar,un detonante  para cada caso, una salida para cada caso y una salida en general.


expresion con un valor
switch (expresion){
    case 1:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 1
        break;

    case 2:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 2
       break;

    case 3:
        //bloque de codigo que se ejecuta si la opcion seleccionada es igual a 3
       break;

    default:
        //bloque de codigo que se ejcuta si ninguna opcion coincide
*/

//Elevador con switch

//Elevador con else if
let piso = 5;

if (piso == 1) {
    console.log("Llegamos al piso 1");
} else if (piso == 2) {
    console.log("Llegamos al piso 2");
} else if (piso == 3) {
    console.log("Llegamos al piso 3");
} else if (piso == 4) {
    console.log("Llegamos al piso 4");
} else if (piso == 5) {
    console.log("Llegamos al piso 5"); // piso de destino
} else {
    console.log("Piso no encontrado");
}

//Elevador con switch
let pisoSwitch = prompt("Aque piso vas?");
switch (
    pisoSwitch //si ricibo un numero
) {
    case "1": //caso evalua un string
        console.log("Llegaste al piso 1");
        break;
    case "2":
        console.log("Llegaste al piso 2");
        break;

    case "3":
        console.log("Llegaste al piso 3");
        break;

    case "4":
        console.log("Llegaste al piso 4");
        break;

    case "5":
        console.log("Llegaste al piso 5");
        break;

    default:
        console.log("Opcion no valida");
}

//Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta (condicionales)

function calcularConstoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente) {
    let costoTotal = duracionMinutos * costoPorMinuto;
    if (clienteFrecuente) {
        costoTotal = costoTotal * 0.9;
    }

    return costoTotal;
}

console.log(calcularConstoConsultaDos(45, 15, true));
function guardarPaciente() {}
function registrarPaciente() {}

if ((pacienteRegistrado = true)) {
    console.log("paciente con registro previo");
} else {
    guardarPaciente();
}

//otra funcion para verificar la cita en el consultorio dental

let citaSolicitada = true; // true para una cita solicitada
let datosCorrectos = true; ///true para datos de contactos correctos,false para datos faltantes y null para datos vacios
function verificarCita(cita, datosCorrectos) {
    if (cita) {
        if (datosCorrectos) {
            console.log("llamar al paciente para confirmar o reagendar");
        } else if (datosCorrectos == null) {
            console.log("faltan datos de contactos no se puede contactar al paciente");
        } else {
            console.log("datos de contactos validos llamar para preguntar si desea sacar cita");
        }
    }
}

/*
Array

 Un array es un conjunto de datos que se pueden almacenar en una sola variable. Un arreglo es una estructura de datos que podemos definir como una coleccion de variables (que pueden ser diferentes, pero con un mismo contexto).

 */

 //Variables que estan "sueltas"
 let nombre = "Felipe";
 let edad = 31;
 let puesto = "instructor";

 //Usar un array (arreglo) para "juntar" nuestras variables
 //Agregamos los elementos al Array, separados por coma
 let personasDeLaCH31 = ["Felipe", "Jose Angel", "Marco", "Evelyn", "Alejandro"];

 //Podemos almacenar cualquier tipo de dato en un array 
 let cosasRandom = ["Pelota", 31, true, undefined, null];
 console.log(typeof(cosasRandom)); //object
 console.log(typeof(personasDeLaCH31));

 //Al imprimir el tipo de datos de nuestro arreglo, obtenemos un object porque los arrays son objetos (despues veremos que tenemos muchos tipos de objetos)


//Los arrgelos al ser objetos cuentan con metodos que nos permiten manipularlos


//Ya que tengo mi arreglo, como podemos acceder a una informacion?
//Para mostrar la cantidad de elements que tengo en un arreglo, usamos un metodo llamado Length



//Metodo Legth para mostrar los elementos de un array
console.log(personasDeLaCH31.length); //me da como resultado un 5 porque tengo 5 "elementos" en la CH31, pero tengo 4 posiciones, es decir, 0,1,2,3,4 



//Declarar un array
[5, 4, 3, 2, 1]

//Inicializar un array
let cuentaRegresiva = [5, 4, 3, 2, 1];


//Aceder a un elemento en especifico

console.log(personasDeLaCH31[0]);//Felipe
console.log(personasDeLaCH31[25]);//undefinded, porque el elemento aun no existe 

//Tambien podemos aaceder a un elemento de mi arreglo por medio de una variable 

//Declaro el indice en una variable
let index = 4;

//Paso a esta vriable como indice del arreglo 
console.log(personasDeLaCH31[index]); //Alejandro. porque en la posicion 4 tenemos a Alejandro 

//Ejemplo de un array para el consultorio dental

let pacientes = [];

let dentistas = ["Dr. Smith", "Dra. Garcia", "dr House", "Dr simi"];

//para Hacer modificaciones, usamos el index para acceder al datoy luego lo reasignamos

dentistas[3] = "Dr. Similares";
dentistas[8] = "Dr. Strange";

console.log(typeof dentistas[7]);

//fuincion para imprimir astrisco y poner una division  en la informacion de mi consola
function imprimirsepador() {
    console.log("**************************************************************************************");
}
//Invocacion de la funcion
imprimirsepador();

//Metodos de arrays

let listaDelSuper = ["Gansitos", "Coca-cola", "Arroz", "Atun", "Verduritas"];

//Metodo length para conocer la longitud de array

console.log("La cantidad de Elementos de mi array es de " + listaDelSuper.length);

//Metodo push() para poner elementos al final del mi array

listaDelSuper.push("Jabon para Ropa", "Jabon para trastes");
//console.log(listaDelSuper);

// metodo pop() para eliminar elementos del final de array
listaDelSuper.pop();
//console.log(listaDelSuper);
//agregar un elemento al principio del array con el metodo unshiff
listaDelSuper.unshift("Sabritones");
//console.log(listaDelSuper);

//eliminar el primer elemento del array shift elimina elementos al principio del array
listaDelSuper.shift();
//console.log(listaDelSuper);

//saber la posicion de las verduritas
//console.log(listaDelSuper.indexOf("Verduritas"));

//Metodo splice para agregar ,eliminar o remplazar elementos

//nombrearreglo.splice(inicio,cantidaddeelementosa elminar,elemnto a inserta,elementoa insetar2 . . .)
console.log(listaDelSuper);

listaDelSuper.splice(2, 0, "cacahuates", "manzana");
console.log(listaDelSuper);
listaDelSuper.splice(5, 2, "Platano");
console.log(listaDelSuper);

//metodo map()

let numbers = [1, 2, 3, 4, 5, 6];

//crea otro arreglo con los numeros multiplicados x2[2,4,6,8,10,12]

let numerosPorDos = numbers.map(function (numeros) {
    return numeros * 2;
});

console.log(numerosPorDos);
/*


-funcion para agregar el nue
*/

//Arreglo de paciente original

let pacienteConsultorio = [
    { nombre: "felipe", edad: 31 },
    { nombre: "Fatima", edad: 26 },
    { nombre: "Jesus", edad: 51 },
];

//funcion paera agregar  el texto necesito atencion especial

function agregarEstadoSalud(paciente) {
    let estado = "saludable";
    //sie el paciente tiene mas de 40 años
    if (paciente.edad > 40) {
        estado = "Necesita atencion especial";
    }

    return {
        ...paciente, //copia del paciente
        estadoSalud: estado, //para agregar un nuevo campo o variable (como la edad o nombre)
    };
}
let pacienteConsutorioConEstado = pacienteConsultorio.map(agregarEstadoSalud);

console.log(pacienteConsultorio);
console.log(pacienteConsutorioConEstado);

//let jugadores=[[1,"Roberto"],[2,"Andrea"],[3,"Jorge"],[4,"Ramiro"],[5,"Sofia"]]
let jugadores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];
let posiciones = [1, 2, 3, 4, 5];

//eliminanos a jorge
jugadores.splice(2, 1, "Jorge");
console.log(jugadores);
//

//ramiro jorge

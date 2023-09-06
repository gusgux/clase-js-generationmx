//funciones

/*
 una function es un bloque de codigo que realiza una tarea especifica caundo se le llama

cada funcion de javascript es un objeto Function 
*/

function saludar() {
  console.log("hola soy una funcion");
}

saludar();

//Declarar funciones

/* la palabra reversada function, que nos indican que estamos definiendo una funcion
1-El nombre de la funcion,dependiendo de la accion a realizar
2-un par de parentesis () despues del nombre ,Puede contener 3-parametros. En este caso no tenemos ninguno.El
seguido de un juego de llaves para cerrar el bloque de codigo.
4-Dependiendo de las instrucciones dentro del cuerpo de la funcion y del proposito de la misma, se determina si la funcio  retorna un valor */

//llamamos una funcion y le vamos a almacenar un resultado

function suma(a, b) {
  return a + b;
}

var resultado=suma(5,3)// alamacenar funcion en una variable
console.log(resultado) //funcion

/* la function suma toma dos argumentos (a y b)  y devuelve la suma de estos dos valores, luego,llamamos a la funcion y almacenamos el resultado en la variable resultado
 */

//funcion que muestra un mensaje en la consola

function saludar(nombre) {
        console.log("hola, "+nombre+"!");

}

///llamamos a la funcion saludar a alguien
saludar("mar")
/* Es fundamental en el entendimiento de la forma en que se jeecuta nuestro código JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es elevación, a partir de aquí, su entendimiento es mucho más intuitivo, lo que hace a grandes rasgos es "elevar" las funciones y variables declaradas dentro del código. */

/* hoisting 

Es fundamental en el entendimiento de la forma en que se ejcuta nuestro codigo de hjs,esto aplica tanto para variables como para funciones.como tal, la traduccion de hoisting es elevacion, a partir de aqui,su entendimiento es mucho mas intuitivo lo que hace a grandes rasgos es elevar las funciones y variables declaradas dentro del codigo
*yo puedo invocar una funcion antes de siquiera declararla
*/

consol.log(miVariable)//No da error,pero imprime "undefined"

var miVariable=10;

//Scope =Alcance, hace referencia al alcance de una variable en nuestro codigo de Js.


/* 
Global:quiere decir que se puede utilizar o trabajar con una variable dentro de cualquier parte del codigo

*var :no es tan recomendado, por comportamiento de la varible y la poca adaptabilidad
*let: es preferible e incluso mas segura de utilizar porque ademas de funcionar de manera global, tambieb puede ser utlizada de manera local
*const: se refiere,por su nombre tan intuitivo a la palabra constante, esto quiere decir que su valor no se  puede reasignado
*/

function funcionConVariableLocal() {
    var mensaje="Esta es una variable local"
    console.log(mensaje)
}

/* funcionConVariableLocal()
var mensaje="holis"
console.log(mensaje) */

//variable Global

var mensajeGlobal="esta es una variable Global"

function funcionConVariableGlobal(){
    console.log(mensajeGlobal);
}

funcionConVariableGlobal()

/*+++++++++++++++++++++++++++Funciones anonimas++++ */

/* estas funciones pueden ser declaradas sin un nombre y luego asignada a variables o pasarse como parametros en otras funciones.a
La diferencia principal de estas funciones es que se declaran sin un nombre */


/* function (){
    console.log("hola vida");
}
saludo();
 */

const saludo=function (){
  console.log("hola vida");}

  saludo()
/* funciones flecha


una forma mas concisa de definir funciones anonimas. se le llama felcha debido a su sintaxis que utiliza ()=>)

*basicamente,se trata de reemplzar la palabra function y anadir => antes de abir nuestras llaves
 */

 const resta= (a,b)=> a-b


 console.log(resta);
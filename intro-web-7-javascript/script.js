//alert("hola mundo");
/* http://127.0.0.1:5500/index.html este es un comentario multinea */


/* var frasco="pastillas"
var frasco="pasitas con chocolates"
var frasco="shampoo"

console.log(frasco) */

/* Tipos de datos primitivos y no primitivos */

/*
string => cadena de texto
Number
boolean
undefined
null
Symbol
object no primitivo */

// string es una cadena de texto, que siemore debe ir entre comillas simples o comillas dobles
var vaso="leche"

//number no lleva comillas, y se refiere a un número con el cual podemos hacer operaciones

var edad="31"

//Boolean solamente tiene dos salidad que es true or false


var cuentasPremiun=false;

//undefined es un tipo de dato que existe pero no esta definido o inicializado


var proximaCita=null

//null  es un valor que no tenemos pero que declaramos

//strings

var nombreUsuario="angel"
var correo="soy@pico"

//num
var edadUsuario=55
var precioExtraccion=1500

//boolean 
var clienteActivo=true
var clienteRegistrado=false

//undefined

var proximaCita=undefined
var procedimiento=undefined

//null
var confirmacionCita=null
var confirmacionFacturacion=null

var edad="31"
var peso=66

console.log(typeof(edad))

//type of es una palabra reservada que nos ayuda a saber qye ipo de dato tenemos

//var es una variable con alcance global(tiene mayor alcance)

//let es una variable con alcance local (solo se utliza dentro de un bloque de codigo)

//const es una constante,es decir que es una variable no cambia

var pesoCadena=peso.toString();
console.log(pesoCadena);
console.log(typeof(pesoCadena));

var edadNumero=parseInt(edad)
console.log(edadNumero)
console.log(typeof edadNumero)

const edadString=edadUsuario.toString();
const nombreUsuarioString=parseInt(edad)

console.log(edadString,nombreUsuarioString);
console.log(typeof edadString,typeof nombreUsuarioString);

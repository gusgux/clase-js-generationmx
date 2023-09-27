/*
Operador

un elemento que nos permite realizar una operacion una operacion entre dos o mas elementos

--Operadores aritmaticos (+,-,*,/)
--Operadores de asignacion(=,/ asignacion)
--Operadores logicos(||,&&,!)
--Operadores de Cadena(toUpperCase,toLoweCase,trim,toString,concat)
-Operadores de comparacion(<,>,<=,>=,==,===)


suma (+)
Resta
Multiplicacion(*)
Division(/)
Residio/Modulo(%)
Exponenciacion(**)
Incremento(++)
Decremento(--)

*/

//Operadores Aritmeticos

//suma (+) se utiliza para sumar dor numeros
let resultado = 5 + 3;
//resta (-) se utiliza para restar un numero de otro

resultado = 10 - 4;
//multiplicacion(*) se utiliza para multiplicar dos numeros

resultado = 6 * 3;
//division(/) se utiliza para dividir un numero por otro, la division por cero produce un valor especial llamado "infinity"(infinito)

resultado = 15 / 3;

//modulo(%) se utiliza para obtener el resto de una division entre dos numeros
resultado = 10 % 3;

//incremento(++) se utiliza para aumentar en 1 el valor de una variable
let numero = 5;
numero++;

//ahora contiene el numero 6

//Decremento (--) se utiliza para disminuir en 1 el valor de una variable

numero = 7;
numero--; //ahora numero contndra el valor 6
//Doble igual-igualdad abstracta
5 == "5"; // true ya que javascript convierte la cadena "5" a un numero antes de la comparacion

//triple igual -igualdad estricta
5 === "5"; //false,porque no son del mismo tipo y los tipos tambien difieren

function tempConvercion(temp, escala) {
    if (escala === "celsius") {
        let grados = (temp - 32) * (5 / 9);
        return grados;
    } else if (escala === "fahrenheit") {
        let grados = temp * (9 / 5) + 32;
        return grados;
    }
    return "escala invalida";
}
let escala = "celsius"; //fahrenheit
let temperatura = tempConvercion(100, escala);

console.log(`la temperatura es ${temperatura} ${escala}`);

//Variable

let numero1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones

let suma = numero1 + numero2;
let resta = numero1 + numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;
let residuo = numero % numero;
let Exponenciacion = 10 ** 2; //es obsoleto porque ya ha un metodo para esto

//Ejemplo

console.log("valor del numero1 antes del incremento", numero1);
//Los valores si se pueden reasignar

let incremento = numero1++;
let decremento = numero1--;

//Forma extensa
numero1 = numero1 + 1;
console.log("valor del numero1 antes del incremento", numero1);
numero1 += 10; //20 suma y reasigna al mismo tiempo
numero = 10 + 10;
//operacionComplejo = 10 + 5 / 2(5 - 6);

//Impresiones en pantalla
console.log("suma de 10+2 ", suma);
console.log("suma de 10+2 ", numero1 + numero2);
console.log("suma de 10+2 ", 10 + 2);
console.log("suma de 10+2 ", resta);
console.log("suma de 10-2 ", suma);

/*Operadors de comparacion

Operadors que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano(true o false)

- mayor que (>)
- menor que (<)
- mayor o igual que (>=)
- menor o igual que (<=)
- igual (==)
- estrictamente igual (===)
- no es igual(!=)
- no es estrictamente igual(!==)

Igual (==)

sirve para comparar que dos valores sean iguales

*/

let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

// 13 =="13" //True
// 13==="13 "//false

let edadAngel = 25;
if (edadAngel >= 18) {
    console.log("puedes ir a la pachangona");
} else {
    console.log("the queas en casa");
}

//https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators

//dos negaciones es una afirmacion
//vamos a comer(no vamos a comer)
//!no me gusta Java(no no me gusta java)

/*Operados de asignacion 

Son los operadores que utlizan par asignar un valor a una  variable. se usar el operador=

let add saldo=0
let edad=31;
*/

/*
Operadores Logicos

Nos devuelven un resultado  a partir de que se cumpla (o no) una condicion ,  el resultado es booleano(true o false).

And && sirve para determinar si dos expresiones son verdaderos, si ambas son verdaderas, el resultado es verdadero,si alguna de ellas es falsa, todo el resultado es falsoe,si ambas son falsas,todo es falso

Optional chaining (?.)
Nullish coalescing operator (??)

*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere) {
    console.log("Estoy Feliz");
} else {
    console.log("Haganse a un lado que me quiero automorir");
}

/*
-OR ||: sirve para determinar si dos expresiones son falsas.si cualquiera de las dos afirmaciones es verdadero,todo es verdero,si las dos son falsas,todo es falsas


*/
let hayChilaquiles = true;
let hayCarneEnSuJugo = true;
if (hayChilaquiles || hayCarneEnSuJugo) {
    console.log("angel desayuna chido");
} else {
    console.log("Angel no desayuna chido");
}
/* Not(!): Regresa lo contrario de lo que evaluamos */
//Este codigo esta incompletp,puede causar errores(Explicacione de anidacion de operador nor)
let saldoAngel = 50;
let amigosQueInviten = true;

let escenario1 = edadAngel >= 18 && saldoAngel == !0;
let escenario2 = edadAngel >= 18 && amigosQueInviten;
if (escenario1 || escenario2) {
}

/*
Operador

un elemento que nos permite realizar una operacion una operacion entre dos o mas elementos

--Operadores aritmaticos (+,-,*,/)
--Operadores de asignacion(=,/ asignacion)
--Operadores logicos(||,&&,!)
--Operadores de Cadena(toUpperCase,toLoweCase,trim,toString,concat)
-Operadores de comparacion(<,>,<=,>=,==,===)

*/


//Operadores Aritmeticos

//suma (+) se utiliza para sumar dor numeros
let resultado=5+3;
//resta (-) se utiliza para restar un numero de otro

resultado=10-4
//multiplicacion(*) se utiliza para multiplicar dos numeros

resultado=6*3
//division(/) se utiliza para dividir un numero por otro, la division por cero produce un valor especial llamado "infinity"(infinito)

resultado=15/3

//modulo(%) se utiliza para obtener el resto de una division entre dos numeros
resultado=10%3

//incremento(++) se utiliza para aumentar en 1 el valor de una variable
let numero=5;
numero++;

//ahora contiene el numero 6

//Decremento (--) se utiliza para disminuir en 1 el valor de una variable

numero=7
numero-- //ahora numero contndra el valor 6
//Doble igual-igualdad abstracta
5=="5"// true ya que javascript convierte la cadena "5" a un numero antes de la comparacion

//triple igual -igualdad estricta
5==="5"//false,porque no son del mismo tipo y los tipos tambien difieren

function tempConvercion(temp,escala) {
    if (escala==="celsius") {
        let grados=(temp-32)*(5/9)
        return grados
    }
    else if(escala==="fahrenheit"){
        let grados=temp*(9/5)+32
        return grados
    }
    return "escala invalida"



    
    
    
}
let escala="celsius"//fahrenheit
let temperatura=tempConvercion(100,escala)

console.log(`la temperatura es ${temperatura} ${escala}`);
/*

estructura de contro: controlar la ejecucion del codigo
Ciclos o bucles(loops)

Tambien  conocidos como bucle,son estructuras de control que nos van a permitir ejecutar un bloque de codigo de forma repetida, hasya que se cumpla una condicion especifica.

Es importante usar ciclos para automatizar tareas repetitivas

en js existen los siguiente ciclos

-while
-do whhile
-for

Iterar:proceso de repetir una secuencia de instrucciones

Estructura de contro: herramienta especial para crear algoritmos o programas mas dinamicos y flexibles 

while (condition) {
    //codigo que se ejecuta
}
Nota un ciclo infinito  la condicion que se evalua siempre es True,significa que no se hay nada que nos diga que se  va a detener




*/
let miCrushMeQuiere = true;

while (miCrushMeQuiere) {
    console.log("sere feliz");
}

//ejemplo cde un consultorio dental
let capacidadPacientes = 10;
let pacientesEnConsultorio = 15;
//mientras 15 sea menor que 50
while (pacientesEnConsultorio < capacidadPacientes) {
    //seguire dando servicio
    console.log("seguimos dando servicio");
    //aumento en uno mis pacientes
    pacientesEnConsultorio++;
}
/*

//do while(hacer mientras)
//se ejecuta la instruccion, mientra sea  verdadera

el bucle do while se diferencia del while ya que aqui se ejecuta la instruccion

do {
    //codigo a ejecutar
} while (condition);

Analogia hacer un pastel
*/
//do while(hacer mientras)

let contadorPaciente = 0;

do {
    let nombre = Prompt("Ingrese el nombre del paciente");
    if (nombre) {
        contadorPaciente++;
    }
} while (confirm("Desea Registar otro paciente"));

console.log("Numero total de pacientes", contadorPaciente);

/*-
    -condicion: es el detonante que verificamos antes de cada itateracion,para saber si se sigue ejecutando o no (siempre y cuando sea verdadera)
    -expresion de iteracion(contador):tiene la finalizadad de modificar la variable de inicio y poder tener un punto de cierre

    for (inicializacion; condicion; incremento) {
        //bloque de codigo a ejecutar
}
*/
// crea un codigo que imprima los numeros del 0 a 4
for (let valorInicial = 0; valorInicial < 5; valorInicial++) {
    console.log(valorInicial);
}

// version mas "comercial"

for (let i = 0; i < 5; i++) {
    console.log(i);
}
//consultorio dental registro de citar con un for

let cantidadDeCitasDiarias = 5;
for (let i = 1; i <= cantidadDeCitasDiarias; i++) {
    var nombre = prompt("Ingrese el nombre del paciente", i);
    console.log("paciente con cita" + nombre + i);
}

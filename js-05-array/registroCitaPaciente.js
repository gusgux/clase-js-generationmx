/*
Sistema para registrar pacientes y citas de estos pacientes, utilizando metodos de arrays

Lista de cosas para hace / cosas por tomar en cuenta

-Un array para pacientes
-Un array para citas

-Prompt para registrar los datos
-Datos a registrar: nombre, apellido, fecha, edad, hora, especialista
-Funcion registrarPaciente
-Funcion registrarCita
-Metodos para modificar los arrays (push, forEach, splice )

*/

//Crear un array para almacenar mis pacientes

//La variable pacientes esta declarada e inicializada (tiene nombre, y tiene un valor, a pesar de que su arreglo este vacio)
//los indices del arreglo estan udefined, por que no hay elementos  pero si hay espacios disponibles
let pacientes = []; //paciente = definido

//funcion para registrar un nuevo paciente
//Paso 1-Ejecucion de mi funcion.Pido dos Datos
function registrarPaciente(nombre, edad) {
    //crear un array dentro de otro array
    //Paso2. Guardo cada par de datos(nombre y la edad es una variable llamada paciente)
    let paciente = {
        nombre,
        edad,
        citas: [],
    };
    //agregar paciente al array
    //paso 3. Yaque tengo el par de datos. le hago un push a mi array para guardar al paciente
    pacientes.push(paciente);
    return paciente;
}

// funcion para registrar citas  de un paciente

//cuando ejecuto mi funcion,necesita un paciente,una hora y una fecha para registrar la cita
function registrarCitas(paciente, fecha, hora) {
    //cuando tenga estos datos,buscare dentro del paciente el apartado citas para hacerle un push ahi
    paciente.citas.push({ fecha, hora });
}

//funcion para mostrar la informacion del paciente con su cita
function MostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente" + paciente.nombre);
    console.log("Edad del paciente" + paciente.edad);
    console.log("Citas registradas");

    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("indice " + indice + " fecha " + cita.fecha + " hora " + cita.hora);
    });
}

/*Funcionamiento del forEach anterior
1-definir una variable temporal llamada cita y otra variable temporal llamada indice
2-cada que se ejecuta el forEach,busca y encuentra una cita,asina esa informacion a las variables temporales e imprime la informacion.
 */

//Registrar un paciente desde la invocacion de la funcion
let paciente1 = registrarPaciente("Felipe", 31);
let paciente2 = registrarPaciente("Naruto", 20);
let paciente3 = registrarPaciente("Dr.simi", 50);

//registrar la cita de un paciente desde la invocacion de la funcion registrarCita
registrarCitas(paciente1, "2023-09-12", "1:00PM");

//Mostrar informacion del paciente
MostrarInfoPaciente(paciente1);
MostrarInfoPaciente(paciente2);
MostrarInfoPaciente(paciente3);

/*ForEach

Es un metodo de arrats, que tiene como objetivo iterar o recorrer cada elemento del array conla finalidad de aplicarle una funcion establecida

Generalmente el foreach se tuliza para imprimir la informacion del arreglo

sintaxis ForEach

array.forEach(funcion(elementos,indice,arreglo))

-elemento :el elemento  actual del arreglo que se esta procesando
indice:la posicion dle elemento actual en el array
arreglo: el array que se esta recorriendo(opcional)

ejemplo del supermecercado

-elemtno:producto que compre y que esta en el carrito
indice: la posicion de ese producto
arreglo carrio del super


*/

let carritoSuper = ["manzanas", "papitas", "huevo", "japon para traster", "pan"];

//oye JS, para cada elemento del tipo "producto" que tenga una posicion dentro del arreglo llamado "carritoSuper", vas a hacer algo

carritoSuper.forEach(function (producto, indice) {
    console.log("producto " + producto + " con la posicion " + indice);
});

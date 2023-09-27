/* Sistema para registrar pacientes y mostrarlo en tarjetas


*/

//primer paso: Obtener todos los elementos de nuestros HTML y guardarlos en variables de JS

//Input separados,boton,mensajeConfirmacion

let nombrePaciente = document.getElementById("nombrePaciente"); //input nombre
let edadPaciente = document.getElementById("edadPaciente"); //input edad
let botonRegistrarPaciente = document.getElementById("btnRegistrarPaciente"); //boton
let mensajeConfirmacion = document.getElementById("mensajeConfirmacion"); //container mensaje de confirmacion
let contenedorTarjetas = document.getElementById("contenedorTarjetas");
//Array para almacenar a mis pacientes

let pacientes = [];

function registrarPaciente() {
    //obtengo el atributo value de mi input
    let valorNombrePaciente = nombrePaciente.value;
    let valoresEdadPaciente = edadPaciente.value;

    //Array para guardar la informacion del paciente

    let paciente = {
        nombre: valorNombrePaciente, //tomo el valor del input, y lo asigno a esta variable
        edad: valoresEdadPaciente, //tomo el valor del input, y lo asigno a esta variable
        citas: [],
    };
    //cuando tengo la informacion del paciente...
    pacientes.push(paciente); // arrat.push(valorAgregar)
    //1- Muestro info en consola

    mostrarInfoPaciente(paciente); //Invocacion de otra funcion para mostrar la info en consola

    //2-Muestra el mensaje de confirmacion(textContext)
    mensajeConfirmacion.textContent = "paciente registrado correctament";

    //3- Generar la tarjeta
    generarTarjetaPaciente(paciente); //invocacion de una funcion para generar tarjetas

    return paciente;
}

// Funcion para mostrar la informacion del paciente con su cita
function mostrarInfoPaciente(paciente) {
    console.log("Nombre del paciente: " + paciente.nombre);
    console.log("Edad del paciente: ", paciente.edad); //31
    console.log("Citas registradas: ");
    //forEach para imprimir citas
    paciente.citas.forEach((cita, indice) => {
        console.log("Indice: " + indice + " Fecha: " + cita.fecha + " Hora: " + cita.hora);
    });
}

//funcion para generar tarjetas de parcientes
function generarTarjetaPaciente(paciente) {
    //crear

    let tarjetaDiv = document.createElement("div"); //aqui creo un container para mi tarjeta
    tarjetaDiv.classList.add("col-sm-12 col-md-6 col-lg-4", "sp"); //aqui le especifico que es una columna

    //crear el contenido de la imagen
    //backticks
    tarjetaDiv.innerHTML = `
    <div class="card border-info mb-3">
        <div class="card-header">Paciente</div>
            <div class="card-body">
            <h5 class="card-title">${paciente.nombre}</h5>
            <p class="card-text">Aqui podriamos agregar una breve descripcion de nuestro paciente.</p>
            <p>Edad: ${paciente.edad}</p>
        </div>
    </div>
`;

    //poner
    contenedorTarjetas.appendChild(tarjetaDiv);
}

addEventListener("click", (e) => {
    e.target;
});

botonRegistrarPaciente.addEventListener("click", registrarPaciente);

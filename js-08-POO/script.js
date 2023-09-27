/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.


    //clase: Plantilla para crear objeto. Nos Ayuda a definir un tipo de objeto y crear instancias(materalizacion) de este tipo de objetos

*/

//Creando mi primera clase

class persona {
    //1-propiedades o atributos de mi clase de forma general

    nombre = "";
    apellido = "";
    edad = "";
    edad = "";
    email = "";
    telefono = "";

    //3. Define un constructor que tomara los atributos como material para la instancia o  creacion de mis objetos
    //El constructor es una funcion especial,cyua funcion es lla de construir o instanciar objetos
    //al pasar los atributos como parametros, es importante cuidar el orden en como fueron declarados
    constructor(nombre, apellido, edad, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }

    //2. Metodos o comportamientos(funciones)
    //para definir los metodos de mi objeto, ya no utilizo la palabra function

    hablar() {
        console.log("hola, estoy hablando..");
    } //Cierre de metodo hablar

    dormir() {
        console.log("ZZZZZzzzzzzzz");
    } //Cierre de metodo dormir

    mostrarinfo() {
        console.log("Nombre: " + this.nombre);
        console.log("Apellido: " + this.apellido);
        console.log("Edad: " + this.edad);
        console.log("Email: " + this.email);
        console.log("Telefono: " + this.telefono);
    } //Cierre de metodo Mostrar info
} //cierre de mi clase persona

/*instancia del objeto del tipo persona

    sintaxis basica de una instancia

    variable nombreObjeto= palabra reservada new nombreclase(parametros o atributos)


*/

const persona1 = new persona("Angel", "gux", "28", "gusgux@example.com", "52655545");
const persona2 = new persona("luffy", "monkey", "22", "onepiece@pirate.com", "546868484");
const persona3 = new persona("felipe", "maqueda", "31", "felipemaqueda@gmail.com", "65444684");

//imprimir el objeto completo

console.log(persona1);

//imprimir un atributo de un objeto(apellido)
console.log(persona1.apellido);

//invocar el metodo del objeto
persona1.dormir();
persona2.mostrarinfo();

//imprimir dos datos en consola
console.log(persona1.nombre, persona1.apellido);

/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion


*/

//Creando una nueva clse par aplicar la herencia

class Paciente extends persona {
    //1- Definicion de atributos o propiedades
    doctorAtiende = ""; //nombre del doctor atiende
    historialMedico = ""; // si o no el historial
    alergias = ""; //alergias existentes

    //3. generacion de constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, alergias, historialMedico) {
        super(nombre, apellido, edad, email, telefono);
        this.doctorAtiende = doctorAtiende;
        this.alergias = alergias;
        this.historialMedico = historialMedico;
    }

    //2. Metodos
    mostrarInfo() {
        super.mostrarinfo();
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial Medico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }
}

const pacienAngel = new Paciente("luffy", "monkey", "22", "onepiece@pirate.com", "546868484", "dr.simi", "no", "paracetamos");

//console.log(pacienAngel);

pacienAngel.mostrarInfo();

/*

    10 preguntas
    25 minutos
    .map .filter

*/
// deferencias entre un objeto literal (normal), y un objeto tipo JSON

let json = {
    "nombre": "Ana",
    "edad": 25,
    "ciudad": "Madrid",
};

//Todas las claves y los valores van dentro de comillas
let objetoJSON = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina",
};

//Trata la informacion y sacar datos especificos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina",
};

console.log(JSON.stringify(json));

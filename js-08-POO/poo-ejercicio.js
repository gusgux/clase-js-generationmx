/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicializar sus atributos (metodo constructor), imprimirlos y mostrar un mensaje con el resultado de la nota si ha aprobado o no.


    Atributos:
        - nombre
        - nota (calificacion)

    Metodos:
        - Constructor
        - Metodo evaluacion (si aprueba o no)
        - Metodo imprimirInfo (nombre y la nota)

    Logica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, esta reprobado)
        - Recuperamos la informacion por medio de un prompt
        - Generamos 3 instancias para probar mi codigo (la nota sea igual a 6, la nota sea menor 6, la nota sea mayor a 6)

*/


//Creacion de la clase (3 pasos)

class alumno {
    // 1. Atributos o propiedades

    nombre
    nota

    // 3. Constructor
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota

    }

    // 2. Metodos

    evaluacion(nota) {
        //condicion para saber si esta aprobado o reprobado
        if (nota >= 6) {
            console.log("Aprobamos");
        } else {
            console.log("Reprobamos");
        }
    }


    /*    imprimirInfo() {
           console.log("Nombre", this.nombre);
           console.log("Nota", this.nota);
       } */
    imprimirInfo() {
        console.log("Nombre", this.nombre);
        console.log("Nota", this.nota);
    }
}
//instancia
const alumno1 = new alumno("Angel", 6);
const alumno2 = new alumno("Felipe", 5);
const alumno3 = new alumno("Gus", 8);


//invocar metodo
alumno1.imprimirInfo()
alumno1.evaluacion()

alumno1.imprimirInfo()
alumno2.evaluacion()

alumno3.imprimirInfo()
alumno3.evaluacion()
/*

Retomando las APIs...

    - APIs internas (API DOM, localStorage, Drag and Drop): Son todas aquellas APIs que vienen por default en el navegador.

    - APIs externas (Google Maps, FakeStore API, API PayPal, etc.): Son todas aqullas que tenemos que utilizar de proveedores externos.


    Ejemplo de la licudora, donde la licuadora es el cliente, el enchufe es la API y el recurso que se solicita es la electricidad.


    Ventajas de utilizar APIs

        - Reestructurar y organizar loos sistemas de forma que sean mas sencillos de usar
        - Permiten que los sistemas sean mas robustos
        - Reducen los costos de mantenimiento
        - Permiten que los sistemas sean escalables


*/

/* 
    Asincronia

    por defecto,JS se comporta de una forma sincronica(de arriba hacia abajo, de izquierda a derecha), es decir utilizamos JS de una forma autobloqueante(si hay error, lo que esta despues de ese error no se ejecuta).



*/

// ejemplo de una operacion sincronica
/* 
console.log("Inicia mi operacion sincronica");

function dosSincronico() {
    console.log("Dos");
}

function unoSincronico() {
    console.log("Uno");
    dosSincronico();
    console.log("Tres");
}

unoSincronico();
console.log("Finaliza mi operacion sincrona"); */

//Los casos donde me conviene tener operaciones sincronas,son(Lectura de arrays,uso de alguna metodos de arrays, condicionales,ciclos,ejecucion de funciones "normales").

/* 
    Asincronia

    Es la capacidad que tienen JS para poder ejecutar funciones que no dependan de otras.Esto nos ayuda a ejecutar ciertos bloques de codifo sin tener que esperar a que termine su ejecucion, para ejecutar otras lineas de codigo. (deja la carne en el asador mienteas preparo otras cosas en el ejemplo de la carne asada)


*/

//ejemplo de Javascript Asincrona

/* console.log("Inicia mi operacion asincronica");

function dosAsync() {
    setTimeout(() => {
        console.log("uno");
        //setTime para ejecutar esta funcion despues de 3 segundos
        console.log("Dos");
    }, 3000);
}

function unoAsync() {
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Finaliza mi operacion asincronica");
 */
/* 
    para controlar la asincronia en JS,podemos usar algunas de estos mecanismos

    -callback: La forma mas clasica de manejar la asincronia.Se le conoce como (llamada de vuelta) , basicamente es pasar una funcion como parametros de otra funcion,y se ejecutan una vez que se cumpla la condicion esperada.

    //metodo .map de los arrays

    -promesas: son objetos que representar un valor al momento de conectar con el servidor. como su nombre lo indica,una promesa es algo que no sabemos si se va a cumplir o no,pero al menos,necesitamos saber que hacer si se cumple o si no se cumple.La ventaja que tiene las promesas, es que no se anidan,en una sola funcion podemos manejar ambas situaciones.

    Las promesas tienen 3 estados posibles:
    -pending:estado inicial , cunado se crea la promesa. Aqui aun no hay resultados.
    -fullfiled:cuando la operacion asincrona se resuelve con exito(resolver)
    -rejected: cuando la operacion asincrona falla(reject)

    -async/await: 
*/

//funcion especial para consumir una APIS y manejar promesas

//instruccion de la conexion a mi servidor
fetch("https://fakestoreapi.com/products/1")
    //dos escenarios (obtengo respuesta o no obtengo respuesta)
    .then((datos) => {
        // cuando la primesa se resuelve , ejecuta esta  funcion
        return datos.json(); //convertir la respuesta
    })
    .catch((error) => {
        console.log("Error,no encontramos el producto");
        console.log(error.message);
    });

/* sintaxis del fetch (con promesas)
    fetch(url a consumir) 
        .then(response=>response.text)//manejo la respuesta
        .then(datos=>console.log(datos))//manejo el dato
        .catch(error=>console.log(error))//
    */

/* const conexion = fetch("https://fakestoreapi.com/products/1");
//imprimo la variable (para ver el objecto completo)
console.log("Este es mi objeto Promesa:", conexion);
conexion
    //usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
    .then((resultado) => {
        console.log("Dentro de esta funcion que maneja la respues encontraras ", resultado);
        return resultado.json();
    })

    //useo el metodo then para manejar el producto (lo relleno con la info del producto)
    .then((producto) => {
        console.log("informacion del producto ", producto);
    })

    .catch((error) => {
        console.log("Error", error);
    });
 */

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

    //usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
    .then(function (resultado) {
        console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
        return resultado.text();
    })

    //uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
    .then(function (producto) {
        console.log("Informacion del producto: ", producto);
    })

    //uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
    .catch(function (error) {
        console.log("Error", error);
    });

//producto como respuesta de un servidor en formato plano (texto)
let productoServidor = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: { rate: 3.8, count: 679 },
};

//producto como objeto JSON
let productoJSON = {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
        "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
        rate: 3.8,
        count: 679,
    },
};

//Revisar informacion de un objeto con texto plano
console.log(productoServidor.price);

//Revisar informacion de un objeto tipo JSON
console.log(productoJSON.price);

//Objeto JSOn que voy a mandar a un servidor

let paciente = {
    nombre: "felipe",
    edad: 31,
    status: "registrado",
};
console.log(paciente);

//necesito convertirlo a una cadena de texto para que el servidor lo lea

let pacienteStringifeado = JSON.stringify(paciente);
console.log(pacienteStringifeado);

let pacienteServidor = { nombre: "felipe", edad: 31, status: "registrado" };

let pacienteJSON = JSON.parse(pacienteStringifeado);

console.log(pacienteJSON);

///

//metodo porst para enviar un nuevp ŕpdictp a nuestra BD de la Fakestore API

/* fetch("https://fakestoreapi.com/products", {
    // end point
    method: "PUT", // especidicar el tipo de metodo
    body: JSON.stringify(
        // instruccion para serializar el cuerpo de mi solicitud (para la interprescion del servidor)
        {
            title: "Sopas Maruchan Habanero",
            price: 15.5,
            description: "Deliciosa sopa maruchan de habanero",
            image: "https://media.justo.mx/products/041789001956.jpg",
            category: "Sopas Instanteneas",
        }
    ),
})
    .then((res) => res.json()) //metodo para la respuesta (saber que mi producto llego con bien al servidor)
    .then((json) => console.log(json)); //impresion en consola para revisar la info
 */

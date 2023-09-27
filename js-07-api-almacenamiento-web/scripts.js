/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.


*/

/*

Almacenamiento Local (localStorage)


La informacion que pongamos en un almacenamiento local se guarda indefinidiamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.


*/

//Guardando mi primer dato en LocalStorage

//LocalStorae.setItem(key,value)

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", 28);

//Guardando un carrito de compras

let carritoComprasFelipe = ["sabritones", "coca-cola", "chicles", "Tortillas"];

localStorage.setItem("CarritoCompras", carritoComprasFelipe);

//obtener la informacion almacenada en mi LocalStorage

//LocalStore.getItem(key)

let apellido = localStorage.getItem("Apellido");
console.log("apellido: " + apellido);

//Borrar un elemento del LocalStorage

//LocalStorage.removeItem(key)

localStorage.removeItem("CarritoCompras");

//colorcer el largo o longitud del localstorage
//localStorage.length

let longitudLocalStorage = localStorage.length;

console.log(localStorage);

//para modificar datos con set
localStorage.setItem("Apellido", "Gonzalez");

/* DOM (Document Object Model) / Modelo de Objetos de Documento


Cuando creamos paginas que usan HTML +CSS estamos creando paginas esticas (por que no tienen interactividad), cuando agregamos JS,nuestra paginas  se conviertes en sitios Dinamicos( tiene interactividad)

El navegador lee el documento html de arriba a abajo
,de izquierda a derecha (renderizacion)

para que una pagina se renderice correctamente,se toma en cuenta el contenido, peso de las imagenes,conexion a internet,etc

cuando el documento se renderiza,se crea un "arbol"(DOM),tiene muchas ramas que son las etiquetas y cada uno de los elementos que tenemos dentro de esas etiquetas se consideran hojas(nodos)

Que es un nodo?
Representacion mas basica de lo que existe en un DOM,
puede ser un elemento o etiqueta, puede ser un atributo,puede ser un texto,incluso un comentario

    -Document:nodo raiz,a partir del cual se derivan los demas nodos.Es el objecto a partir del cual se puede acceder a cualquier elemento dentro de el, Todos los nodos derivan de este.

    -Element:son nodos definidos por etiquetas html(div,h1,p,img,meta,head,script,etc), ya sea que se vean o no se vean (etiquetas que interpreta el navegador)

    -Text: el texto que hay dentro de un elemento se considera un nodo,con la caracteristicas que es un nodo hijo

    -Atribbutes: Los atributos de las etiquetas tambien se convierten en nodos,son nodos que estan asociados
    a un elemento y se pueden considerar tambien nodos hijos

    -comment: Los comentarios tambien son un nodo,porque forma parte del documento.

    ¿paraa que utilizamos JS en un DOM?
    -agregar elementos HTML
    -Modificar elementos HMTL
    -Borrar elementos HTML


    */

//comenzamos a trabajar con los nodos de mi documento html
//1. paso Guardar los elementos HTML en variables de js (let,var,const)

/*Metodos de seleccion de elementos:permiten traer una etiqueta html y guardarla para su uso posterior. *
    
        Metodos tradicionales
            -getElementById(trae un elemento por ID)
            -getElementByTagName
            -getElementByClassName
    
    */

//aqui obtengo un elemento por id
let paciente = document.getElementById("edadPaciente");
console.log(paciente);

//aqui obtengo varios elementos por clase

/*  */ const columnas = document.getElementsByClassName("col");
console.log(columnas);

//Aqui obtengo varios elementos por etiqueta

const inputs = document.getElementsByTagName("input");
console.log(inputs);

/* Metodo actuales

    La unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos(. para las clases,# para los id)
    - document.querySelector
    - docuemnt.querySelectorALL

 */

//Aqui obtengo un elemento pr el selector # (ID)

let containerPadre = document.querySelector("#containerPadre");
console.log(containerPadre);

//Aqui obtengo varios elementos por el selecctor . (class)

let containers = document.querySelectorAll(".container");
console.log(containers);
/*
Metodos para modificar elementos en su texto

    -innerHTML:Esta propiedad nos permite acceder y modificar el contenido de nuestro elementos.asignamos una cadena de texto y podemos modificar o eliminar el texto(ya existe un texto)

    -textContent: cambiar o recuperar el contenido dentro de un elemento podemos.Podemos modificar o eliminar el texto(crear un texto nuevo)
*/

//Modificando el texto de un h1 con innerHTML
let titulo = document.getElementById("titulo");

titulo.innerHTML = "nuevo texto";
//creando un nuevo texto con innterHTML

let mensajeConfrimacion = document.getElementById("mensajeConfirmacion");
mensajeConfrimacion.innerHTML = "<p>Mensaje de confirmacion</p>";

/*

Crear elementos 

    - Crear el elemento
        - createElement
        - createTextNode
        - createComment



    - Poner el elemento
        -append
        -appendChild
*/
//creando un elemento con createElement

let img = document.createElement("img");
//Crear los atributos de un elemento

img.src = "https://soyunperro.com/wp-content/uploads/perrocontento.jpg";
img.alt = "Foto de perrito felix";

//poner mi imagen en el contenedor de mensaje de confirmacion
mensajeConfrimacion.appendChild(img);

/* DOM = DOCUMENT OBJECT MODEL
EL DOM ES LA REPRESENTACIÓN A TRAVÉS DE UN ARBOL JERÁRQUICO, DE TODAS LAS ETIQUETAS HTML
DE NUESTRO SITIO WEB.
COMIENZA POR EL ELEMENTO "Window" QUE REPRESENTA LA VENTANA DEL NAVEGADOR.
LUEGO SIGUE "Document" QUE REPRESENTA EL CUERPO DEL DOCUMENTO HTML.
LUEGO SIGUE EL ROOT ELEMENT, QUE ES LA ETIQUETA <html>.
A PARTIR DE ALLÍ SE ABREN DOS RAMAS, UNA ES LA ETIQUETA <head> y la otra <body>
DE CADA UNA DE ESTAS ETIQUETAS SE PUEDEN ABRIR MÁS RAMAS EN EL ARBOL DEL DOCUMENTO.

El objeto window es lo primero que se carga en el navegador. tiene propiedades como lenght, innerWidth, etc.

El objeto document representa al HTML, php u otro documento que será cargado en el navegador. El document es cargado dentro del objeto window y tiene propiedades como title, url, cookie, etc.

¿QUÉ PODEMOS HACER CON EL DOM?
- Modificar elementos, atributos y estilos de la página.
- Borrar cualquier elemento o atributo.
- Agregar nuevos elementos o atributos.
- Reaccionar a todos los eventos HTML del sitio.
- Crear nuevos eventos HTML en la página.
*/

// COMENZAMOS CAPTURANDO TODO EL DOCUMENTO HTML
console.log(window.document); // puedo visualizar todo el documento html

// PERO... ¿ CÓMO PODEMOS CAPTURAR ELEMENTOS ESPECÍFICOS DEL DOM ?

// querySelector()
// Permite capturar un elemento del dom.
// Recibe como parámetro la etiqueta, el id o la clase.
// Si hay más de un elementos, sólo captura al primero.
// Ejemplo 1: capturamos el elemento H1 (titulo) de la página
var titulo = document.querySelector('h1');
console.log(titulo); // lo muestro por consola

// Ejemplo 2: capturamos el elemento que utiliza la clase '.enlace'
var enlace = document.querySelector('.enlace');
console.log(enlace); // lo muestro por consola

//Ejemplo 3: capturamos el elemento que utiliza el id '#resaltado'
var resaltado = document.querySelector('#resaltado');
console.log(resaltado); // lo muestro por consola

// querySelectorAll()
// Permite capturar todos los elementos de un mismo tipo.
// Ejemplo 1: capturamos todos los párrafos de la página
var parrafos = document.querySelectorAll('p'); //devuelve un array
console.log(parrafos); // podemos acceder a un elemento particular así: parrafos[indice]

// Ejemplo 2: capturamos todos los elementos <li> de una etiqueta <ul> con clase "links"
var li = document.querySelectorAll('ul.links li')
console.log(li);

// getElementById()
// Permite capturar un elemento que tiene el id pasado por parámetro
// Ejemplo:
let tituloSecundario = document.getElementById('titSecundario'); // Nota: el id va sin el #
console.log(tituloSecundario);

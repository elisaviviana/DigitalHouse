/*
window.onload
> De forma predeterminada, se activa cuando se carga toda la página, incluido su contenido (imágenes, css, scripts, etc.)
> En algunos navegadores ahora asume el rol de document.onload y se activa cuando el DOM también está listo.

document.onload
> Se llama cuando el DOM está listo, que puede ser anterior a la carga de imágenes y otro contenido externo.

¿Qué tan bien son apoyados?
window.onload parece ser el más soportado. De hecho, algunos de los navegadores más modernos en cierto sentido han
reemplazado document.onload con window.onload. Los problemas de soporte del navegador son probablemente la razón
por la que muchas personas están comenzando a usar bibliotecas como jQuery para manejar la verificación del documento.

Por otra parte, no sería necesario hacer un "window.onload = function(){...};" si cargamos los scripts de javascript
al final del body del sitio html. Ya que se van a ejecutar luego de que ya se cargó todo el DOM.
*/
window.onload = function(){

    /* onclick
    El evento onclick() ocurre cuando el usuario clickea en un elemento.
    Podemos capturar el evento onclick() y programar un comportamiento
    que se va a ejecutar cuando el usuario haga click en el elemento.
    */

    // Obtenemos el elemento
    let boton = document.getElementById("miBoton");

    // Capturamos el evento y ejecutamos una función anónima
    boton.onclick = function(){
        alert('¡Testeando el evento Click!')
    };

    // otro ejemplo del evento onclick
    let div = document.getElementById("miDiv");
    div.onclick = function(){
        ModificarCSS(div); // invoco a una función externa
    };
};

function ModificarCSS(elemento){
    elemento.style.margin = '10px';
    elemento.style.pading = '10px';
    elemento.style.border = 'green 1px solid';
    elemento.style.color = 'blue';
    elemento.innerHTML = "Se capturó el evento onclick";
}

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

  var botonDePrueba = document.getElementById("miBoton");
    botonDePrueba.onclick = function(){
      alert("Testeando el click");
    }
};

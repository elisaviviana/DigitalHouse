// VAMOS A TRABAJAR CON LOS ESTILOS CSS DESDE JAVASCRIPT

window.addEventListener("load", function() { //Todos los recursos terminaron de cargar
    // Primero necesitamos capturar el elemento
    let titulo = document.getElementById('tituloPrincipal');

    // Y luego haciendo: <elemento>.style.<propiedad> podemos modificar una propiedad css
    titulo.style.color = 'lightblue';
    titulo.style.textAlign = 'center';
    titulo.style.fontFamily = 'Verdana';


    // Hagamos un ejemplo más dinámico.
    // Capturemos el body para cambiarle el color de fondo
    let body = document.querySelector('body');

    // Pero pidámosle al usuario que elija el color:
    let color = prompt('Escribí un color para el fondo (blue, red, gray, black, white, orange, etc)');

    // Finalmente cambiamos el color de fondo:
    body.style.backgroundColor = color;


    // Hagamos otro ejemplo dinámico.
    // La idea es cambiar el color de texto de todos los <li>
    // que se encuentran en el <ul> con clase 'lista'
    let arrayli = document.querySelectorAll('ul.lista li'); // obtenemos un array
    color = prompt('Escribí un color para la lista de elementos'); // pedimos el color
    for (li of arrayli) { // recorremos el array
        li.style.color = color; // cambiamos el color de letra
    }

});

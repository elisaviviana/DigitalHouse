// VAMOS A TRABAJAR CON LOS ATRIBUTOS DE LOS ELEMENTOS

window.addEventListener("load", function(event) { //Todos los recursos terminaron de cargar
    // obtenemos el titulo
    let titulo = document.getElementById('tituloPrincipal');
    //console.log(titulo);

    // .setAttribute()
    // Permite crear un atributo para el elemento y asignarle un valor.
    // Haciendo <elemento>.setAttribute(<atributo>,<valor>)
    titulo.setAttribute('class', 'danger'); // en este caso creamos el atributo "class" y le asignamos el valor "danger"
    titulo.setAttribute('miAtributo1', 'valor1'); // creamos un atributo cualquiera
    titulo.setAttribute('miAtributo2', 'valor2'); // creamos un atributo cualquiera
    console.log(titulo);

    // .getAttribute()
    // Permite obtener el atributo de un elemento.
    // Haciendo <elemento>.getAttribute(<atributo>)
    let enlace = document.querySelector('.enlace'); // obtengo el elemento que usa la clase "enlace"
    let url = enlace.getAttribute('href'); // obtengo el atributo "href"
    console.log(url); // muestro la url por consola

    // ¿Y si queremos ver todos los atributos que tiene un elemento?
    let elem = document.querySelector('.danger');
    if (elem.hasAttributes()) { // Primero, verifiquenmos que el elemento tiene algún atributo
        let atributos = elem.attributes; // obtenemos todos los atributos
        let output = "";
        let atributo = null;
        //console.log(atributos);
        for(let i = 0; i < atributos.length; i++) { // iteramos por todos los atributos del elemento
            atributo = atributos[i]; // obtenemos el atributo
            output = atributo.name  + " -> " + atributo.value ;
            console.log(output); // mostramos  atributo -> valor
        }
    } else {
        console.log("No hay atributos que mostrar");
    }

    // removeAttribute()
    // Permite eliminar un atributo de un elemento.
    let subtitulo = document.querySelector('#tituloSecundario'); // capturamos el elemento
    subtitulo.removeAttribute('id'); // eliminamos el atributo id del elemento
    console.log(subtitulo);

    // hasAttribute()
    // Permite saber si el atributo existe o no.
    // Devuelve true o false.
    let existe = titulo.hasAttribute('class');
    console.log(existe); //true

    /* HAGAMOS UN EJEMPLO DINÁMICO.
    La etiqueta iframe utiliza el atributo src para embeber otro sitio en el nuestro.
    Para este ejercicio le vamos a pedir al usuario mediante la función prompt que ingrese un código de video de youtube.
    Algunos códigos de video divertidos para probar:
        rNSnfXl1ZjU
        DgdMV3IczYY
        wtQuGwDWlpo
    Luego reemplazaremos el atributo src de la etiqueta iframe con la url
    https://www.youtube.com/embed/CODIGOVIDEO
    donde la palabra CODIGOVIDEO debe ser reemplazada por el código del video elegido por el usuario. */
    let codVideo = prompt("Escribe un código de video (ejemplo: rNSnfXl1ZjU).");
    let video = 'https://www.youtube.com/embed/' + codVideo; // url completa del video
    let iframe = document.querySelector('iframe'); // obtenemos el iframe
    iframe.setAttribute('src',video); // seteamos la propiedad src

});

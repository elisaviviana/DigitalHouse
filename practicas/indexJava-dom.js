//selecciona El PRIMER elemento de ese tipo..
var elTitulo = document.querySelector('h1');
console.log(elTitulo);
//selecciona TODOS los elementos de ese tipo, despues hay que recorrerlo con un for
var parrafos = document.querySelectorAll('p');
console.log(parrafos);
// seleciona elemento por clase
var elenlace1 = document.querySelector('.enlace');
console.log(elenlace1);
//toma elemento por ID
var elenlace1 = document.querySelector('#tituloprincipal');
console.log(elenlace1);
//toma elemento por ID
var jstitulo = document.getElementById('tituloprincipal');
console.log(jstitulo);
//cambia el color al body
var color = prompt("Elegi un color para el body");
var mibody = document.querySelector("body")
 mibody.style.backgroundColor = color;

//cambia el color de todos los li -
 var color2 = prompt("Elegi un color los li");
  var misli = document.querySelectorAll("li")
  console.log(misli);
  for (var i = 0; i < misli.length; i++) {
    misli[i].style.color = color2
  }

//Pide el codigo de un video y lo muestra en el iframe del html setiandole el atributo src
  var idVideo = prompt("Ingresa un código de video de youtube ");
    var miiframe = document.querySelector("iframe")

    miiframe.setAttribute('src','https://www.youtube.com/embed/'+idVideo)



    window.addEventListener("load", function() {
    var peliculas = prompt("Por favor, ingresar las peliculas favoritas separadas por coma")  ;
      var arrayPeli = peliculas.split(",");



    })

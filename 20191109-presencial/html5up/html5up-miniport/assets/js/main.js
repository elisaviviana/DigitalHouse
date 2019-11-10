window.onload = function () {
//ocultar el elemento H1
 var titular1 = document.getElementById("titular")
 titular1.innerHTML = "";
//pasar a blanco y negro la imagen de la lechuza
var lechuza = document.querySelector("#lechuza")
lechuza.style.filter = "grayscale(100%)";
//Seleccionar el elemento con id "copyright" y mostrar en consola a dicho elemento
var copyright = document.getElementById("#copyright")
console.log(copyright);
//Utilizando elemento.style, cambiarle el color actual por un rojo al <h2>
var h2rojo = document.querySelectorAll("h2")

for (var i = 0; i < h2rojo.length; i++) {
  h2rojo[i].style.color = "red";
}
//Nos piden cambiar el color a todos los íconos de la página. Recordá que estos tiene la clase “icon”.
var iconos = document.querySelectorAll(".icon");
for (var i = 0; i < iconos.length; i++) {
  iconos[i].style.color = "orange";
}
//Seleccionar el elemento con id “copyright” y mostrar en consola todos sus
//atributos, utilizando el método .attributes
var copyrightattr = document.getElementById("copyright");
console.log(copyrightattr.attributes);

//Mostrar en consola la url a donde dirigen los botones de twitter y
//facebook utilizando getAttribute.
var twitterhref = document.querySelector(".fa-twitter");
console.log(twitterhref.getAttribute("href"));




}

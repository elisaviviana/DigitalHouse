window.addEventListener("load", function() {

  var xl = confirm("quieres las letras mas grandes")

  var nombre = prompt("¿Cual es tu nombre?")

  document.querySelector("h1").innerHTML = "Bienvenido " + nombre

  if(xl){
    document.querySelector("h1").classList.add("xl");
  }

})

//HTML
/*
<div id="mi_div">Div test</div>
<p class = "mi_clase"></p>
<div id="mi_otro_div">Div Test 2</div>
*/

//CSS
/*
.mi_clase
{
  background: green;
  padding: 10px;
}
*/

// Formas de obtener elementos del DOM:

// obtiene el elemento con un id específico
var div = document.getElementById("mi_div"); 
div.classList.add("mi_clase"); // le agrega al elemento la propiedad class = "mi_clase"
console.log(div); // muestra en consola el contenido del div

// ahora obtiene un arreglo de elementos que tienen la propiedad class = "mi_clase"
var elementos = document.getElementsByClassName("mi_clase"); 
console.log(elementos); // muestra en consola el contenido del arreglo
elementos[0].setAttribute("id","mi_parrafo"); // le agrego la propiedad id al elemento <p>

// tambien podemos obtener un array de elementos que tienen la misma etiqueta
elementos = document.getElementsByTagName("div");
console.log(elementos);

// podemos usar querySelector para obtener el primer elemento encontrado que tenga la propiedad class = "mi_clase"
var elemento = document.querySelector(".mi_clase");
console.log(elemento);

// podemos usar querySelector para obtener todos los elementos que tengan la etiqueta "div" 
elementos = document.querySelectorAll("div");
console.log(elementos);
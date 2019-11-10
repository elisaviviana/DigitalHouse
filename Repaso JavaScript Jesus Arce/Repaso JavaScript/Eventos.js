// EVENTOS CON JAVASCRIPT
// 1- PRIMERA FORMA PARA ENLAZAR UN EVENTO A UNA FUNCIÓN DE JAVASCRIPT

/*HTML:
<button onclick="mensaje()">Click Me!</button> 
<button onmouseover="mensaje()">Over Me!</button>
<button onmouseout="mensaje()">Over and Leave Me</button>
*/

//JAVASCRIPT:
function mensaje()
{
  alert("holis");
}


// 2- SEGUNDA FORMA PARA ENLAZAR UN EVENTO A UNA FUNCIÓN DE JAVASCRIPT (USAMOS LISTENERS)

/*HTML:
<button id="btn">Click Me</button>
*/

//JAVASCRIPT:
// escuchamos el evento click del elemento y ejecutamos la función mensaje()
document.getElementById("btn").addEventListener("click",mensaje,false); // 
function mensaje()
{
  alert("holis");
}

/*
BUBBLING Y CAPTURING
En JavaScript cuando se ejecuta un evento en un elemento del DOM, se lleva a cabo una propagación,
la cual puede ser de dos formas:

- Bubbling: desde el elemento objetivo hacia afuera (nodos padres)
- Capturing: desde el nodo padre, se va descendiendo hasta el nodo objetivo, no es muy utilizada esta
propiedad pero puede ser muy útil en ciertos casos

La forma de propagación por defecto es Bubbling.

Todo esto tiene muchas ventajas según lo que quieras lograr en tu código, capturing no es muy 
utilizado por su naturaleza de ser desde el nodo padre al nodo hijo, sin embargo bubbling es algo 
muy importante y que debemos de tener en cuenta al momento de usar eventos en JavaScript, ya que al 
propagarse hasta el elemento document puede llegar a causar algo que no deseamos.

EJEMPLO DE BUBBLING:

HTML:
<div id="div">
  <p id="parrafo">
    <button id="btn">Click Me!</button>
  </p>
</div>

CSS:
form, div, p{
 padding:10px;
 border:solid 1px red;
}
JAVASCRIPT:
*/
document.getElementById("div").addEventListener("click",mensajeDiv,false); // el tercer parámetro es opcional ya que en bubbling siempre es false
document.getElementById("parrafo").addEventListener("click",mensajeParrafo,false);
document.getElementById("btn").addEventListener("click",mensajeBtn,false);

function mensajeParrafo()
{
  alert("Esto fue disparado por el Parrafo");
}
function mensajeDiv()
{
  alert("Esto fue disparado por el Div");
}
function mensajeBtn()
{
  alert("Esto fue disparado por el Boton");
}

/*
Como se puede observar, la propagación va siempre desde el objetivo hacia los nodos
padres.

PARA VER UN EJEMPLO DE CAPTURING, SÓLO NECESITO CAMBIAR LA LINEA SIGUIENTE:
document.getElementById("div").addEventListener("click",mensajeDiv,false);

POR:
document.getElementById("div").addEventListener("click",mensajeDiv,true);

AHORA LA PROPAGACIÓN IRÁ DESDE EL DIV HACIA EL BOTÓN.

*/

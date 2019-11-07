var frase = "Breaking Bad Rules!";

console.log(frase.slice(9,12));
console.log(frase.slice(13));
console.log(frase.slice(-10));

var nombreCompleo = "   Homero Simpson    ";

console.log(nombreCompleo.trim());
var nombreCompleo1 = "   Homero             Simpson    ";
console.log(nombreCompleo1.trim());


var cancion = "and Bingo was his name, oh";
console.log(cancion.split(" ")); //tener en cuenta el caracter a pasar... lo usa para separar

var frase = "Aguante Python!!";
console.log(frase.replace("Python", "JS"));
console.log(frase.replace("Py", "JS"));

dominio("digitalhouse.com.ar");

function dominio (texto){
console.log(texto.replace(texto, "http://"+texto));
}

var texto = "Hola mundo, estoy de vuelta";
console.log (texto.length);


function reemplazoFastFast(texto, buscar, reemplazar){
    return texto.replace(buscar,reemplazar);
}
let reemplazo = reemplazoFastFast("Hola mala onda", "mala","buena");
console.log(reemplazo);

var saludo = "Hola Estamos programando"
console.log(saludo.indexOf("Estamos"));



function menciona(texto, palabra){
if(texto.indexOf == -1){
    return false;
}else{
    return true;
}
}
console.log(menciona("Hola Mundo", "Hola"));


let textoCarli = "¡Hola!, soy Carli";
let licenciada = textoCarli.slice(-5);
console.log(licenciada);

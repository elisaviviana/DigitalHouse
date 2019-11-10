/*
VARIABLES Y CONSTANTES EN JAVASCRIPT
Hay dos formas de definir variables:
1) Utilizando let:

let nombreVariable = valor;

Es la manera más "nueva" de declarar variables en javascript. Tiene la particularidad de que
la variable sólo pertenece al bloque de código donde es declarada.
Esto es similar al funcionamiento por defecto de otros lenguajes como JAVa o C#,
donde las variables siempre respetan el "ámbito" donde son declaradas (y no se pueden
utilizar fuera de él).

2) Utilizando var:

var nombreVariable = valor;

Es la manera más antigua de declarar variables en javascript.
Las variables en este caso trascienden el ámbito donde son declaradas, por lo que pueden
ser utilizadas en otros bloques de código. Suelen utilizarse como "variables globales".

Veamos un ejemplo:
*/

if (true) {
    var variableGeneralConVAR = 'Esta es una variable global definida con VAR'; // esta variable podrá usarse en otros bloques de código (fuera de este IF)
    let variableLocal = 'Esta es una variable local definida con LET'; // esta variable sólo funcionará dentro de este IF
    // Muestro exitosamente la variable local y la global
    console.log(variableLocal);
    console.log(variableGeneralConVAR);
}

if (true) {
    // Aquí no podré mostrar la variable local pero sí la global
    console.log(variableGeneralConVAR);
    //console.log(variableLocal); // error "variableLocal is not defined"
}

/*
FINALMENTE PODEMOS DECLARAR UNA CONSTANTE:
Una constante es un espacio en memoria para reservar un dato que no puede cambiar durante la ejecución del programa.
En el caso de javascript, las constantes respetan el ámbito (bloque de código) donde son definidas.
Para las constantes es necesario declarar y asignar en la misma sentencia.
*/
const constanteGeneral = 'Hola '; // constante global
if (true) {
    const constanteLocal = "Mundo"; // constante local
    //constanteLocal = "MundoModificado"; //error "Assignment to constant variable."
    console.log(constanteGeneral+constanteLocal);
}
//console.log(constanteLocal); // error "constanteLocal is not defined"

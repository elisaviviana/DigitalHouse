/* CONVERSIÓN DE DATOS

Los tipos de datos de javascript son:

    Numéricos (number)
    Cadenas de caracteres (string)
    Lógicos o booleanos (boolean)
    Objeto (object)
    Array (object)

También existen datos especiales que le permiten a JavaScript determinar estados especiales que pueden tener los datos.
Estos son:

    NaN (Not a number)
    NULL (valor nulo)
    Undefined (valor sin definir)

Ahora sí, si te acordas de todo esto, ya podés meterte a fondo con conversión de datos.
*/

let texto = '28.3';
console.log(texto);

// Ejemplo de typeof
// Nos devuelve una cadena con el tipo de dato del objeto
console.log(typeof texto); //devuelve 'string'
if (typeof texto === 'string') {
    console.log('Es una cadena');
}


// Ejemplo parseInt()
// Transforma una cadena a Entero
console.log("------");
let entero = parseInt(texto); //devuelve 28
console.log(entero);
console.log(typeof entero); //devuelve 'number'
console.log("------");
console.log(parseInt('28.9x')); //devuelve el entero 28 (el resto lo descarta)
console.log(parseInt('2p8.9p')); //devuelve el entero 2 (el resto lo descarta)
console.log(parseInt('p28.9')); //devuelve NaN
console.log("------");

// Ejemplo de Number()
// Transforma una cadena a numérico
let numero = Number(texto); //devuelve 28.3
console.log(numero);
console.log(typeof numero); //devuelve 'number'
console.log("------");
console.log(Number('28.9x')); //devuelve NaN
console.log(Number('2p8.9p')); //devuelve NaN
console.log(Number('p28.9')); //devuelve NaN
console.log("------");

// Ejemplo de parseFloat()
// Transforma una cadena a número con decimales (similar a Number)
console.log(parseFloat('12.6')); //devuelve 12.6
console.log(parseFloat('  6.6')); //devuelve 6.6
console.log(parseFloat('11.9x')); //devuelve 11.9
console.log(parseFloat('-4.32')); //devuelve -4.32
console.log(parseFloat('9,57')); //devuelve 9
console.log(parseFloat('p9,57')); //devuelve NaN
console.log(parseFloat('9.5p7')); //devuelve 9.5
console.log("------");

// Ejemplo de toString()
// Transforma un número a string
console.log(3.14.toString()); // convertirmos a string el 3.14
console.log("------");

// Ejemplo de String()
// Transforma el parámetro (puede ser de cualquier tipo) a string
console.log(String(25.98)); //devuelve '25.98'
console.log(String(true)); //devuelve 'true'
console.log(String(['Juan', 28, false])); //devuelve 'Juan,28,false'
console.log(String({Nombre:'Rosita',Edad:20})); //devuelve '[object Object]'

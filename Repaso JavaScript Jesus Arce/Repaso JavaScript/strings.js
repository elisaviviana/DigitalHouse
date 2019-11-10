/* En JAVASCRIPT las cadenas son objetos. Por lo tanto podemos acceder a sus propiedades y métodos.
Nota: Ninguno de los métodos que vemos a continuación, modifica la cadena origina. */

// Un string tratado como array
let cadena = "Jesús Arce";
console.log(cadena[3]); // devuelve "ú"

// Ejemplo de la propiedad length
// Devuelve la cantidad de caracteres tiene la cadena.
let mensaje = 'Gran día para practicar javascript!';
console.log(mensaje.length);

// Ejemplo de indexOf()
// Devuelve la posición inicial de la cadena buscada (el índice empieza en 0)
// Si no encuentra la cadena devuelve -1
console.log(mensaje.indexOf('día')); // buscamos la cadena 'día' dentro del mensaje.

// Ejemplo de slice()
// Obtiene una sub-cadena. Recibe dos parámetros: (inicio, final). El segundo parámetro es opcional.
console.log(mensaje.slice(14,23)); //obtiene "practicar"

// Ejemplo de trim()
// Elimina espacios en blanco antes y despues de la cadena
let mensaje2 = "      Gran día para practicar javascript!       ";
console.log(mensaje2.trim());

// Ejemplo de split()
// Convierte una cadena en un array de cadenas.
// Recibe como parámetro un caracter de separación.
// El caracter de separación es eliminado (no se incluye en el array)
console.log(  mensaje.split(' ')    ); //cada palabra en una posición del array
console.log(  mensaje.split()       ); //toda la cadena en la posición 0 del array (no hay caracter de separación)
console.log(  mensaje.split('')     ); //cada caracter en una posición del array
console.log(  mensaje.split('a')    ); //cada vez que encuentra una "a", guarda la cadena en una posición del array (no incluye la "a" de la cadena).

// Ejemplo de replace()
// Reemplaza una cadena dentro de otra cadena.
// Recibe dos parámetros: (texto-a-reemplazar, texto-de-reemplazo)
console.log(mensaje.replace('javascript','Fútbol'));

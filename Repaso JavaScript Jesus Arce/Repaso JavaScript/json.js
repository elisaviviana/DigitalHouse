// FORMATO JSON (JavaScript Object Notation)
// Es un formato de texto sencillo utilizado para el intercambio de datos entre distintos sistemas.
// Es similar al formato de un objeto literal de JavaScript, pero tiene algunas diferencias:
/* JavaScript:
{
    texto: 'Mi texto',
    numero: 213,
    arreglo: ['uno','dos','tres'],
    booleano: true,
    metodoHolaMundo: function()
    {
        return 'Hola mundo';
    },
}

JSON:
{
    "texto": "i texto",
    "numero": 16,
    "arreglo": ["uno","dos","tres"],
    "booleano": true
}

- Como podemos observar, en JSON no se pueden usar comillas simples y no soporta métodos.
- El formato JSON es un string de la forma: '{"nombre":"Jesús", "apellido":"Arce","edad":33,"ciudad":"Mendoza"}'
- Javascript nos proporciona un objeto nativo llamado JSON, con dos métodos que permiten
convertir el formato de un archiv JSON a objeto literal o array, y viceversa. Estos son: JSON.stringify()  y  JSON.parse()    */

// JSON.stringify() utilizando un array
// Permite convertir un objeto literal o array de Javascript al formato JSON
let amigos = ['Pablo','Fernando','Gustavo','Daniel','Mariano'];
console.log(amigos); // mostramos el contenido del array
let amigosJSON = JSON.stringify(amigos); // convertimos el array a formato JSON
console.log(amigosJSON); //mostramos el contenido de la variable json

// Veamos cómo funciona stringify con un objeto literal
let persona = {
    nombre: 'Jesús',
    apellido: 'Arce',
    edad: 33,
    ciudad: 'Mendoza',
};
console.log(persona); //mostramos el objeto literal
let personaJSON = JSON.stringify(persona); //convertimos el objeto literal a formato json
console.log(personaJSON); //mostramos el contenido de la variable json


// JSON.parse()
// Permite convertir un objeto JSON a un objeto literal o array de Javascript
personaJSON = '{"nombre":"Jesús", "apellido":"Arce","edad":33,"ciudad":"Mendoza"}'; // variable formato JSON, que no es más ni menos que un string.
console.log(personaJSON); //mostramos el contenido de la variable json
persona = JSON.parse(personaJSON); //convertimos a javascript
console.log(persona);//mostramos el formato de JavaScript

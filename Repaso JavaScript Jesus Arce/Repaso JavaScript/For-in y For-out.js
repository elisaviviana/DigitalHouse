// for-in
// Se usa para iterar en colecciones iterables (ejemplo un objeto literal)
// No se usa para iterar en arrays ni cadenas.
let persona = {
        nombre: "Brenda Bruno",
        edad: 58,
        profesion: "Jugadora de Fútbol",
};
for (var key in persona) {
    console.log("En el atributo " + key + " se encuentra el Valor " + persona[key]);
}
console.log('--------------------------------');



// for-of
// Se usa para iterar en cadenas de texto y arrays.
// No se usa para iterar en objetos.
let notas = [7,6,10,66,3,2];
for (elemento of notas) {
    console.log(elemento);
}
// una forma alternativa de iterar este array sería usar el for convencional
console.log('--------------------------------');
for (var i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}

// Un ejemplo de for-of en una cadena de texto
let frase = "Nos encanta hacer la vertical";
for (letra of frase) {
    console.log(letra);
}

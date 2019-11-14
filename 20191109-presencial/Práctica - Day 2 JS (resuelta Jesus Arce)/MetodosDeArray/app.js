window.onload = function(){

   // EJERCICIO 1
   var enigma = ["l", 1, "a", 2, 2, 5, "p", 5, 7, 5, 3, "e", 6, "r", 7, 6, 5, 3, 2, 1, "s", 9, 9, 9, 6, "e", 2, "v", 5, "e", 3, "r", 2, "a", 1, 6, 4, 1, 2, "n", 2, "c", 3, 5, 5, 5, 7, "i", 4, "a", 5, 2, 1, 3, "e", 6, "s", 7, "l", 4, "a", 3, "c", 2, 3, 1, 5, 3, 2, "l", 3, "a", 4, "v", 5, "e", 6];

   /* a.	Con toda esta información nos piden encontrar la altura de una calle. Para descifrar la misma nos dieron la siguiente pista: "Si descifrar la altura quieres, sumar todos los números debes". ¿Qué método de Array podemos usar para ésto?. */

   // obtenemos los numeros
   let arrayDeNumeros = enigma.filter(function(elemento){
       return typeof elemento == 'number';
   });

   // obtenemos la suma de todos los numeros
   let resultado = arrayDeNumeros.reduce(function(acumulador,numero){
         return acumulador + numero;
   },0); // el cero es el valor inicial que va a tomar el acumulador (es opcional)
   //console.log(resultado);

   /* b.	Cómo último paso, nos piden encontrar el nombre de la calle. Para ello tenemos la siguiente pista: "Si el nombre de la calle necesitás, omitir todos los números deberás".  */
   // obtenemos todas las letras
   let arrayDeLetras = enigma.filter(function(elemento){
       return typeof elemento == 'string';
   });
   let calle = arrayDeLetras.join(''); // genero el string completo

   /* c.	Finalmente debemos mostrar en consola el nombre de la calle junto con su altura. */
   console.log(calle + " " + resultado);
};

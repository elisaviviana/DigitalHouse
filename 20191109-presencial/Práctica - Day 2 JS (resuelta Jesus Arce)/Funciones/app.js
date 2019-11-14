window.onload = function(){

   // EJERCICIO 1
   let estudiante = {
      nombre: 'Jesús Arce',
      curso: '3° 9°',
      dni: 32019628,
      email: 'jesus.arce@rootssolutions.com.ar',
   };

   function fromObjectToArray(objeto){
      let array = [];
      for (var propiedad in objeto) {
         array.push(objeto[propiedad]); //agrego el valor de la propiedad al array
      }
      return array;
   }
   console.log(fromObjectToArray(estudiante));


   // EJERCICIO 2
   function cambiarColorDeFondoDelBody(color){
      let body = document.querySelector('body');
      if (color !== 'green' && (color !== '#0f0' || color !== '#00ff00'))  {
         body.style.backgroundColor = color;
         return true;
      }else{
         return false;
      }
   }
   console.log(cambiarColorDeFondoDelBody('pink')); // true
   console.log(cambiarColorDeFondoDelBody('green')); //false

   // EJERCICIO 3
   let parrafos = document.querySelectorAll('p');
   function modificarCSSparrafo(arrayDeParrafos){
      let contadorParrafosNoModificados = 0;
      arrayDeParrafos.forEach(function(elemento, key){
         if (key%2 == 0) { // sólo los párrafos pares
            elemento.style.color = 'red';
            elemento.style.fontWeight = 'bold';
            elemento.style.textAlign = 'center';
         }else{ // párrafos que no se van a modificar
            contadorParrafosNoModificados++;
         }
      });
      return contadorParrafosNoModificados;
   }
   let parrafosNoModificados = modificarCSSparrafo(parrafos);
   console.log(parrafosNoModificados); // 6
};

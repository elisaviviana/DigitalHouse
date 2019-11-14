window.onload = function(){
   // Preguntamos al usuario si desea iniciar la aplicación
   let iniciar = confirm('Hola! deseas iniciar la aplicación?');
   if (iniciar == false) {
      alert("No hay problema, hasta la próxima!");
      //window.location="http://www.netflix.com"; // redireccionamos al usuario
      h2.innerHTML = "Aplicación finalizada."
      return; // dejamos de ejecutar el script
   }

   let continuar = false;
   let h2 = document.querySelector('h2');

   // Pedimos la cantidad de integrantes de la familia tantas veces como haga falta.
   // (hasta que escriba "SALIR" o coloque bien la información que le pedimos)
   do {
      var cantIntegrantes = prompt('Escribe la cantidad de integrantes de tu familia (mínimo 3). Escribe SALIR para terminar el programa.');
      if (cantIntegrantes === 'SALIR') {
         alert("Gracias por haber venido, hasta la próxima!");
         h2.innerHTML = "Aplicación finalizada."
         return;
      }
      cantIntegrantes = parseInt(cantIntegrantes); // si escribió un decimal, tomamos la parte entera
      if (Number.isNaN(cantIntegrantes)) { // chequeamos que sea numérico
         alert("El dato ingresado es incorrecto. Intenta nuevamente con un dato Numérico.");
      } else if (cantIntegrantes < 3) { // si es numérico, chequeamos que sea 3 o más
            alert("Debes ingresar al menos 3 integrantes. Intenta nuevamente.");
      } else {
            continuar = true;
      }
   } while (continuar == false);

   let arrayIntegrantes = [cantIntegrantes]; // creamos un array de x integrantes
   // Para simplificar todo, creamos una estructura de objeto para cada integrante
   function Integrante(){
      this.nombre = "";
      this.gasto = 0.00;
      this.setNombre = function(nuevoNombre){
         this.nombre = nuevoNombre;
      };
      this.setGasto = function(cifra){
         this.gasto = cifra;
      }
   }

   let iterador = 0;
   let listo = confirm('Ahora bien, te vamos a pedir que cargues el Nombre y la cifra que gastó cada integrante de tu familia. ¿Estás listo?');
   if (listo == false){
      alert("No hay problema, hasta la próxima!");
      h2.innerHTML = "Aplicación finalizada."
      return; // dejamos de ejecutar el script
   }

   let respuestaSalir = true;
   while (iterador < cantIntegrantes) {
      let nombre = prompt('Escribe el nombre del integrante: ');
      let cifra = "";
      nombre = nombre.trim();
      let noEsNumerico = Number(nombre); // lo intenta convertir a numero
      if (nombre.length > 0 && nombre != "" && isNaN(noEsNumerico)) {
         let intentos = 1;
         do {
            cifra = prompt('Cuánto gastó ' + nombre + '?');
            if (isNaN(cifra) || cifra == "" || cifra < 0) {
               alert("Debes escribir un número (ej: 5235.63). A continuación deberás intentarlo nuevamente (Número de intentos: "+ intentos +" de 3)");
               intentos++;
            }else{
               break;
            }
         } while (intentos <= 3);
         if (intentos >= 4) {
            respuestaSalir = confirm('Superaste el número de intentos máximo permitido. Presiona Aceptar para volver a cargar los datos del integrante y Cancelar para salir de la aplicación.');
            if (respuestaSalir == true) { // decidió continuar ejecutando el programa
               continue; // volvemos a la condición del while
            }else{ // decidió salir del programa
               iterador = cantIntegrantes; // salimos
               break;
            }
         }else{
            let integrante = new Integrante();
            integrante.setNombre(nombre);
            integrante.setGasto(cifra);
            arrayIntegrantes[iterador] = integrante;
         }
         iterador++;
      }else{
         alert('El nombre ingresado es inválido, por favor vuelve a intentarlo.');
      }
   }

   if (respuestaSalir == true) {
      h2.innerHTML = "La aplicación se ejecutó con éxito. Abra la consola del navegador para observar el resultado."
      console.log(arrayIntegrantes);

   }else{
      h2.innerHTML = "Aplicación finalizada."
   }



};

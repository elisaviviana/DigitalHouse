window.onload = function(){

   // 1) Obtenemos todos los paises del mundo y los cargamos en el select de paises
   fetch('https://restcountries.eu/rest/v2/all')
      .then(function(respuesta){
         return respuesta.json();
      })
      .then(function(dataCruda){
         let selectPaises = document.querySelector('select[name=pais]');
         dataCruda.forEach(function(elemento){
            var pais = elemento['name'];
            let nuevoOption = document.createElement('option');
            nuevoOption.innerHTML = pais;
            //Aquí sería necesario agregar el atributo "value" de cada option y colocarle el valor correspondiente segun el codigo del pais (por ejemplo Argentina es "ar", chile es "cl", colombia es "co");
            selectPaises.append(nuevoOption);
            selectPaises.selectedIndex = 10; // seleccionamos por defecto Argentina
         });
      })
      .catch(function(error){
         console.log('Descripción del Error: ' + error);
   });

   // 2) Ocultamos el campo de asunto personalizado
   let asuntoPersonalizado = document.querySelector('#otroAsunto');
   let asunto = document.querySelector('#asunto');
   let opcionesAsunto = asunto.options;
   // por defecto está seleccionada la primera opción por lo que ocultamos el campo asuntoPersonalizado
   asuntoPersonalizado.style.display = "none";
   // Si selecciona el asunto "Otro", mostramos el campo asuntoPersonalizado
   asunto.onchange = function(){
      // this.selectedIndex es igual a asunto.selectedIndex
      if (opcionesAsunto[this.selectedIndex].innerHTML == "Otro") {
         asuntoPersonalizado.style.display = "block";
      }else{
         asuntoPersonalizado.style.display = "none";
      }
   }

   // Continuar con las validaciones Aquí
}

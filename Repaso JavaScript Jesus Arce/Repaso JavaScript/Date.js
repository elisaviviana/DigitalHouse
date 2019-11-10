// Date
// Nos devuelve la fecha completa. Quizá el formato no sea tan agradable...
let fechaActual = new Date();
console.log(fechaActual); //ejemplo: 2019-11-07T14:00:58.422Z

// Tengamos en cuenta que ahora la fechaActual ahora es un Object, por lo que podemos utilizar cualquiera de los métodos que nos brinda javascript para trabajar con fechas.
console.log(typeof fechaActual); // object
// Por ejemplo, podemos cambiar el formato:
console.log(fechaActual.toUTCString()); //ejemplo: Thu, 07 Nov 2019 14:02:48 GMT
// Pero tampoco es tan útil... Entonces...
// Obtengamos el año
console.log(fechaActual.getFullYear()); //ejemplo: 2019

// Obtengamos el mes
// Recordemos que los meses empiezan a contar desde cero
// (0=enero, 1=febrero ... 11=diciembre)
console.log(fechaActual.getMonth()); //ejemplo: 10 (noviembre)

// Obtengamos el día del mes
// Este método nos va a retornar la fecha en la que nos encontramos
console.log(fechaActual.getDate());

// Obtengamos el día de la semana.
// Importante: este método nos va a retornar el día, no la fecha!
// Es decir:
// 0=domingo  1=lunes  2=martes  3=miercoles  4=jueves  5=viernes  6=sabado
console.log(fechaActual.getDay()); //ejemplo: 4 (jueves)

// Entonces, con todos estos métodos podríamos armar una cadena un tanto más útil para nosotros, del tipo "Hoy es jueves 7 de noviembre de 2019"
let dias = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let diaSemana = fechaActual.getDay();
let dia = fechaActual.getDate();
let anio = fechaActual.getFullYear();
let mes = fechaActual.getMonth();

console.log('Hoy es ' + dias[diaSemana] + ' ' + dia + ' de ' + meses[mes] + ' de ' + anio );

// Si quiero obtener una fecha en particular la obtengo así:
let fechaEspecifica = new Date(1986,0,18); // 18 de Enero de 1986 (mi fecha de nacimiento)
// Entonces puedo mostrar el formato de fecha que yo quiero:
diaSemana = fechaEspecifica.getDay();
dia = fechaEspecifica.getDate();
anio = fechaEspecifica.getFullYear();
mes = fechaEspecifica.getMonth();
console.log('Jesús Arce nació el ' + dias[diaSemana] + ' ' + dia + ' de ' + meses[mes] + ' de ' + anio );

// Finalmente, podemos instanciar un objeto fecha y luego setearle el año, mes y día, de la siguiente manera:
let fecha = new Date();
fecha.setYear(1986);
fecha.setMonth(0);
fecha.setDate(18);
console.log(fecha);

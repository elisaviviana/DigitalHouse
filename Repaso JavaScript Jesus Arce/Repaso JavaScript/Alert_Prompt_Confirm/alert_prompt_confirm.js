
// usamos prompt para solicitar un dato al usuario
let user = prompt('Dime tu nombre');

// podemos usar alert para mostrar un mensaje
alert('Tu nombre es: ' + user);

// y utilizamos un confirm para mostrar una ventana de confirmación (Aceptar/Cancelar)
let respuesta = confirm('Estás de acuerdo?'); //devuelve true o false

if (respuesta === true) {
    console.log('Bienvenido ' + user);
}else{
    console.log('No hay problema! nos vemos la próxima vez...');
}

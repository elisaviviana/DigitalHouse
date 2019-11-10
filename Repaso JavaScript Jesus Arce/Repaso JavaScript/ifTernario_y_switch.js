let numero = 20;
let semaforo = 'verde';

// IF TERNARIO
// Sintaxis:  <condicion> ? <expresión verdadera> : <expresión falsa> ;
// Nota: es obligatorio poner código en la expresión verdadera y falsa.
numero > 10 ? true : ''; // si numero es > a 10 devuelvo true, si no devuelvo una cadena vacía. Este if no tiene mucho sentido...
let resultado = numero > 10 ? 'El numero es mayor que 20' : 'El número es menor que 20'; // Este tiene más sentido. Conviene guardar el resultado en una variable
console.log(resultado);

// SWITCH
switch (semaforo) {
    case 'verde':
        console.log('Puedo cruzar');
        break;
    case 'amarillo':
        console.log('Precaución!');
        break;
    case 'rojo':
        console.log('No puedo cruzar');
        break;
    default:
        console.log('El semáforo no funciona');
        break;
}

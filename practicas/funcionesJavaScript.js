/*declaradas y expresadas, en principio son iguales
DECLARADAS
antes de que cualquier otro codigo sea ejecutado
EXPRESADA
Se carga unicamente cuando el interprete alcanza la linea de codigo donde se encuentra la Funcion

*/
function elDoble(unNumero){
  return unNumero *2;
}
let resultado= elDoble(6);//12
console.log(resultado);


/*EXPRESADA*/
let sumar = function( numeroA, numeroB) {
  return  numeroA + numeroB

}

console.log(sumar(2,9));

/*Declarada*/

function restar(numeroA, numeroB){
  return numeroA - numeroB;
}
console.log(restar(10,3));

/*alcance de las variables - scope*/
let mensaje = 'hola';
console.log(mensaje);
function saludar(){
  return mensaje;
}
console.log(saludar());

///////////
let mensaje1 = 'hola';

function saludar1(){
  let mensaje1 = 'chau';
  return mensaje1;
}
console.log(mensaje1);
console.log(saludar1());

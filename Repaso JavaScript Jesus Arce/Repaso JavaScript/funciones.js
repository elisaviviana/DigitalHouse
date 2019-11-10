console.log( restar() );
console.log( restar(1,2) );

// Función EXPRESADA
// Se carga cuando el compilador alcanza la línea de su declaración
let sumar = function(a=5, b=5){
    return a + b;
}
// Si intento invocar la función antes de su declaración, obtendré un error.
console.log( sumar() );
console.log( sumar(1, 2) );


// Función DECLARADA
// Tiene de particularidad que se carga al inicio del script
function restar(a=10,b=5){ // ¡Es por ello que puedo invocarla al inicio de mi código!
    return a - b;
}



/* CALLBACKS
   Es una función que se pasa como parámetro de otra función y se ejecuta primero.
   Los Callbacks son un modo de asegurarse de que cierto código no se ejecuta
   hasta que otro código haya terminado de ejecutarse. */
// En el siguiente ejemplo usamos una función callback anónima
function Funcion1(miFuncionCallback) {
    miFuncionCallback(); // invocamos al callback
    console.log('Ejecutando la Función 1.');
}

Funcion1(function(){ // llamamos a la función 1 pasándole un callback como parámetro
    console.log('Ejecutando el CallBack.');
});

// Pero no siempre los callbacks tienen que ser funciones anónimas
function FuncionCallback() {
    console.log('Ejecutando el CallBack.');
}
function Funcion1(miFuncionCallback) {
    console.log('Ejecutando la Función 1.');
    miFuncionCallback(); // invocamos al callback (en este caso decidimos ejecutarlo luego de la Función 1)
}
Funcion1(FuncionCallback); // Ejecutamos

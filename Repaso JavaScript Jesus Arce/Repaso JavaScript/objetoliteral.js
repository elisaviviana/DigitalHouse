//objeto literal
let curso = {
    alumnos: 32, //atributo
    docentes: 'Nacho y Javi', //atributo
    horario: '8.30 a 12 hs', //atributo

    notificaciones: function(){ //metodo
        return 'El horario de tu comisión es: ' + this.horario;
    }
}
console.log(curso); //mostramos el objeto literal
console.log(curso.notificaciones()); // invocamos al método
console.log('---------------------------------');

/* Si queremos utilizar la estructura del objeto literal (como un prototipo) para crear nuevos objetos, podemos hacerlo de la siguiente manera: */
let miCurso1 = Object.create(curso); //creamos un objeto de tipo curso
miCurso1.alumnos = 33; //asignación
miCurso1.docentes = "Martín y Elisa"; //asignación
miCurso1.horario = "9 a 12 hs"; //asignación
console.log(miCurso1); // mostramos el objeto (atención: no se muestran los métodos)
console.log(miCurso1.notificaciones()); // invocamos al método
console.log('*****************************************');

// Otra forma de crear objetos literales, es utilizar una función constructora (define una estructura similar a una clase)
// Nota: Javascript es un lenguaje orientado a prototipos (originalmente no está construido con clases).
function Curso(alumnos=25,docentes,horario){
        this.alumnos = alumnos;
        this.docentes = docentes;
        this.horario = horario;
        this.notificaciones = function(){
            return 'El horario de tu comisión es: ' + this.horario;
        }
}
// Creamos el objeto de tipo Curso
let miCurso2 = new Curso(35,'Jesús y Facundo','10 a 11 hs.')
console.log(miCurso2); // mostramos el objeto
console.log(miCurso2.notificaciones()); // invocamos el método
console.log('-------------------------------------------');

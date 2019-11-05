let positivo = Number(20);
console.log(positivo);
let negativo = Number(-2);
console.log(negativo);
let decimal = Number (23.6);
console.log(decimal);



const nan = parseInt(3.6985);
console.log(nan);
const correcto = parseInt(25.66);
console.log(correcto);
//Objetos Literales
let mipais = {
  nombre: 'Argentina',
  poblacion: 25845,
  capital: 'Buenos Aires',
  decirNacionaliad:function() {
    return "yo nacie en Argentina"
  },
  decirNacionaliad2:function() {
    return "yo nacie ennnn "+ this.nombre;
  }
}
console.log('La capital de '+mipais.nombre+' es '+mipais.capital);

 let curso = {
   cantidadAlumnos: 20,
   docentes: "Nacho y yo",
   horario: "8 - 13"
}
console.log("La cantidad de alumnos es "+curso.cantidadAlumnos);

console.log(mipais.decirNacionaliad2());


//Funcion contructora
function Curso(cantidad,docentes,horario){
  this.cantidad = cantidad,
  this.docentes = docentes,
  this.horario = horario
}

let curso1 = new Curso(23,"Elisa", "13hs a 18hs");
let cursoJava = new Curso(26,"Vos", "15hs a 20hs");
console.log(curso1);
console.log(cursoJava);

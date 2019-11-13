window.onload = function(){
//Funciona, pero no con las funciones del curso.. use Object.values(objeto)
// para convertir un objeto en un array
// var estudiante = {nombre:""
// , curso:"computacion"
// , dni:45678654
// , email:"correo@dominio.com"
// , fromObjectToArray:function(objeto){
//     nuevoArray= Object.values(objeto);
//       return console.log(nuevoArray);
//     }
// }
// var estudiante1 = {nombre:"elisa"
// , curso:"ingles"
// , dni:98677777
// }
// estudiante.fromObjectToArray(estudiante1);

//Funciona con forin
let estudiante = {nombre:""
, curso:"computacion"
, dni:45678654
, email:"correo@dominio.com"
}

let estudiante1 = {nombre:"elisa"
, curso:"ingles"
, dni:98677777
}

function fromObjectToArray(objeto){
  var array = [];
  for (var dato in objeto) {
     array.push(objeto[dato]) ;
  }
  return console.log(array);
}

fromObjectToArray(estudiante);


function cambiarColorDeFondoDelBody(color){
if(color != "green" && color != '#0f0' && color != '#00ff00'){
  var bodycolor = document.querySelector("body");
  bodycolor.style.background = color;
  return console.log(true);
}else{
  return console.log(false);
}

}

cambiarColorDeFondoDelBody("white");


var parrafos = document.querySelectorAll("p");
var parrafoimpar=0;

for (var i = 1; i < parrafos.length; i++) {
  if(i%2){
  parrafos[i].style.color = "red";

  parrafos[i].style.align="center";
}else{
  parrafoimpar = parrafoimpar ++
}
}



}

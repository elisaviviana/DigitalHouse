//
//
// let texto = "hola java";
// let array1 = [2,4,8,7];
// let booleana = true;
//
// console.log(texto);
// console.log(array1);
// console.log(booleana);
//
//
//
// function impares(hasta){
// let impares = [];
// let i=0;
// for(let v = 1; v <= hasta; v++){
//     if(v%2!=0){
//       impares[i] = v;
//       i++
//     }
// }
// return impares;
// }
// function muestraimpares(hasta){
//   let numero = [];
//   numero= impares(hasta);
//     for(i = 0; numero.length;i++){
//       console.log(numero[i] + "/");
//     }
// }
//
// console.log(muestraimpares(20));

// console.log(impares(10));

var misDatos = {nombre: "Elisa"
,apellido:"Staiti"
, dni:"8888888888"
, comidaFavorita:"Pastas"
,edad:"42"
,saludar: function(){
  return "Hola mi nombre es "+ this.nombre+" "+ this.apellido+ " y tengo " + this.edad + " años";
}
};

for (var dato in misDatos) {
  console.log(dato, misDatos[dato]);
}


console.log(misDatos.saludar());




function SuperHeroe (nombre, equipo, poderes, energia){
  this.nombre = nombre;
  this.equipo = equipo;
  this.poderes = poderes;
  this.energia = energia;
  this.getPoder = function(elegirpoder){
    return poderes[elegirpoder];
  }
  this.descontarenergi = function(cantidad){
    return energia - cantidad;
  }
}

let ironMan = new SuperHeroe("Iron Man","Avengers", ["Volar","Lanzar misiles","Disparar Laser"],100);
console.log(ironMan);
let elegirpoder1 = Math.floor(Math.random()+ Math.random()+ Math.random());

console.log(ironMan.getPoder(elegirpoder1));
let Hulk = new SuperHeroe("Hulk","Avengers", ["Aplastar","Gritar","Golpear"],100);
console.log(Hulk);
 elegirpoder1 = Math.floor(Math.random()+ Math.random()+ Math.random());
console.log(Hulk.getPoder(elegirpoder1));


console.log(Math.random());
console.log(Math.floor(35.5));

console.log(Math.floor(Math.random()+ Math.random()+ Math.random()));

var canciones = [
  {
    id: 1,
    nombre: "Manuelita",
    puntaje: 8.5
  },
  {
    id: 2,
    nombre: "La reina batata",
    puntaje: 7.8
  }
]


var titulos = canciones.map(function (elemento) {
  return elemento.nombre;
})
console.log(titulos);

var lasMejores = canciones.filter(function(elemento){
        return elemento.puntaje > 8;
})

console.log(lasMejores);

var reina = canciones.find(function(elemento){
  return elemento.nombre ==='La reina batata'
})
console.log(reina);

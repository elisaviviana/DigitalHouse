// var peliculas = prompt("Por favor, ingresar las peliculas favoritas separadas por coma")  ;
//   var arrayPeli = peliculas.split(",");
//   var elul = document.querySelector("ul");
//   var nuevoli = document.createElement("li");
//   var textoli = document.createTextElement("arrayPeli");
//     nuevoli.append("textoli");
//     elul.append(nuevoli);
//
// console.log(arrayPeli);



var peliculas = prompt("Por favor, ingresar las peliculas favoritas separadas por coma")  ;
  var arrayPeli = peliculas.split(",");
  var elul = document.querySelector("ul");
  var nuevoli = document.createElement("li");
  for(var peli of arrayPeli){
  var textoli = document.createTextElement(peli);
  nuevoli.append = textoli;
   // nuevoli.innerHTML = nuevoli.innerHTML + '<li>'+ peli+ '</li>';
   // console.log(nuevoli.innerHTML);
  }
  elul.append(textoli);

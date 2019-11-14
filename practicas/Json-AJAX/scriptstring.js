function stringBomb(unTexto) {
  var textoseparado = unTexto.split(',');
  var textotrim = [];

for (var i = 0; i < textoseparado.length; i++) {
  if(textoseparado[i].length > 3 && textoseparado[i].indexOf("a")>0){
   textotrim.push(textoseparado[i].trim().replace("ñ","n"));
   var texto=textotrim.toString();
  }
}
return texto;
console.log(texto);

}
  console.log(texto);
stringBomb("Dario,Alejandro, Javier , Carolina, Cañila , Santiago");

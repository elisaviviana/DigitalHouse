function cambiarColor(autoJson, colorNuevo) {
  var objetoAuto = JSON.parse(autoJson);

  objetoAuto.color = colorNuevo;

  return(JSON.stringify(objetoAuto));
  console.log(JSON.stringify(objetoAuto));
}

cambiarColor('{"marca":"fiat","modelo":"1985","color":"green"}',"red")

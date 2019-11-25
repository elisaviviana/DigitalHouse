//for in  --- para objetos
let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}
for  (var propiedad in bart){
    console.log(bart[propiedad]);
}


//for of - string y arrays
let frase = "Nos encanta hacer la vertical";

for(var elemento of frase.split(" ")){
    console.log(elemento);
}
//los devuelte en vertical
for(var elemento of frase){
    console.log(elemento);
}

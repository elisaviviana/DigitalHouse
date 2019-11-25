for (let vuelta = 1; vuelta <= 5; vuelta++){
console.log("Dando la vuelta " + vuelta);
};

loro('mi vecina');
function loro(texto){
    for(let v = 1; v <= 5; v++){
        console.log(texto);
    }
}


noParesDeContarImparesHasta(50);

function noParesDeContarImparesHasta(numero){
    let impar =0;
    for(let v = 0; v <= numero; v++){
        if(v%2!=0){
        console.log(v);
        impar = impar +1;
        }
    }
console.log(impar);
}
console.log(noParesDeContarImparesHastaarray(50));
function noParesDeContarImparesHastaarray(numero){
    let array =[];
    for(let v = 0; v <= numero; v++){
        if(v % 2 != 0){
            array.push(v);
        }
    }
return array;
}

window.onload= function(){


  // var boton = document.querySelector("button");
  // var h1 = document.querySelector("h1");
  // boton.onclick = function(){
  //   var color = prompt("dime un color");
  //   h1.style.color = color;
  // }
  //
  // boton.onmouseover = function(){
  //   console.log("");
  // }



var boton = document.querySelector("h1");
  boton.mouseover = function(){
    let p = document.querySelector("p");
    p.style.display = "block";
    console.log("toma el evento mouseover");

  }
  boton.mouseout = function(){
    let p = document.querySelector("p");
    p.style.display = none;
  }

}

// JAVASCRIPT
numero_secreto = Math.random() * 100; //generamos un numero random del 1 al 100
numero_secreto = parseInt(numero_secreto); //le quitamos la parte decimal
console.log(numero_secreto);
mensaje = "Ingresa un numero e intenta adivinar el número secteto";
while(true)
{
	numero_del_usuario = prompt(mensaje,"0"); //mostramos un mensaje al usuario
	numero_del_usuario = parseInt(numero_del_usuario); //tratamos de convertirlo a entero
	if (numero_del_usuario === numero_secreto) { //si el numero ingresado es el numero secreto
		alert("Adivinaste el número secreto!!!"); //tenemos un ganador!
		break; //exit
	}else if(numero_del_usuario === 0){ //si el numero ingresado es cero, salimos del programa
		break;
	}else if(numero_del_usuario > numero_secreto){
		mensaje = "El numero ingresado es mayor al numero mágico";
	}else if(numero_del_usuario < numero_secreto){
		mensaje = "El numero ingresado es menor al numero mágico";
	}else{ //si el valor ingresado es inválido
		mensaje = "Has ingresado un número inválido. Ingresa un número entero del 1 al 100."
	}
}

// HTML
//<p>Adivina el numero secreto! </p>
//<p>Ingresa 0 para salir del programa</p>

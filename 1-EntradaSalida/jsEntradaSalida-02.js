/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/

function mostrar()

{   //Declaro o creo variable 
	var nombreIngresado; 

	//Asigno o cargo la variable
	nombreIngresado = prompt("Ingrese su nombre", "Su nombre");

	//Muestro el valor de la variable mediante el alert
	alert("Su nombre es: "+nombreIngresado);
	
}


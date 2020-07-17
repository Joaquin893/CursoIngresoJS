/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/

function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;

	nombreIngresado=txtIdNombre.value;
	edadIngresada=txtIdEdad.value;

	//testing 
	alert("Usted se llama "+nombreIngresado+" y tiene "+edadIngresada+" años");

	/*
	alert("Usted se llama "nombreIngresada");
	alert("y tiene "+edadIngresado+" años");
	*/

	//alert("Usted se llama jose y tiene 66 años");

}


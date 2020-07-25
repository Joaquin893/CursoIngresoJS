function mostrar()
{
	var edadIngresada;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	//Al ingresar una edad que sea igual a 15, mostrar el mensaje "Niña bonita".

	if( edadIngresada == 15 )
	{
		alert("Niña bonita");
	}

} //FIN DE LA FUNCIÓN
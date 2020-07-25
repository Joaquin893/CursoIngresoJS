function mostrar()
{
	var Edad;

	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);

	/*
	Al ingresar una edad debemos informar si la persona es adolescente,
	edad entre 13 y 17 años (inclusive) .
	*/
	
	if ( Edad >= 13 )
	{
		if ( Edad <= 17 )
		{
			alert("Es adolescente");
		}
			
	}

}//FIN DE LA FUNCIÓN



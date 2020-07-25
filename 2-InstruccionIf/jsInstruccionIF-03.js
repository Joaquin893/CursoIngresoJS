function mostrar()
{
	var Edad;

	Edad= txtIdEdad.value;
	Edad= parseInt(Edad);

	/*
	Al ingresar una edad debemos informar si la persona es mayor de edad,
	sino informar que es un menor de edad.
	*/

	if(Edad > 17)
	{
		alert("Es mayor de edad");
	}
	
	if(Edad < 18)
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN


	/*
	EN ESTE CASO DA EL MIMSO RESULTADO PERO AHORA EN VEZ DE OTRO "IF" LE PUSIMOS EL "ELSE"
	SABIENDO QUE LA CONDICIÓN DEL "IF" ES QUE SEA MAYOR DE 18 O EL MISMO 18 , EL "ELSE", POR 
	DESCARTE ES LO CONTRARIO, OSEA MENOR 18.
	*/
/*
function mostrar()
{
	var Edad;

	Edad= txtIdEdad.value;
	Edad= parseInt(Edad);
	
	if(Edad > 17)
	{
		alert("Es mayor de edad");
	}

	else
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCION
*/
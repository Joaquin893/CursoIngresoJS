function mostrar()
{
	var Edad;

	Edad = txtIdEdad.value;
	Edad = parseInt(Edad);

	//Al ingresar una edad debemos informar solo si la persona es mayor de edad

	/*
	Pregunta, si la variable "EDAD", es mayor a 17.

	Si es VERDAERO (true), se mostrara el mensaje del "ALERT"

	Si es FALSO (false), no mostrara nada
	*/

	if(Edad > 17) // Pregunta, si la variable "EDAD", es mayor a 17
	{
		alert("La persona es mayor de edad");
	}
	
	
}//FIN DE LA FUNCIÓN
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*
	
	Supongamos que la variable "EDAD", vale "15", entonces la variable que es 15 le va a preguntar 
	 si es menor que 13 por lo tanto es "FALSE".
	 Ahora la variable "EDAD" que vale 15 le va a preguntar si es mayor que 17 por lo tanto es "FALSE".
	 
	 Entonces si (edad < 13) = FALSE y (edad > 17) = FALSE

	 Y el operador lógico "||" (OR), su resultado es true si alguno de los dos operandos es "TRUE"

	 Por lo tanto FALSE y FALSE = FALSE (Porque ninguno de los dos operandos es "TRUE").

	 Entonces va a acudir al "ALERT", y va a decir que "NO ES ADOLESCENTE", ya que con el operador
	 "||", lo niega diciendo que es FALSO.

	*/

	if ( edad < 13 || edad > 17 )
	{
		
		alert("No es adolescente");
			
	}

}//FIN DE LA FUNCIÓN
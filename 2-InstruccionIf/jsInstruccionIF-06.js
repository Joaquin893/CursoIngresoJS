 function mostrar()
{
  
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*
	Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
	 o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
	*/

	if( edad >= 18) 
	{
		alert("Es mayor de edad");

	}

	if( edad >= 13 && edad <= 17)
	{
		alert("Es adolescente");
	}

	if( edad <= 12)
	{
		alert("Es un niño");
	}


}//FIN DE LA FUNCIÓN



/*

Esta es otra manera de hacer ya que hacemos un IF/ELSE y dentro del else ponemos otro IF/ELSE.
Con el "ELSE" lo que hacemos es ahorranos una condición osea un "IF" ya que por ej:
Si no es menor de edad, por defecto lo que hace el "ELSE" seria mayor de edad, ya que
por descarte es la condició que queda.

*/

/*

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if( edad <= 12 )
	{
		alert("Es un niño");

	}
	else
	{
		if( edad >= 13 && edad <= 17 )
		{
			alert("Es adolescente");
		}
		else
		{

			alert("Es mayor de edad");
			
		}
	}


}//FIN DE LA FUNCIÓN

*/

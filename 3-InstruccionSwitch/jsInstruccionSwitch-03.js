/*
al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
	var mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes tiene mas de 29 dias");
			break;
	    case "Enero":
		case "Marzo":	
		case "Abril":	
		case "Mayo":	
		case "Junio":	
		case "Julio":	
		case "Agosto":	
		case "Septiembre":	
		case "Octubre":	
		case "Noviembre":	
		case "Diciembre":
			alert("Este mes tiene 30 dias o mas");
			break;

	}

}//FIN DE LA FUNCIÓN


/*
EN ESTE CASO DA EL MISMO RESULTADO NADA MAS QUE EN VEZ DE ESCRIBIR TODO LOS MESES QUE QUEDAN
POR DEFAULT USAMOS EL "DEFAULT:" QUE ACTUARIA COMO EL "ELSE" EN EL "IF", PERO ESTE ACTUA EN EL 
SWITCH
IF/ELSE
SWITCH/DEFAULT
*/

/*

function mostrar()
{
	var mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Febrero":
			alert("Este mes tiene mas de 29 dias");
			break;
	    default: // Se usa para lo que queda por defecto, seria como un "else" en un "if", aca es "default" en un "switch".
			alert("Este mes tiene 30 dias o mas");
			break;

	}

}//FIN DE LA FUNCIÓN

*/

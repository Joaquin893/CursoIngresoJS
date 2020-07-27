/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/

function mostrar()
{
	var mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
	    case "Febrero": // "FEBRERO", es el unico mes que tiene 28 dias
			alert("Tiene 28 dias");
			break;		
		
		// Estos meses tienen 30 dias 	
		case "Abril":	
		case "Junio":	
		case "Septiembre":	
		case "Noviembre":
			alert("Tiene 30 dias");
			break;
			
		
		default: // Y por default quedan estos meses que tienen 31 dias
			alert("Tiene 31 dias");
			break;
	}	

}//FIN DE LA FUNCIÓN

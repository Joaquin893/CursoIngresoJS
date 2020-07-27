/*
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	var mes;

	mes = document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case "Enero":
			alert("Que comiences bien el año");
			break;

		case "Marzo":
			alert("A clases !!!");
			break;

		case "Julio":
			alert("Se vienen las vacaciones !!!");
			break;

		case "Diciembre":
			alert("Felices fiestas !!!");
			break;
	}


}//FIN DE LA FUNCIÓN




// ESTA ES OTRA MANERA DE HACERLO, PERO LA MANERA MAS SIMPLES ES CON "SWITCH".

/*

function mostrar()
{
	var mes;

	mes = document.getElementById("txtIdMes").value;

	if (mes == "Enero"){
		alert("Que comiences bien el año");
	}
	else if (mes == "Marzo"){
		alert("A clases !!!");
	}
	else if (mes == "julio"){
		alert("Se vienen las vacaciones !!!");
	}
	else if (mes == "Diciembre"){
		alert("Felices fiestas !!!");
	}


}//FIN DE LA FUNCIÓN

*/

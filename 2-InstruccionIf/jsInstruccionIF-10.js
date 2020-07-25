/*
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var nota;

	nota = Math.round(Math.random() * 9 + 1);

	if( nota >= 9 )
	{
		alert("Excelente: Nota " + nota); // NOTAS IGUAL A 9 O 10
	}
	else if( nota < 4 )
		{
			alert("Vamos, la proxima se puede: Nota " + nota); // NOTAS MENORES 4
			
		}
		else
		{
			alert("Aprobo: Nota " + nota); // NOTAS MAYORES A 4
			
		}


	
}//FIN DE LA FUNCIÓN
/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var faren;
    var celC;
    faren=0;
    celC=0;
    temperatura=txtIdTemperatura.value;
    temperatura=parseInt(temperatura);
    faren= ((temperatura+32)*5)/9;
    alert ("La temperatura en Fahrenheit es: "+faren);

	
}

function CentigradosFahrenheit () 
{
    var temperatura;
    var faren;
    var celC;
    faren=0;
    celC=0;
    temperatura=txtIdTemperatura.value;
    temperatura=parseInt(temperatura);
    celC= ((temperatura-32)*5)/9;
    alert ("La temperatura en Celcius es: "+celC);
    
	
}

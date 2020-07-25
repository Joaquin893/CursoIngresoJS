/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/

function Sumar () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;

    precioUno= txtIdPrecioUno.value;
    precioUno= parseInt(precioUno);

    precioDos= txtIdPrecioDos.value;
    precioDos= parseInt(precioDos);

    precioTres= txtIdPrecioTres.value;
    precioTres= parseInt(precioTres);

    suma= precioUno + precioDos + precioTres;

    alert("El resultado de la suma es: "+suma);



    


	
}
function Promedio () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var promedioFinal;

    precioUno= txtIdPrecioUno.value;
    precioUno= parseInt(precioUno);

    precioDos= txtIdPrecioDos.value;
    precioDos= parseInt(precioDos);

    precioTres= txtIdPrecioTres.value;
    precioTres= parseInt(precioTres);

    promedioFinal= (precioUno+precioDos+precioTres)/3;

    alert("El resultado del promedio es: "+promedioFinal);


	
}
function PrecioFinal () 
{
    var precioUno;
    var precioDos;
    var precioTres;
    var suma;
    var precioConIva;
    var precioFinalConIva;

    precioUno= txtIdPrecioUno.value;
    precioUno= parseInt(precioUno);

    precioDos= txtIdPrecioDos.value;
    precioDos= parseInt(precioDos);

    precioTres= txtIdPrecioTres.value;
    precioTres= parseInt(precioTres);

    suma= precioUno + precioDos + precioTres;

    precioConIva= suma*21/100;

    precioFinalConIva= suma + precioConIva;

    alert("El precio final con el 21% de IVA es: "+precioFinalConIva);

	
}
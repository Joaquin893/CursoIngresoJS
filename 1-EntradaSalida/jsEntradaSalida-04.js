/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	var nombreIngresado; //declaracion de la variable

	nombreIngresado=prompt("Ingrese su nombre", "Su nombre");

     txtIdNombre.value = nombreIngresado;
}


/*Se pide un importe y un porcentaje descuento por prompt, y se muestra el importe con el descuento por alert con el mensaje " el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, gracias por su compra"*/

/*var importeIngresado;
var descuento;
var importeConAumento;

importeIngresado = txtIdImporte.value;
importeIngresado = parseInt(importeIngresado);

descuento = txtIdDescuento.value;

 prompt(" Importe y Porcentaje descuento" );


importeConAumento = importeIngresado*descuento;

alert("El importe es $ + " importeIngresado " el total de descuento es "descuento" y el precio final es " importeConAumento", gracias por su compra");
*/


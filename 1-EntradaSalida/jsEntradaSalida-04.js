/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/

function mostrar()
{
	//Declaro la variable
	var nombreIngresado; 

    //A la variable asignada, le ponemos el PROMPT
	nombreIngresado=prompt("Ingrese su nombre", "Su nombre");

    //En la caja de texto va a aparecer el nombre que el usuario puso en el PROMPT
     txtIdNombre.value = nombreIngresado;
}


/*Se pide un importe y un porcentaje descuento por prompt y se muestra el importe con el descuento 
por alert con el mensaje " el importe es $ xxxx el total de descuento es $xxx y el precio final 
es $xxx, gracias por su compra"
*/

{
    var importeIngresado;
    var descuento;
    var importeConAumento;

    importeIngresado = prompt("Ingrese importe");
    importeIngresado =
    

    descuento = importeIngresado*14/100;

    prompt(" Importe y Porcentaje descuento" );


    importeConAumento = importeIngresado*descuento;

    alert("El importe es $ + " importeIngresado " el total de descuento es "descuento" y el precio final es " importeConAumento", gracias por su compra");
}

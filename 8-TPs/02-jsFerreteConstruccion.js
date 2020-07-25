/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var tomaLargo;
    var tomaAncho;
    var Perimetro;
    var calculoAlambre;

    tomaLargo=txtIdLargo.value;
    tomaLargo=parseInt(tomaLargo);

    tomaAncho=txtIdAncho.value;
    tomaAncho=parseInt(tomaAncho);
    
    Perimetro=(tomaLargo+tomaAncho)*2;

    calculoAlambre=tomaRadio*3;

    txtIdRadio.value=tomaRadio;

    alert("La cantidad de alambre a comprar son : "+calculoAlambre+" metros");

}
function Circulo () 
{
    var tomaRadio;
    var calculoAlambre;
    
    tomaRadio=txtIdRadio.value;
    tomaRadio=parseInt(tomaRadio);

    calculoAlambre=((tomaRadio*2)*3.14)*3;

    alert("Para darle 3 vueltas de alambre a un circulo se necesita "+calculoAlambre+ " metros de alambre");
	
	
}
function Materiales () 
{
    var tomaLargo;
    var tomaAncho;
    var calculaCemento;
    var calculaCal;

    calculaCal=3;
    calculaCemento=2;

    tomaLargo=txtIdLargo.value;
    tomaLargo=parseInt(tomaLargo);

    tomaAncho=txtIdAncho.value;
    tomaAncho=parseInt(tomaAncho);

    calculaCal=(tomaLargo+tomaAncho)*3;
    calculaCemento=(tomaLargo+tomaAncho)*2;
    alert("Las bolsas que necesitamos para cubir los "+tomaAncho+" de ancho "+ "+ el largo del terreno "+ tomaLargo+ "se necesitan "+calculaCemento+" bolsas de cemento y "+calculaCal +" bolsas de cal ");
	
	
}
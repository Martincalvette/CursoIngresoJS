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

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	suma= parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);

	alert(suma);


	
}
function Promedio () 
{
	var precioUno;	
	var precioDos;
	var precioTres;
	var promedioUno;

	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	promedioUno= parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);

	promedioDos= promedioUno / 3;

	alert(promedioDos);




}
function PrecioFinal () 
{
	var precioUno;	
	var precioDos;
	var precioTres;
	var promedioUno;
	var precioFinal;


	precioUno=document.getElementById('PrecioUno').value;
	precioDos=document.getElementById('PrecioDos').value;
	precioTres=document.getElementById('PrecioTres').value;

	promedioUno= parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);

	precioFinal= promedioUno * 1.21 ;

	alert(precioFinal);
	
}
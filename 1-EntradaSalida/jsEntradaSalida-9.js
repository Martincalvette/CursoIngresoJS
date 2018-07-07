/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;

	sueldo=document.getElementById('sueldo').value;
	resultado= document.getElementById('resultado').value;
	//document.getElementById('resultado').value = resultado;
	resultado=parseInt(sueldo) * 1.10;

	alert (resultado);
	
}

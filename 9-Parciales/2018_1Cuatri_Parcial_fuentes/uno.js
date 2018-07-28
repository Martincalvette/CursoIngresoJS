
function mostrar()
{
	var largo;
	var ancho;
	var anchoDos;
	var largoDos;
	var perimetro;

		ancho=prompt(" ingrese ancho ");
		ancho=parseInt(ancho);
		largo=prompt(" ingrese largo ");
		largo=parseInt(largo);

		largoDos= largo * 2;
		anchoDos= ancho * 2;

		perimetro= parseInt(largoDos) + parseInt(anchoDos);

		alert ( "el perimetro es " + perimetro);
}

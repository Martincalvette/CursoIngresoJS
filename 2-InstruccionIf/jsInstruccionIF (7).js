function mostrar()
{
//tomo la edad  
	var estadoCivil;
	var edad;
	var soltero;
		
		edad=document.getElementById('edad').value;
		estadoCivil=document.getElementById('estadoCivil').value;

		//alert(estadoCivil);  es para testear que devuelve la ventana de seleccion

		if (edad < 18 && estadoCivil != "Soltero") {

			alert("Es muy pequeño para NO ser soltero.")
		}
//13/-07 no pude
//24/07 el S

}//FIN DE LA FUNCIÓN
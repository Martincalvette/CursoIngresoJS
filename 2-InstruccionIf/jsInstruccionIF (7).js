function mostrar()
{
//tomo la edad  
	var estadoCivil;
	var edad;
	var soltero;
		
		edad=document.getElementById('edad').value;
		estadoCivil=document.getElementById('estadoCivil').value;

		//alert(estadoCivil);  es para testear que devuelve la ventana de seleccion

		if ( edad <17 && estadoCivil != soltero); 
		{

			alert (" Es muy pequeño para NO ser soltero");

		}

//13/-07 no pude

}//FIN DE LA FUNCIÓN
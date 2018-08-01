function mostrar()
{

	var respuesta;
	var contador;
	var acumulador;
	var promedio;
	var suma;
	var numero;


	//respuesta= "si";
	contador= 0;
	acumulador= 0;

		while (respuesta!= "no") 
		{
			numero = prompt (" Ingrese un numero ")
			numero =parseInt(numero)
			contador++;
			acumulador =acumulador + numero;
			acumulador=parseInt(acumulador)
		
			respuesta= prompt ("Quiere seguir? ")
		}
	promedio = acumulador / contador;
	suma = acumulador;

	document.getElementById('suma').value= suma;
	document.getElementById('promedio').value= promedio;

	 //FUNCIONA
	

	

/*
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
*/

}//FIN DE LA FUNCIÓN
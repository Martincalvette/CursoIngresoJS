function mostrar()
{
	var numero;
	var suma;
	var promedio;
	var contador;
	var acumulador;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numero=prompt("Ingrese un numero")
		numero=parseInt(numero)
		contador++;
		acumulador = acumulador + numero;
		acumulador=parseInt(acumulador)
	}
		promedio = acumulador / contador;
		document.getElementById('suma').value= acumulador;
		document.getElementById('promedio').value=promedio

/*var contador=0;
	var acumulador=0;
	var suma;

	while (contador<5)
	{
		prompt ("ingrese un numero");
		contador ++;
	}
		contador=parseInt (contador);

		acumulador ==  contador  

		suma =
*/


//*NO.

}//FIN DE LA FUNCIÓN
function mostrar()
{
	var numeroIngresado;
	var numerosAnteriores;
	var contadorDeDivisiores;
	var numerosRecorridos;



	numeroIngresado=prompt("Ingrese un numero")
	numeroIngresado=parseInt(numeroIngresado)


	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--)
	{
		contadorDeDivisiores=0;
		for (numerosAnteriores=numerosRecorridos-1;numerosAnteriores>1;numerosAnteriores--)
		{
			if(numeroIngresado%numerosAnteriores==0)
			{
				contadorDeDivisiores++;
			}
		}
			if(contadorDeDivisiores==0)
			{
				console.log(numerosRecorridos + " es primo");
			}
			else 
			{
				console.log(numeroIngresado + " no es un numero primo");
			}
		}

	
}//FIN DE LA FUNCIÓN


/*contadorDeDivisiores=0;
	for (numerosAnteriores=numeroIngresado-1;numerosAnteriores>1;numerosAnteriores--)
	{
		if(numeroIngresado%numerosAnteriores==0)
		{
			contadorDeDivisiores++;
		}
	}
		if(contadorDeDivisiores==0)
		{
			console.log(numeroIngresado+ " es primo");
		}
		else 
		{
			console.log(numeroIngresado + " no es un numero primo");
		}*/
function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contador;
	var acumulador;
	var promedio;
	var varonesMayoresNotaMayor6;
	var notasTotales;
	


	contador=0;
	acumulador=0;

	while(contador<5)
	{
		nota=prompt("Cual es la nota?")
			while( nota!=0 && nota>10)
			{
				nota=prompt("Ingrese un numero entre 0 y 10")
			}

			acumulador=acumulador+nota;

		edad=prompt("Ingrese la edad")

		sexo=prompt("Ingrese el sexo")
			while (sexo!="F" && sexo!="f" && sexo!="M" && sexo!="m")
			{
				sexo=prompt("Ingrese un sexo valido")
			}
			
		contador++;
	}

	promedio= acumulador / contador;

	alert (promedio)


}
 //NO FUNCIONA
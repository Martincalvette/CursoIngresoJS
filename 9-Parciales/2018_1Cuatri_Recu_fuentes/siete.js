function mostrar()
{
	var nota;
	var edad;
	var sexo;
	var contador;
	var acumulador;
	var promedio;
	var varonesMayoresNotaMayor6;
	


	contador=0;
	acumulador=0;

	while(contador<5)
	{
		nota=prompt("Cual es la nota?")
			while(nota<10 && nota>0)
			{
				nota=prompt("Ingrese un numero entre 0 y 10")
			}
		edad=prompt("Ingrese la edad")

		sexo=prompt("Ingrese el sexo")
			while (sexo!="F" || sexo!="m")
			{
				sexo=prompt("Ingrese un sexo valido")
			}
	}

}

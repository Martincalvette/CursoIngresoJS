/*maria 	f	15
  jose		m 	33
  fer 		f 	25*/

function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador;
	var acumulador;




	nombre=prompt("Cual es su nombre?");
	sexo=prompt("Indique F o M");
	edad=prompt("Cual es su edad?");
	contador=0;
	acumulador=0;

	while(contador<3)
	{
		nombre=prompt("Cual es su nombre?");
		
		sexo=prompt("Indique F o M");
			
			while(sexo!= "f"&& sexo!="m")
			{
				sexo=prompt(" Error, indique F o M")
			}
		edad=prompt("Cual es su edad?");
		edad=parseint(edad);
			
			while(isNaN(edad)|| edad>100 || edad<0)
			{
				edad=prompt("Cual es su edad?");
				edad=parseint(edad);
			}

			contador++;
	}

	if (sexo=="M") 
	{

	}

	if (



	/* datos tomados*/




}

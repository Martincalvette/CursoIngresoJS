function mostrar()
{
	var peso;
	var temperatura;
	var nombre;
	var contador;
	var acumulador;
	var acumuladorT;
	var acumuladorN;
	var acumuladorP;
	var pesoMax;
	var pesoMin;
	var bajoCero;
	var promedioPeso;
	var animalMasP;
	var temperaturaMasP;

	

	contador =0;
	acumulador=0;
	acumuladorT=0;
	acumuladorN=0;
	acumuladorP=0;
	pesoMax=99999;
	pesoMin=1;
	bajoCero= 0;
	promedioPeso=parseInt(promedioPeso)
	animalMasP=0;
	temperaturaMasP=0;


	while (contador<5)
	{
		nombre= prompt( "Ingrese nombre ")
		peso= prompt( "Ingrese peso")
		peso=parseInt(peso)
		temperatura= prompt ("Ingrese temeratura")
		temperatura=parseInt(temperatura)
				
		
				
	if (temperatura %2 ==0) 
		{
			acumuladorT++;
			//alert (acumuladorT)
		}
	if (peso>acumuladorP) 
		{
			acumuladorP=peso;
			nombre=animalMasP;
			temperatura=temperaturaMasP;
		}
	if (temperatura<0)	
		{
			bajoCero ++;
		}

		contador++;
		acumulador++;
		

		promedioPeso=contador * peso /acumulador;
		
	}
		promedioPeso=contador * peso /acumulador;

		alert (promedioPeso)


			alert("La cantidad de animales bajo cero es " +bajoCero)
			alert ("El animal mas pesado es" + animalMasP + " y vive en una temperatura de " + temperaturaMasP)
			alert (" la cantidad de temperaturas impares es " +acumuladorT)


}

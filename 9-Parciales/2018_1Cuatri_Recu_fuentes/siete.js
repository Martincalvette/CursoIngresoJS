/*ejercitacion de como armar una lista de numeros random y seleccionar cual sale mas o menos veces (case 7)*/

function mostrar()
{
	var contador;
	var numeroSorteado;
	var contador1;
	var contador2;
	var contador3;
	var contador4;
	var contador5;
	var contador6;
	var contador7;
	var contador8;
	var contador9;
	var contador10;
	var sumaDeContadores;

	contador1=0;
	contador2=0;
	contador3=0;
	contador4=0;
	contador5=0;
	contador6=0;
	contador7=0;
	contador8=0;
	contador9=0;
	contador10=0;
	sumaDeContadores=0;
	

	for(contador=0;contador<100000;contador++)
		{
			numeroSorteado=Math.floor(Math.random() *10) +1;
			console.log(numeroSorteado);
			switch(numeroSorteado)
			{
				case 1:
					contador1++;
					break;
				case 2:
					contador2++;
					break;

				case 3:
					contador3++;
					break;
				case 4:
					contador4++;
					break;
				case 5:
					contador5++;
					break;
				case 6:
					contador6++;
					break;										
				case 7:
					if( contador7/contador *100 > 7)
					{
						contador7++;
					}else
						break;										
				case 8:
					contador8++;
					break;		
				case 9:
					contador9++;
					break;		
				case 10:
					contador10++;
					break;	

			}//fin switch
			
			sumaDeContadores = contador1 +contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;

		}//fin for

		document.write("<br> 1:" + (contador1/contador) *100 + "%");
		document.write("suma de contadores" + sumaDeContadores );
		document.write("<br> 2:" + (contador2/contador) *100 +"%");
		document.write("<br> 3:" + (contador3/contador) *100 + "%");
		document.write("<br> 4:" + (contador4/contador) *100 +"%");
		document.write("<br> 5:" + (contador5/contador) *100 + "%");
		document.write("<br> 6:" + (contador6/contador) *100 +"%");
		document.write("<br> 7:" + (contador7/contador) *100 + "%");
		document.write("<br> 8:" + (contador8/contador) *100 + "%");
		document.write("<br> 9:" + (contador9/contador) *100 +"%");
		document.write("<br> 10:" + (contador10/contador) *100 +"%");
}

/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;
	

		valorA=document.getElementById('elNombre').value;
		valorB=document.getElementById('laEdad').value;

		alert(" Usted se llama " + valorA + " y tiene "  + valorB +" años ");
 
}


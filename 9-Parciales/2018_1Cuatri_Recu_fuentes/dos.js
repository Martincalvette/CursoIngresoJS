/*TOMAR LOS DATOS DE LOS CUADROS DE TEXTO Y FORMAR LA FRASE "YO SOY XXXXX VIVO EN LA LOCALIDAD DE XXXX Y ESTUDIO EN LA UTN" */

function mostrar()
{
  var nombre;
  var localidad;
  
  	nombre=document.getElementById('elNombre').value;
  	localidad=document.getElementById('laLocalidad').value;
  	
  	alert (" Yo soy " + nombre +  "  vivo en la localidad de "  + localidad + " y estudio en la UTN");
}

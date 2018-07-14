function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

	
//alert (mesDelAño);
	
switch(mesDelAño)
{


	case "Febrero":
			alert( " Este mes no tiene más de 29 días." )
			break;														//ESTA ES LA FORMA PRACTICA
	default:
			alert("Este mes tiene 30 o más días" )	
/*		case "Febrero":
			alert( " Este mes no tiene más de 29 días." )
			break;
		case "Marzo":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Abril":
			alert ( "Este mes tiene 30 o más días" )
			break;		
		case "Mayo":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Junio":
			alert ( "Este mes tiene 30 o más días" )
			break;															//ESTA ES LA FORMA DENSA
		case "Julio":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Agosto":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Septiembre":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Octubre":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Noviembre":
			alert ( "Este mes tiene 30 o más días" )
			break;
		case "Diciembre":
			alert ( "Este mes tiene 30 o más días" )
			break;	*/
	}	


}//FIN DE LA FUNCIÓN
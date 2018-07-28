function mostrar()
{
	var planeta;


	planeta=prompt ("Ingrese un planeta del sistema solar");
	switch(planeta) 
	{
		case "pluton":
		case "neptuno":
		case "urano":
		case "saturno":
		case "jupiter":
		case "marte":
		alert("Aca hace mas frio");
		break;
		case "tierra":
		alert ("Aca vivimos");
		break;
		case "venus":
		case "mercurio":
		alert ("Aca hace mas calor")
		break;
		default: alert(" Ingrese un planeta valido");

	}	
		
}

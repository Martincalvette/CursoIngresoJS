function mostrar()
{
	var precio;
	var descuento;
	var valorDescuento;
	var precioDescuento;
	var iva;
	var precioFinal;


	precio=prompt(" Ingrese el precio ");
	precio=parseInt(precio);
	descuento=prompt (" Ingrese el descuento");
	descuento=parseInt(descuento);

	valorDescuento= "$" + descuento;
	precioDescuento=  precio - descuento;
	iva= precio *0.79

	alert ("El descuento es $" +varloDescuento + " el precio es $" + precioDescuento+ " y el IVA es $")



	//alert(valorDescuento)





}

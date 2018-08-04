function mostrar()
{
	var precio;
	var descuento;
	//var valorDescuento;
	var precioDescuento;
	var iva;
	var precioFinal;


	precio=prompt(" Ingrese el precio ");
	precio=parseInt(precio);
	descuento=prompt (" Ingrese el descuento");
	descuento=parseInt(descuento);


	//valorDescuento =  preciodescuento;
	precioDescuento=  precio - descuento;
	precioDescuento=parseInt(precioDescuento)
	iva= precio * 0.21;
	precioFinal= precioDescuento + iva +" Con IVA";


	alert ("El descuento es $" + descuento + " el precio es $" + precioDescuento+ " y el IVA es $" + iva)

	document.getElementById('elPrecioFinal').value= precioFinal;

	//alert(valorDescuento)





}

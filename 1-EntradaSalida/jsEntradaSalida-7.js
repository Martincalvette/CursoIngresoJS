/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var valorUno;
	var valorDos;
	var resultado;

	valorUno=document.getElementById('numeroUno').value;
	valorDos=document.getElementById('numeroDos').value;
	resultado=parseInt(valorUno) + parseInt(valorDos);

	alert( " La suma es " + resultado);
}

function restar()
{
	var valorUno;
	var valorDos;
	var resultado;

	valorUno=document.getElementById('numeroUno').value;
	valorDos=document.getElementById('numeroDos').value;
	resultado=parseInt(valorUno) - parseInt(valorDos);

	alert( " La resta es " + resultado);
}

function multiplicar()
{ 
	var valorUno;
	var valorDos;
	var resultado;

	valorUno=document.getElementById('numeroUno').value;
	valorDos=document.getElementById('numeroDos').value;
	resultado=parseInt(valorUno) * parseInt(valorDos);

	alert( " La multiplicacion es " + resultado);
}

function dividir()
{
	var valorUno;
	var valorDos;
	var resultado;

	valorUno=document.getElementById('numeroUno').value;
	valorDos=document.getElementById('numeroDos').value;
	resultado=parseInt(valorUno) / parseInt(valorDos);

	alert( " La division es " + resultado);
}


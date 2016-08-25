var numero1;  
var numero2;
var numero3;
var sumaNotas;
var promedioNotas;
         
numero1=prompt("Ingrese la primera nota : ","");
numero2=prompt("Ingrese la segundo nota : ","");
numero3=prompt("Ingrese la tercer nota : ","");

sumaNotas= (parseInt(numero1)+ parseInt(numero2)+parseInt(numero3));
promedioNotas=sumaNotas/3;

window.alert("El promedio de las notas es : " + promedioNotas);
	
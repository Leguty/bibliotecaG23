alert ("Mensaje en archivo JavaScrip ejercicio 1");


/*La etiqueta prompt me permite solicitar informacion al usuario en cuadro de dialogo*/


/*Implementar prompt con la sumatoria de dos numeros*/

var numero1= prompt("Ingresar numero 1");
var numero2= prompt("Ingresar numero 2");

/*Tambien se pueden declarar variables locales con let */
let numero3= prompt("Ingresar numero 3");
let numero4= prompt("Ingresar numero 4");
let resultado2=parseInt(numero3)+parseInt(numero4);



/*ParseInt me permite tomar como enteros*/
var resultado=parseInt(numero1)+parseInt(numero2);

//1-Mostrar sumatoria por la ventana emergente
alert("la sumatoria es  "+resultado);
alert("la sumatoria es  "+resultado2);


/*Este otro ejercicio me hace la suma pero no le debo ingrasar nada por eso no se usa prompt*/
/*Al ingresar directamente un valor numerico no se requiere usar el parseInt, el identifica el tipo de variable */


/*var numero3=10;
var numero4=54;
var resultado2=numero3+numero4;
alert("La sumatoria 2 es "+resultado2);*/


//2-Si deseo visualizar sumatoria por la consola del navegador

console.log("La sumatoria es "+resultado);


//3-Mostrar sumatoria escribiendo sobre la pagina HTML
document.write ("<p style=text-align:center>1) la sumatoria es "+resultado+ "</p>")
document.write("<p class='estilo1'> 2) la sumatoria es " +resultado+ "</p>")


//Implementar estilos de Boostrap en el JavaScrip



//Arreglos en JavaScript

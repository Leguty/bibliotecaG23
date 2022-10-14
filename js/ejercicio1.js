alert ("Mensaje en archivo JavaScrip ejercicio 1");


/*La etiqueta prompt me permite solicitar informacion al usuario en cuadro de dialogo*/


/*Implementar prompt con la sumatoria de dos numeros*/

//var numero1= prompt("Ingresar numero 1");
//var numero2= prompt("Ingresar numero 2");

/*Tambien se pueden declarar variables locales con let */

//let numero3= prompt("Ingresar numero 3");
//let numero4= prompt("Ingresar numero 4");
//let resultado2=parseInt(numero3)+parseInt(numero4);



/*ParseInt me permite tomar como enteros*/
//var resultado=parseInt(numero1)+parseInt(numero2);

//1-Mostrar sumatoria por la ventana emergente
//alert("la sumatoria es  "+resultado);
//alert("la sumatoria es  "+resultado2);


/*Este otro ejercicio me hace la suma pero no le debo ingrasar nada por eso no se usa prompt*/
/*Al ingresar directamente un valor numerico no se requiere usar el parseInt, el identifica el tipo de variable */


/*var numero3=10;
var numero4=54;
var resultado2=numero3+numero4;
alert("La sumatoria 2 es "+resultado2);*/


//2-Si deseo visualizar sumatoria por la consola del navegador

//console.log("La sumatoria es "+resultado);


//3-Mostrar sumatoria escribiendo sobre la pagina HTML
//document.write ("<p style=text-align:center>1) la sumatoria es "+resultado+ "</p>")
//document.write("<p class='estilo1'> 2) la sumatoria es " +resultado+ "</p>")

//Asignar un numero de tipo float
//let numero5=5.34;

//Asirnar un numero de tipo entero
//let numero6= 3565;


//Implementar estilos de Boostrap en el JavaScrip



//Arreglos en JavaScript

var arreglo1=["Quimica", "Fisica", 5, 2.3, true, "Idiomas"];

//div style crea una caja para que contenga el arreglo 1 

document.write("<div style='text-align:center'>");
document.write(arreglo1[0]);
document.write("<br />");
document.write(arreglo1[1]+"<br />");
document.write(arreglo1[2]);
document.write("<br />");
document.write(arreglo1[3]);
document.write("<br />");
document.write(arreglo1[4]+"<br />");
document.write(arreglo1[5]);
document.write("<br />");
document.write(arreglo1[6]+"<br />");

//Para adicionar un valor al arreglo 

arreglo1[arreglo1.length]="Matematicas";
arreglo1[arreglo1.length]="Deportes";
document.write(arreglo1[6]+"</br>");
document.write(arreglo1[7]+"</br>");
document.write("</div>");

//para hacer un arreglo tambien se puede optar un for

for(let i=0; i<arreglo1.length; i++){
        document.write(arreglo1[i]+"</br>")

}

//Enlistar un arreglo y se le pone un estilo de boostrap el resultado sale en una sola linea
document.write("<p class='text-primary'style='text-align:center'>"+arreglo1.join(":")+"</p>");

//Con la opcion <br /> se les da un enter y separa entre linea y linea
document.write("<p class='text-primary'style='text-align:center'>"+arreglo1.join('<br />')+"</p>");;

//Para poner un arreglo en orden se usa sort
document.write("<p class='text-primary'style='text-align:center'>"+arreglo1.sort());



//Ejercicios con ciclos

//While


//Con esta clase cambio el diseño de la salida  class='p3 mb-2 bg-info text-white'
var tabla_multiplicar=prompt("Ingrese tabla de multiplicar");
tabla_multiplicar=parseInt(tabla_multiplicar);
let j=1;
    document.write("<div style='text-align:center'>");
    while (j<10){
        document.write(tabla_multiplicar + " por " +j+ " es " + j*tabla_multiplicar+"</br>");
        j++;
    }
document.write("</div");

let i=0;

do{

    i+=1;
    console.log(i);
} while(i<5);


//Hacer un ejercicio con if -else if-else

let edad= prompt("Ingrese la edad");
edad=parseInt(edad);
if (edad<18){
    //document.write("<h6>Es menor de edad</h6>");
    document.write("<p class='text-primary' style='text-align:center'> es menor de edad</p>");
} else if (edad<70){
    document.write("<h6> Es mayor de edad </h6>");
}else{
    document.write("<h6> Es tercera edad</h6>");
}


//Switch 

//Se crea una caja
document.write("<div>");

let fruta = prompt("Ingrese una fruta ");
switch(fruta){
    case 'naranjas':
        document.write("<p class='text-primary' style='text-align:center'> Las naranjas valen 3.000</p>");
        break;
        case 'manzanas':
        document.write("<p class='text-primary' style='text-align:center'> Las manzanas valen 6.000</p>");
        break;
        case 'peras':
        document.write("<p class='text-primary' style='text-align:center'> Las peras valen 7.000</p>");
        break;
        default:
            document.write("<p class='text-primary' style='text-align:center'>La fruta no esta en el sistema</p>");
        break;
    }

    document.write("</div>");


//Calculadora

function realizar_operaciones_matematicas(){

    //Busque por el ID dentro del documento lo que este en ()
    var numero1= document.getElementById("numero1").value;
    var numero2= document.getElementById("numero2").value;
    //alert("Ingreso a la función  "+ numero1); 
    

    if(numero1==''){
        //Busque en todo el documento y cambiele un atributo 
        //Con el atributo o clases se pone el cajon en rojo cuando no se le ingresan datos
        document.getElementById("numero1").setAttribute("class","form-control is-invalid");

        let parrafo1=document.getElementById("parrafo_validar1");

        //Con la etiqueta innerHTML se escribe un texto en el parrafo1
        parrafo1.innerHTML="El campo numero 1 es obligatorio";

        //Se le cambiara el stylo 
        parrafo1.setAttribute("class","invalid-feedback");

    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");
        let parrafo1=document.getElementById("parrafo_validar1");
        parrafo1.innerHTML="";
    }






    if(numero2==''){

        document.getElementById("numero2").setAttribute("class","form-control is-invalid");
        let caja1=document.getElementById("div_validar2");
        caja1.innerHTML="El campo numero 2 es obligatorio";
        caja1.setAttribute("class","invalid-feedback");

    }else {
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");
        let parrafo2 = document.getElementById("div_validar2");
        parrafo2.innerHTML="";



    }


    if ((numero1!='')&&(numero2!='')){
        numero1=parseInt(numero1);
        numero2=parseInt(numero2);
        sumar(numero1, numero2);
        restar(numero1,numero2);
        multiplicar(numero1,numero2);

    }

    function sumar(numero1,numero2){
        let resultado= numero1+numero2;
        //alert("Resultado de la suma es: "+resultado);

        //Dentro de la funcion sumar, se adicionan funciones a la caja creada para mostrar el resultado 
        var caja_suma=document.getElementById("resultado_suma");

        //Para cargarle un texto a una caja es : .innerHTML
        caja_suma.innerHTML= "El resultado de la suma es: "+resultado;

    }


    function restar(numero1,numero2){
        let resultado= numero1-numero2;
        var caja_resta=document.getElementById("resultado_resta");
        caja_resta.innerHTML= "El resultado de la resta es: "+resultado;
  
    }   

    function multiplicar(numero1,numero2){
        let resultado= numero1 * numero2;
        var caja_multiplicar=document.getElementById("resultado_multiplicacion");
        caja_multiplicar.innerHTML= "El resultado de la multiplicación es: "+resultado;
    }

/*let parrafos_html = new Array(5);*/

let parrafos = document.getElementsByTagName("p");

alert("total parrafos  "+parrafos.length);
for(let i=0; i<parrafos.length; i++){
    let valor_parrafo=parrafos[i].textContent;
    console.log("valor parrafo "+valor_parrafo);
    if(i==3){
        parrafos[i].innerHTML = "le cambie el texto al parrafo";
    }
    //console.log("ingreso al for");   
}

}
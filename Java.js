//inicializa una variable con un string vacío
let numeroActual="";
let numeroDeArriba="";
let operacion="";

//mustra en la pantalla el número
function mostrar(numero) {

    //concatena los dos string (añade un numero)
    numeroActual+=numero;

    //actualiza la pantalla (DISPLAY) de la calculadora
    document.getElementById ("display").innerHTML=numeroActual
}

//funcion para la suma de dos numeros
function sumar(simbolo) {
    operacion=simbolo;
    numeroDeArriba=numeroActual
    document.getElementById ("numeroChico").innerHTML=numeroActual+simbolo;
    numeroActual="";
    
}

//funcion para la resta de "NUMERO DE ARRIBA" menos "NUMEROACTUAL"
function restar(simbolo) {
    operacion=simbolo;
    numeroDeArriba=numeroActual
    document.getElementById ("numeroChico").innerHTML=numeroActual+simbolo;
    numeroActual="";
    
}

//funcion para la multiplicacion de "NUMERO DE ARRIBA" por "NUMEROACTUAL"
function multiplicar(simbolo) {
    operacion=simbolo;
    numeroDeArriba=numeroActual
    document.getElementById ("numeroChico").innerHTML=numeroActual+simbolo;
    numeroActual="";

    
    
}

function dividir(simbolo) {
    operacion=simbolo;
    numeroDeArriba=numeroActual
    document.getElementById ("numeroChico").innerHTML=numeroActual+simbolo;
    numeroActual="";

    
    
}
function potenciar(simbolo) {
    operacion=simbolo;
    numeroDeArriba=numeroActual
    document.getElementById ("numeroChico").innerHTML=numeroActual+simbolo;
    document.getElementById("display").innerHTML = Number(numeroActual)*Number(numeroActual);
    numeroActual="";

    
    
}
function ccleaner(simbolo) {
    //ponen los valores en 0
    numeroActual="";
    numeroDeArriba="";
    //actualizan la vista
    document.getElementById ("display").innerHTML="0"
    document.getElementById ("numeroChico").innerHTML=numeroDeArriba;
    
  

    
}
function cleanup(simbolo) {
    //ponen los valores en 0
    numeroActual="";
    //actualizan la vista
    document.getElementById ("display").innerHTML="0"
    document.getElementById ("numeroChico").innerHTML=numeroDeArriba;
    
  

    
}
function borrar(simbolo) {
    numeroActual=numeroActual.slice(0,-1);
    document.getElementById ("display").innerHTML=numeroActual;
    if (numeroActual="") {
        numeroActual=0
        
    }
    
}
                //borra el ultimo
                //numeroDeArriba=numeroActual.slice(0,-1)


//FUNCION QUE EJECUTA LAS OPERACIONES (=)
function igual() {
    document.getElementById("display").innerHTML =""

    switch (operacion) {
        case '+':
            numeroActual =  Number(numeroDeArriba)+Number(numeroActual);
            break;
        case '-':
            numeroActual = Number(numeroDeArriba)-Number(numeroActual);
            break;
        case 'x':
            numeroActual = Number(numeroDeArriba)*Number(numeroActual);
            break;
        case '÷':
            if(numeroActual==0){
                numeroActual = "No es posible dividir por 0";
            }else{
                numeroActual = Number(numeroDeArriba)/Number(numeroActual);
            }
            break;
        
            


        default:
            break;
    }
    document.getElementById("display").innerHTML = numeroActual
}

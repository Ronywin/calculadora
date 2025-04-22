let numeroActual="";
let numeroAnterior="";
let op=0;

function mostrar(numero){
    numeroActual+=numero;
    document.getElementById("display").innerHTML = numeroActual;
}

function sumar(){
    numeroAnterior=numeroActual;
    document.getElementById("numeroChico").innerHTML = numeroActual+"+";
    numeroActual="";
    op=0;
}


function igual(){
    if(op==0){
        document.getElementById("display").innerHTML = Number(numeroAnterior)+Number(numeroActual);
    }

    if(op==1){
        document.getElementById("display").innerHTML = Number(numeroAnterior)-Number(numeroActual);
    }

    if(op==2){
        document.getElementById("display").innerHTML = Number(numeroAnterior)*Number(numeroActual);
    }

    if(op==3){
        document.getElementById("display").innerHTML = Number(numeroAnterior)/Number(numeroActual);
    }

}

function restar(){
numeroAnterior=numeroActual;
document.getElementById("numeroChico").innerHTML = numeroActual+"-";
    numeroActual="";
    op=1;
}

function borrar(){
numeroActual="";
document.getElementById("numeroChico").innerHTML="0"
}

function multiplicar(){
    numeroAnterior=numeroActual;
    document.getElementById("display").innerHTML = numeroActual+"x";
        numeroActual="";
        op=2;
}

function dividir(){
    numeroAnterior=numeroActual;
    document.getElementById("display").innerHTML = numeroActual+"÷";
        numeroActual="";
        op=3;
}
let numeroSecreto=0;
let intentos=1;
let listaNumeroSorteado=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);

    if(numeroUsuario===numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        //Usuario no acertó
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    //Si ya sorteamos todos los números
    if(listaNumeroSorteado.length==numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles')
    }else{
        //El número generado está en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensje de intervalo de número
    //Generar número aleatorio
    //Inicializar el nuúmero de intentos
    condicionesIniciales();
    intentos=1
    //Desahibilitar el botón
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();


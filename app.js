let numeroSecreto = 0;
let intentos=0;
let listaNumerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    }
    
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Bien hecho! acertaste en ${intentos} ${(intentos===1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('p','Te pasaste');
        } else{
        asignarTextoElemento('p','Mas po');}
    intentos++;
    limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value='';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    console.log(numeroSecreto);
 if (listaNumerosSorteados.length==numeroMaximo){
    asignarTextoElemento('p','Se acabaron los numeros');
 }
 else{
    if (listaNumerosSorteados.includes(numeroGenerado)){
     return generarNumeroSecreto();
    } 
    else {
     listaNumerosSorteados.push(numeroGenerado);
     return numeroGenerado;
    }
   }
 }
 

function condicionesIniciales(){
    asignarTextoElemento('h1', "Juego del numero secreto :)"); 
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
limpiarCaja();
condicionesIniciales();
console.log(numeroSecreto);
document.querySelector('#reiniciar').setAttribute('disabled',true);
}

asignarTextoElemento('h1', "Juego del numero secreto :)"); 
asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`); 
condicionesIniciales();
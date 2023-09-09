//alert("hola, mundo JS") //usada simplemente para verificar inicialmente el funcionamiento del archivo .js

function iniciarJuego(){
    //document es el archivo html
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
}


function seleccionarMascotaJugador(){
    alert("Seleccionaste tu mascota")
}


//window es el navegador
//Hacemos esto para que este archivo js se ejecute solamente cuando el archivo html se ha terminado
//de cargar complemente
window.addEventListener('load',iniciarJuego)
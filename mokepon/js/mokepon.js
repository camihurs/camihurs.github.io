//alert("hola, mundo JS") //usada simplemente para verificar inicialmente el funcionamiento del archivo .js

function seleccionarMascotaJugador(){
    alert("Seleccionaste tu mascota")
}

let botonMascotaJugador = document.getElementById("boton-mascota")
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
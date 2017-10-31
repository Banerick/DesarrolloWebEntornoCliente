function puntos(event) {
    var coordenadas = document.getElementById("coordenadas");
    for (i = 0; i < event.touches.length; i++) {
        coordenadas.innerHTML += i + "=> X: " + event.touches[i].pageX + "Y: " + event.touches[i].pageY + '</br>';
    }
}

function init() {
    var tocar = document.getElementById("tocable");
    tocar.addEventListener("touchstart", puntos);
}
init();

const SVGNS = "http://www.w3.org/2000/svg";
function creaCuadrado(nodo,lado){
    nodo.setAttribute('height', 600);
    nodo.setAttribute('width', 600);
    var cuadrado = document.createElementNS(SVGNS,'rect');
    cuadrado.id = 'cuadrado';
    cuadrado.setAttributeNS(null, 'width', lado);
    cuadrado.setAttributeNS(null,'id','cuadrado')
    cuadrado.setAttributeNS(null, 'height',lado);
    cuadrado.setAttributeNS(null, 'fill', 'blue');
    nodo.appendChild(cuadrado);
}
var nodo = document.getElementById('contenedor');

document.getElementById('boton').addEventListener('click',animarRect)
function animarRect(){
    var cuadrado = document.getElementById('cuadrado');
    var pararTiempo = ()=>{setTimeout(()=>{clearInterval(intervalo)},5000)};
    var intervalo = setInterval(()=>{
        var nlado = parseInt(cuadrado.getAttributeNS(null,'width'));
        nlado += 70;
        console.log(nlado);
        cuadrado.setAttributeNS(null,'width', nlado);
        cuadrado.setAttributeNS(null,'height', nlado);
        pararTiempo()
    },1000)

};

window.onload = creaCuadrado(nodo,100);

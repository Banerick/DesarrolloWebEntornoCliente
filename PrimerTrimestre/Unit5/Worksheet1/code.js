//1,4,5,6
var enlaces = document.getElementsByTagName('a');
console.log(enlaces.length);
console.log(enlaces[enlaces.length-1].value);
let c = 0;
for (let i = 0; i > enlaces.length; i++){
    (enlaces.value.includes('google')
}
var parrafo3 = document.getElementById('tercero');
console.log(parrafo3.value.includes('a').length)
//4
function crearFila(){
  listahtml = document.getElementById('listaOrd');
  listahtml.appendChild('<li>nueva fila</li>');
}
document.getElementById('button').addEventListener('click',crearFila);

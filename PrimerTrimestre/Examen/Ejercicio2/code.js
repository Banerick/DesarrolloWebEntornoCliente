//a
function creaEnlace(url,text,nodo){
    var link = document.createElement('a');
    link.setAttribute('href',url);
    link.innerHTML = text;
    nodo.appendChild(link);
}
var enlace = 'https://www.google.es';
var nombre = 'Google';
var nodo = document.getElementById('listLink');
creaEnlace(enlace,nombre,nodo);
//c

function asociaEventos(){
    linkArray = document.getElementsByTagName('a');
    for (link of linkArray){
        link.addEventListener('mouseover',(event)=>{
            event.target.style.backgroundColor = 'red';
        })
        link.addEventListener('mouseout',(event)=>{
            event.target.style.backgroundColor = 'white';
        })
    }
}
asociaEventos();
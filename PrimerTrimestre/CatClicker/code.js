var gatos = document.getElementsByClassName('gato');
var p = document.getElementsByClassName('par');

for (i = 0; i < gatos.length; i++){
  gatos[i].par = p[i];
  gatos[i].c = 0;
  console.log(gatos[i].c);
  gatos[i].addEventListener('click', function(event){
    event.target.c += 1;
    console.log(event.target.c);
    event.target.par.innerHTML = event.target.c;
}
)};

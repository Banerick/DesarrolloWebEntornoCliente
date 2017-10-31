//2 y 3
/*
document.addEventListener("mousemove", function( event ) {
  // display the current click count inside the clicked div
  console.log(event.screenX + ' ' + event.screenY);
}, false);
*/
//5
/*
function iniciartabla(){
  var tabla = document.getElementById("tabla")
var string = '';
for (let i = 0; i < 10; i++){
  string += '<tr>';
  for (let j = 0; j < 10; j++){
    string +='<td class="cuadro"></td>';
  }
  string +='</tr>';
  }
  tabla.innerHTML = string;
  noarr = document.getElementsByClassName('cuadro');
  for (let j = 0; j < noarr.length; j++){
    noarr[j].addEventListener('mousemove', function(event){
    if (event.ctrlKey) {event.target.style.backgroundColor = 'red'}
    else if (event.shiftKey){event.target.style.backgroundColor = 'blue'}
    else {event.target.style.backgroundColor = 'white'}
  })}
//6
document.getElementById('cleantable').addEventListener("click", iniciartabla);
};
window.addEventListener("load",iniciartabla);
*/
//9 y 10
function arrastrarIMG(event){
  if (event.mousedown )
  noarr = document.getElementByClassName('arrastrable')
  for (var i = 0; i < noarr.length;){
  noarr[i].addEventListener('mousemove',function(event){
    noarr.style.top = event.screenY
    noarr.style.left = event.screenX
  })
}

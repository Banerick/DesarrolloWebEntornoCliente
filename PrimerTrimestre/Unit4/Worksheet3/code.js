//Expresiones regulares evento onkeypress ✓ X

var reNombre = new RegExp("[A-Z][a-z]*");
var reApellidos = new RegExp("[A-Z][a-z]*\s[A-z][a-z]*");
var reDni = new RegExp("(\d{8})([a-zA-Z])");
var reTlf = new RegExp("\d{9}");
var reEmail = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$");
var reUsuario = new RegExp("");
arr = new Array(reNombre,reApellidos,reDni,reTlf,reEmail,reUsuario)
function comprueba(){
  noarr = document.getElementsByClassName('entry');
  for (let j = 0; j < noarr.length; j++){
    noarr[j].addEventListener('onblur', function(event){
      var comprueba =  event.target.getAttribute('name');
      if (comprueba == 'nombre'){
        event.target.value.test(arr[0])
      }
}

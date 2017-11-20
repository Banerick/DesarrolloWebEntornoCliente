//Expresiones regulares evento onkeypress ✓ X

var reNombre = new RegExp("[A-Z][a-z]*");
var reApellidos = new RegExp("[A-Z][a-z]*\s[A-z][a-z]*");
var reDni = new RegExp("(\d{8})([a-zA-Z])");
var reTlf = new RegExp("\d{9}");
var reEmail = new RegExp("^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$");
var reUsuario = new RegExp("");
arr = new Array(reNombre,reApellidos,reDni,reTlf,reEmail,reUsuario)
function obtenerCasilla(){
  noarr = document.getElementsByClassName('entry');
  for (let j = 0; j < noarr.length; j++){
    noarr[j].addEventListener('onblur', function(event){
      var comprueba =  event.target.getAttribute('name');
      switch (comprueba){
          case 'nombre':
            evaluar(event.target,event.target.value.test(arr[0]))
          break;
          case 'apellido':
            evaluar(event.target,event.target.value.test(arr[1]))
          break;
          case 'dni':
            evaluar(event.target,event.target.value.test(arr[2]))
          break;
          case 'tlf':
            evaluar(event.target,event.target.value.test(arr[3]))
          break;
          case 'email':
            evaluar(event.target,event.target.value.test(arr[4]))
          break;
          case 'usuario':
            evaluar(event.target,event.target.value.test(arr[5]))
          break;
          }
      }
    }
}
function evaluar(casilla,resultado){
  (resultado ? no hagas nada : haz algo)
}

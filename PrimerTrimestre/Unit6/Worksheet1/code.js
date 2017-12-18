//Ejercicio 1
/*
function cargarPagina() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("parrafo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "../../Unit5/Juego/index.html", true);
    xhttp.send();
}
var boton = document.getElementById('boton');
boton.addEventListener('click', cargarPagina);
*/
//Ejercicio 5
var promesa = new Promise((resolve, reject) => {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resolve(this.responseText);
        }
    };
    xhttp.open("GET", "correos.xml", true);
    xhttp.send();
});
setInterval(function(){promesa.then((correos)=>{
    console.log(correos);
})},20000);

/*
var boton = document.getElementById('boton');
boton.addEventListener('click', getxml);
*/

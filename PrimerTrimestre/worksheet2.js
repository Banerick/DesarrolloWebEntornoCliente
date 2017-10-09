//R1 E 1 //
/*
function obtenerfecha() {
fecha = new Date();
year = fecha.getFullYear();
month = fecha.getMonth();
day = fecha.getDate();
hour = fecha.getHours();
minute = fecha.getMinutes();
second = fecha.getSeconds();
return [year,month,day,hour,minute,second]
}
arr = obtenerfecha()
for (i of arr) {
  document.write(i + '</br>')
}
*/
//R1 E2//
/*
let fechaHoy = new Date();
let fecha85 = new Date();
fecha85.setDate(fecha85.getDate() + 85);
let fecha187 = new Date();
fecha187.setDate(fecha187.getDate() - 187);
fecha85.setYear(fecha85.getYear() + 2);
fecha187.setHours(fecha187.getHours() - 24);
let fechaResto = new Date(fecha85 - fecha187);

*/
//r1 e3
/*
var counter = 60;
var contador = () => {
    if (counter == 0) {
        document.write("Fin!!")
        window.clearTimeout();
    }
    else {
        setTimeout(contador, 1000);
    }
    console.log(counter);
    counter--;
};
*/
//r1 e7
/*
contador();
var clock = () => {
+    let fechaHoy = new Date();
+    console.log(fechaHoy.getHours() + ":" + fechaHoy.getMinutes() + ":" + fechaHoy.getSeconds());
+    setTimeout(clock, 1000);
+};
+reloj();
*/
//r2 e 1
/*
console.log(Math.round(Math.random()));
console.log(Math.floor(Math.random() * (200 - 100)) + 100);

var getRandom = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max+1);
    return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandom(1000, 2000));
*/
//r2 e 5
/*
var funcionSegundoGrado = (a, b, c) => {
    let sol1 = parseFloat(-b + (Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a));
    let sol2 = parseFloat(-b - (Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a));
    return [sol1, sol2];
};
console.log(funcionSegundoGrado(3, 4, 5));
*/
//r2 e 7
/*
var senosHasta = (numero) => {
    document.write("<table>");
    for (let i = 0; i <= numero; i++) {
        document.write("<tr>");
        document.write("<td>" + i + "</td>");
        document.write("<td>" + Math.sin(i * (180 / Math.PI)) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
};

senosHasta(180);
*/
//r2 e 8
/*
var imagenAleatoria = () => {
    let imagenes = [http://i0.kym-cdn.com/entries/icons/original/000/011/220/24219235.jpg',
        'https://i.pinimg.com/736x/fa/f3/ea/faf3ea2f3a09e3ba003599ccc8ba59a8--meme-shirts-t-shirts.jpg',
        'http://i0.kym-cdn.com/photos/images/original/001/018/715/5e4.jpg'];
    document.write('<img src="' + imagenes[getRandom(0, imagenes.length - 1)] + '" style="display:block; margin:0 auto; width:100%; max-width: 450px;" />');
};

imagenAleatoria();
*/
//r3 e1 1,2,7,9
/*
function invierteCadena(cad_arg){
let invertido = '';
  for(i = cad_arg.length-1; i >= 0; i--){
    invertido += cad_arg[i]
  }
  return invertido
}
console.log(invierteCadena('Hola'))
*/
/*
function inviertePalabras(cad_arg){
  let invertido = ''
  let array = cad_arg.split(' ');
  for(i = array.length-1; i >= 0; i-- ){
    invertido += array[i] + ' '
  }
  return invertido
}
cadena = "Dabale arroz a la zorra el abad"
console.log(inviertePalabras(cadena));
*/
/*
function encuentraPalabraMasLarga(car_arg){
  let array = car_arg.split(' ');
  cadenalarga = ''
  for(i of array){
  if(i.length >= cadenalarga.length){
    cadenalarga = i;
  }
  }
return cadenalarga
}
console.log(encuentraPalabraMasLarga('Raul se salta las clases para ir a la mae'));
*/
/*
function filtraPalabrasMasLargas(car_arg,n){
  let array = car_arg.split(' ');
  contador = 0;
  for(i of array) if(i.length > n) contador++;
  return contador
}
console.log(filtraPalabrasMasLargas('Raul se salta las clases para ir a la mae', 3));
*/
/*
function cadenaBienFormada(cad_arg){
  nuevacadena = cad_arg[0].toUpperCase();
  for(i = 1; i < cad_arg.length; i++){
  nuevacadena += cad_arg[i].toLowerCase();
}
return nuevacadena;
}
console.log(cadenaBienFormada('eSTOESUNACADENA'));
*/
//r3 e2
/*
function comprobarmayus(text){
 if (text == text.toUpperCase()) return "Esta en Mayuscula";
 else if (text == text.toLowerCase()) return "Esta en Minuscula";
   else return "Esta mezclado";
 }
console.log(comprobarmayus('estoesunacadena'));
*/
//r3 e7
/*
function palindromo(arg){
  let cad = arg.replace(/ /g, '');
  let invertido = '';
  for(i = cad.length-1; i >= 0; i--) invertido += cad[i];
console.log(cad);
console.log(invertido);

 return invertido == cad ?  'Es palindromo' :  'No es palindromo';
}
console.log(palindromo('dabale arroz a la zorra el abad'));
*/
//r3 e9
/*
function hacerTabla(arg){
  document.write('<table border="0" cellspanding="2">');
  	for ( var n = 0; n < arg.length; n++) {
  	    document.write('<tr> </tr> ');
  	for ( var c = 0; c < arg.length; c++){
  		if (n == 0 || n == arg.length -1){
        document.write('<td>' + arg[c] + '</td>');
      }
      else
       document.write('<td></td></tr>');

  	}
  }

  	document.write('</table');
}
hacerTabla('Hola')
*/
// r4
// 1
/*
var clientInfo = () => {
    document.write("<table>");

    document.write("<tr><td>AppCodeName</td><td>" + window.navigator.appCodeName + "</td></tr>");
    document.write("<tr><td>AppName</td><td>" + window.navigator.appName + "</td></tr>");
    document.write("<tr><td>AppVersion</td><td>" + window.navigator.appVersion + "</td></tr>");
    document.write("<tr><td>Language</td><td>" + window.navigator.language + "</td></tr>");
    document.write("<tr><td>Cookies Enabled</td><td>" + window.navigator.cookieEnabled + "</td></tr>");

    document.write("</table>");
};

// 2
var screenInfo = () => {
    document.write("<table>");

    document.write("<tr><td>Height</td><td>" + window.screen.height + "</td></tr>");
    document.write("<tr><td>Width</td><td>" + window.screen.width + "</td></tr>");
    document.write("<tr><td>Color Depth</td><td>" + window.screen.colorDepth + "</td></tr>");
    document.write("<tr><td>Pixel Depth</td><td>" + window.screen.pixelDepth + "</td></tr>");

    document.write("</table>");
};
*/
//r6 C,D,E,F
/*
var contImg => { return document.images.length;}
console.log('Numero de imagenes: ' + contImg());
var firstImageId = () => {
    let elem = document.images.item(0);
    if (elem !== null && elem.id !== undefined) return elem.id;
    return "none";
};
console.log("ID imagen: " + firstImageId());

var nLinks = () => {
    return document.links.length;
};
console.log("Numero de links: " + nLinks());

var cambiarTitle = (new_title) => {
    document.title = new_title;
};
cambiarTitle("Pepe Sonrisas aka Rau");
*/
//r7

function distance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
          c(lat1 * p) * c(lat2 * p) *
          (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
var positions=[];
function miLocalizacion() {
  var curPos;
    navigator.geolocation.getCurrentPosition(function(position) {
      for (var i = 0; i < 2; i++){
        curPos = position.coords;
        positions.push(curPos);
        console.log("Posicion = lat: " + (curPos.latitude+i) + " || long: " + (curPos.longitude+i));
      }
    });
}
function calcDistancia(){
  return distance(positions[0].latitude,positions[0].altitude,positions[1].latitude,positions[1].altitude)
}
miLocalizacion();
//setInterval(miLocalizacion,1000);
//37.1923203 //-3.6174631999999995

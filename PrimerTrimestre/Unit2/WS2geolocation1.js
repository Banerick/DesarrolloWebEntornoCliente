//Ejercicios del 1 al 3
/*
function miLocalizacion() {
var curPos;
navigator.geolocation.getCurrentPosition(function(position) {
curPos = position.coords;
console.log("Posicion = lat: " + (curPos.latitude+i)
+ " || long: " + (curPos.longitude+i));
});
}
*/
// Mejorar el programa para que se actualice conforme te mueves y ademas calcule la distancia.
/*
function obtDistance(lat1, lon1, lat2, lon2) {
  var p = 0.017453292519943295;    // Math.PI / 180
  var c = Math.cos;
  var a = 0.5 - c((lat2 - lat1) * p)/2 +
  c(lat1 * p) * c(lat2 * p) *
  (1 - c((lon2 - lon1) * p))/2;

  return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}
var lastPos;
var distance = 0;
function initMap() {
  navigator.geolocation.getCurrentPosition(function (position){
    lastPos = position.coords
    navigator.geolocation.watchPosition(function(position) {
      distance += obtDistance(lastPos.latitude,lastPos.longitude,
        position.coords.latitude,position.coords.longitude);
        lastPos = position.coords;
        console.log(distance);
      });
    });
  };
initMap();
*/
//

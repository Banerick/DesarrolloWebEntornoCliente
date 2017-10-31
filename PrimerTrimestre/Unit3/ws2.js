//exercises 5,7,8,9
//e5 sort: devuelve -1 si queremos mantener el orden de las variables a b, si queremos invertirlo 1
/*
function paresImpares(){
   var narray = [];
   for (i=0; i < 100; i++){
     narray.push(Math.floor((Math.random() * 1000) + 1));
   }
  console.log(narray);
  narray.sort((a,b) => {
    if ((a % 2 ) < (b % 2)) return -1;
    else if ((a % 2 ) > (b % 2)) return 1;
    else return 0;
  });
  console.log(narray);
 }
paresImpares();
*/
//e7
/*
array = [2,3,4,5,6,7,8,9,10,11,12]
var cero = (array) => {array.forEach((part,index) =>{array[index] = 0} return array)};
var unoMas = (array) => {array.forEach((part,index) =>{array[index]++} return array)};
var espace = (array) => {array.join(' ') return array};

console.log(cero());
console.log(unoMas());
console.log(espace());
*/
//e8
/*
function tirardado(){
   return Math.floor((Math.random() * 6) + 1);
function calcularTirada(){
  var dados = 0;
  var tirada = [0,0,0,0,0,0,0,0,0,0,0,0,0];
  for (i = 0; i < 36000; i++){
    dados = tirardado() + tirardado();
    tirada[dados-2]++
  }
  return tirada
}
console.log(calcularTirada());
*/
//e9 ???

function tirardado(){
   return Math.floor((Math.random() * 6) + 1);
function calcularTirada(){
  var dados = 0;
  var a = new Array(6);
  for (i = 1; i < 7; i++){
    a[i] = new Array(6);
    for (j = 1; j < 7; j++){
        a[i][j] = 0;
    }
  }
  for (d = 0; d < 36000; d++){
    dados = (tirardado(), tirardado());
    a[dados[0]][dados[1]]++
  }
  return a;
}
console.log(calcularTirada());

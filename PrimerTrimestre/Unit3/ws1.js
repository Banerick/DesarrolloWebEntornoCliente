//E2 Dice function
/*
function tirardado(){
   return Math.floor((Math.random() * 6) + 1);
}
console.log(tirardado());
*/
//e3 improving dice function
/*
function tirardado(){
  var i = 0;
  var number = 0;
  results = [0,0,0,0,0,0];
  do {
    number = (Math.floor((Math.random() * 6) + 1));
    i++
    switch (number) {
      case 1:
        results[0] += 1;
        break;
      case 2:
          results[1] += 1;
          break;
      case 3:
          results[2] += 1;
          break;
      case 4:
          results[3] += 1;
          break;
      case 5:
          results[4] += 1;
          break;
      case 6:
          results[5] += 1;
          break;
      default:
        break;
    }}
  while(i > 6000);
  return ("nº de 1:" + results[0] + "nº de 2:" + results[1] + "nº de 3:" + results[2] +
            "nº de 4:" + results[3] + "nº de 5:" + results[4] + "nº de 6:" + results[5] )
}
console.log(tirardado());
*/
// e6
/*
var potencia = (numero, exponente) => exponente == 0 ? 1 : numero * potencia(numero, --exponente);
*/
// e7
/*
var factorial = (numero) => (numero <= 1) ? 1 : numero * factorial(numero - 1);
*/

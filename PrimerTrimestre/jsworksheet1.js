//Relacion 1 E 4//
/*
var x = 5;
var y = 3;
var z = x + y;
console.log("El valor de la primera variable es " + x);
console.log("El valor de la segunda variable es " + y);
console.log("La suma es: " + z);
*/
//Relacion 2 E 3 //
/*
var r = 10;
var peri = 2 * r * Math.PI;
var are = Math.PI * r^2;
console.log("The circumference is " + peri);
console.log("The area is " + are);
*/
//Relacion 2 E 4 //
/*
var cel1 = 25;
var far1 = cel1 * 9/5 + 32;
var far2 = 50;
var cel2 = (far2 - 32)/1.8;
console.log(cel1 + " ºC is " + far1 + " ºF");
console.log(far2 + " ºF is " + cel2 + " ºC");
*/
//Relacion 3 E 3 //
/*
function calcCircumfrence(r)
{
	return 2 * r * Math.PI;
}
function calcArea(r)
{
	return Math.PI * r^2;
}
console.log(calcCircumfrence(10))
console.log(calcArea(10))
*/
//Relacion 3 E 4 //
/*
function celsiusToFarenheit(cel)
{
	return cel * 9/5 + 32;
}
function farenheitToCelsius(far)
{
	return (far - 32)/1.8;
}
console.log(farenheitToCelsius(60);
console.log(celsiusToFarenheit(32);
*/
//Relacion 4 E 1//
/*
function greatNumber(n,m)
{
	if n < m { return n
	} else{ return m
	}
	}
}
var n = 9;
var m = 10;
console.log((greatNumber(n,m) +  " is the greater one");
*/
//Relacion 4 E 2//
/*
function helloWorld(l)
{
	switch (l) {
		case "es":
		return "Hola Mundo.";
		case "en":
		return "Hellow World.";
		case "de":
		return "Hallo Welt.";
		default:
		return "Hellow World.";
	}
}
console.log(hellowWorld("en");
console.log(hellowWorld("es");
console.log(hellowWorld("de");
*/
//Relacion 5 E 4.10 //
/*
function bucleCabezas(n)
{
	for ( ; n < 6; n++){
		document.write("<h"+n+"> Cabecera h"+n+"</h"+n+">")
	}
}
bucleCabezas(1)
*/
//Relacion 5 E 4.11 //
/*
function hacerTabla(){
	var dates = [];
	for ( var n = 0; n < 3; n++) {
		dates[n] = prompt(" Enter an integer(columns, height and width(pixels) ");
	}
	document.write('<table border="0" cellspanding="2" bgcolor="black" width= "'+ (4*(dates[1]))+'">');
	document.write('<tr bgcolor= "white" height="'+ dates[1] + '">');
	for ( var c = 0; c < dates[0]; c++){
		document.write('<td width="' + dates[2] + '"> &nbsp;</td>');
	}
	document.write('</tr>');
	document.write('</table');
}
hacerTabla()
*/
//Relacion 5 E 4.12 //
/*
function hacerTabla(){
	var dates = [];
	for ( var n = 0; n < 3; n++) {
		dates[n] = prompt(" Enter an integer(columns, height and width(pixels) ");
	}
	document.write('<table border="0" cellspanding="2" bgcolor="black" width= "'+ (4*(dates[1]))+'">');
	document.write('<tr bgcolor= "white" height="'+ dates[1] + '">');
	for ( var c = 0; c < dates[0]; c++){
		document.write('<td width="' + dates[2] + '" bgcolor="'+ ((c%2 != 0) ? 'white':'black') +'"> &nbsp;</td>');
	}
	document.write('</tr>');
	document.write('</table');
}
hacerTabla()
*/
//Relacion 5 E 4.13 //
/*
function hacerTabla(){
	var dates = [];
	for ( var n = 0; n < 3; n++) {
		dates[n] = prompt(" Enter an integer(columns, height and width(pixels) ");
	}
	document.write('<table border="0" cellspanding="2" bgcolor="black" width= "'+ (4*(dates[1]))+'">');
	document.write('<tr bgcolor= "white" height="'+ dates[1] + '">');
	var c = 0;
	while ( c < dates[0]){
		document.write('<td width="' + dates[2] + '"> &nbsp;</td>');
		c++;
	}
	document.write('</tr>');
	document.write('</table');
}
hacerTabla()
*/
//Relacion 5 E 4.14//
/*
function hacerTabla(){
	var dates = [];
	for ( var n = 0; n < 3; n++) {
		dates[n] = prompt(" Enter an integer(columns, height and width(pixels) ");
	}
	document.write('<table border="0" cellspanding="2" bgcolor="black" width= "'+ (4*(dates[1]))+'">');
	document.write('<tr bgcolor= "white" height="'+ dates[1] + '">');
	var c = 0;
	for (c < dates[0]){
		document.write('<td width="' + dates[2] + '" bgcolor="'+ ((c%2 != 0) ? 'white':'black') +'"> &nbsp;</td>');
		 c++
	}

	document.write('</tr>');
	document.write('</table');
}
hacerTabla()
*/
//Relacion 5 E 4.15//
/*
function adivinaConmigo(num_adivinar){
	num = prompt("Introduce un numero");
	var text = ""
	while (num_adivinar != num){
		text = ((num_adivinar > num ) ? "El numero que has introducido es mayor." : "El numero que has introducido es menor.");
		num = prompt("Intentalo de nuevo." + text);
	}
	return console.log("¡Has acertado!"	);
}
adivinaConmigo(8);
*/
//Relacion 5 E 4.16 //
/*
function adivinaConmigo(num_adivinar){
	num = prompt("Introduce un numero");
	var text = ""
	do {
		text = ((num_adivinar > num ) ? "El numero que has introducido es mayor." : "El numero que has introducido es menor.");
		num = prompt("Intentalo de nuevo." + text);
	}
	while (num_adivinar != num){

	}
	return console.log("¡Has acertado!"	);
}
adivinaConmigo(8);
*/
//Relacion 5 E 4.17//
/*
function TablaMulti(){
	for (var n= 1; n <= 10; n++){
		console.log("Tabla del " + n);
		for(m = 1; m <= 10; m++){
			console.log(n + "x" + m + "=" + (m*n));
	}
	}
}
TablaMulti();
*/
//Relacion 5 E 4.18//
/*
function hacerTabla(){
	var dates = [];
	for ( var n = 0; n < 4; n++) {
		dates[n] = prompt(" Enter an integer(columns, rows, height and width(pixels) ");
	}
	document.write('<table border="0" cellspanding="2" bgcolor="black" width= "'+ (4*(dates[1]))+'">');

	for ( var c = 0; c < dates[1]; c++){
			document.write('<tr bgColor="black" height="' + dates[2] + '">');
		for ( var r = 0; r < dates[0]; r++){
			document.write('<td bgColor="white" width="' + dates[3] + '"> &nbsp;</td>');
	}
	document.write('</tr>');
	}

	document.write('</table');
}
hacerTabla()
*/
/*
function Ajedrez(){

	document.write('<table border="0" cellspanding="2" bgcolor="black" width= "400">');
	for ( var c = 0; c < 8; c++){
			document.write('<tr bgColor="black" height="50"> &nbsp;');
		for ( var r = 0; r < 8; r++){
			document.write('<td bgColor="'+ ((c+r)%2 == 0 ? color = 'black' : color = 'white' ) +'" width="50"> &nbsp;</td>');
	}
	document.write('</tr>');
	}

	document.write('</table');
}
Ajedrez()
*/
// Relacion 6 Spread E 1 Write a function that can take in any number of arguments, and returns the sum of all of the arguments.
/*
function sum(...arg) {
let suma = 0;
for (n = 0; n < arg.length; n ++){
suma = suma + parseInt(arg[n]);
}
return suma
}

let m = [1,2,3,4,5]
console.log(sum(1,2,3,4,5));
*/
// R6 E2 Write a function called addOnlyNums that can take in any number of arguments (including numbers or strings), and returns the sum of only the numbers.
/*
function addOnlyNums(...args) {
	let suma = 0;
	for (n = 0; n < args.length; n ++){
		if(typeof(args[n]) == 'number'){
			suma = suma + args[n];
		}
}
	return suma
}
let m = [1,2,'cat',4,5]
console.log(addOnlyNums(1,2,'cat',4,5));
*/
//R6e3 Write a function called combineTwoArrays that takes in two arrays as arguments, and returns a single array that combines both (using the spread operator).
/*
function combineTwoArrays(array1,array2){
	finalarray = [...array1,...array2];
	return finalarray
}
tuple1 = ['te','queremos'];
tuple2 = ['pepe','ruiz','juarez'];
console.log(combineTwoArrays(tuple1,tuple2));
*/
//Write a function called onlyUniques that can take in any number of arguments, and returns an array of only the unique arguments.
/*
var onlyUniques = (...args) => {
    let ret = [];
    for (let i = 0; i < args.length; i++) if (!ret.includes(args[i])) ret.push(args[i]);
    return ret;
};
*/
//Write a function called combineAllArrays that takes in any number of arrays as arguments and combines all of them into one array.
/*
function combineAllArrays(...args){
array = []
for i of args{
	array.push(i);
}
return array
}
console.log(combineAllArrays(list);
list = [hola,]
*/
//Write a function called squareAndSum that takes in any number of arguments, squares them, then sums all of the squares.
/*
function squareAndSum(...args){
	var suma = 0
	for (var i = 0; i < args.length; i++){
		var n = args[i]**2
		suma = suma + n

	}
	return suma
}
array = [1,2,3,4,5,6]
console.log(squareAndSum(...array));
*/

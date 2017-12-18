function ejercicio2(numParams){
    let multiplicacion = 1;
    for(let i= 0; i < numParams; i++ ){
        let n = prompt('escribe el numero ' + i);
        multiplicacion *= n;
    }
    return multiplicacion

}
console.log(ejercicio2(prompt('numero de parametros')));

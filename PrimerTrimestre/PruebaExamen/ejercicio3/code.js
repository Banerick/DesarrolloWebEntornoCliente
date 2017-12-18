function ejercicio3(...numParams){
    let multiplicacion = 1;
    for(let i= 0; i < numParams.length; i++ ){
        multiplicacion *= numParams[i];
    }
    return multiplicacion

}
console.log(ejercicio3(1,2,3,4,5));

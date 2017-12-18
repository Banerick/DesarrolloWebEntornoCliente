function ejercicio5(dim,pos){
    var a = new Array(dim);
    for (let i =0; i < dim; i++){
        a[i] = new Array(dim);
        for (let j = 0; j < dim; j++){
            a[i][j] = Math.floor(Math.random() * (50 - 10)) + 10;
        }
    }
    console.log(a);
    return a[pos[0]][pos[1]]
}
console.log(ejercicio5(3,'11'));


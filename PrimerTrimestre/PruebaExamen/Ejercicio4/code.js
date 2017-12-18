function ejercicio4(titulo=' '){
    //apartado A
    if (titulo != ' '){
      document.getElementById('titulo').innerHTML = titulo;
    }
    //apartado B
    let enlaces = document.getElementsByTagName('a');
    console.log(enlaces.length);
    if (enlaces.length > 0){
        for (let i of enlaces){console.log(i.href)}
    }
    var intervalo = setInterval(()=> {
        let date = new Date();
        console.log(date.getSeconds());
        if (date.getSeconds() == 0){
            clearInterval(intervalo);
            location.href = 'http://' + prompt('enlace')
        }
    },4000);

}
ejercicio4('paco');
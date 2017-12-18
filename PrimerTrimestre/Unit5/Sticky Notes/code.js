class Nota{
    constructor(titulo,id){
        this.id = id;
        this.fecha = new Date();
        this.titulo = titulo;
        this.texto = '';
    }
}
class Vista{
    constructor(){
        this.divcreator = document.createElement('div');
        this.titulo = document.createElement('input');
        this.boton = document.createElement('button');
        this.boton.innerHTML = 'crear nota';
        document.body.appendChild(this.divcreator);
        this.divcreator.appendChild(this.titulo);
        this.divcreator.appendChild(this.boton);
    }
    nuevaNotaV(titulo) {
        this.divnote = document.createElement('div');
        this.divnote.setAttribute('class','nota');
        this.notetitle = document.createElement('h1');
        this.content = document.createElement('textarea');
        this.content.setAttribute('type','text');
        this.content.setAttribute('class','blocktext');
        this.notetitle.innerHTML = titulo;
        //this.ddel =document.createElement('div').appendChild(this.)
        document.body.appendChild(this.divnote);
        this.divnote.appendChild(this.notetitle);
        this.divnote.appendChild(this.content);
    }
}
class Controlador {
    constructor() {
        this.col_notas = [];
        this.vista = new Vista();
        this.vista.boton.addEventListener('click', () => {
            this.nuevaNota(this.vista.titulo.value)
        })
        this.idnota = 0;
    }

    nuevaNota(titulo) {
        this.nota = new Nota(titulo,id);
        this.col_notas.push(this.nota);
        this.vista.nuevaNotaV(titulo);
        this.vista.divnote.addEventListener('mousedown', () =>{

        });
        window.addEventListener('mouseup', (event) => {
            event.target.setAttribute('top',event.screenY);
            event.target.setAttribute('left',event.screenY);
            });
        this.idnota++
    }
}
window.addEventListener('load', () => {c = new Controlador()});

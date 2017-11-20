//
class vista{
  constructor(svg){
    this.svg = svg;
  }
  pintarBloque(x){
    svg.innerHTML('<rec cx="' + x + '" cy="0" r="80" stroke="black" stroke-width="2" fill="red" />')
  }
}
//
class controlador{
  constructor(){
  }
  generarCoordBloque(){
    rand = Math.floor((Math.random() * 3 - 1) + 1);
    if (rand = 1){pintarBloque('150')}
    elseif(rand = 2){pintarBloque('450')}
    else{pintarBloque('750')}
  }
  moverJugador(){
  }

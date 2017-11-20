/*
var circulos = document.getElementsByClassName('circulo');
for (circulo in circulos){
  circulo.x = parseInt(circulo.getAttribute('cx'));
  circulo.y = parseInt(circulo.getAttribute('cy'));
  circulo.choqueX = false;
  circulo.choqueY = false;
}

function detect(){
  for (var circulo in circulos){
    if (circulo.x >= 760){
      circulo.choqueX = true;
      return i;
    } else if (circulo.x <= 40) {
      circulo.choqueX = false;
      return i;
    }
    if (circulo.y >= 560){
      circulo.choqueY = true;
      return i;
    } else if (circulo.y <= 40) {
      circulo.choqueY = false;
      return i;
    }
  }
}
setInterval(function(){
  for (var circulo in circulos){
   detect();
   circulo.x = idx.choqueX ? --circulo.x : ++circulo.x;
   circulo.y = idx.choqueY ? --circulo.y : ++circulo.y;
   circulo.setAttribute('cx', circulo.x.toString());
   circulo.setAttribute('cy', circulo.y.toString());
}
}, 1000 / 60);
*/


class Circulo{
  constructor(circleSvg){
    this.x = parseInt(circleSvg.getAttribute('cx'));
    this.y = parseInt(circleSvg.getAttribute('cy'));
    this.choqueX = false;
    this.choqueY = false;
    this.circulo = circleSvg;
  }
  detect(){
      if (this.x >= 760){
        this.choqueX = true;
      } else if (this.x <= 40) {
        this.choqueX = false;
      }
      if (this.y >= 560){
        this.choqueY = true;
      } else if (this.y <= 40) {
        this.choqueY = false;
      }
    }
  movimiento(){
   this.detect();
   this.x = this.choqueX ? --this.x : ++this.x;
   this.y = this.choqueY ? --this.y : ++this.y;
   this.circulo.setAttribute('cx', this.x);
   this.circulo.setAttribute('cy', this.y);
    }
  }

var circulos = [];
var circulossvg = document.getElementsByClassName('circulo');
for (var element of circulossvg){
  circulos.push(new Circulo(element));
}
setInterval(function(){
for (cir of circulos){
  cir.movimiento();
}},10)

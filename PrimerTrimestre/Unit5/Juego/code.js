const SVGNS = "http://www.w3.org/2000/svg";
class Pong {
  constructor() {
    this.svg = document.getElementById('pong');
    this.svg.setAttribute('height', 600);
    this.svg.setAttribute('width', 800);
    this.jugador1 = new BloqueIzq(this);
    this.jugador2 = new BloqueDcha(this);
    this.bola = new Bola(this);
  }
}
class Bola {
  constructor(pong) {
    this.x = 300;
    this.y = 400;
    this.choqueX = false;
    this.choqueY = false;
    this.pong = pong;
    this.init();
  }

  init() {
    this.bola = document.createElementNS(SVGNS, 'circle')
    this.bola.setAttributeNS(null, 'cx', this.x);
    this.bola.setAttributeNS(null, 'cy', this.y);
    this.bola.setAttributeNS(null, 'r', '40');
    this.bola.setAttributeNS(null, 'color', 'blue');
    this.bola.setAttributeNS(null, 'stroke', 'black');
    this.bola.setAttributeNS(null, 'stroke-width', '3');
    this.pong.svg.appendChild(this.bola);
    this.initListener();
  }

  choquebordes() {
    if (this.x >= 760) {
      this.choqueX = true;
    } else if (this.x <= 40) {
      this.choqueX = false;
    }
    if (this.y >= 560) {
      this.choqueY = true;
    } else if (this.y <= 40) {
      this.choqueY = false;
    }
  }

  choqueBloq1() {
    if (this.y > this.pong.jugador1.y && this.x > 20 && this.y < (this.pong.jugador1.y + 100 && this.x < 40)){
      this.choqueY = false;}
    }

  initListener() {
    this.interval = setInterval(() => {
      this.movimiento();
    }, 1000/60)
  }
  movimiento() {
    this.choqueBloq1();
    this.choquebordes();
    this.x = this.choqueX
      ? this.x-5
      : this.x+5;
    this.y = this.choqueY
      ? this.y-5
      : this.y+5;
    this.bola.setAttributeNS(null,'cx', this.x);
    this.bola.setAttributeNS(null,'cy', this.y);
  }
}

class BloqueIzq {
  constructor(pong) {
    this.y = 400;
    this.init(pong);
  }
  init(pong) {
    this.bloqIzq = document.createElementNS(SVGNS, 'rect');
    this.bloqIzq.setAttributeNS(null, 'color', 'red');
    this.bloqIzq.setAttributeNS(null, 'stroke', 'black');
    this.bloqIzq.setAttributeNS(null, 'x','20');
    this.bloqIzq.setAttributeNS(null, 'y', this.y);
    this.bloqIzq.setAttributeNS(null, 'stroke-width', '3');
    this.bloqIzq.setAttributeNS(null, 'width', '20');
    this.bloqIzq.setAttributeNS(null, 'height', '100');
    pong.svg.appendChild(this.bloqIzq);
  }
  mover(event) {
    if (event.keyCode == 87 && this.y >=4) {
      this.y = this.y - 20;
    } else if (event.keyCode == 83 && this.y <=490) {
      this.y = this.y + 20;
    }
    this.bloqIzq.setAttributeNS(null, 'y', this.y);
  }
}
class BloqueDcha {
  constructor(pong) {
    this.y = 400;
    this.init(pong);
  }

  init(pong) {
    this.bloqDcha = document.createElementNS(SVGNS, 'rect')
    this.bloqDcha.setAttributeNS(null, 'color', 'red');
    this.bloqDcha.setAttributeNS(null, 'stroke', 'black');
    this.bloqDcha.setAttributeNS(null, 'x', '760');
    this.bloqDcha.setAttributeNS(null, 'y', this.y);
    this.bloqDcha.setAttributeNS(null, 'stroke-width', '3');
    this.bloqDcha.setAttributeNS(null, 'width', '20');
    this.bloqDcha.setAttributeNS(null, 'height', '100');
    pong.svg.appendChild(this.bloqDcha);
  }

  mover(event) {
      if (event.keyCode == 38 && this.y >=4) {
        this.y -= 20;
      } else if (event.keyCode == 40 && this.y <=490) {
        this.y += 20;
      }
      this.bloqDcha.setAttributeNS(null, 'y', this.y);
    }
}

window.addEventListener('load', () => {
  var pong = new Pong();
  window.addEventListener('keydown', (event) => {
    //if (event.keyCode == '87' || event.keyCode == '83') {
      pong.jugador1.mover(event)
    //};
    //else if (event.keyCode == '38' || event.keyCode == '40') {
      pong.jugador2.mover(event)
    //};
  })
})

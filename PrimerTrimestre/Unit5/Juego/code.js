const SVGNS = "http://www.w3.org/2000/svg";

class Pong {
    constructor() {
        this.svg = document.getElementById('pong');
        this.svg.setAttribute('height', 600);
        this.svg.setAttribute('width', 800);
        this.jugador1 = new BloqueIzq(this);
        this.jugador2 = new BloqueDcha(this);
        this.bola = new Bola(this);
        this.marcador1 = document.createElementNS(SVGNS, 'text');
        this.marcador1.setAttributeNS(null,'x','380');
        this.marcador1.setAttributeNS(null,'font-size','40');
        this.marcador1.setAttributeNS(null,'y','50');
        this.marcador1.setAttributeNS(null,'fill','red');
        this.svg.appendChild(this.marcador1);
        this.marcador2 = document.createElementNS(SVGNS, 'text');
        this.marcador2.setAttributeNS(null,'x','420');
        this.marcador2.setAttributeNS(null,'y','50');
        this.marcador2.setAttributeNS(null,'fill','blue');
        this.marcador2.setAttributeNS(null,'font-size','40');
        this.svg.appendChild(this.marcador2);
    }
}

class Bola {
    constructor(pong) {
        this.x = 300;
        this.y = 400;
        this.choqueX = false;
        this.choqueY = false;
        this.radio = 20;
        this.pong = pong;
        this.init();
    }

    init() {
        this.bola = document.createElementNS(SVGNS, 'circle');
        this.bola.setAttributeNS(null, 'cx', this.x);
        this.bola.setAttributeNS(null, 'cy', this.y);
        this.bola.setAttributeNS(null, 'r', this.radio);
        this.bola.setAttributeNS(null, 'fill', 'green');
        this.bola.setAttributeNS(null, 'stroke', 'black');
        this.bola.setAttributeNS(null, 'stroke-width', '3');
        this.pong.svg.appendChild(this.bola);
        this.initListener();
    }

    choquebordes() {
        if (this.x + this.radio >= 800) {
            this.choqueX = true;
            this.pong.jugador1.puntuacion += 1;
            this.pong.marcador1.innerHTML = this.pong.jugador1.puntuacion.toString();
        } else if (this.x - this.radio <= 0) {
            this.choqueX = false;
            this.pong.jugador2.puntuacion += 1;
            this.pong.marcador2.innerHTML = this.pong.jugador2.puntuacion.toString();
        }
        if (this.y + this.radio >= 600) {
            this.choqueY = true;
        } else if (this.y - this.radio <= 0) {
            this.choqueY = false;
        }
    }

    choqueBloq1() {
        let ballTop = this.y - this.radio;
        let ballBottom = this.y + this.radio;
        if (ballTop > this.pong.jugador1.y && ballBottom < (this.pong.jugador1.y + 150) && (this.x - this.radio) < 30) {
            this.choqueX = false;
            //this.choqueY = ballBottom >= (this.pong.jugador1.y + 50);
        }
    }
    choqueBloq2() {
        let ballTop = this.y + this.radio;
        let ballBottom = this.y + this.radio;
        if (ballTop > this.pong.jugador2.y && ballBottom < (this.pong.jugador2.y + 150) && (this.x + this.radio) > 760) {
            this.choqueX = true;
            //this.choqueY = ballBottom >= (this.pong.jugador2.y + 50);
        }
    }

    initListener() {
        this.interval = setInterval(() => {
                this.movimiento();
            },
            1000 / 60)
    }

    movimiento() {
        this.choqueBloq1();
        this.choqueBloq2();
        this.choquebordes();
        this.x = this.choqueX
            ? this.x - 2
            : this.x + 2;
        this.y = this.choqueY
            ? this.y - 2
            : this.y + 2;
        this.bola.setAttributeNS(null, 'cx', this.x);
        this.bola.setAttributeNS(null, 'cy', this.y);
    }
}

class BloqueIzq {
    constructor(pong) {
        this.y = 400;
        this.init(pong);
        this.puntuacion = 0;
    }

    init(pong) {
        this.bloqIzq = document.createElementNS(SVGNS, 'rect');
        this.bloqIzq.setAttributeNS(null, 'fill', 'red');
        this.bloqIzq.setAttributeNS(null, 'stroke', 'black');
        this.bloqIzq.setAttributeNS(null, 'x', '35');
        this.bloqIzq.setAttributeNS(null, 'y', this.y);
        this.bloqIzq.setAttributeNS(null, 'stroke-width', '1');
        this.bloqIzq.setAttributeNS(null, 'width', '5');
        this.bloqIzq.setAttributeNS(null, 'height', '150');
        pong.svg.appendChild(this.bloqIzq);
    }

    mover(event) {
        if (event.keyCode == 87 && this.y >= 4) {
            this.y = this.y - 20;
        } else if (event.keyCode == 83 && this.y <= 440) {
            this.y = this.y + 20;
        }
        this.bloqIzq.setAttributeNS(null, 'y', this.y);
    }
}

class BloqueDcha {
    constructor(pong) {
        this.y = 400;
        this.init(pong);
        this.puntuacion = 0;
    }

    init(pong) {
        this.bloqDcha = document.createElementNS(SVGNS, 'rect')
        this.bloqDcha.setAttributeNS(null, 'fill', 'blue');
        this.bloqDcha.setAttributeNS(null, 'stroke', 'black');
        this.bloqDcha.setAttributeNS(null, 'x', '760');
        this.bloqDcha.setAttributeNS(null, 'y', this.y);
        this.bloqDcha.setAttributeNS(null, 'stroke-width', '1');
        this.bloqDcha.setAttributeNS(null, 'width', '5');
        this.bloqDcha.setAttributeNS(null, 'height', '150');
        pong.svg.appendChild(this.bloqDcha);
    }

    mover(event) {
        if (event.keyCode == 38 && this.y >= 4) {
            this.y -= 20;
        } else if (event.keyCode == 40 && this.y <= 440) {
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

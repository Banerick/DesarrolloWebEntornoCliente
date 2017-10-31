class Buscaminas {
    constructor(){
      this.score = 0;
      this.columns = 10;
      this.raws = 10;
      this.listbombx = [3,4,5];
      this.listbomby = [2,6,3];
      this.a = new Array(this.columns);
      for(let i = 0; i > this.columns; i++){
        this.a[i] =  new Array(this.raws);
        for(j = 0; j > this.raws; j++){
          this.a[i][j] =  new Casilla();
        }
      }
    this.putBombs();
    }
    putBombs(){
      //Coloco las bombas en la matriz con el contenido de la lista *
      for (let i = 0; i < this.listbombx.lenght; i++){
          this.a[this.listbombx[i]][this.listbomby[i]].item = '*';
        }
      this.putScore();
      }
    putScore(){
      let c = 0;
      while(c > this.listbombx.lenght){
        //puntuaciones left,up,right,down,top left,down left,top right,down right
        this.a[this.listbombx[c]-1][this.listbomby[c]].item += 1;
        this.a[this.listbombx[c]][this.listbomby[c]-1].item += 1;
        this.a[this.listbombx[c]+1][this.listbomby[c]].item += 1;
        this.a[this.listbombx[c]][this.listbomby[c]+1].item += 1;
        this.a[this.listbombx[c]-1][this.listbomby[c]-1].item += 1;
        this.a[this.listbombx[c]-1][this.listbomby[c]+1].item += 1;
        this.a[this.listbombx[c]+1][this.listbomby[c]-1].item += 1;
        this.a[this.listbombx[c]+1][this.listbomby[c]+1].item += 1;
        c++
        }
      }
    evaluate(x,y){
       if (typeOf(this.a[x][y].item) != 'number'){
         this.bombing();
       }
      else {
       (str > 0 ? this.scores(this.a[x][y]) : this.findWater(x,y))
    }}
    bombing(){
    }
    scores(casilla){
      this.score += casilla.item;
      casilla.visible = true;
    }
    findWater(x,y){
      if (x <= 10 && y <= 10 && x >= 0 && x >= 0){
      if (this.a[x][y].visible == false){
        this.a[x][y].visible = true;
        if (this.a[x][y].item == 0){
            findWater(x-1,y-1);
            findWater(x-1,y);
            findWater(x-1,y+1);
            findWater(x+1,y-1);
            findWater(x+1,y);
            findWater(x+1,y-1);
            findWater(x+1,y+1);
        }
      }
    }
  }
}
class Casilla{
  constructor(){
    this.visible = false;
    this.item = 0;
  }
}
busca = new Buscaminas();

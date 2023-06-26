// O solo (ground) será um corpo estacionário, portanto, precisamos
// apenas criar a função constructor() e a função para exibi-lo

class Ground{

    constructor(){
   
           
         
        
         
          
    }
    display(){
        noStroke();
        fill(188,67,67);
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}
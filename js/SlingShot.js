// Vamos criar uma classe separada chamada Slingshot e passar as
// coordenadas de um ponto como um dos parâmetros para o construtor
// Slingshot().


class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            // Adicione as opções à restrição.
            
            length: 100
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;

        // Adicione a restrição ao mundo.
    

    }

//     Definimos slingShot.fly() dentro da classe slingShot. 
//     Não anexar nada ao bodyA irá libertar a fruta da restrição.
// Null não significa nada em JavaScript.

    fly(){
        
    }
    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
//         Precisamos traçar uma linha para conectar o ponto e a fruta.
        line(        );
        }
        }
    
}
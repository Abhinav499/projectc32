class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness : 0.04,
            length : 10
        }
        this.pointB = pointB
        
        this.body = Matter.Constraint.create(options);
        World.add(world, this.body);

    }

    fly(){
        this.body.bodyA = null;
    }
    attach(body){
        this.body.bodyA=body;
    }

    display(){
       
       if(this.body.bodyA){
           
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            
            push();
            stroke(48,23,8);

          
          
                strokeWeight(3);
                stroke("black");
                line(pointA.x, pointA.y, pointB.x, pointB.y);
               
                pop ();
                }
        
        }
    }
    

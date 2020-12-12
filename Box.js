class Box {
  constructor(x,y,width,height) {
      
    var options = {
        isStatic: false,
        'density':0.8,
        'friction':1
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
   this.visibility=255;
    World.add(world, this.body);
  
      
    }
    display(){
   
      if(this.body.speed<3){
        var pos =this.body.position;
        push();
        rectMode(CENTER);
        translate (pos.x,pos.y);
        rotate (this.body.angle);
        rect(0,0, this.width, this.height);
        pop();
      }
      else{
        World.remove(world,this.body);
        push ();
        this.visibility=this.visibility-5;
        pop ();
      }
    }

  score(){
    if (this.visibility < 0 && this.visibility >-105){
      score++;
    }
  }
    
    }
  